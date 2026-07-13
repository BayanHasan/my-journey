import { useState } from "react";
import Navbar from "../components/Navbar";

const REGION_TABS = ["Asia", "Europe", "North America", "South America", "Africa"];

const CITIES = [
  { name: "Bali", img: "/bali.jpg" },
  { name: "Tokyo", img: "/tokyo.avif" },
  { name: "Dubai", img: "/dubaiii.webp" },
  { name: "Shanghai", img: "/Shanghai.webp" },
  { name: "Kyoto", img: "/Kyoto.webp" },
  { name: "Osaka", img: "/osaka.jpeg" },
];

const EXPERIENCES = [
  { img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80", desc: "The in-destination industry, which comprises day tours, activities, attractions and related leisure experiences, has endured significant change over the past several years. Travel experiences remain highly variable post-pandemic, with a range of factors painting a complex picture for returns to growth." },
  { img: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=400&q=80", desc: "It doesn't matter where you are in the world, curbside eats are one of the best ways to get a taste of a place. While cities such as and get all the hype, you'll find equally remarkable options in spots which hosts a Food Truck Friday with more than 35 food and drink vendors all summer long." },
  { img: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=400&q=80", desc: "Preparation is the cornerstone of a successful trip. Packing essentials, researching destinations, and managing expectations are pivotal. Packing light with versatile clothing, researching local customs, and setting realistic expectations ensure a smoother and more enjoyable experience." },
  { img: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&q=80", desc: "The in-destination industry, which comprises day tours, activities, attractions and leisure experiences, has endured significant change over the past several years. Travel experiences remain highly variable post-pandemic, with a range of factors painting a complex picture for returns to growth." },
];

const WEEKEND_GETAWAYS = [
  { name: "Beirut, Lebanon", img: "/lebanon.avif" },
  { name: "Doha, Qatar", img: "/doha.jpeg" },
  { name: "Cairo, Egypt", img: "/cairo ah.jpeg" },
  { name: "Baghdad, Iraq", img: "/baghdad.jpeg" },
  { name: "Damascus, Syria", img: "/Damascus.webp" },
  { name: "Amman, Jordan", img: "/amman.jpg" },
];

const FAQS = [
  { q: "How many Flights are listed in My Journey?", a: "My Journey lists thousands of flights from hundreds of airlines worldwide." },
  { q: "How do I book a Flight on My Journey?", a: "Search your route, select your flight, choose your class and complete payment." },
  { q: "How to get cheap Flights on My Journey?", a: "Book in advance, be flexible with dates, and check our special promotions." },
  { q: "What is the way to get lower prices at Flights?", a: "Use price alerts, book round trips, and travel during off-peak seasons." },
  { q: "Can I cancel or change my flight reservation on My Journey?", a: "Depends on the ticket type. Flexible tickets allow changes with no fees." },
  { q: "How do I contact My Journey customer service?", a: "Contact our 24/7 support via live chat, phone, or email." },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-blue-800">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-white text-sm font-medium text-left hover:bg-blue-800 transition-colors"
      >
        {q}
        <span className={`text-blue-300 text-lg transition-transform duration-300 ${open ? "rotate-180" : ""}`}>▼</span>
      </button>
      {open && <div className="px-6 pb-4 text-blue-200 text-sm">{a}</div>}
    </div>
  );
}

export default function TravelInspiration() {
  const [activeRegion, setActiveRegion] = useState("Asia");

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

     {/* ── HERO ── */}
      <section className="relative min-h-[400px] flex flex-col justify-center items-center px-8 py-12 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80')" }} 
        />
        <div className="absolute inset-0 bg-blue-950/50" />
        
        <div className="relative z-10 max-w-screen-xl mx-auto w-full flex flex-col items-center text-center">
          <h1 className="text-4xl font-black text-white mb-6 drop-shadow-md">
            Travel Inspiration
          </h1>
          
          <div className="bg-white rounded-2xl shadow-xl p-2 flex items-center gap-2 w-full max-w-lg">
            <input 
              className="flex-1 outline-none text-sm text-gray-700 px-3" 
              placeholder="Destination, Attraction, Hotel, Etc" 
            />
            <button className="bg-blue-900 hover:bg-blue-950 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all flex items-center gap-2 shrink-0">
              🔍 Search
            </button>
          </div>
        </div>
      </section>
      {/* ── POPULAR DESTINATIONS ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-black text-gray-900 mb-5 text-center">Popular destinations</h2>
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {REGION_TABS.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${activeRegion === region ? "bg-blue-900 text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-blue-400"}`}
            >
              {region}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {CITIES.map((city) => (
            <div key={city.name} className="relative rounded-2xl overflow-hidden h-48 cursor-pointer group">
              <img src={city.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={city.name} />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-4 left-4 text-white font-black text-xl drop-shadow">{city.name}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-900 hover:bg-blue-950 text-white font-bold px-8 py-3 rounded-xl text-sm transition-all">
            More Popular Cities
          </button>
        </div>
      </section>

      {/* ── TRAVEL EXPERIENCES ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-black text-gray-900 mb-5">Travel experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="bg-white rounded-2xl shadow hover:shadow-lg transition-all cursor-pointer overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img src={exp.img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="" />
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-6">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-900 hover:bg-blue-950 text-white font-bold px-8 py-3 rounded-xl text-sm transition-all">
            More travelogues
          </button>
        </div>
      </section>

      {/* ── YOUR NEXT TRIP ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-black text-gray-900 mb-1">Your next trip is waiting</h2>
        <p className="text-gray-500 text-sm mb-5">Weekend getaways from Amman</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {WEEKEND_GETAWAYS.map((dest) => (
            <div key={dest.name} className="relative rounded-2xl overflow-hidden h-44 cursor-pointer group">
              <img src={dest.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={dest.name} />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-4 left-4 text-white font-black text-lg drop-shadow">{dest.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-black text-gray-900 mb-4">FAQ</h2>
        <div className="bg-blue-900 rounded-2xl overflow-hidden">
          {FAQS.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* ── APP BANNER ── */}
      <section className="bg-blue-900 text-white px-6 py-12 text-center">
        <h2 className="text-2xl font-black mb-3">Your all-in-one travel app</h2>
        <div className="flex justify-center gap-4 mt-3 mb-8 flex-wrap">
          <span className="flex items-center gap-2 text-sm"><span className="text-blue-300">✓</span> App-only Deals</span>
          <span className="flex items-center gap-2 text-sm"><span className="text-blue-300">✓</span> Easy Trip Planning</span>
        </div>
        <div className="flex justify-center gap-8 mb-8 flex-wrap border-y border-blue-800 py-6">
          <div><div className="text-4xl font-black">2M+</div><div className="text-blue-200 text-sm">Daily Users</div></div>
          <div className="border-l border-blue-700 px-8"><div className="text-4xl font-black">200k+</div><div className="text-blue-200 text-sm">Daily Downloads</div></div>
          <div className="border-l border-blue-700 px-8"><div className="text-4xl font-black">9.4</div><div className="text-blue-200 text-sm">Rating</div></div>
          <div className="border-l border-blue-700 px-8 flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl">📱</div>
            <div className="text-blue-200 text-xs mt-1">Scan the QR code</div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2">🍎 App Store</button>
          <button className="bg-black text-white px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2">🤖 Google Play</button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-white text-gray-700 px-6 py-10 border-t border-gray-100">
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
                <span key={p} className="border border-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-lg font-bold">{p}</span>
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