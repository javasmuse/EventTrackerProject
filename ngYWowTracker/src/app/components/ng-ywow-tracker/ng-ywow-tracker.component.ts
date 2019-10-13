import { Wine } from './../../models/wine';
import { WineService } from './../../services/wine.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ng-ywow-tracker',
  templateUrl: './ng-ywow-tracker.component.html',
  styleUrls: ['./ng-ywow-tracker.component.css']
})
export class NgYWowTrackerComponent implements OnInit {

  // Fields

  editWine: Wine = null;
  newWine: Wine = new Wine();
  selected: Wine = null;
  title = 'Your World of Wine -YWOW';
  wines: Wine[] = [];

  // Constructor

  constructor(private wineService: WineService) { }

  // Methods

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.wineService
    .index()
    .subscribe(
      data => (this.wines = data),
      err => console.error('Observer got an error:' + err)
    );
  }

  addNewWine(newWineForm: NgForm) {
    const newWine = new Wine();
    // newWine.id = newWineForm.value.id;
    newWine.name = newWineForm.value.name;
    newWine.country = newWineForm.value.country;
    newWine.region = newWineForm.value.region;
    newWine.grape = newWineForm.value.grape;
    newWine.price = newWineForm.value.price;
    // newWine.locationPurchased = newWineForm.value.locationPurchased;
    // newWine.rating = newWineForm.value.rating;
    // newWine.notes = newWineForm.value.notes;
    // newWine.year = newWineForm.value.year;
    // newWine.image = newWineForm.value.image;
    // newWine.winery = newWineForm.value.winery;
    this.wineService.create(newWine).subscribe();
    {
      this.reload();
    }
  }

  deleteWine(id: number) {
    this.wineService.destroy(id).subscribe(
      happyPath => {
        this.reload();
      },
      unhappyPath => {
        console.error('Error in Component.deleteTodo');
        console.error(unhappyPath);
      }
    );
  }

  updateWine() {
    console.log('are we printing here?')
    this.wineService.update(this.editWine).subscribe(
      data => {
        this.reload();
      },
      err => {
        console.error('Error in wine component update' + err);
      }
    );
  }

  setEditWine() {
    console.log('set Edit wine');
    this.editWine = Object.assign({}, this.selected  );
  }

  displayTable() {
    this.selected = null;
  }

  displayWine(wine: Wine) {
    this.selected = wine;
  }

  getWineCount(): number {
    return this.wines.length;
  }
}
