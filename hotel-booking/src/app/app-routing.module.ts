import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditHotelComponent } from './pages/add-edit-hotel/add-edit-hotel/add-edit-hotel.component';
import { SearchRoomComponent } from './pages/search-room/search-room/search-room.component';
import { RoomsComponent } from './pages/rooms/rooms/rooms.component';

const routes: Routes = [
  {
    path: '',
    component: SearchRoomComponent
  }, 
  {
    path: 'add-edit-hotel',
    component: AddEditHotelComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
