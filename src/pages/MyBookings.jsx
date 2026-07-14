import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../api/axios";

export default function MyBookings() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchBookings = async () => {
      try {
        const res = await API.get("/bookings/my-bookings");
        setBookings(res.data);
          } catch {
          setError("Failed to load bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
}, [navigate]);

  const getStatus = (status) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-700",
      confirmed: "bg-green-100 text-green-700",
      cancelled: "bg-red-100 text-red-700",
    };
    return styles[status] || styles.pending;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-screen-lg mx-auto px-6 py-8">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-blue-900">My Bookings</h1>
            <p className="text-gray-400 text-sm mt-1">Manage your travel reservations</p>
          </div>
          <button onClick={() => navigate("/")}
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all">
            + New Booking
          </button>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-blue-700 text-lg font-bold animate-pulse">Loading your bookings...</div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 px-6 py-4 rounded-2xl text-sm">{error}</div>
        )}

        {!loading && bookings.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🧳</div>
            <h3 className="text-xl font-black text-gray-700 mb-2">No bookings yet</h3>
            <p className="text-gray-400 text-sm mb-6">Start planning your next adventure!</p>
            <button onClick={() => navigate("/")}
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold px-8 py-3 rounded-2xl text-sm transition-all">
              Explore Hotels
            </button>
          </div>
        )}

        {!loading && bookings.length > 0 && (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col md:flex-row gap-4 items-start">
                
                {/* Image */}
                <div className="w-full md:w-40 h-32 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={booking.image_url || "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80"}
                    className="w-full h-full object-cover"
                    alt={booking.hotel_name}
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="font-black text-blue-900 text-lg">{booking.hotel_name}</h3>
                      <p className="text-gray-400 text-xs mt-0.5">📍 {booking.city}</p>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${getStatus(booking.status)}`}>
                      {booking.status?.charAt(0).toUpperCase() + booking.status?.slice(1)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-xs text-gray-400">Check-in</div>
                      <div className="text-sm font-bold text-gray-700 mt-0.5">
                        {new Date(booking.check_in).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-xs text-gray-400">Check-out</div>
                      <div className="text-sm font-bold text-gray-700 mt-0.5">
                        {new Date(booking.check_out).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-xs text-gray-400">Guests</div>
                      <div className="text-sm font-bold text-gray-700 mt-0.5">👥 {booking.guests} guests</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-3">
                      <div className="text-xs text-blue-400">Total Price</div>
                      <div className="text-sm font-black text-blue-700 mt-0.5">${booking.total_price}</div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}