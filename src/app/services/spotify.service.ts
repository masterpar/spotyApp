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
      Authorization: 'Bearer BQBd4TpMlxxerk1raFtL1O-PNJTCj2NmmZUAxs5sn_rCbMf6dpAW2ZGjo0WBKt9WwngwtC6HG7f-S_CJ67I'
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


