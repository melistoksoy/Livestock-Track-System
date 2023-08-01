package com.melistoksoy.livestocktracksystem.controller;
import com.melistoksoy.livestocktracksystem.model.Animal;
import com.melistoksoy.livestocktracksystem.repository.AnimalRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin

public class AnimalController {

    @Autowired
    private AnimalRepo animalRepo;

    @PostMapping("/animal")
    Animal newAnimal(@RequestBody Animal newAnimal) {
        return animalRepo.save(newAnimal);
    }
    @GetMapping("/animals")
    List<Animal> getAllAnimals(){
        return animalRepo.findAll();
    }

}

