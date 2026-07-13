import { useState } from "react";
import Navbar from "../components/Navbar";

const DESTINATIONS = [
  { from: "Amman", to: "Cairo", img: "/Cairo 1.webp", rating: "9/10", reviews: "775 reviews", price: "780 $", discount: "10% off" },
  { from: "Amman", to: "Jeddah", img: "/jeddah.jpg", rating: "10/10", reviews: "775 reviews", price: "780 $", discount: "10% off" },
  { from: "Amman", to: "Istanbul", img: "/istanbul.jpeg", rating: "9/10", reviews: "775 reviews", price: "780 $", discount: "10% off" },
  { from: "Amman", to: "Dubai", img: "/dubai.webp", rating: "9/10", reviews: "775 reviews", price: "780 $", discount: "10% off" },
];

const DEST_TABS = ["Egypt", "KSA", "Turkey", "UAE"];

const AIRLINES = [
  { name: "TURKISH AIRLINES", img: "/turkish_airlines.webp", rating: "10/10", reviews: "775 reviews", price: " 700 $" },
  { name: "EMIRATES AIRLINES", img: "/EmiratesFlightSale-2020-GettyImages-545392896.webp", rating: "10/10", reviews: "775 reviews", price: " 560 $" },
  { name: "QATAR AIRWAYS", img: "/QATAR AIRWAYS.webp", rating: "10/10", reviews: "775 reviews", price: " 841 $" },
];

const COUNTRIES = [
  { flag: "🇪🇸", name: "Spain" },
  { flag: "🇨🇳", name: "China" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇹🇷", name: "Turkey" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇩🇪", name: "Germany" },
];

const WHY_CARDS = [
  { icon: "🧳", title: "Travel with a discount", desc: "From weekend breaks to an international getaway, count on my journey to provide the best deals on flight and hotel. The next great travel offer is just a few clicks away!" },
  { icon: "✈️", title: "Ease in Booking", desc: "With our fast and powerful search engines, booking your next vacation is a breeze. Take your pick, choose your ideal destination and book your flight + hotel at the same time. Now that's easy!" },
  { icon: "📋", title: "Book quicker", desc: "Organize your all inclusive holidays in one quick search and get the trip of your dreams in just few clicks. Travelling has never been so easy!" },
];

const FAQS = [
  { q: "How many Flights + Hotels are listed in My Journey?", a: "My Journey lists thousands of flight + hotel packages from hundreds of providers worldwide." },
  { q: "How do I book a Flight + Hotel on My Journey?", a: "Search your route and dates, select your package, choose your room and flight class, and complete payment." },
  { q: "How to get cheap Flight + Hotel on My Journey?", a: "Book in advance, be flexible with dates, and check our bundle deals for extra savings." },
  { q: "What is the way to get lower prices at Flight + Hotel?", a: "Use price alerts, book round trips, bundle your flight and hotel together for maximum savings." },
  { q: "Can I cancel or change my Flight + Hotel reservation?", a: "Depends on the ticket type. Flexible tickets allow changes with no fees." },
  { q: "How do I contact My Journey customer service?", a: "Contact our 24/7 support via live chat, phone, or email." },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-blue-800">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-white text-sm font-medium text-left hover:bg-blue-800 transition-colors">
        {q}
        <span className={`text-blue-300 text-lg transition-transform duration-300 ${open ? "rotate-180" : ""}`}>▼</span>
      </button>
      {open && <div className="px-6 pb-4 text-white text-sm">{a}</div>}
    </div>
  );
}

export default function FlightHotel() {
  const [activeTab, setActiveTab] = useState("Egypt");

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

  {/*── HERO SECTION ── */}
<section className="relative min-h-[380px] flex flex-col justify-center px-6 md:px-12 py-12 overflow-hidden shadow-sm w-full bg-blue-950">
  
  {/* Background Image*/}
  <div
    className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
    style={{
      backgroundImage: "url('/flight.jpeg')",
    }}
  />

  {/* Overlay*/}
  <div className="absolute inset-0 bg-blue-950/40 z-10" />

  <div className="relative z-20 max-w-screen-xl mx-auto w-full">
   <h1 className="text-3xl md:text-4xl font-black text-white mb-6 drop-shadow-md text-center w-full">
  Flight + Hotel
</h1>
    {/*search box*/}
<div className="bg-white rounded-2xl shadow-xl p-4 max-w-4xl w-full mx-auto">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center">
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 hover:border-blue-400 transition-colors">
          <span className="text-blue-700">📍</span>
          <div className="w-full">
            <div className="text-xs text-gray-400">From</div>
            <input className="outline-none text-sm text-gray-700 w-full font-semibold" defaultValue="Istanbul" />
          </div>
          <span className="text-gray-300 text-xs cursor-pointer">✕</span>
        </div>
        
        <div className="border border-gray-200 rounded-xl px-3 py-2 hover:border-blue-400 transition-colors">
          <div className="text-xs text-gray-400">Check-in</div>
          <input className="outline-none text-sm text-gray-700 w-full" defaultValue="Thu, Jul 24" />
          <div className="text-[10px] text-gray-400">1 night</div>
        </div>

        <div className="border border-gray-200 rounded-xl px-3 py-2 hover:border-blue-400 transition-colors">
          <div className="text-xs text-gray-400">Check-out</div>
          <input className="outline-none text-sm text-gray-700 w-full" defaultValue="Fri, Jul 25" />
        </div>

        <div className="border border-gray-200 rounded-xl px-3 py-2 cursor-pointer hover:border-blue-400 transition-colors flex items-center justify-between lg:col-span-1 sm:col-span-2">
          <div>
            <div className="text-xs text-gray-400">Rooms and Guests</div>
            <div className="text-sm text-gray-700 font-medium">1 room, 2 adults</div>
          </div>
          <span className="text-gray-400 text-xs">▼</span>
        </div>

        <div className="flex items-end lg:col-span-1 sm:col-span-2">
  <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold w-full py-2.5 px-6 rounded-xl text-sm transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]">
    🔍 Search
  </button>
