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
      Authorization: 'Bearer BQBw5ItqHKtmrCnb6wayI1uYA6428sTc_8JJjAtsVtZ_kbbXZm29h3-luVKMv8TkfqTuzOGK_UoDqVp6bbU'
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
   return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map(data => {
        return data['artists'].items;
      }));

  }

  // Search all artists
  getArtist(id: string){
   return this.getQuery(`artists/${id}`)
      .pipe( map(data => {
        return data;
      }));

  }

}


