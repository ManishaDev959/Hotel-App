import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotel } from 'src/app/models/hotel.model';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotels: Hotel[] = []; 
  room: Room = {} as Room; 

  constructor(private hotelService: HotelService, private roomService: RoomService, private router: Router) { }

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels() {
    this.hotelService.getHotels().subscribe({
      next: (res) => this.hotels = res,
      error: (err) => console.error(err)
    });
  }

  addRoom() {
    if (!this.room.Title || !this.room.HotelId) {
      alert('Please provide room title and select a hotel.');
      return;
    }

    this.roomService.createRoom(this.room).subscribe({
      next: () => 
           {
            alert('You have added one room')
           this.router.navigate(['/'])},
      error: (err) => console.error(err)
    });
  }
}
