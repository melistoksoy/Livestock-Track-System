package com.melistoksoy.livestocktracksystem.service;
import com.melistoksoy.livestocktracksystem.Dto.LoginDto;
import com.melistoksoy.livestocktracksystem.Dto.UserDto;
import com.melistoksoy.livestocktracksystem.model.User;
import com.melistoksoy.livestocktracksystem.repository.UserRepo;
import com.melistoksoy.livestocktracksystem.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserImpl implements UserService{
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String addUser(UserDto userDto) {

        User user= new User (

                userDto.getId(),
                userDto.getName(),
                userDto.getSurname(),
                userDto.getNumber(),
                this.passwordEncoder.encode(userDto.getPassword())
        );

        userRepo.save(user);
        return user.getName();




    }

    @Override
    public LoginResponse loginUser(LoginDto loginDto) {
        String msg = "";
        User user1 = userRepo.findByNumber(loginDto.getNumber());
        if (user1 != null) {
            String password = loginDto.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = userRepo.findOneByNumberAndPassword(loginDto.getNumber(), encodedPassword);
                if (user.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("Password Not Match", false);
            }
        }else {
            return new LoginResponse("User not exits", false);
        }
    }
    }

