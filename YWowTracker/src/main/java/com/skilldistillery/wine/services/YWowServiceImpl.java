package com.skilldistillery.wine.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.JPAYWowTracker.entities.Wine;
import com.skilldistillery.wine.repositories.YWowRepository;

@Service
public class YWowServiceImpl implements YWowService {
	
	@Autowired
	private YWowRepository repo; 

	@Override
	public Wine createNew(Wine wine) {
		return repo.saveAndFlush(wine);
	}

	@Override
	public List<Wine> findAll() {
		List<Wine> wine	= repo.findAll();
		return wine;
	}

	@Override
	public Wine findById(int id) {
		Optional<Wine> optW = repo.findById(id);
		Wine wine = null;
		if(optW.isPresent()) {
			wine = optW.get();
		}
		return wine;
	}

	@Override
	public Wine updateById(int id, Wine wine) {
		Wine win = findById(id); 
		
		if(wine != null ) {
			win.setName(wine.getName());
			win.setCountry(wine.getCountry());
			win.setRegion(wine.getRegion());
			win.setGrape(wine.getGrape());
			win.setPrice(wine.getPrice());
			win.setLocationPurchased(wine.getLocationPurchased());
			win.setRating(wine.getRating());
			win.setNotes(wine.getNotes());
			win.setYear(wine.getYear());
			win.setImage(wine.getImage());
			win.setWinery(wine.getWinery());
			
		}
		return repo.saveAndFlush(win);
	}
	
	@Override
	public Wine deleteById(int id) {
		Optional<Wine> win = repo.findById(id); 
		if(win.isPresent()) {
			repo.deleteById(id);
		}
		return null;
	}

}
