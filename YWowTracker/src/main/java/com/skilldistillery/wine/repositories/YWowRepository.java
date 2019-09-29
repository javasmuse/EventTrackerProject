package com.skilldistillery.wine.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.JPAYWowTracker.entities.Wine;

public interface YWowRepository extends JpaRepository<Wine, Integer> {
	

}
