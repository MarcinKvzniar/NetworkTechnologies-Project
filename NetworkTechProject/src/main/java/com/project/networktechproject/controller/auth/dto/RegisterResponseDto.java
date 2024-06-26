package com.project.networktechproject.controller.auth.dto;

import com.project.networktechproject.commonTypes.UserRole;

public class RegisterResponseDto {
    private String username;
    private UserRole role;
    private long userId;
    String message;

    public RegisterResponseDto(long userId, String username, UserRole role, String message) {
        this.username = username;
        this.role = role;
        this.userId = userId;
        this.message = message;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
