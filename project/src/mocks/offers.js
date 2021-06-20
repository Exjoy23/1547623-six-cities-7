const AVATAR_URL = 'https://i.pravatar.cc/128';

const offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description:
      'We are delighted to be launching a brand new boutique restaurant at the hotel which we hope will be a game changer for the area. Our goal was to create a place where people from around the world could come to relax, recharge and eat fantastic food in a friendly and pleasant environment. We believe that this is the perfect place to stay for those who love a night out in the sun and want to catch up with family and friends.',
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Cable TV',
      'Fridge',
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/studio-01.jpg',
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 3.5,
    title: 'Studio at great location',
    type: 'Bungalow',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description:
      'We are proud to share the B&B with our community and are very proud of the result. We will never stop working on our restaurants, our wine list (we also own the wine label in the B&B), and the wine list itself. We are passionate about improving the way locals and guests feel about, and experience, our restaurants.',
    goods: [
      'Wi-Fi',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cable TV',
      'Fridge',
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: false,
      name: 'Rosamund',
    },
    id: 2,
    images: ['img/apartment-01.jpg', 'img/room.jpg', 'img/studio-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 6,
    previewImage: 'img/apartment-02.jpg',
    price: 140,
    rating: 4.5,
    title: 'Beautiful studio at great location',
    type: 'House',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description:
      'We are very proud to be the only hotel in Scotland which is not owned by the Walsh family. We want to be a part of the history of the B&B, and to be able to help the Walsh family preserve it. Most importantly, we want to keep it as it is for as long as the Walsh family has wanted it to be. We have been lucky to have our hotel become a living museum for a town which would otherwise fade into history.',
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cable TV', 'Fridge'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Katrine',
    },
    id: 3,
    images: ['img/room.jpg', 'img/studio-01.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'img/apartment-03.jpg',
    price: 300,
    rating: 3.3,
    title: 'Luxurious studio at great location',
    type: 'Cottage',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description:
      'The B&B is a fully staffed hotel and restaurant. Our team is comprised of highly skilled professionals and we’re passionate about the hospitality industry. We’re a family business so we’re able to accommodate guests in the most economical way, and we’re a bit of a local brand. We’re located in the beautiful and historic town of Dalston, London. A fun and cosy hotel with beautiful gardens, a pool, kids’ playground, free parking, complimentary wifi, a bar, spa, and a full kitchen.',
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cable TV',
      'Fridge',
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: true,
      name: 'Evan',
    },
    id: 4,
    images: [
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/studio-01.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: 'img/room.jpg',
    price: 200,
    rating: 4.9,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 48.8534,
        longitude: 2.3488,
        zoom: 10,
      },
      name: 'Paris',
    },
    description:
      'The B&B is a fully staffed hotel and restaurant. Our team is comprised of highly skilled professionals and we’re passionate about the hospitality industry. We’re a family business so we’re able to accommodate guests in the most economical way, and we’re a bit of a local brand. We’re located in the beautiful and historic town of Dalston, London. A fun and cosy hotel with beautiful gardens, a pool, kids’ playground, free parking, complimentary wifi, a bar, spa, and a full kitchen.',
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cable TV',
      'Fridge',
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 5,
      isPro: true,
      name: 'Evan',
    },
    id: 5,
    images: [
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/studio-01.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 48.8534553943508,
      longitude: 2.348809666406198,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: 'img/room.jpg',
    price: 200,
    rating: 4.9,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 50.9333,
        longitude: 6.95,
        zoom: 10,
      },
      name: 'Cologne',
    },
    description:
      'The B&B is a fully staffed hotel and restaurant. Our team is comprised of highly skilled professionals and we’re passionate about the hospitality industry. We’re a family business so we’re able to accommodate guests in the most economical way, and we’re a bit of a local brand. We’re located in the beautiful and historic town of Dalston, London. A fun and cosy hotel with beautiful gardens, a pool, kids’ playground, free parking, complimentary wifi, a bar, spa, and a full kitchen.',
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cable TV',
      'Fridge',
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 6,
      isPro: true,
      name: 'Evan',
    },
    id: 6,
    images: [
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/studio-01.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 50.9333553943508,
      longitude: 6.959309666406198,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: 'img/room.jpg',
    price: 200,
    rating: 4.9,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
  },
];

export default offers;
