import { Component } from '@angular/core';
import { FreecodecampTalksService } from '../../services/freecodecamp-talks.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  videos: any [] = [];
  videoSeleccionado: any;

  constructor(public _fccts: FreecodecampTalksService) {

    this._fccts.traerVideos().subscribe( videos => {
      console.log( videos );
      this.videos = videos;
    });

   }

   verVideo( video: any) {

    this.videoSeleccionado = video;
    $('#myModal').modal();
   }

   cerrarModal() {
     this.videoSeleccionado = null;
     $('#myModal').modal('hide');
   }

  cargarMas() {
    this._fccts.traerVideos()
    .subscribe( videos => this.videos.push.apply( this.videos, videos ) );
  }

}
