import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import { mapConfig } from "variables/MapsConfig.jsx";

const CustomMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={mapConfig.defaultZoom}
      defaultCenter={{ lat: mapConfig.mapLat, lng: mapConfig.mapLon }}
      defaultOptions={mapConfig.defaultOptions}
    >
      <Marker position={{ lat: mapConfig.markerLat, lng: mapConfig.markerLon }} />
    </GoogleMap>
  ))
);

export class GoogleMaps extends Component {
  render() {
    return (
      <CustomMap
        googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + mapConfig.apiKey}
        loadingElement={<div style={{ height: `80%` }} />}
        containerElement={<div style={{ height: `80vh` }} />}
        mapElement={<div style={{ height: `80%` }} />}
      />
    );
  }
}

export default GoogleMaps;