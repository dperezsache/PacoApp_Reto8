import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pelicula } from './pelicula';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ImdbServiceService {

  public REST_API_SERVER='https://imdb-api.com/en/API/Top250Movies/k_7y2v3bw1';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  messageService: any;
  
  constructor(public http : HttpClient) { 
    
  }
  
    public getPeliculas(){
      return this.http.get<Pelicula[]>(this.REST_API_SERVER)
      
    }
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
    private log(message: string) {
      console.log(message)
    }
  
}
