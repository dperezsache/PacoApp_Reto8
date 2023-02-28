import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImdbServiceService {

  constructor(public _http : HttpClient) { }

  getPeliculas(): Observable<any> {
    let request = 'k_7y2v3bw1';
    let url = 'https://imdb-api.com/en/API/Top250Movies/';
    return this._http.get(url);
  }
}
