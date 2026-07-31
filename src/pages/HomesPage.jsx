import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const FAQS = [
  {
    q: "How do I make a reservation?",
    a: "Select your destination, dates, and preferred options, then click Search and follow the instructions to complete your booking.",
  },
  {
    q: "Can I cancel or modify my booking?",
    a: "Cancellation policies vary by provider. Check your booking confirmation email for specific rules.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept Visa, Mastercard, PayPal, JCB, AMEX, and Affirm.",
  },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-blue-800 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 text-left font-semibold text-white hover:bg-blue-800/50 transition-colors"
      >
        <span>{q}</span>
        <span className="text-xl font-bold">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-4 pt-0 text-sm text-blue-100 bg-blue-950/40">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("Hotel & Homes");
  const navigate = useNavigate();

  const ATTRACTIONS = [
    {
      id: 1,
      name: "The Manila Cathedral",
      city: "Manila",
      country: "Philippines",
      price: 50,
      rating: "9.0",
      reviews: "775 reviews",
      image_url:
        "https://images.unsplash.com/photo-1638751260202-2e0e7839a9e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFRoZSUyME1hbmlsYSUyMENhdGhlZHJhbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Manila Ocean Park",
      city: "Manila",
      country: "Philippines",
      price: 75,
      rating: "9.0",
      reviews: "775 reviews",
      image_url:
        "https://media.istockphoto.com/id/2220547800/photo/aerial-view-of-manila-city-skyline-with-parks-and-skyscrapers.webp?a=1&b=1&s=612x612&w=0&k=20&c=9uySb0J_H-EkAvljuufl4rdG9op4HhW-zHNfPV8s9Dk=",
    },
    {
      id: 3,
      name: "Fort Santiago",
      city: "Manila",
      country: "Philippines",
      price: 30,
      rating: "9.0",
      reviews: "775 reviews",
      image_url:
        "https://media.istockphoto.com/id/863661928/photo/views-of-the-city-of-santiago-de-compostela-from-the-roofs-of-its-cathedral.jpg?s=612x612&w=0&k=20&c=tI1tLoYbsYsjD5HH3hw5O44IWN4NM6cBHfHUeUunpgQ=",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <div className="flex max-w-screen-2xl mx-auto items-start">
          {/* SIDEBAR */}
          <aside className="hidden lg:flex flex-col w-52 shrink-0 py-6 px-3 gap-6 sticky top-20 self-start border-r h-screen overflow-y-auto">
            <a
              href="/hotels"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all"
            >
              Hotels & Homes
            </a>
            <a
              href="/trains"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all"
            >
              Trains
            </a>
            <a
              href="/flights"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all"
            >
              Flights
            </a>
            <div className="border-t border-gray-300"></div>
            <a
              href="/cars"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all"
            >
              Cars
            </a>
            <a
              href="/boats"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all"
            >
              Boats
            </a>
            <a
              href="/flight-hotel"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all"
            >
              Flight + Hotel
            </a>
            <div className="border-t border-gray-300"></div>
            <a
              href="/travel-inspiration"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all"
            >
              Travel Inspiration
            </a>
            <a
              href="/app"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all"
            >
              App
            </a>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1 w-full overflow-hidden">
            {/* HERO SECTION */}
            <section
              className="relative min-h-[420px] flex flex-col items-center justify-center text-white text-center px-4 py-12 md:py-16 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #0a1628 0%, #0d2545 40%, #1a4a7a 70%, #0d2545 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-20 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80')",
                }}
              />

              <div className="relative z-10 mb-6 md:mb-8">
                <h1 className="text-3xl md:text-6xl font-black tracking-tight mb-3 drop-shadow-lg">
                  TRAVEL WITH MY JOURNEY
                </h1>
                <p className="text-blue-200 text-xs md:text-sm">
                  Discover the world's most amazing destinations
                </p>
              </div>

              {/* SEARCH BOX */}
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-4 md:p-5 w-full max-w-3xl">
                <div className="flex flex-nowrap md:flex-wrap overflow-x-auto gap-2 mb-4 justify-start md:justify-center pb-2 md:pb-0 scrollbar-none">
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
                      className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                        activeTab === tab
                          ? "bg-blue-700 text-white"
                          : "bg-white border border-gray-200 text-gray-600"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div className="col-span-1 sm:col-span-2 md:col-span-1 border border-gray-200 rounded-xl px-3 py-2.5 text-left">
                    <div className="text-xs text-black font-medium">Destination</div>
                    <input
                      className="w-full text-sm outline-none text-gray-700 mt-0.5"
                      placeholder="City, Airport, Region"
                    />
                  </div>

                  <div className="border border-gray-200 rounded-xl px-3 py-2.5 text-left">
                    <div className="text-xs text-black font-medium">Check-in</div>
                    <input
                      className="w-full text-sm outline-none text-gray-700 mt-0.5"
                      defaultValue="Thu, Jul 24"
                    />
                  </div>

                  <div className="border border-gray-200 rounded-xl px-3 py-2.5 text-left">
                    <div className="text-xs text-black font-medium">Check-out</div>
                    <input
                      className="w-full text-sm outline-none text-gray-700 mt-0.5"
                      defaultValue="Fri, Jul 25"
                    />
                  </div>

                  <div className="border border-gray-200 rounded-xl px-3 py-2.5 text-left cursor-pointer hover:border-blue-400 transition-colors">
                    <div className="text-xs text-black font-medium">Rooms & Guests</div>
                    <div className="text-sm text-gray-700 mt-0.5 truncate">
                      1 room, 2 adults
                    </div>
                  </div>
                </div>

                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-xl transition-all text-sm tracking-wide">
                  🔍 Search Now
                </button>
              </div>
            </section>

            {/* EXPLORE BANNERS */}
            <section className="px-4 md:px-6 py-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-900 text-white rounded-2xl p-6 flex flex-col justify-between min-h-36 relative overflow-hidden cursor-pointer">
                  <div className="absolute right-0 top-0 w-32 h-32 rounded-full bg-blue-700 opacity-40 -mr-8 -mt-8"></div>
                  <div>
                    <div className="text-xl font-black">EXPLORE THE WORLD</div>
                    <p className="text-blue-200 text-xs mt-2">
                      We're giving $50 discount if you book before Jul 25
                    </p>
                  </div>
                  <button className="mt-4 bg-white text-blue-900 text-xs font-bold px-5 py-2 rounded-full self-start hover:bg-blue-50 transition-colors">
                    Book Now →
                  </button>
                </div>

                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 flex flex-col justify-between min-h-36 relative overflow-hidden cursor-pointer">
                  <div className="absolute right-4 top-4 bg-white/20 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    TOURISM DAY
                  </div>
                  <div className="mt-6">
                    <div className="text-xl font-black">
                      Special offers for tourism day
                    </div>
                  </div>
                  <button className="mt-4 bg-white text-orange-600 text-xs font-bold px-5 py-2 rounded-full self-start hover:bg-orange-50 transition-colors">
                    Explore →
                  </button>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-6 flex flex-col justify-between min-h-36 relative overflow-hidden cursor-pointer">
                  <div className="text-yellow-300 text-xs font-bold tracking-widest uppercase">
                    ⭐ Special Sale
                  </div>
                  <div className="text-xl font-black mt-2">
                    Flight & Hotel packages up to 30% off
                  </div>
                  <button className="mt-4 bg-yellow-400 text-blue-900 text-xs font-bold px-5 py-2 rounded-full self-start hover:bg-yellow-300 transition-colors">
                    Get Deal →
                  </button>
                </div>
              </div>
            </section>

            {/* BUNDLE & SAVE */}
            <section className="px-4 md:px-6 py-2 pb-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 md:p-6">
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <span className="inline-block bg-blue-700 text-white text-xs px-3 py-1.5 rounded-full font-bold mb-3">
                      Bundle & Save
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                      Save when you bundle your flight and hotel.
                    </p>
                    <button className="mt-5 bg-red-500 text-white font-bold px-8 py-2.5 rounded-full text-sm w-full sm:w-auto">
                      🎫 Claim All
                    </button>
                  </div>

                  <div className="flex gap-3 flex-wrap w-full lg:w-auto">
                    <div className="bg-white rounded-2xl shadow-md p-4 text-center flex-1 sm:flex-initial min-w-[130px] md:min-w-40">
                      <div className="text-2xl mb-1">✈️</div>
                      <div className="text-blue-700 font-bold text-xs md:text-sm">
                        Flight Promo Code
                      </div>
                      <div className="mt-2 bg-blue-50 text-blue-800 text-xs px-3 py-1.5 rounded-lg font-bold">
                        FLY100
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-4 text-center flex-1 sm:flex-initial min-w-[130px] md:min-w-40">
                      <div className="text-2xl mb-1">🏨</div>
                      <div className="text-red-600 font-bold text-xs md:text-sm">
                        Hotel Promo Code
                      </div>
                      <div className="mt-2 bg-red-50 text-red-800 text-xs px-3 py-1.5 rounded-lg font-bold">
                        HTL10
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 flex-wrap w-full lg:w-auto">
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex-1 sm:flex-initial min-w-[130px] sm:w-40">
                      <img
                        src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=300&q=80"
                        className="w-full h-20 object-cover"
                        alt="Canada"
                      />
                      <div className="p-2.5">
                        <div className="text-xs font-bold text-gray-800 truncate">
                          Ontario Hotel Plaza
                        </div>
                        <div className="mt-2 text-red-500 font-bold text-sm">
                          450 $
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex-1 sm:flex-initial min-w-[130px] sm:w-40">
                      <img
                        src="https://media.istockphoto.com/id/2280277482/photo/stockholm-city-cityscape-gamla-stan-sweden-aerial-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=Bj06XVYkpIa0iyvC83dGYYXyJAqyBpeZIHDZmy1W4Rk="
                        className="w-full h-20 object-cover"
                        alt="Stockholm"
                      />
                      <div className="p-2.5">
                        <div className="text-xs font-bold text-gray-800 truncate">
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

            {/* FEATURED PROPERTIES */}
            <section className="px-4 md:px-6 py-6 bg-white">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl md:text-2xl font-black text-gray-900">
                  Featured Properties
                </h2>
                <a
                  href="#"
                  className="text-blue-600 text-xs md:text-sm font-semibold hover:underline"
                >
                  See all →
                </a>
              </div>

              <div className="flex gap-4 text-xs text-gray-500 mb-5 flex-wrap">
                <span>✅ We Price Match</span>
                <span>✅ Hotel Booking Guarantee</span>
                <span>✅ Hotel Stay Guarantee</span>
              </div>

              <div className="flex flex-nowrap md:flex-wrap overflow-x-auto gap-2 mb-5 pb-2 md:pb-0 scrollbar-none">
                {[
                  "Istanbul",
                  "Dubai",
                  "Jeddah",
                  "Phuket",
                  "Milan",
                  "Toronto",
                  "Muscat",
                ].map((city, idx) => (
                  <button
                    key={city}
                    className={`px-4 py-1.5 rounded-full text-xs md:text-sm whitespace-nowrap shrink-0 ${
                      idx === 0
                        ? "bg-blue-700 text-white font-semibold"
                        : "bg-gray-100 text-gray-700 font-medium"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {/* Hotel Card 1 */}
                <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden cursor-pointer group flex flex-col justify-between border border-gray-100">
                  <div>
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
                      <div className="font-semibold text-gray-800 text-sm truncate">
                        Sheraton Istanbul Atakoy Hotel
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">
                          9.0⭐
                        </span>
                        <span className="text-xs text-gray-400">775 reviews</span>
                      </div>
                      <div className="mt-2 text-red-500 font-bold text-sm">
                        From 770 $
                      </div>
                    </div>
                  </div>

                  <div className="p-3 pt-0">
                    <button
                      onClick={() =>
                        navigate("/booking", {
                          state: {
                            hotel: {
                              id: 1,
                              name: "Sheraton Istanbul",
                              city: "Istanbul",
                              country: "Turkey",
                              price: 770,
                              image_url:
                                "https://cache.marriott.com/content/dam/marriott-renditions/ISTAS/istas-exterior-4574-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
                            },
                          },
                        })
                      }
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all text-sm"
                    >
                      Book Now
                    </button>
                  </div>
                </div>

                {/* Hotel Card 2 */}
                <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden cursor-pointer group flex flex-col justify-between border border-gray-100">
                  <div>
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
                      <div className="font-semibold text-gray-800 text-sm truncate">
                        Weingart Istanbul Hotel
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">
                          9.0⭐
                        </span>
                        <span className="text-xs text-gray-400">775 reviews</span>
                      </div>
                      <div className="mt-2 text-red-500 font-bold text-sm">
                        From 455 $
                      </div>
                    </div>
                  </div>

                  <div className="p-3 pt-0">
                    <button
                      onClick={() =>
                        navigate("/booking", {
                          state: {
                            hotel: {
                              id: 2,
                              name: "Weingart Istanbul Hotel",
                              city: "Istanbul",
                              country: "Turkey",
                              price: 455,
                              image_url:
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkRc1wTjkz8IEug_11C8dFEFixhLzZKvYVl_-kbunbJQ&s=10",
                            },
                          },
                        })
                      }
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all text-sm"
                    >
                      Book Now
                    </button>
                  </div>
                </div>

                {/* Hotel Card 3 */}
                <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden cursor-pointer group flex flex-col justify-between border border-gray-100">
                  <div>
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
                      <div className="font-semibold text-gray-800 text-sm truncate">
                        Taxim Express Bosphorus
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">
                          9.0⭐
                        </span>
                        <span className="text-xs text-gray-400">775 reviews</span>
                      </div>
                      <div className="mt-2 text-red-500 font-bold text-sm">
                        From 760 $
                      </div>
                    </div>
                  </div>

                  <div className="p-3 pt-0">
                    <button
                      onClick={() =>
                        navigate("/booking", {
                          state: {
                            hotel: {
                              id: 3,
                              name: "Taxim Express Bosphorus",
                              city: "Istanbul",
                              country: "Turkey",
                              price: 760,
                              image_url:
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2PVXNp-UFUsFUo_nuQJ8FG6G99NhqzinGDhUdCqJhA&s=10",
                            },
                          },
                        })
                      }
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all text-sm"
                    >
                      Book Now
                    </button>
                  </div>
                </div>

                {/* Hotel Card 4 */}
                <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden cursor-pointer group flex flex-col justify-between border border-gray-100">
                  <div>
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEhvdGVsfGVufDB8fDB8fHww"
                        alt="Hotel"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                        10% off
                      </span>
                    </div>

                    <div className="p-3">
                      <div className="font-semibold text-gray-800 text-sm truncate">
                        Grand Royal Hotel
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">
                          9.2⭐
                        </span>
                        <span className="text-xs text-gray-400">540 reviews</span>
                      </div>
                      <div className="mt-2 text-red-500 font-bold text-sm">
                        From 620 $
                      </div>
                    </div>
                  </div>

                  <div className="p-3 pt-0">
                    <button
                      onClick={() =>
                        navigate("/booking", {
                          state: {
                            hotel: {
                              id: 4,
                              name: "Grand Royal Hotel",
                              city: "Istanbul",
                              country: "Turkey",
                              price: 620,
                              image_url:
                                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/08/52/7e/grand-royale-hotel-spa.jpg?w=900&h=500&s=1",
                            },
                          },
                        })
                      }
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all text-sm"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* POPULAR ATTRACTIONS */}
            <section className="px-4 md:px-6 py-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl md:text-2xl font-black text-gray-900">
                  Popular Attractions
                </h2>
                <a
                  href="#"
                  className="text-blue-600 text-xs md:text-sm font-semibold hover:underline"
                >
                  See all →
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {ATTRACTIONS.map((attraction) => (
                  <div
                    key={attraction.id}
                    className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-40 overflow-hidden">
                        <img
                          src={attraction.image_url}
                          alt={attraction.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3">
                        <div className="font-semibold text-gray-800 text-sm truncate">
                          {attraction.name}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">
                            {attraction.rating}⭐
                          </span>
                          <span className="text-xs text-gray-400">
                            {attraction.reviews}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 pt-0">
                      <button
                        onClick={() =>
                          navigate("/booking", { state: { hotel: attraction } })
                        }
                        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all text-sm"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}

                <div className="bg-blue-700 rounded-2xl flex flex-col items-center justify-center text-white p-6 cursor-pointer hover:bg-blue-800 transition-colors">
                  <div className="text-4xl mb-3">🗺️</div>
                  <div className="font-bold text-base text-center">
                    Explore more popular destinations
                  </div>
                  <button className="mt-5 bg-white text-blue-700 font-bold px-6 py-2 rounded-full text-sm">
                    Go Now
                  </button>
                </div>
              </div>
            </section>

            {/* TRAIN TRAVEL */}
            <section className="px-4 md:px-6 py-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl md:text-2xl font-black text-gray-900">
                  Plan Your Train Travel
                </h2>
                <a
                  href="#"
                  className="text-blue-600 text-xs md:text-sm font-semibold hover:underline"
                >
                  See all →
                </a>
              </div>

              <div className="flex gap-4 text-xs text-gray-500 mb-5 flex-wrap">
                <span>🚂 Official Partner of Global Rail Operators</span>
                <span>💰 Cheap Trains in Europe and Asia</span>
                <span>💱 Multiple Currencies Accepted</span>
              </div>

              <div className="flex flex-nowrap md:flex-wrap overflow-x-auto gap-2 mb-5 pb-2 md:pb-0 scrollbar-none">
                {[
                  "UK Trains",
                  "Spain Trains",
                  "Italy Trains",
                  "China Trains",
                  "Germany Trains",
                  "France Trains",
                ].map((country, idx) => (
                  <button
                    key={country}
                    className={`px-4 py-1.5 rounded-full text-xs md:text-sm whitespace-nowrap shrink-0 ${
                      idx === 0
                        ? "bg-blue-700 text-white font-semibold"
                        : "bg-gray-100 text-gray-700 font-medium"
                    }`}
                  >
                    {country}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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

                <div className="bg-white rounded-2xl shadow overflow-hidden cursor-pointer group border border-gray-100">
                  <div className="h-32 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1525943421222-633f69ca9078?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fEVkaW5idXJnaHxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Train"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <div className="font-semibold text-gray-800 text-sm">
                      London – Edinburgh
                    </div>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                      Book cheap train tickets across the UK with easy booking and
                      flexible fares.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow overflow-hidden cursor-pointer group border border-gray-100">
                  <div className="h-32 overflow-hidden">
                    <img
                      src="https://media.istockphoto.com/id/1492724975/photo/manchester-tram.webp?a=1&b=1&s=612x612&w=0&k=20&c=K7qmxuY65le_lSWcqVksUdvqYeKD5tUUr8Nqv-upUtw="
                      alt="Train"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <div className="font-semibold text-gray-800 text-sm">
                      Manchester – Edinburgh
                    </div>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                      Fast intercity connections with affordable advance tickets
                      available daily.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow overflow-hidden cursor-pointer group border border-gray-100">
                  <div className="h-32 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1706198809101-76340e4da15f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TG9uZG9uJTIwJUUyJTgwJTkzJTIwRWRpbmJ1cmdofGVufDB8fDB8fHww"
                      alt="Train"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <div className="font-semibold text-gray-800 text-sm">
                      London – Birmingham
                    </div>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                      Regular departures every hour with first class and standard
                      options.
                    </p>
                  </div>
                </div>
              </div>
            </section>

           {/* CAR RENTALS */}
            <section className="px-4 md:px-6 py-6 bg-white">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl md:text-2xl font-black text-gray-900">
                  Recommended Car Rentals
                </h2>
                <a
                  href="#"
                  className="text-blue-600 text-xs md:text-sm font-semibold hover:underline"
                >
                  See all →
                </a>
              </div>

              <div className="flex gap-4 text-xs text-gray-500 mb-5 flex-wrap">
                <span>✅ Free Cancellations</span>
                <span>🔧 Reliable Support</span>
                <span>💳 No Credit Card Fees</span>
              </div>

              <div className="flex flex-nowrap md:flex-wrap overflow-x-auto gap-2 mb-5 pb-2 md:pb-0 scrollbar-none">
                {[
                  "Los Angeles",
                  "Orlando",
                  "Bangkok",
                  "London",
                  "San Francisco",
                  "Auckland",
                ].map((location, idx) => (
                  <button
                    key={location}
                    className={`px-4 py-1.5 rounded-full text-xs md:text-sm whitespace-nowrap shrink-0 ${
                      idx === 0
                        ? "bg-blue-700 text-white font-semibold"
                        : "bg-gray-100 text-gray-700 font-medium"
                    }`}
                  >
                    {location}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-2xl shadow overflow-hidden cursor-pointer group flex flex-col justify-between border border-gray-100">
                  <div>
                    <div className="h-40 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1658547737133-18ff87807de7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmFuZ2UlMjBSb3ZlciUyMEV2b3F1ZXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Car"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3">
                      <div className="font-semibold text-gray-800 text-sm truncate">
                        Range Rover Evoque
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">
                          9.0⭐
                        </span>
                        <span className="text-xs text-gray-400">775 reviews</span>
                      </div>
                      <div className="mt-2 text-red-500 font-bold text-sm">
                        From 700$
                      </div>
                    </div>
                  </div>
                  <div className="p-3 pt-0">
                    <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all text-sm">
                      Book Now
                    </button>
                  </div>
                </div>
                
                 <div className="bg-gray-50 rounded-2xl shadow overflow-hidden cursor-pointer group flex flex-col justify-between border border-gray-100">
                  <div>
                    <div className="h-40 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFRlc2xhJTIwTmV3JTIwJTI2JTIwVXNlZCUyMEVsZWN0cmljJTIwQ2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
                        alt="Tesla"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3">
                      <div className="font-semibold text-gray-800 text-sm truncate">
                        Tesla Model 3
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">
                          9.0⭐
                        </span>
                        <span className="text-xs text-gray-400">775 reviews</span>
                      </div>
                      <div className="mt-2 text-red-500 font-bold text-sm">
                        From 200$
                      </div>
                    </div>
                  </div>
                  <div className="p-3 pt-0">
                    <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all text-sm">
                      Book Now
                    </button>
                  </div>
                </div>

 <div className="bg-gray-50 rounded-2xl shadow overflow-hidden cursor-pointer group flex flex-col justify-between border border-gray-100">
                  <div>
                    <div className="h-40 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1650530579355-7ad9d4766043?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG95b3RhJTIwTGF1bmNoZXMlMjBOZXclMjBMYW5kJTIwQ3J1aXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Tesla"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3">
                      <div className="font-semibold text-gray-800 text-sm truncate">
                        Toyota Launches New Land Cruiser
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">
                          9.0⭐
                        </span>
                        <span className="text-xs text-gray-400">775 reviews</span>
                      </div>
                      <div className="mt-2 text-red-500 font-bold text-sm">
                        From 300$
                      </div>
                    </div>
                  </div>
                  <div className="p-3 pt-0">
                    <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all text-sm">
                      Book Now
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl shadow overflow-hidden cursor-pointer group flex flex-col justify-between border border-gray-100">
                  <div>
                    <div className="h-40 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1648413653877-ade5eefd2f1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZyUyMGNsYXNzfGVufDB8fDB8fHww"
                        alt="Tesla"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3">
                      <div className="font-semibold text-gray-800 text-sm truncate">
                        G Class
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">
                          9.0⭐
                        </span>
                        <span className="text-xs text-gray-400">775 reviews</span>
                      </div>
                      <div className="mt-2 text-red-500 font-bold text-sm">
                        From 740$
                      </div>
                    </div>
                  </div>
                  <div className="p-3 pt-0">
                    <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all text-sm">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="px-4 md:px-6 py-6">
              <h2 className="text-2xl font-black text-blue-700 mb-4">FAQ</h2>
              <div className="bg-blue-900 rounded-2xl overflow-hidden shadow">
                {FAQS.map((f) => (
                  <FAQ key={f.q} q={f.q} a={f.a} />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white text-gray-700 px-6 py-10 border-t border-gray-100 mt-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-bold mb-4 text-gray-800 text-sm">Contact Us</div>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="hover:text-blue-700 cursor-pointer">Customer Support</li>
              <li className="hover:text-blue-700 cursor-pointer">Service guarantee</li>
              <li className="hover:text-blue-700 cursor-pointer">More Service Info</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-4 text-gray-800 text-sm">About</div>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="hover:text-blue-700 cursor-pointer">About My Journey</li>
              <li className="hover:text-blue-700 cursor-pointer">News</li>
              <li className="hover:text-blue-700 cursor-pointer">Careers</li>
              <li className="hover:text-blue-700 cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-blue-700 cursor-pointer">Privacy Statement</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-4 text-gray-800 text-sm">Other Services</div>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="hover:text-blue-700 cursor-pointer">Investor Relations</li>
              <li className="hover:text-blue-700 cursor-pointer">My Journey.com</li>
              <li className="hover:text-blue-700 cursor-pointer">All Hotels</li>
              <li className="hover:text-blue-700 cursor-pointer">Security</li>
              <li className="hover:text-blue-700 cursor-pointer">List Your Property</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-4 text-gray-800 text-sm">Payment Methods</div>
            <div className="flex flex-wrap gap-2">
              {["VISA", "MC", "PayPal", "JCB", "AMEX", "Affirm"].map((p) => (
                <span
                  key={p}
                  className="border border-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-lg font-bold"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-3 text-gray-400">
              <span className="cursor-pointer hover:text-blue-700">f</span>
              <span className="cursor-pointer hover:text-blue-700">𝕏</span>
              <span className="cursor-pointer hover:text-blue-700">▶</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-5 text-center text-gray-400 text-xs">
          Copyright © 2025 My Journey.com. All rights reserved
        </div>
      </footer>
    </div>
  );
}