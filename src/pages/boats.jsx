import { useState } from "react";
import Navbar from "../components/Navbar";

const BOAT_TYPES = [
  { name: "Yacht rentals", img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=400&q=80", type: "Intermediate care", price: " 700 $ / Day" },
  { name: "Anguilla boat", img: "/Anguilla-Tourist-Board-Interview-Main.webp", type: "Intermediate care", price: " 700 $ / Day" },
  { name: "Luxury Yacht", img: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=400&q=80", type: "Intermediate care", price: " 700 $ / Day" },
  { name: "Luxury Boats", img: "/Aquanova-Charter-Hero-v2.jpg", type: "Intermediate care", price: " 700 $ / Day" },
];

const CRUISES = [
  { name: "Cruiser Boat Holidays in Italy", img: "/Grand-Canal-Venice-Italy.jpg", desc: "Choose from our range of 2-12 berth built hire cruisers and cruise to Venice and its lagoon. Moor in the center of the city and see the famous sights. You can also cruise to the famous islands of Murano and Burano in the Venice lagoon, perhaps even travel up one of the rivers." },
  { name: "Cruiser Boat Holidays in Mallorca", img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&q=80", desc: "Choose from our range of 2-12 berth built hire cruisers and cruise to Venice and its lagoon. Moor in the center of the city and see the famous sights. You can also cruise to the famous islands of Murano and Burano in the Venice lagoon, perhaps even travel up one of the rivers." },
  { name: "Cruiser Boat Holidays in Croatia", img: "/Homepage_Banner_first_frame_2025_cef736d0ff.avif", desc: "Choose from our range of 2-12 berth built hire cruisers and cruise to Venice and its lagoon. Moor in the center of the city and see the famous sights. You can also cruise to the famous islands of Murano and Burano in the Venice lagoon, perhaps even travel up one of the rivers. Sell Your Boat." },
];

const SERVICES = [
  { title: "Direct Order Now", label: "MY JOURNEY BOATS", img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=400&q=80", tag: "" },
  { title: "Financing / Loans", label: "APPLY FOR FINANCING", img: "/katarina.jpg", tag: "" },
  { title: "Sell Your Boat", label: "Booking Now", img: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=400&q=80", tag: "My Journey.com" },
];

const CITIES = [
  { name: "Türkiye", img: "/the-blue-mosque-is-located-in-istanbul-turkey_WGL7z1MsP.avif" },
  { name: "Georgia", img: "/Best-Things-To-Do-In-Georgia-9.jpg" },
  { name: "Azerbaijan", img: "/azerbaijan-in-one-week-1726051662-785X440.jpg" },
];

const FAQS = [
  { q: "How many Boats are listed in My Journey?", a: "My Journey lists thousands of boats and yachts from hundreds of rental companies worldwide." },
  { q: "How do I book a Boat on My Journey?", a: "Search your location, select your dates, choose your boat, and complete payment." },
  { q: "How to get cheap Boats on My Journey?", a: "Book in advance, compare prices, and check our special promotions." },
  { q: "What is the way to get lower prices at Boats?", a: "Use discount codes, book early, and choose economy class vessels." },
  { q: "Can I cancel or change my boat reservation on My Journey?", a: "Depends on the rental policy. Many boats offer free cancellation up to 48 hours before pickup." },
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
      {open && <div className="px-6 pb-4 text-white text-sm">{a}</div>}
    </div>
  );
}

export default function Boats() {
  const [diffLocation, setDiffLocation] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-64 flex flex-col justify-center px-8 py-10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1400&q=80')" }} />
        <div className="absolute inset-0 bg-blue-950/70" />
        
        {/* Search Box */}
<div className="relative z-10 max-w-screen-xl mx-auto w-full flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-black text-white mb-5">Boats Rentals</h1>
          <div className="bg-white rounded-2xl shadow-xl p-4 max-w-4xl w-full">
            <div className="flex flex-wrap gap-3 items-end mb-3">
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 flex-1 min-w-48 hover:border-blue-400 transition-colors">
                <span className="text-blue-700">📍</span>
                <div className="w-full">
                  <div className="text-xs text-gray-400">Pick-up Location</div>
                  <input className="outline-none text-sm text-gray-700 w-full" placeholder="Alicao City, Station, Region, Doris..." />
                </div>
              </div>
              <div className="border border-gray-200 rounded-xl px-3 py-2 min-w-36 hover:border-blue-400 transition-colors">
                <div className="text-xs text-gray-400">Pick-up Time</div>
                <input className="outline-none text-sm text-gray-700 w-full" defaultValue="Sun, Sep 5 | 18:00" />
              </div>
              <div className="border border-gray-200 rounded-xl px-3 py-2 min-w-36 hover:border-blue-400 transition-colors">
                <div className="text-xs text-gray-400">Drop-off Time</div>
                <input className="outline-none text-sm text-gray-700 w-full" defaultValue="Sun, Sep 5 | 14:00" />
              </div>
              <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold px-8 py-3 rounded-xl text-sm transition-all flex items-center gap-2 shadow-lg">
                🔍 Search
              </button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-700" checked={diffLocation} onChange={() => setDiffLocation(!diffLocation)} />
                <span>Drop off at different location</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-700" />
                <span>Drivers license issuing country: English ▼</span>
              </label>
              <span>Drivers Age: 30-90</span>
            </div>
          </div>
        </div>
      </section>

    {/* ── POPULAR BOAT RENTAL TYPES ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-8">
        
        <div className="flex items-center justify-between mb-5 w-full">
          <h2 className="text-2xl font-black text-gray-900">Popular Boat Rental Types</h2>
          <a 
            href="#all-boats" 
            className="text-blue-700 hover:text-blue-900 font-bold text-sm flex items-center gap-1 transition-all hover:underline"
          >
            See all <span>→</span>
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {BOAT_TYPES.map((boat) => (
            <div key={boat.name} className="bg-white rounded-2xl shadow hover:shadow-lg transition-all cursor-pointer overflow-hidden">
              <div className="h-36 overflow-hidden">
                <img src={boat.img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={boat.name} />
              </div>
              <div className="p-3">
                <div className="font-bold text-sm text-gray-800">{boat.name}</div>
                <div className="text-yellow-400 text-xs mt-1">★★★★ | 5 | 5</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="bg-blue-700 text-white text-xs px-2 py-0.5 rounded font-bold">9/10</span>
                  <span className="text-xs text-gray-400">775 reviews</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-red-500 font-bold text-xs">From {boat.price}</div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 rounded-lg font-bold transition-colors">View Deal</button>
                </div>
                <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MORE THAN 50000 BOATS ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-black text-gray-900 mb-5 text-center">More than 50,000 boats to rent worldwide</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CRUISES.map((cruise) => (
            <div key={cruise.name} className="bg-white rounded-2xl shadow hover:shadow-lg transition-all cursor-pointer overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={cruise.img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={cruise.name} />
              </div>
              <div className="p-4">
                <div className="font-bold text-blue-900 text-sm mb-2">{cruise.name}</div>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{cruise.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MY JOURNEY SERVICES ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-black text-gray-900 mb-5">My Journey Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SERVICES.map((service) => (
            <div key={service.title} className="rounded-2xl overflow-hidden shadow cursor-pointer hover:shadow-lg transition-all">
              <div className="relative h-48">
                <img src={service.img} className="w-full h-full object-cover" alt={service.title} />
                <div className="absolute inset-0 bg-blue-950/40" />
                <div className="absolute top-3 left-3 bg-blue-800 text-white text-xs px-3 py-1 rounded-full font-bold">
                  {service.label}
                </div>
                {service.tag && (
                  <div className="absolute bottom-3 right-3 bg-white text-blue-900 text-xs px-3 py-1 rounded-full font-bold">
                    {service.tag}
                  </div>
                )}
              </div>
              <div className="bg-blue-800 text-white text-center py-3 font-bold text-sm hover:bg-blue-900 transition-colors">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── POPULAR CITIES ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-black text-gray-900 mb-5">Popular Boat Rental Cities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CITIES.map((city) => (
            <div key={city.name} className="relative rounded-2xl overflow-hidden h-40 cursor-pointer group">
              <img src={city.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={city.name} />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-4 left-4 text-white font-black text-xl drop-shadow">{city.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT US ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-black text-gray-900 mb-4">About us</h2>
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Boats International Group – home to boatexport.com and boats.de – We are your premier Discount Boat Dealer & Worldwide Shipper of NEW and Pre-owned boat, celebrating 35 years in the marine industry! Don't hesitate to contact Boats International today to see this beautiful boat, it is priced to sell! Ready and available for immediate viewing, call today! Financing is always welcome and FINANCING is available! IF YOU'RE LOOKING TO SELL OR TRADE YOUR BOAT CALL US TODAY! CONSIGNMENT AND BROKERAGE BOATS NEEDED! WE ACCEPT ALL TRADES AND WE BUY BOATS! WE OFFER FINANCING AND SHIPPING WORLDWIDE.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Boats International – located in Pompano Beach FL is a full service marine facility offering newer and preowned boats, brokerage, service, storage, financing and insurance. If we don't have it in stock, WE will find IT. Our service department is staffed with qualified technicians and we have a 30 ton-travel lift, forklifts and offering all types of marine services and no job is too big or small. We specialize in all areas of mechanical service, repower, bottom paint, gel coat and more. We do it ALL! Trying to sell your boat? We have a staff of experienced brokers and we have affiliates around the world to market your boat. Contact us today. Found a boat and need it shipped? CE-certified? We have competitive rates on domestic trucking and great prices on RORO ocean freight to Europe, Asia, Middle-East, and Australia. We supply cradles, shrink-wrap, trailers, and can deliver your boat anywhere in the world – fast, reliable, and for the right money.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-black text-gray-900 mb-4">FAQ</h2>
        <div className="bg-blue-900 rounded-2xl overflow-hidden">
          {FAQS.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* ── FOOTER ── */}
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