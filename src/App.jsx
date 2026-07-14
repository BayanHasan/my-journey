import { Routes, Route } from 'react-router-dom'
import Home from './pages/HomesPage'
import Trains from './pages/Trains'
import Hotels from './pages/hotelsPage'
import Flights from "./pages/Flights";
import Cars from "./pages/cars";
import Boats from "./pages/boats";
import Flighthotel from "./pages/flighthotel";
import TravelInspiration from './pages/TravelInspiration'
import TravelApplication from './pages/TravelApplication'
import Login from './pages/Login'
import Register from './pages/Register'
import Booking from './pages/Booking'
import MyBookings from './pages/MyBookings'

export default function App() {
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
<Route path="/app" element={<Travelapplication />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/booking" element={<Booking />} />
<Route path="/my-bookings" element={<MyBookings />} />
    </Routes>
  )
}

