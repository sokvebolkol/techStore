import React from 'react';
import { Container } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

const handleApiLoaded = (map, maps, place) => {
  const marker = new maps.Marker({
    position: {
      lat: place.lat,
      lng: place.lng,
    },
    map,
  });
  return marker;
};

const Map = ({
  address = '26 Old August Site Sothearos Boulevard, Sangkat Tonle Bassac',
  city = 'Phnom Penh',
  country = 'Cambodia',
  latitude = 11.540493,
  longitude = 104.9116763,
}) => {
  const center = {
    lat: latitude,
    lng: longitude,
  };
  return (
    <Container fluid>
      <div className="d-flex flex-column align-items-stretch justify-content-center">
        <div className="border-bottom border-gray-200">
          <h5 className="font-weight-bold">Location</h5>
        </div>
        <p className="my-3">
          {address} {city} {country}
        </p>

        <div className="w-100" style={{ height: '224px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
            defaultCenter={center}
            defaultZoom={14}
            options={{
              fullscreenControl: false,
              zoomControl: false,
            }}
            onGoogleApiLoaded={({ map, maps }) =>
              handleApiLoaded(map, maps, center)
            }
            yesIWantToUseGoogleMapApiInternals
          />
        </div>
      </div>
    </Container>
  );
};

Map.getInitialProps = async () => ({
  namespaceRequired: ['common'],
});

export default Map;
