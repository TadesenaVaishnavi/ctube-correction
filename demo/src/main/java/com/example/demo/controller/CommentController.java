package com.example.demo.controller;

import java.util.List;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Comment;
import com.example.demo.service.CommentService;

@RestController
@RequestMapping("/comments")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping
    public Comment addComment(@RequestBody Comment comment) {
        String email = SecurityContextHolder
            .getContext()
            .getAuthentication()
            .getName();
            
        return commentService.addComment(comment, email);
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