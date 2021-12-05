import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { 
  
  }

  getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums').pipe(
      map(result =>{
        
        //console.log(result);
        
          return result;
        })
    )
  }

  getPhotos(albumId: any){
 return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`).pipe(
  map(result =>{
        
    //console.log(result);
    return result;
    })
 )
  }
}
