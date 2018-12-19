import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomService } from './services/room.service';
import { PlayerService } from './services/player.service';
//import { RoomComponent } from './components/room/room.component';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
//    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RoomService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
