import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

// servicios
import { FreecodecampTalksService } from './services/freecodecamp-talks.service';
import { VideoFccPipe } from './pipes/video-fcc.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    VideoFccPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
  FreecodecampTalksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
