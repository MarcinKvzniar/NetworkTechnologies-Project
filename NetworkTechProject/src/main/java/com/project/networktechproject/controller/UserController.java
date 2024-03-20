package com.project.networktechproject.controller;

import com.project.networktechproject.controller.dto.user.GetUserDto;
import com.project.networktechproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<GetUserDto> getAllUsers() {
        return userService.getAll();
    }

    @GetMapping("/{id}")
    public GetUserDto getOne(@PathVariable long id) {
        return userService.getOne(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id) {
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
