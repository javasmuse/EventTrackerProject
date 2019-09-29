package com.skilldistillery.wine.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@GetMapping("wind/{wid}")
	public Wine getById(@PathVariable("wid") int id) {
		return svc.findById(id);
	}
	
	
}
