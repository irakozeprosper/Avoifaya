import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const Mapping = () => {
    const [search, setSearch] = useState("");
    const [devices, setDevices] = useState([
        { id: 1, name: "Device A", lat: -1.9501, lng: 30.0588, status: "safe" },
        { id: 2, name: "Device B", lat: -1.9536, lng: 30.0675, status: "danger" },
        { id: 3, name: "Device C", lat: -1.9456, lng: 30.0617, status: "safe" },
    ]);

    const fireIcon = new L.DivIcon({
        html: "🔥",
        className: "text-3xl",
        iconSize: [24, 24],
    });

    const defaultIcon = new L.Icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

    // Filter devices based on search input
    const filteredDevices = devices.filter((device) => device.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="container mx-auto px-6">
            {/* Title and Search Bar */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold dark:text-white">Devices Location Map</h1>
                <input
                    type="text"
                    placeholder="Search device..."
                    className="p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Map Section */}
            <MapContainer
                center={[-1.9501, 30.0588]}
                zoom={13}
                className="h-[75vh] w-full rounded-lg"
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {filteredDevices.map((device) => (
                    <Marker
                        key={device.id}
                        position={[device.lat, device.lng]}
                        icon={device.status === "danger" ? fireIcon : defaultIcon}
                    >
                        <Popup>
                            <div>
                                <h2 className="font-bold dark:text-white">{device.name}</h2>
                                <p>
                                    Status: <span className={device.status === "danger" ? "text-red-500" : "text-green-500"}>{device.status}</span>
                                </p>
                                <p>
                                    Location: {device.lat}, {device.lng}
                                </p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Mapping;
