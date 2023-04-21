import { Component,AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  implements AfterViewInit{
  private map;
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 28.0339, 1.6596 ],
      zoom: 5
    });
    
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
    var marker = new L.Marker([31.9499962,5.3166654],{ icon });
    marker.addTo(this.map,);

  }
  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();

   }

}
