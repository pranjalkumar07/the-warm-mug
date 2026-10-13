export interface CafeInfo {
  name: string;
  tagline: string;
  concept: string;
  established: number;
  rating: number;
  reviewCount: number;
  priceRange: string;
  hours: string;
  address: {
    plaza: string;
    road: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  plusCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  mapsUrl: string;
  serviceOptions: string[];
  popularFor: string[];
  offerings: string[];
  crowd: string[];
  payments: string[];
  parking: string[];
  kidsFriendly: boolean;
}

export const CAFE_DATA: CafeInfo = {
  name: "The Warm Mug",
  tagline: "Good Vibes. Great Sips.",
  concept: "Brewing Comfort",
  established: 2024,
  rating: 4.9,
  reviewCount: 13,
  priceRange: "₹200–400 per person",
  hours: "Open 24 Hours",
  address: {
    plaza: "Galaxy Blue Sapphire Plaza",
    road: "Greater Noida W Rd",
    area: "Haibatpur, Sector 4",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    pincode: "201016",
    full: "Galaxy Blue Sapphire Plaza, Greater Noida W Rd, Haibatpur, Sector 4, Ghaziabad, Uttar Pradesh 201016"
  },
  plusCode: "JC4P+X9 Ghaziabad, Uttar Pradesh",
  coordinates: {
    lat: 28.6073771,
    lng: 77.435882
  },
  mapsUrl: "https://www.google.com/maps/place/The+warm+mug/@28.6073818,77.4333133,17z/data=!3m1!4b1!4m6!3m5!1s0x390cef0019ccc1b1:0x2cd39eefb1a48083!8m2!3d28.6073771!4d77.435882!16s%2Fg%2F11zgpzmj1d",
  serviceOptions: ["Kerbside pickup", "Delivery", "Takeaway", "Dine-in"],
  popularFor: ["Solo dining", "Late night coffee", "Casual hangouts"],
  offerings: ["Coffee", "Quick bites", "Small plates", "Layered Matchas", "Artisanal Mocktails"],
  crowd: ["Groups", "Solo visitors", "Couples"],
  payments: ["NFC/mobile payments", "UPI", "Cards", "Cash"],
  parking: ["Free street parking"],
  kidsFriendly: true
};
