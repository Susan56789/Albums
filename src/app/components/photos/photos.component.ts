import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: any;
  albumId:any ;

  constructor(
    private photoService: PhotosService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.albumId= this.route.snapshot.params['albumId'];
    this.photos = this.photoService.getPhotos(this.albumId);
  }

}
