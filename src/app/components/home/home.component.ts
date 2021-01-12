import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {

  newFunctions : any[] = [];
  loading: boolean;
  error: boolean = false;

  constructor(private spotify: SpotifyService) {

    this.loading = true;

    this.spotify.getNewReleases()
      .subscribe( data => { this.newFunctions = data; }
      ,(errorService) => {
          this.error = errorService.error.error.message;
        }
        );
    this.loading = false;
  }


}
