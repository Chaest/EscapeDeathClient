import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomListComponent } from './room-list/room-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomService } from './shared/room/room.service';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
