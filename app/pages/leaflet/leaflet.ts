import {Page, Platform} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/leaflet/leaflet.html',
})
export class Leaflet {

  private eiffelTower: any
  private zoomLevel: any
  private map: any

  constructor(platform: Platform) {
    this.eiffelTower = [48.858093, 2.294694]
    this.zoomLevel = 16
    platform.ready().then(() => {
      this.loadMap( () => {
        this.addMarker()
      })
    });
  }

  private loadMap(completionHandler) {
    let tileSource = this.createTileSource()
    let mapOptions = {
      zoomControl: false,
      layers: [tileSource]
    }
    this.map = new L.Map('leaflet-map', mapOptions)
    L.control.zoom({ position: 'bottomright' }).addTo(this.map);

    let thatMap = this.map
    setTimeout(
      () => {
        thatMap.invalidateSize({})
        thatMap.setView(this.eiffelTower, this.zoomLevel)
        completionHandler()
      },
      100
    )

  }

  private createTileSource(): L.TileLayer {
    let tileSourceURL = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    let tileSourceOptions = {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
    return new L.TileLayer(tileSourceURL, tileSourceOptions)
  }

  addMarker() {
    L.marker(this.eiffelTower).addTo(this.map)
  }

}
