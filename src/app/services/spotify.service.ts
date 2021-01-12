import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private Http: HttpClient) { }

   // Query
  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQB-6yKThBIRt6tYMsWmvI7eIwg_mpNsQV9g6Htix7BnH3LMzoKZT8b2PMcZuGiVIA7Ha3r2Lhn_3Y8T5qA'
    });

    return this.Http.get(url, { headers})
  }


  getNewReleases(){

    return this.getQuery('browse/new-releases')
      .pipe( map(data => {
          return data['albums'].items;
      }));
  }

// Search all artists
  getArtists(termino: string){
   return this.getQuery(`search?q=${termino}&type=artist&limit=18`)
      .pipe( map(data => {
        return data['artists'].items;
      }));

  }

  // Search artist
  getArtist(id: string){
   return this.getQuery(`artists/${id}`)
      .pipe( map(data => {
        return data;
      }));

  }

  // get top Track artis
  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe( map(data => {
        return data['tracks'];
      }));

  }

}


