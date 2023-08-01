package com.melistoksoy.livestocktracksystem.controller;

import com.melistoksoy.livestocktracksystem.Dto.LoginDto;
import com.melistoksoy.livestocktracksystem.service.UserService;
import com.melistoksoy.livestocktracksystem.Dto.UserDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.melistoksoy.livestocktracksystem.Dto.LoginDto;
import com.melistoksoy.livestocktracksystem.response.LoginResponse;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/user")




public class UserController {

    @Autowired
    private UserService userService;
    @PostMapping("/save")

    public String save(@RequestBody UserDto UserDto) {
        String id=userService.addUser(UserDto);
        return id;
    }
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto) {
        LoginResponse loginResponse= userService.loginUser(loginDto);
        return ResponseEntity.ok(loginResponse);
    }

}

