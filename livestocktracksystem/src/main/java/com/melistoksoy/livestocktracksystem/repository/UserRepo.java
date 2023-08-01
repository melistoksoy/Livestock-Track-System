package com.melistoksoy.livestocktracksystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.melistoksoy.livestocktracksystem.model.User;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface UserRepo extends JpaRepository<User, Integer>{
     Optional<User> findOneByNumberAndPassword(String number, String password);

     User findByNumber(String number) ;


}
