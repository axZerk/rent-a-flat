import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker";

const GoogleMap = ({ flats, center, zoom, selectedFlat }) => (
  <div
    style={{
      position: "relative",
      width: "calc(100% - 800px)"
    }}
  >
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyDok-Zg2R9f9H9auvu6ohmKGfOXgmVA7Ac"
      }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      {flats.map(({ id, lat, lng, price }) =>
        selectedFlat && selectedFlat.id === id
          ? <Marker key={id} lat={lat} lng={lng} text={price} selected={true} />
          : <Marker key={id} lat={lat} lng={lng} text={price} selected={false} />
      )}
    </GoogleMapReact>
  </div>
);

GoogleMap.defaultProps = {
  center: { lat: 48.889, lng: 2.357443 },
  zoom: 14
};

export default GoogleMap;
