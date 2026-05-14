package com.example.CTube.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.CTube.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}

// package com.example.CTube.repository;


// import org.springframework.data.jpa.repository.JpaRepository;
// import com.example.CTube.model.User;

// public interface UserRepository extends JpaRepository<User, Long> {
// }