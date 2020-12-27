import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private Http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getNewReleases(){

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBeB6UjWs7ia7xc3w-o4duIZraOnAf49U1-fwrPKACsoBrTeG62Rz4TyxvGco6kUOxMxW4Wn3EAdW4n1Uc'
    })

    this.Http.get('https://api.spotify.com/v1/browse/new-releases', { headers})
      .subscribe( data => {
        console.log(data);
      })

  }

}


