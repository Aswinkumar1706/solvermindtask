import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../app-service/api.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  photos: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllPhotos().subscribe((res) => {
      this.photos = res;
    });
  }
}
