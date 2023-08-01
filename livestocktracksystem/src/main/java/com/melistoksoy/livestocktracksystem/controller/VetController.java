package com.melistoksoy.livestocktracksystem.controller;

import com.melistoksoy.livestocktracksystem.model.Animal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.melistoksoy.livestocktracksystem.repository.VetRepo;
import com.melistoksoy.livestocktracksystem.model.Vet;
import java.util.List;

@RestController
@CrossOrigin
public class VetController {

    @Autowired
    private VetRepo vetRepo;


    @PostMapping("/vet")
    Vet newVet(@RequestBody Vet newVet) {
        return vetRepo.save(newVet);
    }
    @GetMapping("/vets")
    List<Vet> getAllVets(){
        return vetRepo.findAll();
    }

}
