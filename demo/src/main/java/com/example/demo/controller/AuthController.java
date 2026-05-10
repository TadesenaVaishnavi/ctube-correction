// package com.example.demo.controller;

// import com.example.demo.auth.LoginRequest;
// import com.example.demo.entity.User;
// import com.example.demo.repository.UserRepository;
// import com.example.demo.security.JwtUtil;
// import com.example.demo.service.UserService;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/auth")
// public class AuthController {

//     @Autowired
//     private UserRepository userRepository;

//     @Autowired
//     private JwtUtil jwtUtil;

//     @Autowired
//     private UserService userService;

   
//     @PostMapping("/register")
//     public String register(@RequestBody User user) {
//         try {
//             userService.register(user); // 🔥 hashes password
//             return "User registered successfully";
//         } catch (Exception e) {
//             e.printStackTrace();
//             return "ERROR: " + e.getMessage();
//         }
//     }

   
//     @PostMapping("/login")
//     public String login(@RequestBody LoginRequest request) {
//         try {
//             User user = userRepository.findByUsername(request.getUsername())
//                     .orElseThrow(() -> new RuntimeException("User not found"));

            
//             if (!userService.getPasswordEncoder()
//                     .matches(request.getPassword(), user.getPassword())) {
//                 throw new RuntimeException("Invalid password");
//             }

           
//             return jwtUtil.generateToken(user.getUsername());

//         } catch (Exception e) {
//             e.printStackTrace();
//             return "ERROR: " + e.getMessage();
//         }
//     }

    
//     @GetMapping("/test")
//     public String test() {
//         return "Protected API is working!";
//     }
// }


// package com.example.demo.auth;

// public class AuthController {
    
// }


package com.example.demo.controller;

import com.example.demo.auth.LoginRequest;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtUtil;
import com.example.demo.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*") // allow frontend
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserService userService;

    // ✅ REGISTER API
    @PostMapping("/register")
    public Map<String, String> register(@RequestBody User user) {
        try {
            userService.register(user); // handles password hashing

            return Map.of(
                    "message", "User registered successfully"
            );

        } catch (Exception e) {
            e.printStackTrace();

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
            if (!userService.getPasswordEncoder()
                    .matches(request.getPassword(), user.getPassword())) {
                throw new RuntimeException("Invalid password");
            }

            // 🎟️ generate JWT token
            String token = jwtUtil.generateToken(user.getEmail());

            return Map.of(
                    "token", token,
                    "message", "Login successful"
            );

        } catch (Exception e) {
            e.printStackTrace();

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

        } catch (Exception e) {
            return Map.of(
                    "error", e.getMessage()
            );
        }
    }

    // ✅ TEST API
    @GetMapping("/test")
    public String test() {
        return "Auth APIs working 🚀";
    }
}