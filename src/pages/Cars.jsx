import { useState } from "react";
import Navbar from "../components/Navbar";

const POPULAR_CARS = [
  { name: "Hyundai Tucson", img: "/hyundai-tucson-ultimate-17.jpg",  price: " 400 $ / Day" },
  { name: "Kia Seltos", img: "/Kia Seltos.jpeg", price: " 100 $ / Day" },
  { name: "Genesis G80", img: "/gensies.jpeg", price: " 300 $ / Day" },
  { name: "Range Rover", img: "/Range rover.jpeg", price: " 550 $ / Day" },
];

const RECOMMENDED_CARS = [
  { name: "Kia K5", img: "/Kia K5.jpeg", price: " 230 $ / Day" },
  { name: "Hyundai TUCSON", img: "/Hyundai TUCSON.jpg", price: " 700 $ / Day" },
  { name: "Mercedes", img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400&q=80", price: " 300 $ / Day" },
  { name: "Nissan", img: "/Nissan.jpeg", price: " 200 $ / Day" },
];

const CITIES = [
  { name: "Türkiye", img: "/the-blue-mosque-is-located-in-istanbul-turkey_WGL7z1MsP.avif" },
  { name: "Georgia", img: "/Best-Things-To-Do-In-Georgia-9.jpg" },
  { name: "Azerbaijan", img: "/azerbaijan-in-one-week-1726051662-785X440.jpg" },
];


const REVIEWS = [
  { name: "Steven", car: "Genesis G80", text: "It was a bit disappointing that the Bluetooth didn't work, but the car was clean and picking it up and returning it was easy. The airport transfer was quick and convenient with WhatsApp communication available. Full insurance and English menus were provided. The car was overall in good condition." },
  { name: "Jhon", car: "Hyundai TUCSON", text: "We recommend choosing full insurance to reduce driving risks. 8 Charging cost WLS,000 (standard usage). The child car seat (3 days W40,000) The on-site staff was friendly and the process was smooth. The airport transfer was quick and convenient with WhatsApp communication available. Full insurance and English menus were provided." },
  { name: "Tony", car: "Kia Seltos", text: "The car was over-all in good condition, there were some scratches near the right tailight. The car was not washed when we received it but when we asked it was washed immediately at that time. Inside was clean, no unwanted smell. Pick-up and Drop-off were so easy and the best part - they didn't charge." },
];

const FAQS = [
  { q: "How many Cars are listed in My Journey?", a: "My Journey lists thousands of cars from hundreds of rental companies worldwide." },
  { q: "How do I book a Car on My Journey?", a: "Search your location, select your dates, choose your car, and complete payment." },
  { q: "How to get cheap Cars on My Journey?", a: "Book in advance, compare prices, and check our special promotions." },
  { q: "What is the way to get lower prices at Cars?", a: "Use discount codes, book early, and choose economy class vehicles." },
  { q: "Can I cancel or change my car reservation on My Journey?", a: "Depends on the rental policy. Many cars offer free cancellation up to 48 hours before pickup." },
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

export default function Cars() {
  const [diffLocation, setDiffLocation] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-64 flex flex-col justify-center px-8 py-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=80')" }}
        />
        <div className="absolute inset-0 bg-blue-950/70" />
<div className="relative z-10 max-w-screen-xl mx-auto w-full text-center">
  <h1 className="text-3xl md:text-4xl font-black text-white mb-5">
    Cars Rentals
  </h1>

  {/* ── Search Bar── */}
      <div className="bg-white rounded-2xl shadow-xl p-4 max-w-6xl w-full mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-stretch">
    
    <div className="lg:col-span-4 flex flex-col justify-between border border-gray-200 rounded-xl px-3 py-2 hover:border-blue-500 transition bg-white min-h-[72px]">
      <div className="flex items-center gap-2">
        <div className="w-full">
          <div className="text-xs text-gray-400 font-medium">Pick-up Location</div>
<input
  className="outline-none text-sm font-bold w-full bg-transparent text-center placeholder:text-blue-700"
  placeholder="Address, Airport, Hotel..."
/>        </div>
      </div>
     <label className="flex items-center justify-center gap-2 text-[10px] text-gray-400 cursor-pointer select-none font-medium mt-2">
  <input
    type="checkbox"
    className="accent-blue-700 scale-90"
    checked={diffLocation}
    onChange={() => setDiffLocation(!diffLocation)}
  />
  <span>Different drop-off</span>
</label>
    </div>

<div className="lg:col-span-3 border border-gray-200 rounded-xl px-3 py-2 hover:border-blue-500 transition bg-white flex flex-col justify-between min-h-[72px]">

  <div>
    <div className="text-xs text-gray-400 font-medium text-center">
      Pick-up Time
    </div>

    <input
      className="outline-none text-sm text-blue-700 font-bold w-full bg-transparent mt-0.5 text-center"
      defaultValue="Sun, Sep 5 | 14:00"
    />
  </div>

  <div className="h-4"></div>

</div>
    <div className="lg:col-span-3 border border-gray-200 rounded-xl px-3 py-2 hover:border-blue-500 transition bg-white flex flex-col justify-between min-h-[72px]">
      <div>
        <div className="text-xs text-gray-400 font-medium justify-center">Drop-off Time</div>
<input
  className="w-full bg-transparent outline-none text-center text-sm font-bold text-blue-700"
  defaultValue="Sun, Sep 5 | 14:00"
/>      </div>
     <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-medium mt-1">
  <span>Age: 30-90</span>
  <span>•</span>
  <span className="cursor-pointer hover:text-blue-600">
    License: EN ▼
  </span>
</div>

    </div>

    <div className="lg:col-span-2 flex items-center justify-center">
  <button
    type="button"
    className="bg-blue-700 hover:bg-blue-900 text-white font-bold text-sm px-8 py-3 rounded-xl shadow-md transition-all"
  >
    🔍 Search
  </button>
</div>


  </div>
</div>

</div>
</section>

     {/* ── POPULAR CAR RENTAL TYPES ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-5 w-full">
          <h2 className="text-2xl font-black text-gray-900">Popular Car Rental Types</h2>
          <a 
            href="#all-car-types" 
            className="text-blue-700 hover:text-blue-900 font-bold text-sm flex items-center gap-1 transition-all hover:underline"
          >
            See all <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {POPULAR_CARS.map((car) => (
            <div key={car.name} className="bg-white rounded-2xl shadow hover:shadow-lg transition-all cursor-pointer overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-36 overflow-hidden">
                  <img src={car.img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={car.name} />
                </div>
                <div className="p-3 pb-0">
                  <div className="font-bold text-sm text-gray-800">{car.name}</div>
                  <div className="text-yellow-400 text-xs mt-1">★★★★ | 5 | 5</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-blue-700 text-white text-xs px-2 py-0.5 rounded font-bold">9/10</span>
                    <span className="text-xs text-gray-400">775 reviews</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-red-500 font-bold text-xs">From {car.price}</div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 rounded-lg font-bold transition-colors">View Deal</button>
                  </div>
                </div>
              </div>
              <div className="p-3 pt-0">
                <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    
    {/* ── RECOMMENDED CAR RENTALS ── */}
<section className="max-w-screen-xl mx-auto px-6 py-6">
  <div className="flex items-center justify-between mb-5">
    <h2 className="text-2xl font-black text-gray-900">Recommended Car Rentals</h2>
    <a 
      href="#all-car-types" 
      className="text-blue-700 hover:text-blue-900 font-bold text-sm flex items-center gap-1 transition-all hover:underline"
    >
      See all <span>→</span>
    </a>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {RECOMMENDED_CARS.map((car) => (
      <div key={car.name} className="bg-white rounded-2xl shadow hover:shadow-lg transition-all cursor-pointer overflow-hidden">
        <div className="h-36 overflow-hidden">
          <img src={car.img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={car.name} />
        </div>
        <div className="p-3">
          <div className="font-bold text-sm text-gray-800">{car.name}</div>
          <div className="text-yellow-400 text-xs mt-1">★★★★★</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="bg-blue-700 text-white text-xs px-2 py-0.5 rounded font-bold">9/10</span>
            <span className="text-xs text-gray-400">775 reviews</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="text-red-500 font-bold text-xs">From {car.price}</div>
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

      {/* ── POPULAR CITIES ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-black text-gray-900 mb-5">Popular Car Rental Cities</h2> 
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


     {/* ── CARS TYPES ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-5 w-full">
          <h2 className="text-2xl font-black text-gray-900">Cars Types</h2>
          <a 
            href="#all-car-types" 
            className="text-blue-700 hover:text-blue-900 font-bold text-sm flex items-center gap-1 transition-all hover:underline"
          >
            See all <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {POPULAR_CARS.map((car) => (
            <div key={car.name + "type"} className="bg-white rounded-2xl shadow hover:shadow-lg transition-all cursor-pointer overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-36 overflow-hidden">
                  <img src={car.img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={car.name} />
                </div>
                <div className="p-3 pb-0">
                  <div className="font-bold text-sm text-gray-800">{car.name}</div>
                  <div className="text-yellow-400 text-xs mt-1">★★★★ | 5 | 5</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-blue-700 text-white text-xs px-2 py-0.5 rounded font-bold">9/10</span>
                    <span className="text-xs text-gray-400">775 reviews</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-red-500 font-bold text-xs">From {car.price}</div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 rounded-lg font-bold transition-colors">View Deal</button>
                  </div>
                </div>
              </div>
              <div className="p-3 pt-0">
                <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

       {/* ── Reviews ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">
         <h2 className="text-2xl font-black text-gray-900 mb-5">Car Rental User Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {REVIEWS.map((review) => (
            <div key={review.name} className="bg-white rounded-2xl shadow p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-sm">{review.name}</div>
                  <div className="text-xs text-gray-400">{review.car}</div>
                </div>
                <span className="ml-auto bg-blue-700 text-white text-xs px-2 py-0.5 rounded font-bold">9/10</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-4">{review.text}</p>
              <button className="mt-3 w-full border border-blue-700 text-blue-700 hover:bg-blue-50 text-xs px-3 py-2 rounded-xl font-bold transition-colors">
                Show More Text
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── HYBRID BANNER ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">
        <div
          className="relative rounded-2xl overflow-hidden p-10 flex flex-col items-center justify-center text-center min-h-56"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-blue-950/70" />
          <div className="relative z-10">
            <h2 className="text-2xl font-black text-white mb-2">Hybrid, eco-friendly driving</h2>
            <p className="text-blue-200 text-sm max-w-xl mx-auto leading-relaxed mb-5">
              with a dynamic feeling. If you prefer a greener way of driving, the all-new TUCSON Hybrid is not only the greenest way to go but it's also the most fun. The total system output-Smartstream G1.6 T-GDi engine plus the 44.2kW electric motor reaches 230ps with the help of a turbocharger and that makes for a highly engaging driving experience.
            </p>
            <button className="bg-white text-blue-900 font-bold px-8 py-3 rounded-full text-sm hover:bg-blue-50 transition-colors">
              Book Now and Save
            </button>
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
    </div>
  );
}