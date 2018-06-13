import { Address } from './address.model';
import { ListingStatus } from './statustype.model';
import { Pricing } from './pricing.model';
import { Offer } from './offer.model';
import { ListingDetails } from './details.model';

export class Listing {
    id: number;
    address: Address;
    listingStatus: ListingStatus;
    pricing: Pricing;
    description: string;
    offers: [Offer];
    images: [string];
    listingDetails: ListingDetails;
    listingDate: Date;
}