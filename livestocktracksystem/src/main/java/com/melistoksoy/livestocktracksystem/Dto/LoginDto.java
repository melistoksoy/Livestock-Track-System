package com.melistoksoy.livestocktracksystem.Dto;

public class LoginDto {
    private String number;
    private String password;

    public LoginDto(String number, String password) {
        this.number = number;
        this.password = password;
    }

    public LoginDto() {
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "LoginDto{" +
                "number='" + number + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
