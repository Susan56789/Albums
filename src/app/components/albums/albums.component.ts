import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: any;

  constructor( private photoService: PhotosService) { }

  ngOnInit(): void {
    this.albums= this.photoService.getAlbums();
  }

}
