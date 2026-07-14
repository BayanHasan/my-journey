import { useState } from "react";
import Navbar from "../components/Navbar";

const AIRLINES = [
  { name: "TURKISH AIRLINES", img: "/turkish_airlines.webp", rating: "10/10", reviews: "775 reviews", price: " 540 $",
    economy: "/turkish-b777-cabin.jpg",
    premium: "/Premium-Economy-turkish.webp", 
    business: "/business turkish.webp",
    first: "/first class turkish.webp",
  },
  { name: "EMIRATES AIRLINES", img: "/EmiratesFlightSale-2020-GettyImages-545392896.webp", rating: "10/10", reviews: "775 reviews", price: " 560 $",
    economy: "/Emirates-777-300ER-Economy-1.webp",
    premium: "/premium-economy-EMIRATES AIRLINES.avif",
    business: "/emirates-business.jpg",
    first: "/emirates first.jpg",
  },
  { name: "QATAR AIRWAYS", img: "/QATAR AIRWAYS.webp", rating: "10/10", reviews: "775 reviews", price: " 841 $",
    economy: "/Qatar-Airways-Boeing-777-Economy-Class.jpg",
    premium: "/premium QATAR AIRWAYS.jpg",
    business: "/qatar-Airways-Boeing-787-Dreamliner-interior-business-class-cabin.jpg",
    first: "/13-Qatar-Airways-A380-First-Class-Seat-e1538145936785.webp",
  },
  { name: "CAIRO AIRWAYS", img: "/air cairo.jpg", rating: "10/10", reviews: "775 reviews", price: " 341 $",
    economy: "/cairo economy.jpg",
    premium: "/CAIRO AIRWAYS premium.png",
    business: "/cairo business.png",
    first: "/cairo first.jpeg",
  },
];
const CLASSES = [
  { name: "Economy Class", key: "economy" },
  { name: "Premium Economy Class", key: "premium" },
  { name: "Business Class", key: "business" },
  { name: "First Class", key: "first" },
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
      {open && <div className="px-6 pb-4 text-white text-sm">{a}</div>}
    </div>
  );
}

