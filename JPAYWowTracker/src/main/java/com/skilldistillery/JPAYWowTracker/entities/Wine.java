package com.skilldistillery.JPAYWowTracker.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Wine {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name; 
	private String country; 
	private String region; 
	private String grape; 
	private double price; 
	@Column(name="location_purchased")
	private String locationPurchased; 
	private int rating;
	private String notes; 
	private int year;
	private String image; 
	private String winery; 
	
	public Wine() {
		super();
	}

	public Wine(String name, String country, String region, String grape, double price, String locationPurchased,
			int rating, String notes, int year, String image, String winery) {
		super();
		this.name = name;
		this.country = country;
		this.region = region;
		this.grape = grape;
		this.price = price;
		this.locationPurchased = locationPurchased;
		this.rating = rating;
		this.notes = notes;
		this.year = year;
		this.image = image;
		this.winery = winery;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getGrape() {
		return grape;
	}

	public void setGrape(String grape) {
		this.grape = grape;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getLocationPurchased() {
		return locationPurchased;
	}

	public void setLocationPurchased(String locationPurchased) {
		this.locationPurchased = locationPurchased;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getWinery() {
		return winery;
	}

	public void setWinery(String winery) {
		this.winery = winery;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Wine other = (Wine) obj;
		if (id != other.id)
			return false;
		return true;
	}

	
	@Override
	public String toString() {
		return "Wine [id=" + id + ", name=" + name + ", country=" + country + ", region=" + region + ", grape=" + grape
				+ ", price=" + price + ", locationPurchased=" + locationPurchased + ", rating=" + rating + ", notes="
				+ notes + ", year=" + year + ", image=" + image + ", winery=" + winery + "]";
	}


}

