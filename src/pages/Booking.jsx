import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../api/axios";

const HOTEL_IMAGES = [
  "/public/caption.jpg",
  "/public/ykk.jpeg",
  "/public/jdkdll.jpeg",
  "/public/dhddi.jpg",
  "/public/caption.jpg",
  "/public/shrt.jpeg",
];

const SURROUNDINGS = [
  { icon: "🛒", text: "Shopping: SanYa International Duty Free Shopping Complex (1.7 km)" },
  { icon: "🤿", text: "Recreation: Sanya Tedis Diving Center (2.3 km)" },
  { icon: "🏛️", text: "Attraction: Haitang Bay (4.9 km)" },
  { icon: "🛍️", text: "Shopping: Elizabeth Arden (1.7 km)" },
];

const AMENITIES = [
  { icon: "🏊", text: "4 Outdoor swimming pools", tag: "Free" },
  { icon: "🏋️", text: "Gym", tag: "Free" },
  { icon: "🏊", text: "Indoor Pool", tag: "Free" },
  { icon: "🍳", text: "Breakfast", tag: "Included" },
  { icon: "🅿️", text: "Free Parking", tag: "Free" },
  { icon: "📶", text: "Free WiFi", tag: "Free" },
];

export default function Booking() {
  const navigate = useNavigate();
  const location = useLocation();
  const hotel = location.state?.hotel;

  const [form, setForm] = useState({ check_in: "", check_out: "", guests: 2, rooms: 1 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const nights = form.check_in && form.check_out
    ? Math.max(0, Math.ceil((new Date(form.check_out) - new Date(form.check_in)) / (1000 * 60 * 60 * 24)))
    : 1;

  const totalPrice = (hotel?.price || 770) * nights * form.rooms;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) { navigate("/login"); return; }
    setLoading(true);
    setError("");
    try {
      await API.post("/bookings", {
        hotel_id: hotel?.id || 1,
        check_in: form.check_in,
        check_out: form.check_out,
        guests: form.guests,
      });
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || "Booking failed");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-md mx-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-4xl">🎉</span>
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-500 text-sm mb-2">Thank you for booking with My Journey</p>
            <p className="text-gray-400 text-xs mb-8">A confirmation email has been sent to your email address.</p>
            <div className="bg-blue-50 rounded-2xl p-4 mb-6 text-left">
              <div className="text-sm font-bold text-blue-900 mb-2">{hotel?.name}</div>
              <div className="text-xs text-gray-500">{hotel?.city}, {hotel?.country}</div>
              <div className="text-xs text-gray-500 mt-1">Check-in: {form.check_in} → Check-out: {form.check_out}</div>
              <div className="text-blue-700 font-bold mt-2">Total: ${totalPrice}</div>
            </div>
            <button onClick={() => navigate("/")}
              className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold px-8 py-3 rounded-2xl text-sm transition-all">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-screen-lg mx-auto px-6 py-8">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Complete Your Booking</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {/* ROOM CARD */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-4 items-start">
             <img src="/public/shera.jpeg" className="w-40 h-28 object-cover rounded-xl shrink-0" alt={hotel?.name} />
           <div>
                <h4 className="text-lg font-bold text-blue-900 flex items-center gap-2">
                  {hotel?.name || "Sheraton Istanbul"}
                  <span className="text-yellow-400 text-sm">★★★★</span>
                </h4>
                <p className="text-gray-400 text-xs mt-1">📍 {hotel?.city || "Istanbul"}, Türkiye</p>
                <p className="text-blue-900 font-bold text-sm mt-2">🛏️ Ocean View King Room</p>
                <p className="text-blue-900 font-bold text-lg mt-1">${hotel?.price || 770} <span className="text-gray-400 text-sm font-normal">/ night</span></p>
              </div>
            </div>

            {/* IMAGES */}
            <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-2xl overflow-hidden h-72">
              <div className="col-span-2 row-span-2">
                <img src="/sheraton hotel.jpg" className="w-full h-full object-cover" alt="Hotel" />
              </div>
              {HOTEL_IMAGES.slice(1, 5).map((img, i) => (
                <div key={i} className="relative overflow-hidden">
                  <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="" />
                  {i === 3 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white text-xs font-bold bg-black/40 px-2 py-1 rounded-lg">+ see more</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* QUOTE */}
            <div className="flex gap-4 items-center bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="w-1 h-14 bg-blue-700 rounded-full shrink-0"></div>
              <p className="text-gray-600 text-sm italic">
                "The hotel is very unique, the Balinese restaurant is excellent, and the hotel service is great."
              </p>
            </div>

            {/* SURROUNDINGS */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-black text-blue-900 mb-4">Surroundings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {SURROUNDINGS.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-600 p-3 bg-gray-50 rounded-xl">
                    <span className="text-lg shrink-0">{s.icon}</span>
                    <span>{s.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AMENITIES */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-black text-blue-900 mb-4">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {AMENITIES.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 p-3 bg-gray-50 rounded-xl">
                    <span>{a.icon}</span>
                    <div>
                      <div className="text-xs text-gray-600">{a.text}</div>
                      <div className="text-xs text-green-600 font-bold">{a.tag}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - BOOKING FORM */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-black text-blue-900 mb-1">Book Your Stay</h3>
              <p className="text-gray-400 text-xs mb-5">Fill in your details to complete the booking</p>

              {error && <div className="bg-red-50 text-red-600 px-4 py-2 rounded-xl mb-4 text-sm">{error}</div>}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">📅 Check-in Date</label>
                  <input type="date" name="check_in" value={form.check_in} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none text-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                    required />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">📅 Check-out Date</label>
                  <input type="date" name="check_out" value={form.check_out} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none text-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                    required />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">🚪 Rooms</label>
                    <select name="rooms" value={form.rooms} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-3 py-3 outline-none text-sm focus:border-blue-400 transition-all">
                      {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">👥 Guests</label>
                    <select name="guests" value={form.guests} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-3 py-3 outline-none text-sm focus:border-blue-400 transition-all">
                      {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>

                {/* PRICE SUMMARY */}
                <div className="bg-blue-50 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${hotel?.price || 770} × {nights} night{nights > 1 ? 's' : ''}</span>
                    <span>${(hotel?.price || 770) * nights}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{form.rooms} room{form.rooms > 1 ? 's' : ''}</span>
                    <span>×{form.rooms}</span>
                  </div>
                  <div className="border-t border-blue-200 pt-2 flex justify-between font-black text-blue-900">
                    <span>Total</span>
                    <span>${totalPrice}</span>
                  </div>
                </div>

                <button type="submit" disabled={loading}
                  className="w-full bg-blue-800 hover:bg-blue-900 active:scale-95 text-white font-bold py-4 rounded-2xl text-sm transition-all shadow-lg shadow-blue-200">
                  {loading ? "⏳ Processing..." : "✅ Confirm Booking"}
                </button>

                <p className="text-center text-xs text-gray-400">🔒 Secure booking · Free cancellation</p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}