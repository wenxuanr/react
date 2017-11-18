import React, { Component } from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import data from '../../data/latlng';




class MapWithAMarker extends Component {
        render() {
            let listItem = data.map((datas) =>
                <Marker
                    position = {datas}
                />
            );
            let MapWithAMarker = withScriptjs(withGoogleMap(props =>
                <GoogleMap
                    defaultZoom={4}
                    defaultCenter={{ lat: 40.7128, lng: -74.0060 }}
                >
                    {listItem}
                </GoogleMap>
            ));
            return (
                    <div>
                        <MapWithAMarker
                            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
            );
        }
    }
    export default MapWithAMarker;


