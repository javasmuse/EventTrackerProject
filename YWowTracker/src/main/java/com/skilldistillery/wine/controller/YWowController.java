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

	@PostMapping("wine")
	public Wine addWine(@RequestBody Wine wine) {
		wine = svc.createNew(wine);
		return wine;
	}
}

//	@PostMapping("wine")
//	public Wine addWine(@RequestBody Wine wine, HttpServletResponse resp, HttpServletRequest req) {
//		try { 
//			svc.createNew(wine); 
//			resp.setStatus(201);
//			StringBuffer url = req.getRequestURL();
//			System.err.println(url);
//			url.append("/");
//			url.append(wine.getId());
//			resp.setHeader("Location", url.toString());
//		} catch (Exception e) {
//			resp.setStatus(400);
//			e.printStackTrace();
//		}
//		return wine;
//		}
//	}
