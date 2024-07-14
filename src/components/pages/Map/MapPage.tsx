import MapContainer from "@/components/ui/Map/MapContainer";
import { Marker } from "@vis.gl/react-google-maps";
import React, { FC } from "react";

const MapPage: FC = () => {
  return (
    <MapContainer>
      <Marker position={{ lat: 35.6797786, lng: 139.7642446 }} />
    </MapContainer>
  );
};

export default MapPage;
