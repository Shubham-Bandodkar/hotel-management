const fs = require('fs');

const hotels = [];

const providers = [
  'Taj Hotels',
  'ITC Hotels',
  'Marriott Hotels',
  'Hilton Hotels',
  'Hyatt Hotels',
  'The Oberoi Hotels',
  'Radisson Hotels',
  'Novotel Hotels',
  'Leela Hotels',
  'Lemon Tree Hotels'
];

const locations = [
  {
    city: 'Goa',
    state: 'Goa',
    latitude: 15.4562,
    longitude: 73.8108
  },
  {
    city: 'Bangalore',
    state: 'Karnataka',
    latitude: 12.9716,
    longitude: 77.5946
  },
  {
    city: 'Mumbai',
    state: 'Maharashtra',
    latitude: 19.0760,
    longitude: 72.8777
  },
  {
    city: 'Delhi',
    state: 'Delhi',
    latitude: 28.6139,
    longitude: 77.2090
  },
  {
    city: 'Hyderabad',
    state: 'Telangana',
    latitude: 17.3850,
    longitude: 78.4867
  },
  {
    city: 'Chennai',
    state: 'Tamil Nadu',
    latitude: 13.0827,
    longitude: 80.2707
  },
  {
    city: 'Pune',
    state: 'Maharashtra',
    latitude: 18.5204,
    longitude: 73.8567
  },
  {
    city: 'Kolkata',
    state: 'West Bengal',
    latitude: 22.5726,
    longitude: 88.3639
  }
];

const prefixes = [
  'Grand',
  'Royal',
  'Luxury',
  'Premium',
  'Central',
  'Park',
  'Imperial',
  'Regency',
  'Heritage',
  'Golden'
];

function generateBookings(index) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  return months.map((month, monthIndex) => ({
    month,
    count: 30 + ((index * 7 + monthIndex * 11) % 71)
  }));
}

for (let i = 1; i <= 200; i++) {

  const location =
    locations[(i - 1) % locations.length];

  const provider =
    providers[(i - 1) % providers.length];

  const prefix =
    prefixes[(i - 1) % prefixes.length];

  hotels.push({
    id: i,

    name: `${prefix} ${provider.replace(' Hotels', '')} ${location.city} ${i}`,

    provider,

    address: {
      street: `${i}, Main Road`,
      state: location.state,
      country: 'India',
      pincode: String(400000 + i),
      email: `hotel${i}@example.com`,
      phone: `+91 90000${String(i).padStart(5, '0')}`
    },

    basicInfo: {
      shortName: `HTL${i}`,
      serviceId: 1000 + i,
      hotelType: 'Accommodation',
      defaultCurrency: 'INR',
      location: location.city
    },

    coordinates: {
      latitude: location.latitude,
      longitude: location.longitude
    },

    imageUrl: 'assets/images/hotel-placeholder.jpg',

    statistics: {
      lastUsed: `2026-08-${String((i % 28) + 1).padStart(2, '0')}`,
      upcomingConfirmed: (i * 3) % 25,
      upcomingRequest: (i * 2) % 10,
      nextBookingDate: `2026-09-${String((i % 28) + 1).padStart(2, '0')}`,
      openComplaints: i % 5,
      totalComplaints: (i % 5) + 5,
      amountToBePaid: 10000 + (i * 500)
    },

    bookings: generateBookings(i)
  });
}

fs.writeFileSync(
  'public/assets/mock/hotels.json',
  JSON.stringify(hotels, null, 2)
);

console.log(`Successfully generated ${hotels.length} hotels.`);