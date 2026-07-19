import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Hotel & Homes");
  const navigate = useNavigate();
const ATTRACTIONS = [
  { id: 1, name: "The Manila Cathedral", city: "Manila", country: "Philippines", price: 50, rating: "9.0", reviews: "775 reviews", image_url: "https://images.unsplash.com/photo-1555921015-5532091f6026?w=400&q=80" },
  { id: 2, name: "Manila Ocean Park", city: "Manila", country: "Philippines", price: 75, rating: "9.0", reviews: "775 reviews", image_url: "/Manila Ocean Park.jpg" },
  { id: 3, name: "Fort Santiago", city: "Manila", country: "Philippines", price: 30, rating: "9.0", reviews: "775 reviews", image_url: "/Fort Santiagoo.jpeg" },
];

 return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="flex max-w-screen-2xl mx-auto items-start">

  {/* SIDEBAR */}
<aside className="hidden lg:flex flex-col w-52 shrink-0 py-6 px-3 gap-6 sticky top-20 self-start rounded-r-2xl border-r h-screen overflow-y-auto">    <a
      href="http://localhost:5173/hotels"
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all"
    >
       Hotel & Homes
    </a>

    <a
      href="http://localhost:5173/trains"
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all"
    >
       Trains
    </a>

    <a
      href="http://localhost:5173/flights"
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all"
    >
       Flights
    </a>

    <div className="border-t border-gray-300"></div>

    <a
      href="http://localhost:5173/cars"
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all"
    >
       Cars
    </a>

    <a
      href="http://localhost:5173/boats"
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all"
    >
       Boats
    </a>

    <a
      href="http://localhost:5173/flight-hotel"
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all"
    >
       Flight + Hotel
    </a>

    <div className="border-t border-gray-300"></div>

    <a
      href="http://localhost:5173/travel-inspiration"
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all"
    >
       Travel Inspiration
    </a>

    <a
      href="http://localhost:5173/app"
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all"
    >
       App
    </a>

  </aside>


        {/* MAIN CONTENT */}
        <main className="flex-1">

          {/* HERO */}
          <section
            className="relative min-h-[420px] flex flex-col items-center justify-center text-white text-center px-4 py-16 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #0a1628 0%, #0d2545 40%, #1a4a7a 70%, #0d2545 100%)",
            }}
          >

            {/* Background Image */}
            <div
              className="absolute inset-0 opacity-20 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80')",
              }}
            />

            {/* Content */}
            <div className="relative z-10 mb-8">

              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-3 drop-shadow-lg">
                TRAVEL WITH MY JOURNEY
              </h1>

              <p className="text-blue-200 text-sm">
                Discover the world's most amazing destinations
              </p>

            </div>

            {/* Search Box */}
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-5 w-full max-w-3xl">

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-4 justify-center">

                {[
                  "Hotel & Homes",
                  "Flights",
                  "Cars",
                  "Trains",
                  "Flight + Hotel",
                ].map((tab) => (

                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      activeTab === tab
                        ? "bg-blue-700 text-white"
                        : "bg-white border border-gray-200 text-gray-600"
                    }`}
                  >
                    {tab}
                  </button>

                ))}

              </div>

              {/* Fields */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">

                <div className="col-span-2 md:col-span-1 border border-gray-200 rounded-xl px-3 py-2.5">
                  <div className="text-xs text-black font-medium">
                    Destination
                  </div>

                  <input
                    className="w-full text-sm outline-none text-gray-700 mt-0.5"
                    placeholder="City, Airport, Region"
                  />
                </div>

                <div className="border border-gray-200 rounded-xl px-3 py-2.5">
                  <div className="text-xs text-black font-medium">
                    Check-in
                  </div>

                  <input
                    className="w-full text-sm outline-none text-gray-700 mt-0.5"
                    defaultValue="Thu, Jul 24"
                  />
                </div>

                <div className="border border-gray-200 rounded-xl px-3 py-2.5">
                  <div className="text-xs text-black font-medium">
                    Check-out
                  </div>

                  <input
                    className="w-full text-sm outline-none text-gray-700 mt-0.5"
                    defaultValue="Fri, Jul 25"
                  />
                </div>

                <div className="border border-gray-200 rounded-xl px-3 py-2.5 cursor-pointer hover:border-blue-400 transition-colors">
                  <div className="text-xs text-black font-medium">
                    Rooms & Guests
                  </div>

                  <div className="text-sm text-gray-700 mt-0.5">
                    1 room, 2 adults
                  </div>
                </div>

              </div>

              {/* Search Button */}
              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-xl transition-all text-sm tracking-wide">
                🔍 Search Now
              </button>

            </div>
          </section>

          {/* EXPLORE BANNERS */}
          <section class="px-6 py-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-blue-900 text-white rounded-2xl p-6 flex flex-col justify-between min-h-36 relative overflow-hidden card-hover cursor-pointer">
          <div class="absolute right-0 top-0 w-32 h-32 rounded-full bg-blue-700 opacity-40 -mr-8 -mt-8"></div>
          <div>
            <div class="text-xl font-black">EXPLORE THE WORLD</div>
            <p class="text-blue-200 text-xs mt-2">We're giving $50 discount if you book before Jul 25</p>
          </div>
          <button class="mt-4 bg-white text-blue-900 text-xs font-bold px-5 py-2 rounded-full self-start hover:bg-blue-50 transition-colors">Book Now →</button>
        </div>
        <div class="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 flex flex-col justify-between min-h-36 relative overflow-hidden card-hover cursor-pointer">
          <div class="absolute right-4 top-4 bg-white/20 text-white text-xs px-3 py-1 rounded-full font-semibold">TOURISM DAY</div>
          <div class="mt-6">
            <div class="text-xl font-black">Special offers for tourism day</div>
          </div>
          <button class="mt-4 bg-white text-orange-600 text-xs font-bold px-5 py-2 rounded-full self-start hover:bg-orange-50 transition-colors">Explore →</button>
        </div>
        <div class="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-6 flex flex-col justify-between min-h-36 relative overflow-hidden card-hover cursor-pointer">
          <div class="text-yellow-300 text-xs font-bold tracking-widest uppercase">⭐ Special Sale</div>
          <div class="text-xl font-black mt-2">Flight & Hotel packages up to 30% off</div>
          <button class="mt-4 bg-yellow-400 text-blue-900 text-xs font-bold px-5 py-2 rounded-full self-start hover:bg-yellow-300 transition-colors">Get Deal →</button>
        </div>
      </div>
    </section>

          {/* BUNDLE & SAVE */}
          <section className="px-6 py-2 pb-6">

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6">

              <div className="flex flex-col lg:flex-row gap-6 items-start">

                {/* Left Side */}
                <div className="flex-1">

                  <span className="inline-block bg-blue-700 text-white text-xs px-3 py-1.5 rounded-full font-bold mb-3">
                    Bundle & Save
                  </span>

                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                    Save when you bundle your flight and hotel.
                  </p>

                  <button className="mt-5 bg-red-500 text-white font-bold px-8 py-2.5 rounded-full text-sm">
                    🎫 Claim All
                  </button>

                </div>

                {/* Promo Codes */}
                <div className="flex gap-3 flex-wrap">

                  <div className="bg-white rounded-2xl shadow-md p-4 text-center min-w-40">
                    <div className="text-2xl mb-1">✈️</div>

                    <div className="text-blue-700 font-bold text-sm">
                      Flight Promo Code
                    </div>

                    <div className="mt-2 bg-blue-50 text-blue-800 text-xs px-3 py-1.5 rounded-lg font-bold">
                      FLY100
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-md p-4 text-center min-w-40">

                    <div className="text-2xl mb-1">🏨</div>

                    <div className="text-red-600 font-bold text-sm">
                      Hotel Promo Code
                    </div>

                    <div className="mt-2 bg-red-50 text-red-800 text-xs px-3 py-1.5 rounded-lg font-bold">
                      HTL10
                    </div>

                  </div>

                </div>

                {/* Destination Cards */}
                <div className="flex gap-3 flex-wrap">

                  <div className="bg-white rounded-2xl shadow-md overflow-hidden w-40">

                    <img
                      src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=300&q=80"
                      className="w-full h-20 object-cover"
                      alt="Canada"
                    />

                    <div className="p-2.5">

                      <div className="text-xs font-bold text-gray-800">
                        Ontario Hotel Plaza
                      </div>

                      <div className="mt-2 text-red-500 font-bold text-sm">
                        450 $
                      </div>

                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-md overflow-hidden w-40">

                    <img
                      src="/Stockholm Hotel Plaza.jpeg"
                      className="w-full h-20 object-cover"
                      alt="Sweden"
                    />

                    <div className="p-2.5">

                      <div className="text-xs font-bold text-gray-800">
                        Stockholm Hotel Plaza
                      </div>

                      <div className="mt-2 text-red-500 font-bold text-sm">
                        859 $
                      </div>

                    </div>
                  </div>

                </div>

              </div>

            </div>

          </section>

    
{/* ── FEATURED PROPERTIES ── */}
<section className="px-6 py-6 bg-white">

  <div className="flex items-center justify-between mb-2">
    <h2 className="text-2xl font-black text-gray-900">
      Featured Properties
    </h2>

    <a
      href="#"
      className="text-blue-600 text-sm font-semibold hover:underline"
    >
      See all →
    </a>
  </div>

  <div className="flex gap-4 text-xs text-gray-500 mb-5 flex-wrap">
    <span>✅ We Price Match</span>
    <span>✅ Hotel Booking Guarantee</span>
    <span>✅ Hotel Stay Guarantee</span>
  </div>

  {/* City Tabs */}
  <div className="flex flex-wrap gap-2 mb-5">

    <button className="bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
      Istanbul
    </button>

    <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
      Dubai
    </button>

    <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
      Jeddah
    </button>

    <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
      Phuket
    </button>

    <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
      Milan
    </button>

    <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
      Toronto
    </button>

    <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
      Muscat
    </button>

  </div>

  {/* Hotels Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

    {/* Card 1 */}
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden cursor-pointer group">

      <div className="relative h-40 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80"
          alt="Hotel"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
          10% off
        </span>
      </div>

      <div className="p-3">
        <div className="font-semibold text-gray-800 text-sm">
          Sheraton Istanbul Atakoy Hotel
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">
            9.0⭐
          </span>

          <span className="text-xs text-gray-400">
            775 reviews
          </span>
        </div>

        <div className="mt-2 text-red-500 font-bold text-sm">
          From 770 $<span className="text-gray-400 text-xs font-normal"></span>
        </div>
       <button 
  onClick={() => navigate("/booking", { 
    state: { 
      hotel: {
        id: 1,
        name: "Sheraton Istanbul",
        city: "Istanbul",
        country: "Turkey",
        price: 770,
        image_url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80"
      } 
    } 
  })}
  className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all"
>
  Book Now
</button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden cursor-pointer group">

      <div className="relative h-40 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&q=80"
          alt="Hotel"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
          10% off
        </span>
      </div>

      <div className="p-3">
        <div className="font-semibold text-gray-800 text-sm">
          Weingart Istanbul Hotel
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">
            9.0⭐
          </span>

          <span className="text-xs text-gray-400">
            775 reviews
          </span>
        </div>

        <div className="mt-2 text-red-500 font-bold text-sm">
          From 455 $<span className="text-gray-400 text-xs font-normal"></span>
        </div>
         <button 
  onClick={() => navigate("/booking", { 
    state: { 
      hotel: {
        id: 1,
        name: "Weingart Istanbul Hotel",
        city: "Istanbul",
        country: "Turkey",
        price: 455,
        image_url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&q=80"
      } 
    } 
  })}
  className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all"
>
  Book Now
</button>
    </div>
</div>

    {/* Card 3 */}
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden cursor-pointer group">

      <div className="relative h-40 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80"
          alt="Hotel"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
          10% off
        </span>
      </div>

      <div className="p-3">
        <div className="font-semibold text-gray-800 text-sm">
          Taxim Express Bosphorus
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">
            9.0⭐
          </span>

          <span className="text-xs text-gray-400">
            775 reviews
          </span>
        </div>

        <div className="mt-2 text-red-500 font-bold text-sm">
          From 760 $<span className="text-gray-400 text-xs font-normal"></span>
        </div>
         <button 
  onClick={() => navigate("/booking", { 
    state: { 
      hotel: {
        id: 4,
        name: "Taxim Express Bosphorus",
        city: "Istanbul",
        country: "Turkey",
        price: 760,
        image_url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80"
      } 
    } 
  })}
  className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all"
>
  Book Now
</button>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden cursor-pointer group">

      <div className="relative h-40 overflow-hidden">
        <img
          src="/grand royal.jpeg"
          alt="Hotel"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
          10% off
        </span>
      </div>

      <div className="p-3">
        <div className="font-semibold text-gray-800 text-sm">
          Grand Royal Hotel
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">
            9.2⭐
          </span>

          <span className="text-xs text-gray-400">
            540 reviews
          </span>
        </div>

        <div className="mt-2 text-red-500 font-bold text-sm">
          From 620 $<span className="text-gray-400 text-xs font-normal"></span>
        </div>
            <button 
  onClick={() => navigate("/booking", { 
    state: { 
      hotel: {
        id: 4,
        name: "Grand Royal Hotel",
        city: "Istanbul",
        country: "Turkey",
        price: 620,
        image_url: "/grand royal.jpeg"
      } 
    } 
  })}
  className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all"
>
  Book Now
</button>
      </div>
    </div>

  </div>
</section>

{/* ── POPULAR ATTRACTIONS ── */}
<section className="px-6 py-6">
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-2xl font-black text-gray-900">Popular Attractions</h2>
    <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">See all →</a>
  </div>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {ATTRACTIONS.map((attraction) => (
      <div key={attraction.id} className="bg-gray-50 rounded-2xl overflow-hidden shadow cursor-pointer group">
        <div className="h-40 overflow-hidden">
          <img src={attraction.image_url} alt={attraction.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-3">
          <div className="font-semibold text-gray-800 text-sm">{attraction.name}</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">{attraction.rating}⭐</span>
            <span className="text-xs text-gray-400">{attraction.reviews}</span>
          </div>
          <button
            onClick={() => navigate("/booking", { state: { hotel: attraction } })}
            className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all text-sm">
            Book Now
          </button>
        </div>
      </div>
    ))}
    <div className="bg-blue-700 rounded-2xl flex flex-col items-center justify-center text-white p-6 cursor-pointer hover:bg-blue-800 transition-colors">
      <div className="text-4xl mb-3">🗺️</div>
      <div className="font-bold text-base text-center">Explore more popular destinations</div>
      <button className="mt-5 bg-white text-blue-700 font-bold px-6 py-2 rounded-full text-sm">Go Now</button>
    </div>
  </div>
</section>
{/* ── TRAIN TRAVEL ── */}
<section className="px-6 py-6">

  <div className="flex items-center justify-between mb-2">
    <h2 className="text-2xl font-black text-gray-900">
      Plan Your Train Travel
    </h2>

    <a
      href="#"
      className="text-blue-600 text-sm font-semibold hover:underline"
    >
      See all →
    </a>
  </div>

  <div className="flex gap-4 text-xs text-gray-500 mb-5 flex-wrap">
    <span>🚂 Official Partner of Global Rail Operators</span>
    <span>💰 Cheap Trains in Europe and Asia</span>
    <span>💱 Multiple Currencies Accepted</span>
  </div>

  {/* Tabs */}
  <div className="flex flex-wrap gap-2 mb-5">

    <button className="bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
      UK Trains
    </button>

    <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
      Spain Trains
    </button>

    <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
      Italy Trains
    </button>

    <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
      China Trains
    </button>

    <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
      Germany Trains
    </button>

    <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
      France Trains
    </button>

  </div>

  {/* Grid */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

    {/* Main Banner */}
    <div className="bg-blue-700 rounded-2xl flex flex-col justify-end text-white p-5 min-h-48 relative overflow-hidden cursor-pointer">

      <div
        className="absolute inset-0 opacity-70 bg-cover bg-center"
        style={{
          backgroundImage: "url('download (3).jpeg')",
        }}
      />

      <div className="relative z-10">
        <div className="font-bold text-base">
          Cheap train tickets across the world
        </div>

        <button className="mt-3 bg-white text-black font-bold px-5 py-2 rounded-full text-sm hover:bg-green-50 transition-colors">
          Go Now
        </button>
      </div>
    </div>

    {/* Card 1 */}
    <div className="bg-white rounded-2xl shadow overflow-hidden cursor-pointer group">

      <div className="h-32 overflow-hidden">
        <img
          src="/download (1).jpeg"
          alt="Train"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-3">
        
        <div className="font-semibold text-gray-800 text-sm">
          London – Edinburgh
        </div>

        <p className="text-xs text-gray-400 mt-1 line-clamp-2">
          Book cheap train tickets across the UK with easy booking and flexible fares.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow overflow-hidden cursor-pointer group">

      <div className="h-32 overflow-hidden">
        <img
          src="/download (2).jpeg"
          alt="Train"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-3">
        <div className="font-semibold text-gray-800 text-sm">
          Manchester – Edinburgh
        </div>

        <p className="text-xs text-gray-400 mt-1 line-clamp-2">
          Fast intercity connections with affordable advance tickets available daily.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-2xl shadow overflow-hidden cursor-pointer group">

      <div className="h-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80"
          alt="Train"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-3">
        <div className="font-semibold text-gray-800 text-sm">
          London – Birmingham
        </div>

        <p className="text-xs text-gray-400 mt-1 line-clamp-2">
          Regular departures every hour with first class and standard options.
        </p>
      </div>
    </div>

  </div>
</section>

{/* ── CAR RENTALS ── */}
<section className="px-6 py-6 bg-white">

  <div className="flex items-center justify-between mb-2">

    <h2 className="text-2xl font-black text-gray-900">
      Recommended Car Rentals
    </h2>

    <a
      href="#"
      className="text-blue-600 text-sm font-semibold hover:underline"
    >
      See all →
    </a>
  </div>

  <div className="flex gap-4 text-xs text-gray-500 mb-5 flex-wrap">
    <span>✅ Free Cancellations</span>
    <span>🔧 Reliable Support</span>
    <span>💳 No Credit Card Fees</span>
  </div>

  {/* Tabs */}
  <div className="flex flex-wrap gap-2 mb-5">

    <button className="bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
      Los Angeles
    </button>

    <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
      Orlando
    </button>

    <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
      Bangkok
    </button>

    <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
      London
    </button>

    <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
      San Francisco
    </button>

    <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
      Auckland
    </button>

  </div>

  {/* Cars Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

    {/* Car 1 */}
    <div className="bg-gray-50 rounded-2xl shadow overflow-hidden cursor-pointer group">

      <div className="h-40 overflow-hidden">
        <img
          src="range.jpg"
          alt="Car"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-3">
        <div className="font-semibold text-gray-800 text-sm">
          Range Rover Evoque
        </div>

        <div className="flex items-center gap-2 mt-1">
          <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">
            9.0⭐
          </span>

          <span className="text-xs text-gray-400">
            775 reviews
          </span>
        </div>

        <div className="mt-2 text-red-500 font-bold text-sm">
        From 7.41 $
        </div>
         <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
  Book Now
</button>
      </div>
    </div>

    {/* Car 2 */}
    <div className="bg-gray-50 rounded-2xl shadow overflow-hidden cursor-pointer group">

      <div className="h-40 overflow-hidden">
        <img
          src="best-electric-vehicle-of-2022-tesla-model-y-v0--VcpnkNvWGexNwWUNGf8tW2IWOxYHsZ68KqEEw9xVSc.webp"
          alt="Tesla"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-3">
        <div className="font-semibold text-gray-800 text-sm">
          Tesla New & Used Electric Cars
        </div>

        <div className="flex items-center gap-2 mt-1">
          <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">
            9.0⭐
          </span>

          <span className="text-xs text-gray-400">
            775 reviews
          </span>
        </div>

        <div className="mt-2 text-red-500 font-bold text-sm">
         From 7.41 $
        </div>
         <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
  Book Now
</button>
      </div>
    </div>

    {/* Car 3 */}
    <div className="bg-gray-50 rounded-2xl shadow overflow-hidden cursor-pointer group">

      <div className="h-40 overflow-hidden">
        <img
          src="toyota.avif"
          alt="Toyota"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-3">
        <div className="font-semibold text-gray-800 text-sm">
          Toyota Land Cruiser
        </div>

        <div className="flex items-center gap-2 mt-1">
          <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">
            9.0⭐
          </span>

          <span className="text-xs text-gray-400">
            775 reviews
          </span>
        </div>

        <div className="mt-2 text-red-500 font-bold text-sm">
         From 7.41 $
        </div>
         <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
  Book Now
</button>
      </div>
    </div>

    {/* Promo Card */}
    <div className="bg-blue-900 rounded-2xl flex flex-col items-center justify-center text-white p-6 cursor-pointer hover:bg-blue-800 transition-colors">

      <div className="text-4xl mb-3">
        
      </div>

      <div className="font-bold text-lg text-center">
        Big Brands, Big Discounts!
      </div>

      <button className="mt-5 bg-white text-blue-900 font-bold px-6 py-2 rounded-full text-sm hover:bg-blue-50 transition-colors">
        Go Now
      </button>

    </div>

  </div>
</section>

{/* ── APP BANNER ── */}
<section className="bg-blue-900 text-white px-6 py-14 text-center relative overflow-hidden">

  {/* Background Effects */}
  <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-700 opacity-30 -ml-20 -mt-20 blur-3xl"></div>

  <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>

  <div className="relative z-10">

    <h2 className="text-3xl font-black mb-3">
      Your all-in-one travel app
    </h2>

    {/* Tags */}
    <div className="flex justify-center gap-4 mt-3 mb-8 flex-wrap">

      <span className="bg-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">
        App-only Deals
      </span>

      <span className="bg-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">
        Easy Trip Planning
      </span>
    </div>

    {/* Stats */}
    <div className="flex justify-center gap-16 mb-10 flex-wrap">

      <div>
        <div className="text-5xl font-black">2M+</div>
        <div className="text-blue-200 text-sm mt-1">
          Daily Users
        </div>
      </div>

      <div>
        <div className="text-5xl font-black">200k+</div>
        <div className="text-blue-200 text-sm mt-1">
          Daily Downloads
        </div>
      </div>

      <div>
        <div className="text-5xl font-black">9.4</div>
        <div className="text-blue-200 text-sm mt-1">
          Rating
        </div>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-center gap-4 flex-wrap">

      <button className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-2xl font-semibold text-sm transition-all flex items-center gap-2 shadow-xl">
         App Store
      </button>

      <button className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-2xl font-semibold text-sm transition-all flex items-center gap-2 shadow-xl">
        Google Play
      </button>

    </div>
  </div>
</section>

{/* ── FOOTER ── */}
<footer className="bg-white text-gray-800 px-6 py-12">

  <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">

    {/* Contact */}
    <div>
      <div className="font-bold mb-4 text-black text-sm uppercase tracking-wider">
        Contact Us
      </div>

      <ul className="text-sm text-gray-600 space-y-2.5">

        <li>
          <a href="#" className="hover:text-blue-700 transition-colors">
            Customer Support
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-blue-700 transition-colors">
            Service guarantee
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-blue-700 transition-colors">
            More Service Info
          </a>
        </li>

      </ul>
    </div>

    {/* About */}
    <div>
      <div className="font-bold mb-4 text-black text-sm uppercase tracking-wider">
        About
      </div>

      <ul className="text-sm text-gray-600 space-y-2.5">

        <li>
          <a href="#" className="hover:text-blue-700 transition-colors">
            About My Journey
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-blue-700 transition-colors">
            News
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-blue-700 transition-colors">
            Careers
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-blue-700 transition-colors">
            Terms & Conditions
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-blue-700 transition-colors">
            Privacy Statement
          </a>
        </li>

      </ul>
    </div>

    {/* Services */}
    <div>
      <div className="font-bold mb-4 text-black text-sm uppercase tracking-wider">
        Other Services
      </div>

      <ul className="text-sm text-gray-600 space-y-2.5">

        <li>
          <a href="#" className="hover:text-blue-700 transition-colors">
            Investor Relations
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-blue-700 transition-colors">
            My Journey.com
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-blue-700 transition-colors">
            All Hotels
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-blue-700 transition-colors">
            Security
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-blue-700 transition-colors">
            List Your Property
          </a>
        </li>

      </ul>
    </div>

    {/* Payments */}
    <div>

      <div className="font-bold mb-4 text-black text-sm uppercase tracking-wider">
        Payment Methods
      </div>

      <div className="flex flex-wrap gap-2">

        <span className="bg-gray-100 text-black text-xs px-2.5 py-1 rounded-lg font-bold">
          VISA
        </span>

        <span className="bg-gray-100 text-black text-xs px-2.5 py-1 rounded-lg font-bold">
          MC
        </span>

        <span className="bg-gray-100 text-black text-xs px-2.5 py-1 rounded-lg font-bold">
          PayPal
        </span>

        <span className="bg-gray-100 text-black text-xs px-2.5 py-1 rounded-lg font-bold">
          JCB
        </span>

        <span className="bg-gray-100 text-black text-xs px-2.5 py-1 rounded-lg font-bold">
          AMEX
        </span>

        <span className="bg-gray-100 text-black text-xs px-2.5 py-1 rounded-lg font-bold">
          Affirm
        </span>

      </div>

      {/* Social */}
      <div className="mt-6 flex gap-3">

        <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors text-lg">
          𝕏
        </a>

        <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors text-lg">
          f
        </a>

        <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors text-lg">
          ▶
        </a>

      </div>
    </div>
  </div>

{/* Bottom */}
        <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-xs">
          Copyright © 2026 My Journey.com. All rights reserved.
        </div>
      </footer>

    </main>
    </div>
  </div>
 );
}