export class Wine {
  id: number;
  name: string;
  country: string;
  region: string;
  grape: string;
  price: number;
  locationPurchased: string;
  rating: number;
  notes: string;
  year: number;
  image: string;
  winery: string;

constructor(
id ?: number,
name ?: string,
country ?: string,
region ?: string,
grape ?: string,
price ?: number,
locationPurchased ?: string,
rating ?: number,
notes ?: string,
year ?: number,
image ?: string,
winery ?: string,
) {
  this.id = id;
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
}
