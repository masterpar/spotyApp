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
      Authorization: 'Bearer BQA02JMDCZ28Psp-jMPCakonIjvTGlU6DFvtDgw3u_6F1cdkHu-dMDwY2PO0-l-bSl-7-a_YCDTbDtw7lCQ'
    });

    return this.Http.get(url, { headers})
  }


  getNewReleases(){

    return this.getQuery('browse/new-releases')
      .pipe( map(data => {
          return data['albums'].items;
      }));
  }

// Search
  getArtist(termino: string){
   return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map(data => {
        return data['artists'].items;
      }));

  }

}


