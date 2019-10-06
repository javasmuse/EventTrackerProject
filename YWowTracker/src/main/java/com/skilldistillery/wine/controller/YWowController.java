package com.skilldistillery.wine.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
	@PostMapping("wine")
	public Wine addWine(@RequestBody Wine wine) {
		wine = svc.createNew(wine);
		return wine;
	}

	@GetMapping("wine")
	public List<Wine> listAllWines() {
		List<Wine> wines = svc.findAll();
		return wines;
	}

	@GetMapping("wine/{wid}")
	public Wine getById(@PathVariable("wid") Integer id, HttpServletResponse resp) {
		Wine wine = null;
		
		try {
			wine = svc.findById(id);
			if (wine != null) {
				resp.setStatus(200);;
			} else {
				resp.setStatus(404); 
			}
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
		return wine;
	}
	
	

	@DeleteMapping("wine/{wid}")
	public void destroyWine(@PathVariable("wid") int id, HttpServletResponse resp) {
		svc.deleteById(id);
		
	}

	@PutMapping("wine/{wid}")
	public Wine replaceWine(@PathVariable("wid") int wid, @RequestBody Wine wine, HttpServletResponse resp,
			HttpServletResponse req) {
		try {
			wine = svc.updateById(wid, wine);
			if (wine != null) {
				resp.setStatus(404);
			} else {
				resp.setStatus(201);
			}
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
		}
		return wine;
	}

}
