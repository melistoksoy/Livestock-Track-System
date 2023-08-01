package com.melistoksoy.livestocktracksystem.service;
import com.melistoksoy.livestocktracksystem.Dto.LoginDto;
import com.melistoksoy.livestocktracksystem.Dto.UserDto;
import com.melistoksoy.livestocktracksystem.response.LoginResponse;

import java.util.List;

public interface UserService {
    String addUser(UserDto userDto);

    LoginResponse loginUser(LoginDto loginDto);
}

