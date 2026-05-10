package com.example.demo.controller;

import com.example.demo.entity.Comment;
import com.example.demo.service.CommentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping
    public Comment addComment(@RequestBody Comment comment) {
        System.out.println("Received comment: " + comment);  // Debugging
        return commentService.addComment(comment);
    }

    @GetMapping
    public List<Comment> getComments() {
        return commentService.getAllComments();
    }

    
    @PutMapping("/{id}/like")
    public Comment likeComment(@PathVariable Long id) {
        return commentService.likeComment(id);
    }

    
    @PutMapping("/{id}/unlike")
    public Comment unlikeComment(@PathVariable Long id) {
        return commentService.unlikeComment(id);
    }
}