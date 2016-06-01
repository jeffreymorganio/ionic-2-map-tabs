import {Page} from 'ionic-angular'
import {Google} from '../google/google'
import {Leaflet} from '../leaflet/leaflet'


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Google
  tab2Root: any = Leaflet
}
