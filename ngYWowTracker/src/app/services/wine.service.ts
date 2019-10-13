import { logging } from 'protractor';
import { Wine } from './../models/wine';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  [x: string]: any;

  editWine: Wine = null;
  newWine: Wine = new Wine();
  selected: Wine = null;
  title = 'Your World of Wine -YWOW';
  wines: Wine[] = [];
  private baseUrl = 'http://localhost:8082/api/wine';

  // constructor
  constructor(private http: HttpClient) { }

  // methods
  index() {

    return this.http.get<Wine[]>(this.baseUrl)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
    }

    // tslint:disable-next-line: no-shadowed-variable
    create(wine: Wine) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      return this.http.post(this.baseUrl, wine, httpOptions)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in WineService.add()');
        })
      );
    }

    destroy(id) {
      return this.http.delete(this.baseUrl + '/' + id)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in wineService delete()');
          })
      );
    }

    update(wine: Wine) {
      const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type' : 'application/json'
          })
        };
      return this.http.put(this.baseUrl + '/' + wine.id, wine, httpOptions)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in WineService.update()');
        })
      );
    }
    }

