package com.melistoksoy.livestocktracksystem.repository;
import com.melistoksoy.livestocktracksystem.model.Vet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VetRepo extends JpaRepository<Vet, Integer> {
}
