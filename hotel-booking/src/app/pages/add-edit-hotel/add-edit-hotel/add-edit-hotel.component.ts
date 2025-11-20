import { Component } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';

@Component({
  selector: 'app-add-edit-hotel',
  templateUrl: './add-edit-hotel.component.html',
  styleUrls: ['./add-edit-hotel.component.scss']
})
export class AddEditHotelComponent {

  hotel: Hotel = {
    hotelName: '',
    address: '',
    imageUrl: ''
  };

  imageFile?: File;
  imagePreview?: string;

  constructor(private hotelService: HotelService, private router: Router) { }


  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imageFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(this.imageFile);
    }
  }

  addHotel() {
    if (!this.hotel.hotelName) {
      alert('Hotel name is required!');
      return;
    }

    const formData = new FormData();
    formData.append('HotelName', this.hotel.hotelName);
    if (this.hotel.address) {
      formData.append('Address', this.hotel.address);
    }

    // Only append image if it exists
    if (this.imageFile) {
      formData.append('Image', this.imageFile, this.imageFile.name);
    }

    this.hotelService.createHotel(formData).subscribe({
      next: (res: Hotel) => {
        alert('Hotel added successfully!');
        this.router.navigate(['/']); // adjust route if needed
      },
      error: (err) => {
        console.error(err);
        alert('Error adding hotel.');
      }
    });
  }
}
