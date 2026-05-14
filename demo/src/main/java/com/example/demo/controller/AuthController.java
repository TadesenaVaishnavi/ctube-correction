package com.example.demo.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.auth.LoginRequest;
import com.example.demo.auth.RegisterRequest;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtUtil;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*") // allow frontend

public class AuthController {
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // ✅ REGISTER API
    @PostMapping("/register")
    // public Map<String, String> register(@RequestBody User user) 
       public Map<String, String> register(@RequestBody RegisterRequest request) {
        try {
            User user = new User();
            user.setEmail(request.getEmail());
            user.setPassword(request.getPassword());
            // handles password hashing
            userService.register(user);
            
            return Map.of(
                    "message", "User registered successfully"
            );

        } catch (Exception e) {
            // e.printStackTrace();
            logger.error("Error during registration", e);


            return Map.of(
                    "error", e.getMessage()
            );
        }
    }

    // ✅ LOGIN API (EMAIL BASED)
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody LoginRequest request) {
        try {
            // 🔍 find user by email
            User user = userRepository.findByEmail(request.getEmail())
                    .orElseThrow(() -> new RuntimeException("User not found"));

            // 🔐 check password
            if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
                throw new RuntimeException("Invalid password");
            }
            // if (!userService.getPasswordEncoder()
            //         .matches(request.getPassword(), user.getPassword())) {
            //     throw new RuntimeException("Invalid password");
            // }

            // 🎟️ generate JWT token
            String token = jwtUtil.generateToken(user.getEmail());

            return Map.of(
                    "token", token,
                    "message", "Login successful"
            );

        } catch (RuntimeException e) {
            // e.printStackTrace();
            logger.error("Login failed", e);

            return Map.of(
                    "error", e.getMessage()
            );
        }
    }

    // ✅ FORGOT PASSWORD (BASIC VERSION)
    @PostMapping("/forgot-password")
    public Map<String, String> forgotPassword(@RequestBody Map<String, String> req) {
        try {
            String email = req.get("email");

            if (email == null || email.isEmpty()) {
                throw new RuntimeException("Email is required");
            }

            // 👉 Future: send email / OTP here

            return Map.of(
                    "message", "Reset link sent to " + email
            );

        } catch (RuntimeException e) {
            return Map.of(
                    "error", e.getMessage()
            );
        }
    }

    // ✅ TEST API
    @GetMapping("/test")
    public String test() {
        return "Auth APIs working";
    }
}