package com.melistoksoy.livestocktracksystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude= SecurityAutoConfiguration.class)
public class LivestocktracksystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(LivestocktracksystemApplication.class, args);
	}

}
