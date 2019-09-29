package com.skilldistillery.wine.services;

import java.util.List;

import com.skilldistillery.JPAYWowTracker.entities.Wine;

public interface YWowService {
	
	// Create
	
	Wine createNew(Wine wine);
	
	// Read
	List<Wine> findAll();
	
	Wine findById(int id); 
	
	
	// Update
	
	Wine updateById(int id, Wine wine); 
	
	// Destroy
	
	Wine deleteById(int id);
	

}
