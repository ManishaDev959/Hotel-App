import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  backgroundImageUrl : string = '';

  ngOnInit(): void {
      this.backgroundImageUrl = 'http://localhost:5173/bgImages/hotelbg.jpg';
  }



}
