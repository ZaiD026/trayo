import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import axios from "axios";
import { Icon } from "leaflet";
function CovidMap() {
    const [data, setData] = useState([]);
    const icon = new Icon({
        iconUrl: "https://cdn.iconscout.com/icon/free/png-256/marker-186-418087.png",
        iconSize: [25, 25],
    });
    // API BEING FETCHED USING AXIOS IN AN ASYNC METHOD 
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                "https://disease.sh/v3/covid-19/countries"
            );
            setData(response.data);
        }
        fetchData();
    }, []);
    const [activeMarker, setActiveMarker] = useState(null);
    const position = [20, 77]

    return (

        <MapContainer center={position} zoom={4} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.map((country) => (
                <Marker
                    key={country.country}
                    position={[country.countryInfo.lat, country.countryInfo.long]}
                    icon={icon}
                    eventHandlers={{
                        click: () => setActiveMarker(country), // Set active marker on click
                    }}
                >
                    <Popup>
                        <div>
                            <h3>{country.country}</h3>
                            <p>
                                Active cases: <strong>{country.active}</strong>
                            </p>
                            <p>
                                Recovered: <strong>{country.recovered}</strong>
                            </p>
                            <p>
                                Deaths: <strong>{country.deaths}</strong>
                            </p>
                        </div>
                    </Popup>
                </Marker>
            ))}
            {activeMarker && (
                <Popup
                    position={[
                        activeMarker.countryInfo.lat,
                        activeMarker.countryInfo.long,
                    ]}
                    onClose={() => setActiveMarker(null)}
                >
                    <div>
                        <h3>{activeMarker.country}</h3>
                        <p>
                            Active cases: <strong>{activeMarker.active}</strong>
                        </p>
                        <p>
                            Recovered: <strong>{activeMarker.recovered}</strong>
                        </p>
                        <p>
                            Deaths: <strong>{activeMarker.deaths}</strong>
                        </p>
                    </div>
                </Popup>
            )}
        </MapContainer>
        // </div>
    );
}

export default CovidMap;
