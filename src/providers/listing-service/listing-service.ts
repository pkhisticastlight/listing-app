import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';
import { Listing } from '../../models/listing.model';
import { Pricing } from '../../models/pricing.model';
import { ListingDetails } from '../../models/details.model';
import { Address } from '../../models/address.model';
import { ListingStatus } from '../../models/statustype.model';
/*
  Generated class for the ListingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListingServiceProvider {
  addressLine1List = ['3456 2nd Lane','12 Thomas Drive','1235 Lakeview Dr','2706 Newbridge Drive','904 Edgemont Drive','42377 Depot Street','116 Anderson Street','2733 South Constitution Rd.','290 Adams Street']
  cities = ['Irvine','Lake Forest','New Port Beach'];
  zipcodes = ['92603', '92604', '92606', '92610', '92612', '92614', '92617', '92618', '92620'];
  prices = [1075000, 1146000, 585000, 899000, 675000, 1869000, 1075909, 1275000, 975000];
  descriptions = [];
  getListing() : Observable<any> {
    let observable=Observable.create(observer => {
          setTimeout(() => {
           let listing = this.generateMockListing();
            observer.next(listing);
            console.log("am done");
            observer.complete();
          }, 2000);

        });
    return observable;
  }
  generateMockListing(): Array<Listing> {
    let mockListing : Array<Listing>;
    mockListing = new Array<Listing>();
    for(let i = 1; i <= 5 ; i++) {
      let listing: Listing = new Listing();
      let address = new Address();
      listing.address = address;
      listing.address.addressLine1 = this.addressLine1List[Math.floor(Math.random()*this.addressLine1List.length)];
      listing.address.city = this.cities[Math.floor(Math.random()*this.cities.length)];
      listing.address.state = 'CA';
      listing.address.zipCode =  this.zipcodes[Math.floor(Math.random()*this.zipcodes.length)];
      listing.id = i;
      listing.description = "Anazing house with beautiful views.";
      listing.images = [`../assets/imgs/house${i}.jpg`];
      let pricing = new Pricing();
      pricing.listingPrice = this.prices[Math.floor(Math.random()*this.prices.length)];
      listing.pricing = pricing;
      listing.listingDate = new Date('01/01/2018');
      let details = new ListingDetails();
      details.baths = Math.floor(Math.random()*this.prices.length);
      details.bedrooms = Math.floor(Math.random()*this.prices.length);
      details.garage = Math.floor(Math.random()*this.prices.length);
      details.area = Math.random() * (3000 - 1000) + 1000;
      listing.listingStatus = this.getRandomStatus();
      listing.listingDetails = details;
      mockListing.push(listing);
    }
    return mockListing;
  }

  getRandomStatus(): ListingStatus {
    return Math.floor(Math.random() * Object.keys(ListingStatus).length/2);
  }
}
