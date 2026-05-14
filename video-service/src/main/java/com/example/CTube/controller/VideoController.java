package com.example.CTube.controller;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.CTube.model.Video;
import com.example.CTube.service.VideoService;

@RestController
@RequestMapping("/api/ctube")
@CrossOrigin(origins = "*")
// @CrossOrigin(origins = "https://your-frontend.vercel.app")
// @CrossOrigin(origins = "http://localhost:5173") // ✅ IMPORTANT for React
public class VideoController {

    @Autowired
    private VideoService service;

    // ✅ Upload video + thumbnail
    @PostMapping("/upload")
    public ResponseEntity<?> videoUpload(
            @RequestParam("file") MultipartFile videoFile,
            @RequestParam("thumbnail") MultipartFile thumbnailFile,
            @RequestParam("title") String title) {

        try {
            service.uploadVideo(videoFile, thumbnailFile, title);
            return ResponseEntity.ok("File uploaded successfully");

        } catch (IOException e) {
            return ResponseEntity.status(500).body("Upload failed: " + e.getMessage());
        }
    }

    // ✅ Get all videos
    @GetMapping
    public List<Video> getAllVideos() {
        return service.getAllVideos();
    }

    // ✅ Stream video (IMPORTANT FIXED)
    @GetMapping("/{id}/stream")
    public ResponseEntity<Resource> streamVideo(@PathVariable Long id) {

        Video video = service.getVideo(id);

        Path path = Paths.get(video.getFilePath());
        Resource resource = new FileSystemResource(path);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(video.getContentType()))
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "inline; filename=\"" + path.getFileName().toString() + "\"")
                .body(resource);
    }

    // ✅ Get thumbnail (FIXED header added)
    @GetMapping("/{id}/thumbnail")
    public ResponseEntity<Resource> getThumbnail(@PathVariable Long id) {

        Video video = service.getVideo(id);

        Path path = Paths.get(video.getThumbnailPath());
        Resource resource = new FileSystemResource(path);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(video.getThumbnailContentType()))
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "inline; filename=\"" + path.getFileName().toString() + "\"")
                .body(resource);
    }
}