</div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 hover:border-blue-400 transition-colors">
          <span className="text-blue-700">📍</span>
          <div className="w-full">
            <div className="text-xs text-gray-400">To</div>
            <input className="outline-none text-sm text-gray-700 w-full font-semibold" defaultValue="Amman" />
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl px-3 py-2 hover:border-blue-400 transition-colors">
          <div className="text-xs text-gray-400">Check-in</div>
          <input className="outline-none text-sm text-gray-700 w-full" defaultValue="Thu, Jul 24" />
        </div>

        <div className="border border-gray-200 rounded-xl px-3 py-2 hover:border-blue-400 transition-colors">
          <div className="text-xs text-gray-400">Check-out</div>
          <input className="outline-none text-sm text-gray-700 w-full" defaultValue="Fri, Jul 25" />
        </div>

        <div className="border border-gray-200 rounded-xl px-3 py-2 cursor-pointer hover:border-blue-400 transition-colors flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400">Rooms and Guests</div>
            <div className="text-sm text-gray-700 font-medium">1 room, 2 adults</div>
          </div>
          <span className="text-gray-400 text-xs">▼</span>
        </div>
      </div>
    </div>
  </div>
</section>

      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-8">
        <main className="space-y-12">

          {/* ── WHY BOOK ── */}
          <section className="py-2">
            <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Why book Flight + Hotel with My Journey?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {WHY_CARDS.map((card) => (
                <div key={card.title} className="text-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-4xl mb-3">{card.icon}</div>
                  <div className="font-bold text-gray-800 mb-2 text-base">{card.title}</div>
                  <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── POPULAR DESTINATIONS ── */}

        <section className="py-2">
            
            <div className="flex items-center justify-between mb-4 w-full">
              <h2 className="text-2xl font-black text-gray-900">Popular Destinations</h2>
              <a 
                href="#all-destinations" 
                className="text-blue-700 hover:text-blue-900 font-bold text-sm flex items-center gap-1 transition-all hover:underline"
              >
                See all <span>→</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {DEST_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${activeTab === tab ? "bg-blue-800 text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-blue-400"}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {DESTINATIONS.map((dest) => (
                  <div key={dest.to} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer overflow-hidden">
                    <div className="relative h-36 overflow-hidden">
                      <img src={dest.img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={dest.to} />
                      <span className="absolute top-2 right-2 bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">{dest.discount}</span>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center gap-1 text-sm font-bold text-gray-800">
                        <span>{dest.from}</span>
                        <span className="text-blue-600">⇄</span>
                        <span>{dest.to}</span>
                      </div>
                      <div className="text-yellow-400 text-xs mt-1">★★★★</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="bg-blue-700 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">{dest.rating}</span>
                        <span className="text-[11px] text-gray-400">{dest.reviews}</span>
                      </div>
                      <div className="text-red-500 font-bold text-xs mt-2">From <span className="text-sm font-bold">{dest.price}</span> </div>
                      <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          
         {/* ── RECOMMENDED FLIGHTS ── */}
          <section className="py-2">

            <div className="flex items-center justify-between mb-5 w-full">
              <h2 className="text-2xl font-black text-gray-900">Recommended flights</h2>
              <a 
                href="#all-flights" 
                className="text-blue-700 hover:text-blue-900 font-bold text-sm flex items-center gap-1 transition-all hover:underline"
              >
                See all <span>→</span>
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              
              {AIRLINES.map((a) => (
                <div key={a.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer overflow-hidden">
                  <div className="h-32 overflow-hidden">
                    <img src={a.img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={a.name} />
                  </div>
                  <div className="p-3">
                    <div className="font-bold text-xs text-gray-800">{a.name}</div>
                    <div className="text-yellow-400 text-xs mt-1">★★★★★</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="bg-blue-700 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">{a.rating}</span>
                      <span className="text-[11px] text-gray-400">{a.reviews}</span>
                    </div>
                    <div className="text-red-500 font-bold text-xs mt-2">From <span className="text-sm font-bold">{a.price}</span></div>
                    <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}

              <div className="bg-blue-800 rounded-2xl flex flex-col items-center justify-center text-white p-5 cursor-pointer hover:bg-blue-900 transition-colors shadow-sm">
                <div className="text-3xl mb-2">✈️</div>
                <div className="font-bold text-xs text-center leading-snug">Best and Worst Airlines, From Someone Who Takes 100 Flights a Year</div>
                <button className="mt-4 bg-white text-blue-900 font-bold px-5 py-1.5 rounded-full text-xs hover:bg-blue-50 transition-colors">Go Now</button>
              </div>
            </div>
          </section>
          {/* ── COUNTRIES BANNER ── */}
          <section className="py-2">
            <div className="relative rounded-3xl overflow-hidden h-44 shadow-sm">
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80" className="w-full h-full object-cover" alt="Plane" />
              <div className="absolute inset-0 bg-blue-950/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-2xl px-4">
                  {COUNTRIES.map((c) => (
                    <button key={c.name} className="flex items-center justify-between bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-xs font-semibold transition-all">
                      <div className="flex items-center gap-2"><span className="text-base">{c.flag}</span>{c.name}</div>
                      <span>›</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── WHY BOOK FOR VISA ── */}
          <section className="py-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-black text-gray-900 mb-3">Why Book Flight + Hotel Together for Visa Application?</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Planning your holidays can be a bit stressful sometimes: you need to decide the destination, pick the best dates, select the most convenient flights, book the hotel and lastly, applying for the visa. Starting with a reliable dummy ticket can make gathering all the necessary proofs much simpler right from the beginning.
            </p>
          </section>

          {/* ── APP BANNER ── */}
          <section className="bg-blue-900 text-white px-6 py-12 text-center rounded-3xl shadow-sm overflow-hidden">
            <h2 className="text-2xl font-black mb-3">Your all-in-one travel app</h2>
            <div className="flex justify-center gap-4 mt-3 mb-8 flex-wrap">
              <span className="flex items-center gap-2 text-xs"><span className="text-blue-300">✓</span> App-only Deals</span>
              <span className="flex items-center gap-2 text-xs"><span className="text-blue-300">✓</span> Easy Trip Planning</span>
            </div>
            <div className="flex justify-center gap-8 mb-8 flex-wrap border-y border-blue-800 py-6 max-w-3xl mx-auto">
              <div><div className="text-3xl font-black">2M+</div><div className="text-blue-200 text-xs">Daily Users</div></div>
              <div className="sm:border-l border-blue-700 sm:px-8"><div className="text-3xl font-black">200k+</div><div className="text-blue-200 text-xs">Daily Downloads</div></div>
              <div className="sm:border-l border-blue-700 sm:px-8"><div className="text-3xl font-black">9.4</div><div className="text-blue-200 text-xs">Rating</div></div>
              <div className="sm:border-l border-blue-700 sm:px-8 flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-xl">📱</div>
                <div className="text-blue-200 text-[10px] mt-1">Scan the QR code</div>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button className="bg-black text-white px-6 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 hover:bg-gray-900 transition-colors">🍎 App Store</button>
              <button className="bg-black text-white px-6 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 hover:bg-gray-900 transition-colors">🤖 Google Play</button>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="py-2">
            <h2 className="text-2xl font-black text-gray-900 mb-4">FAQ</h2>
            <div className="bg-blue-900 rounded-2xl overflow-hidden shadow-sm">
              {FAQS.map((f) => (
                <FAQItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </section>

        </main>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-white text-gray-700 px-6 py-10 border-t border-gray-100 mt-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-bold mb-4 text-gray-800 text-sm">Contact Us</div>
            <ul className="text-xs text-gray-500 space-y-2">
              <li className="hover:text-blue-700 cursor-pointer">Customer Support</li>
              <li className="hover:text-blue-700 cursor-pointer">Service guarantee</li>
              <li className="hover:text-blue-700 cursor-pointer">More Service Info</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-4 text-gray-800 text-sm">About</div>
            <ul className="text-xs text-gray-500 space-y-2">
              <li className="hover:text-blue-700 cursor-pointer">About My Journey</li>
              <li className="hover:text-blue-700 cursor-pointer">News</li>
              <li className="hover:text-blue-700 cursor-pointer">Careers</li>
              <li className="hover:text-blue-700 cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-blue-700 cursor-pointer">Privacy Statement</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-4 text-gray-800 text-sm">Other Services</div>
            <ul className="text-xs text-gray-500 space-y-2">
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
                <span key={p} className="border border-gray-200 text-gray-700 text-[10px] px-2.5 py-1.5 rounded-lg font-bold">{p}</span>
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