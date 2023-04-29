import { MapContainer, Marker, Popup, TileLayer,  } from 'react-leaflet'
import { icon } from 'leaflet'


import 'leaflet/dist/leaflet.css';

const Map = () => { 

    const ICON = icon({
        iconUrl: "/images/marker.png",
        iconSize: [42, 42],
      })
      
  return (
    <MapContainer center={[51.966890, 21.063699]} zoom={16} scrollWheelZoom={false} style={{height: 400, width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.966890, 21.063699]} icon={ICON}>
        <Popup>
        godziny otwarcia:
        <br/>
        
Poniedziałek - Piątek:  8 - 16.30 <br/>
Sobota: nieczynne
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map