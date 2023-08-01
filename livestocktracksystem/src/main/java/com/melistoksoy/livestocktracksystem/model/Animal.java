package com.melistoksoy.livestocktracksystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Animal {

    @Id
    @GeneratedValue
    private int id;
    private int earNumber;
    private String type;
    private String gender;
    private String age;
    private String pregnancy;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getPregnancy() {
        return pregnancy;
    }

    public void setPregnancy(String pregnancy) {
        this.pregnancy = pregnancy;
    }

    public int getEarNumber() {
        return earNumber;
    }

    public void setEarNumber(int earNumber) {
        this.earNumber = earNumber;
    }
}
