export interface Hotel {
  id: number;
  name: string;
  provider: string;

  address: {
    street: string;
    state: string;
    country: string;
    pincode: string;
    email: string;
    phone: string;
  };

  basicInfo: {
    shortName: string;
    serviceId: number;
    hotelType: string;
    defaultCurrency: string;
    location: string;
  };

  coordinates: {
    latitude: number;
    longitude: number;
  };

  imageUrl: string;

  statistics: {
    lastUsed: string;
    upcomingConfirmed: number;
    upcomingRequest: number;
    nextBookingDate: string;
    openComplaints: number;
    totalComplaints: number;
    amountToBePaid: number;
  };

  bookings: {
    month: string;
    count: number;
  }[];
}