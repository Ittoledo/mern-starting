import React from "react";

import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const DUMMY_PLACES=[
    {
        id:'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://www.esbnyc.com/sites/default/files/styles/small_feature/public/2019-10/home_banner-min.jpg?itok=uZt-03Vw',
        address: '20 W 34th St., New York, NY 10001, Estados Unidos',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    },
    {
        id:'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://www.esbnyc.com/sites/default/files/styles/small_feature/public/2019-10/home_banner-min.jpg?itok=uZt-03Vw',
        address: '20 W 34th St., New York, NY 10001, Estados Unidos',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

    return (
        <PlaceList items={loadedPlaces} />
    );
};

export default UserPlaces;