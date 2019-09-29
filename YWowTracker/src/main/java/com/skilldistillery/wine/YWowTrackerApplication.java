package com.skilldistillery.wine;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.skilldistillery.JPAYWowTracker.entities")
public class YWowTrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(YWowTrackerApplication.class, args);
	}

}


