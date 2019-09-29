package com.skilldistillery.JPAYWowTracker.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class WineTest {
	
	private static EntityManagerFactory emf; 
	private static EntityManager em; 
	private Wine wine; 

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("ywowPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		wine = em.find(Wine.class, 1);
//		wine = em.find(Wine.class, 1);
//		wine = em.find(Wine.class, 3);
		wine = em.find(Wine.class, 2);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		wine = null; 
	}

	@Test
	void test_Wine_entity_mapping() {
		assertNotNull(wine);
//		assertEquals("Imagery", wine.getWinery());
//		assertEquals("Sauvignon Blanc", wine.getGrape());
		assertEquals(27.00, wine.getPrice());
	}

}
