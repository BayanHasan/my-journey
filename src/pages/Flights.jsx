import { useState } from "react";
import Navbar from "../components/Navbar";

const AIRLINES = [
  { name: "TURKISH AIRLINES", img: "https://images.unsplash.com/photo-1562368311-d8b8424be477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VFVSS0lTSCUyMEFJUkxJTkVTfGVufDB8fDB8fHww", rating: "10/10", reviews: "775 reviews", price: " 540 $",
    economy: "https://aircraftinteriorsinternational.com/wp-content/uploads/2019/06/Dreamliner-2.png",
    premium: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqYU_nwcQr3QE45NuldjTpQEtylsHikEdLS6FrQRZ4A&s=10", 
    business: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkYyqEjOwfnyHAfze3MIey3jdIwuk2HLljtqSIVCwBVg&s=10",
    first: "https://cdn.mos.cms.futurecdn.net/FrYwauvxm33xnUJW9PjXMm-1540-80.jpg",
  },
  { name: "EMIRATES AIRLINES", img: "https://images.unsplash.com/photo-1720463698294-7acd5f27112c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RU1JUkFURVMlMjBBSVJMSU5FU3xlbnwwfHwwfHx8MA%3D%3D", rating: "10/10", reviews: "775 reviews", price: " 560 $",
    economy: "https://www.nerdwallet.com/tachyon/2021/04/economyclassbackview-2.jpg?resize=2400%2C1440",
    premium: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkGkIOqnl5sGk4PEnjNLJRkvthP_uDxvxDNFt11o4nw&s=10",
    business: "https://mainlymiles.com/wp-content/uploads/2025/08/Cover-2000x1200.jpg?crop=1",
    first: "https://www.futuretravelexperience.com/wp-content/uploads/2023/01/Emirates-refurbished-A380.jpg",
  },
  { name: "QATAR AIRWAYS", img: "https://images.unsplash.com/photo-1587025448010-3e6902606be3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UUFUQVIlMjBBSVJXQVlTfGVufDB8fDB8fHww", rating: "10/10", reviews: "775 reviews", price: " 841 $",
    economy: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_jhdXnOdGnN6fLcs4vR2E0DV3_PxYSQWjWoI5S6cBQ&s=10",
    premium: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNZkNntEW4LtJD5NdVg3IW3Teb4fDWCaIdkSmbCl6ow&s=10",
    business: "https://static.euronews.com/articles/stories/08/61/97/08/1200x675_cmsv2_5bd7eb79-ea69-520c-b171-a50164576ece-8619708.jpg",
    first: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqFDCIrrJlWoKNEj7BW9fuCyxOlH5QcuRueqYh5gIqw&s=10",
  },
  { name: "CAIRO AIRWAYS", img: "https://images.unsplash.com/photo-1664728723144-90a97fb1464f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlyJTIwY2Fpcm98ZW58MHx8MHx8fDA%3D", rating: "10/10", reviews: "775 reviews", price: " 341 $",
    economy: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThEf2puOpPb7qQ3jJl72_CuTp26uJ6jg1q10lK67vxRg&s=10",
    premium: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8rUb1xQXUS32d1MWDNlJNJmLOnY6LJuMVCLKX2DkKp3HO4aymMYkwhM&s=10",
    business: "https://bestbargain.com/wp-content/uploads/2023/10/image-118.png",
    first: "https://static0.simpleflyingimages.com/wordpress/wp-content/uploads/2026/06/first-class-hidden.jpg?w=1600&h=900&fit=crop",
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562368311-d8b8424be477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VFVSS0lTSCUyMEFJUkxJTkVTfGVufDB8fDB8fHww')" }} />
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
            src="https://assets.discover-the-world.com/tr:w-1440,h-900/production/app/uploads/2024/10/canada-hiker-at-epic-viewpoint-alberta-dc.jpg"
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