export default function Flights() {
  const [tripType, setTripType] = useState("Round-trip");

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-64 flex items-center justify-center px-8 py-10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/turkish-airlines-airplane-landing-499098536-5c9219cec9e77c00014a9e57.jpg')" }} />
        <div className="absolute inset-0 bg-blue-950/70" />
        <div className="relative z-10 flex flex-col items-center w-full">

          {/* ── Search Bar ── */}

          <h1 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">Flights</h1>
          <div className="bg-white rounded-2xl shadow-xl p-4 max-w-5xl w-full">
            <div className="flex justify-center gap-4 mb-4 text-sm flex-wrap">
              {["Round-trip", "One-way", "Multi-city", "Non-Stop"].map((type) => (
                <label key={type} className="flex items-center gap-1.5 cursor-pointer">
                  <input type="radio" name="tripType" checked={tripType === type} onChange={() => setTripType(type)} className="accent-blue-700" />
                  <span className={tripType === type ? "text-blue-700 font-semibold" : "text-gray-500"}>{type}</span>
                </label>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 w-56">
                <span>📍</span>
                <div className="w-full">
                  <div className="text-xs text-gray-400">Leaving From</div>
                  <input className="outline-none text-sm text-gray-700 w-full" placeholder="City or Airport" />
                </div>
              </div>
              <button className="text-blue-700 text-xl font-bold">⇄</button>
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 w-56">
                <span>📍</span>
                <div className="w-full">
                  <div className="text-xs text-gray-400">Going To</div>
                  <input className="outline-none text-sm text-gray-700 w-full" placeholder="City or Airport" />
                </div>
              </div>
              <div className="border border-gray-200 rounded-xl px-3 py-2 w-44">
                <div className="text-xs text-gray-400">Departure time</div>
                <input className="outline-none text-sm text-blue-700 w-full font-bold" defaultValue="Sun, Aug 31 | 14:00" />
              </div>
              <div className="border border-gray-200 rounded-xl px-3 py-2 w-44">
                <div className="text-xs text-gray-400">Return Trip</div>
                <input className="outline-none text-sm text-gray-400 w-full" placeholder="Add return trip" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-8 mt-4 flex-wrap">
              <label className="flex items-center gap-2 text-sm text-gray-500">
                <input type="checkbox" className="accent-blue-700" />
                <span>Flight + Hotel</span>
              </label>
              <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold px-8 py-3 rounded-xl text-sm shadow-lg">
                🔍 Search
              </button>
            </div>
          </div>
        </div>
      </section>

     {/* RECOMMENDED FLIGHTS */}
      <section className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-5 w-full">
          <h2 className="text-2xl font-black text-blue-700">Recommended flights</h2>
          <a 
            href="#all-flights" 
            className="text-blue-700 hover:text-blue-900 font-bold text-sm flex items-center gap-1 transition-all hover:underline"
          >
            See all <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {AIRLINES.map((a) => (
            <div key={a.name} className="bg-white rounded-2xl shadow hover:shadow-lg transition-all cursor-pointer overflow-hidden">
              <div className="h-32 overflow-hidden">
                <img src={a.img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={a.name} />
              </div>
              <div className="p-3">
                <div className="font-bold text-sm text-gray-800">{a.name}</div>
                <div className="text-yellow-400 text-xs mt-1">★★★★★</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="bg-blue-700 text-white text-xs px-2 py-0.5 rounded font-bold">{a.rating}</span>
                  <span className="text-xs text-gray-400">{a.reviews}</span>
                </div>
                <div className="text-red-500 font-bold text-sm mt-1">From <span className="font-bold">{a.price}</span></div>
                <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FLIGHT CLASSES */}
      {CLASSES.map((cls) => (
        <section key={cls.key} className="max-w-screen-xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-5 w-full">
            <h2 className="text-2xl font-black text-blue-700">{cls.name}</h2>
            <a 
              href={`#all-${cls.key}`} 
              className="text-blue-700 hover:text-blue-900 font-bold text-sm flex items-center gap-1 transition-all hover:underline"
            >
              See all <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {AIRLINES.map((a) => (
              <div key={a.name + cls.key} className="bg-white rounded-2xl shadow hover:shadow-lg transition-all cursor-pointer overflow-hidden">
                <div className="h-32 overflow-hidden">
                  <img src={a[cls.key]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={a.name} />
                </div>
                <div className="p-3">
                  <div className="font-bold text-sm text-gray-800">{a.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{cls.name}</div>
                  <div className="text-yellow-400 text-xs mt-1">★★★★★</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-blue-700 text-white text-xs px-2 py-0.5 rounded font-bold">10/10</span>
                    <span className="text-xs text-gray-400">775 reviews</span>
                  </div>
                  <div className="text-red-500 font-bold text-sm mt-1">From <span className="font-bold">{a.price}</span></div>
                  <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* EXPLORE THE WORLD */}
      <section className="max-w-screen-xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-black text-blue-700 mb-5">
          Explore the world
        </h2>

        <div className="rounded-2xl overflow-hidden h-64 relative">
          <img
            src="/Cebu-City-aerial-view.jpg"
            alt="Map"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 rounded-2xl px-6 py-3 text-blue-900 font-bold text-sm shadow-lg">
              🗺️ Interactive World Map
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">
    <h2 className="text-2xl font-black text-blue-700 mb-4"> FAQ </h2>
          <div className="bg-blue-900 rounded-2xl overflow-hidden">
          {FAQS.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

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
      {/* ── EXPLORE THE WORLD (MAP) ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-black text-gray-900 mb-5">Explore the world</h2>
        <div className="rounded-2xl overflow-hidden h-64 bg-gray-200 relative">
          <img
            src="/google-placeholder.png"
            className="w-full h-full object-cover"
            alt="Map"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 rounded-2xl px-6 py-3 text-blue-900 font-bold text-sm shadow-lg">
               Interactive World Map
            </div>
          </div>
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
