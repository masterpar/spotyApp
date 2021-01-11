import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent  {

  artist: any = {};
  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {

    this.route.params.subscribe(params => {
     this.getArtist(params['id'])
    })

  }

  getArtist( id: string){

    this.spotify.getArtist(id)
      .subscribe( artist => {
        this.artist = artist;
      })
  }

}
