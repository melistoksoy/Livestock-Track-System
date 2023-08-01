package com.melistoksoy.livestocktracksystem.repository;

import com.melistoksoy.livestocktracksystem.model.Animal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnimalRepo extends JpaRepository<Animal, Integer> {
}
