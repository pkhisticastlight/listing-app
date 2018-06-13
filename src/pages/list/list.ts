import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { FilterPage } from '../filter/filter';
import { ListingServiceProvider } from '../../providers/listing-service/listing-service'
import { Listing } from '../../models/listing.model';
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  list = ListPage;
  map = MapPage;
  filter = FilterPage;
  houseListing: Array<Listing>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public listingService: ListingServiceProvider
  ) {
    this.houseListing = new Array<Listing>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
    this.listingService.getListing().subscribe(result=>{
      console.log(result);
      this.houseListing = result;
    });
  }
}
