import {Page, Platform} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/google/google.html',
})
export class Google {

  private map: google.maps.Map
  private eiffelTower: any
  private zoomLevel: any

  constructor(platform: Platform) {
    this.eiffelTower = new google.maps.LatLng(48.858093, 2.294694)
    this.zoomLevel = 16
    platform.ready().then(() => {
      this.loadMap()
      this.addMarker()
    });
  }

  private loadMap() {
    let mapOptions = {
      center: this.eiffelTower,
      zoom: this.zoomLevel,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    let mapElement = document.getElementById('google-map')
    this.map = new google.maps.Map(mapElement, mapOptions)
  }

   private addMarker() {
    new google.maps.Marker({
      map: this.map,
      position: this.eiffelTower//,
      // animation: google.maps.Animation.DROP
    })
  }

}
