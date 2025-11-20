import { Component } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { SearchRequest } from 'src/app/models/search.model';
@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.scss']
})
export class SearchRoomComponent {

  fromDate?: string;
  toDate?: string;
  imageUrl : string = ''


  adults: number = 2;
  children: number = 1;

  searchResults: any[] = [];

  constructor(private hotelService: HotelService) {}
  

  searchHotels() {
    if (!this.fromDate || !this.toDate) {
      alert('Please enter both From and To dates');
      return;
    }

    const payload: SearchRequest & { adults: number; children: number } = {
      fromDate: this.fromDate,
      toDate: this.toDate,
      adults: this.adults,
      children: this.children
    };

    this.hotelService.searchHotels(payload).subscribe({
  next: (res) => {
    const baseUrl = 'http://localhost:5173';
    this.searchResults = res.map((hotel: any) => {
      return {
        ...hotel,
        imageUrl: baseUrl + hotel.imageUrl
      };
    });
  },
  error: (err) => console.error(err)
});

  }
}
