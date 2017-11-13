import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FreecodecampTalksService {

  // tslint:disable-next-line:no-inferrable-types
  private freecodecamptalksUrl: string = 'https://www.googleapis.com/youtube/v3';
  // tslint:disable-next-line:no-inferrable-types
  private apikey: string = 'AIzaSyBSAyU4ji_zr8iFjQL9HQ_lVuyXNNjJ25U';
  // tslint:disable-next-line:no-inferrable-types
  private playlist: string = 'UUVk8weS4S2kJfja72fTxh5A';
  // tslint:disable-next-line:no-inferrable-types
  private nextPageToken: string = '';

  constructor(public http: Http) { }

  traerVideos() {

    const url = `${ this.freecodecamptalksUrl }/playlistItems`;

    let params = new URLSearchParams();

    params.set( 'part', 'snippet' );
    params.set( 'maxResults', '10' );
    params.set( 'playlistId', this.playlist );
    params.set ( 'key', this.apikey );

    if ( this.nextPageToken ) {
      params.set('pageToken', this.nextPageToken );
    }

    return this.http.get( url, { search: params } ).map( res => {
      console.log( res.json());
      this.nextPageToken = res.json().nextPageToken;

      let videos: any[] = [];

      for ( let video of res.json().items ){
        let snippet = video.snippet;
        
        videos.push(snippet);
      }

      return videos;
    });

  }

}
