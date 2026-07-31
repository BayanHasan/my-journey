import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomesPage";
import Trains from "./pages/Trains";
import Hotels from "./pages/HotelsPage";
import Flights from "./pages/Flights";
import Cars from "./pages/Cars";
import Boats from "./pages/Boats";
import Flighthotel from "./pages/FlightHotel";
import TravelInspiration from "./pages/TravelInspiration";
import TravelApplication from "./pages/TravelApplication";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";

export default function App() {
  useEffect(() => {
  document.title = "My Journey";

  const iconUrl = `/icon.png?v=${new Date().getTime()}`;

  let appleIcon = document.querySelector("link[rel='apple-touch-icon']");
  if (!appleIcon) {
    appleIcon = document.createElement("link");
    appleIcon.rel = "apple-touch-icon";
    document.head.appendChild(appleIcon);
  }
  appleIcon.href = iconUrl;

  let favicon = document.querySelector("link[rel='icon']");
  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    document.head.appendChild(favicon);
  }
  favicon.href = iconUrl;
}, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trains" element={<Trains />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/boats" element={<Boats />} />
      <Route path="/flight-hotel" element={<Flighthotel />} />
      <Route path="/travel-inspiration" element={<TravelInspiration />} />
      <Route path="/app" element={<TravelApplication />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/my-bookings" element={<MyBookings />} />
    </Routes>
  );
}
