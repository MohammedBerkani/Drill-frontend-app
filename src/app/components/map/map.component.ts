import { Component,AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';
import { Project } from 'src/app/models/project.model';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  implements AfterViewInit{
  private map;
  oneProject:Project
 
   initMap(): void {




    this.map = L.map('map', {
      center: [ 28.0339, 1.6596 ],
      zoom: 5
    });
    
  }
  constructor(  private apiService: ApiService, private actRoute: ActivatedRoute,

    ) {
      
     }

  ngAfterViewInit(): void {
   let id = this.actRoute.snapshot.paramMap.get('id');

    this.initMap();
    this.readProject(id)
   }
   readProject(id){
    console.log(id)
    this.apiService.recieveProjectForMap(id).subscribe((data) => {
  console.log(data)
  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 3,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });
  const icon = L.icon({
    iconUrl: 'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-icon.png',
    shadowUrl: 'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-shadow.png',
    popupAnchor: [13, 0],
  });
  tiles.addTo(this.map);
  
  var marker = new L.Marker([data['basic_info']['SurfaceLatitude'],data['basic_info']['SurfaceLontitude']],{ icon });
  marker.addTo(this.map);


    });
   }


}
