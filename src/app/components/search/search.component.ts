import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists: any[] = [];
  loading : boolean;

  constructor(private spotify: SpotifyService) { }

  // tslint:disable-next-line:typedef
  search(termino: string){

    this.loading = true;

    this.spotify.getArtists(termino)
      .subscribe( data => {
        // @ts-ignore
        this.artists = data;
        if(data) this.loading = false;
      });
  }

}
