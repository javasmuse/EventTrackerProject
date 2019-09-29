package com.skilldistillery.wine.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.JPAYWowTracker.entities.Wine;
import com.skilldistillery.wine.services.YWowService;

@RestController
@RequestMapping("api")
public class YWowController {
	
	@Autowired
	private YWowService svc; 
	
	@GetMapping("ping")
	public String ping() {
		return "pong"; 
	}
	
	@GetMapping("wine")
	public List<Wine> listAllWines() {
		List<Wine> wines = svc.findAll();
		return wines; 
	}
	
	@GetMapping("wine/{wid}")
	public Wine getById(@PathVariable("wid") int id) {
		return svc.findById(id);
	}
	
	@DeleteMapping("wine/{wid}")
    public void destroyWine(@PathVariable("wid") int postId, HttpServletResponse resp) {
    }
	
	@PutMapping("wine/wid")
    public Wine replacePost(@PathVariable("wid") int wid, @RequestBody Wine wine) {
        Wine wine2 = svc.updateById(wid, wine);
        if(wine != null) {
        	wine2.setName(wine.getName());
        	wine2.setCountry(wine.getCountry());
        	wine2.setRegion(wine.getRegion());
        	wine2.setGrape(wine.getGrape());
        	wine2.setPrice(wine.getPrice());
        	wine2.setLocationPurchased(wine.getLocationPurchased());
        	wine2.setRating(wine.getRating());
        	wine2.setNotes(wine.getNotes());
        	wine2.setYear(wine.getYear());
        	wine2.setImage(wine.getImage());
        	wine2.setWinery(wine.getWinery());
        }
        return wine2;
    }
    
	
	
}
