import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { LayoutComponent } from './components/header/header/layout.component';
import { AddEditHotelComponent } from './pages/add-edit-hotel/add-edit-hotel/add-edit-hotel.component';
import { RoomsComponent } from './pages/rooms/rooms/rooms.component';
import { SearchRoomComponent } from './pages/search-room/search-room/search-room.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    AddEditHotelComponent,
    RoomsComponent,
    SearchRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
