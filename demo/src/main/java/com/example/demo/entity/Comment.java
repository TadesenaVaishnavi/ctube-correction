package com.example.demo.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "comments")
public class Comment {

    @Id
    private String id;

    private String text;
    private int likes = 0;

    private String userId;     // ✅ reference
    private String username;   // ✅ optional (for display)

    public Comment() {}

    public Comment(String text) {
        this.text = text;
    }

    public String getId() { return id; }

    public String getText() { return text; }
    public void setText(String text) { this.text = text; }

    public int getLikes() { return likes; }
    public void setLikes(int likes) { this.likes = likes; }

    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
}


// package com.example.demo.entity;

// import org.springframework.data.annotation.Id;
// import org.springframework.data.mongodb.core.mapping.Document;

// @Document(collection = "comments")
// public class Comment {

//     @Id
//     private String id;

//     private String text;
//     private int likes = 0;

//     private String userId;   // ✅ reference instead of @ManyToOne

//     public Comment() {}

//     public Comment(String text, String userId) {
//         this.text = text;
//         this.userId = userId;
//     }

//     public String getId() { return id; }

//     public String getText() { return text; }
//     public void setText(String text) { this.text = text; }

//     public int getLikes() { return likes; }
//     public void setLikes(int likes) { this.likes = likes; }

//     public String getUserId() { return userId; }
//     public void setUserId(String userId) { this.userId = userId; }
// }



// package com.example.demo.entity;

// import jakarta.persistence.*;

// @Entity
// @Table(name = "comment")
// public class Comment {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String text;

//     private int likes = 0;

    
//     @ManyToOne
//     @JoinColumn(name = "user_id")
//     private User user;

//     public Comment() {}

//     public Comment(String text) {
//         this.text = text;
//     }

//     public Long getId() {
//         return id;
//     }

//     public String getText() {
//         return text;
//     }

//     public void setText(String text) {
//         this.text = text;
//     }

//     public int getLikes() {
//         return likes;
//     }

//     public void setLikes(int likes) {
//         this.likes = likes;
//     }

    
//     public User getUser() {
//         return user;
//     }

//     public void setUser(User user) {
//         this.user = user;
//     }
// }