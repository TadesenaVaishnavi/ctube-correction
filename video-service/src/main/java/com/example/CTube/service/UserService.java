// package com.example.CTube.service;

// import java.nio.file.Files;
// import java.nio.file.Path;
// import java.nio.file.Paths;
// import java.time.LocalDateTime;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import org.springframework.web.multipart.MultipartFile;

// import com.example.CTube.model.User;
// import com.example.CTube.repository.UserRepository;

// import org.springframework.context.annotation.Bean;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;

// @Service
// public class UserService {

//     @Autowired
//     private UserRepository userRepository;

//     @Autowired
//     private PasswordEncoder passwordEncoder;

//     public void registerUser(String username, String email, String password, MultipartFile file) {

//         try {
//             // Save image
//             String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
//             Path path = Paths.get("profile/" + fileName);

//             Files.createDirectories(path.getParent());
//             Files.write(path, file.getBytes());

//             // Save user
//             User user = new User();
//             user.setUsername(username);
//             user.setEmail(email);
//             user.setPasswordHash(passwordEncoder.encode(password));
//             // user.setPasswordHash(password);
//             user.setProfilePicture(path.toString());
//             user.setJoinDate(LocalDateTime.now());

//             userRepository.save(user);

//         } catch (Exception e) {
//             throw new RuntimeException("Registration failed");
//         }
//     }
// }



package com.example.CTube.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.CTube.model.User;
import com.example.CTube.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void registerUser(String username, String email, String password, MultipartFile file) {

        try {
            // Save image
            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            Path path = Paths.get("profile/" + fileName);

            Files.createDirectories(path.getParent());
            Files.write(path, file.getBytes());

            // Save user
            User user = new User();
            user.setUsername(username);
            user.setEmail(email);
            user.setPasswordHash(password);
            user.setProfilePicture(path.toString());
            user.setJoinDate(LocalDateTime.now());

            userRepository.save(user);

        } catch (Exception e) {
            throw new RuntimeException("Registration failed");
        }
    }
}