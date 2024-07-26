import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { FC, ReactNode } from "react";
interface MapContainerProps {
  children: ReactNode;
}
const MapContainer: FC<MapContainerProps> = ({ children }) => {
  return (
    <>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_KEY}>
        <div style={{ height: "100vh", width: "100%" }}>
          {/* TODO:지도 드래그해서 이동할 수 있도록 만들기 */}
          <Map
            mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
            defaultZoom={10}
            defaultCenter={{ lat: 35.6797786, lng: 139.7642446 }}
            disableDefaultUI
          >
            {children}
          </Map>
        </div>
      </APIProvider>
    </>
  );
};

export default MapContainer;
