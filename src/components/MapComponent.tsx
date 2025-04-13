import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100vh',
};

const center = {
    lat: 49.8227422,
    lng: 24.0059658,
};

const MapComponent = () => {
    return (
        <LoadScript googleMapsApiKey={"AIzaSyD5UWmgvOa4H3JtLO3k6p_C-FoaIof9CC0"}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;