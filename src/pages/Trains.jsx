import { useState } from "react";
import Navbar from "../components/Navbar";

const WHY_CARDS = [
  {
    title: "Official partner of global rail operators",
    desc: "Partnering with over 300 railway companies worldwide, including National Rail, Trenitalia, Renfe, DB, and SNCF.",
    dark: true,
  },
  {
    title: "Multiple currencies accepted",
    desc: "Pay in 35+ currencies, including GBP, USD, EUR, and more, for a smooth booking experience.",
    dark: false,
  },
  {
    title: "Cheap trains in Europe and Asia",
    desc: "Affordable train tickets across Europe and Asia, with special promotions and discounts to save you even more.",
    dark: false,
  },
  {
    title: "Online customer support",
    desc: "Get fast, reliable online support with no waiting time—help is just a click away!",
    dark: false,
  },
];

const COUNTRY_TRAINS = [
  { flag: "🇪🇸", name: "Spain Trains" },
  { flag: "🇨🇳", name: "China Trains" },
  { flag: "🇫🇷", name: "France Trains" },
  { flag: "🇹🇷", name: "Turkey Trains" },
  { flag: "🇬🇧", name: "UK Trains" },
  { flag: "🇩🇪", name: "Germany Trains" },
];

const POPULAR_JOURNEYS = [
  {
    title: "Trains in the UK",
    routes: ["Stansted Airport to London", "Gatwick Airport to London", "London to Manchester", "London to Cambridge"],
  },
  {
    title: "Trains in France",
    routes: ["Paris to Lyon", "Paris to Nice", "Paris to Bordeaux", "Paris to Strasbourg"],
  },
  {
    title: "Trains in Spain",
    routes: ["Madrid to Barcelona", "Madrid to Seville", "Madrid to Valencia", "Barcelona to Zaragoza"],
  },
  {
    title: "Trains in China",
    routes: ["Shanghai to Beijing", "Hong Kong to Shenzhen", "Hong Kong to Guangzhou", "Beijing to Shanghai"],
  },
  {
    title: "Japan Railways",
    routes: ["Tokyo to Shin Osaka", "Tokyo to Osaka", "Osaka to Tokyo", "Osaka to Kyoto"],
  },
  {
    title: "Trains in South Korea",
    routes: ["Seoul to Busan", "Daegu to Busan", "Busan to Seoul", "Daegu to Seoul"],
  },
];



const FAQS = [
  { q: "How many Trains are listed in My Journey?", a: "My Journey offers train tickets for thousands of routes across Europe, Asia, and beyond." },
  { q: "How do I book a Train on My Journey?", a: "Enter your departure and destination stations, select your travel date, choose your train, and complete payment." },
  { q: "How to get cheap Trains on My Journey?", a: "Book in advance, travel off-peak, use railcards, and check our special promotions." },
  { q: "What is the way to get lower prices at Trains?", a: "Use advance tickets, split ticketing, and railcard discounts." },
  { q: "Can I cancel or change my train reservation on My Journey?", a: "Changes and cancellations depend on the ticket type. Flexible tickets allow free changes." },
  { q: "How do I contact My Journey customer service?", a: "Contact our 24/7 support via live chat, phone, or email." },
];

function FAQ({ q, a }) {
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

export default function Trains() {

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

    {/* ── HERO ── */}
<section className="relative h-[500px] flex items-center justify-center overflow-hidden">

  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1400&q=80')",
    }}
  />

  <div className="absolute inset-0 bg-blue-950/70" />

  <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">
    <h1 className="text-3xl md:text-5xl font-black text-white mb-8 text-center">
      Transportation Tickets in Europe and Asia
    </h1>
{/* ── Search Bar── */}
<div className="bg-white rounded-2xl shadow-xl p-4 max-w-6xl w-full mx-auto">
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end">
    
    {/* From */}
    <div className="lg:col-span-2 border border-gray-200 rounded-xl px-3 py-2 hover:border-blue-500 transition bg-white flex flex-col justify-center h-[68px]">
      <div className="text-xs text-gray-400 font-medium mb-0.5">From</div>
      <input
        className="w-full outline-none text-sm text-blue-700 font-bold bg-transparent"
        defaultValue="London"
      />
    </div>

    {/* To */}
    <div className="lg:col-span-2 border border-gray-200 rounded-xl px-3 py-2 hover:border-blue-500 transition bg-white flex flex-col justify-center h-[68px]">
      <div className="text-xs text-gray-400 font-medium mb-0.5">To</div>
      <input
        className="w-full outline-none text-sm text-blue-700  font-bold bg-transparent"
        defaultValue="Manchester"
      />
    </div>

    {/* Departure Time */}
    <div className="lg:col-span-2 border border-gray-200 rounded-xl px-3 py-2 hover:border-blue-500 transition bg-white flex flex-col justify-center h-[68px]">
      <div className="text-xs text-gray-400 font-medium mb-0.5">Departure Time</div>
      <input
        className="w-full outline-none text-sm text-blue-700  font-bold bg-transparent"
        defaultValue="Sun, Aug 31 14:00"
      />
    </div>

    {/* Rooms and Guests*/}
    <div className="lg:col-span-2 border border-gray-200 rounded-xl px-3 py-2 cursor-pointer hover:border-blue-500 transition bg-white flex items-center justify-between h-[68px]">
      <div>
        <div className="text-xs text-gray-400 font-medium mb-0.5">Guests</div>
        <div className="outline-none text-sm  font-bold text-blue-700 w-full">1 Adult, 0 Rail</div>
      </div>
      <span className="text-gray-400 text-xs">▼</span>
    </div>

{/* Return Time */}
<div className="lg:col-span-2 border border-gray-200 rounded-xl px-3 py-2 hover:border-blue-500 transition bg-white flex flex-col justify-center h-[68px]">
  <div className="text-xs text-gray-400 font-medium mb-0.5">Return Time</div>
  <input
    className="w-full outline-none text-sm text-gray-400 font-semibold bg-transparent"
    placeholder="Add return trip"
  />
</div>
{/* Search */}
<div className="lg:col-span-2 flex items-center h-[68px]">
  <button
    type="button"
    className="w-full bg-blue-700 hover:bg-blue-900 text-white font-bold text-sm px-8 py-3 rounded-xl shadow-md transition-all"
  >
    🔍 Search
  </button>
</div>

  </div>
</div>

</div>
</section>
      {/* ── WHY TRAVEL ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-black text-blue-700 mb-6">Why Travel with My Journey for Train Tickets?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {WHY_CARDS.map((card) => (
            <div key={card.title} className={`rounded-2xl p-5 ${card.dark ? "bg-blue-800 text-white" : "bg-gray-100 text-gray-800"}`}>
              <div className="font-bold text-base mb-2">{card.title}</div>
              <p className={`text-sm ${card.dark ? "text-blue-200" : "text-gray-500"}`}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

 {/* ── RECOMMENDED TRAINS ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-black text-blue-700 mb-5">Recommended Trains</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Card 1 */}
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden cursor-pointer group">

      <div className="relative h-40 overflow-hidden">
        <img
          src="/England Metro yellow Line.jpg"
          alt="Hotel"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
          10% off
        </span>
      </div>

      <div className="p-3">
        <div className="font-semibold text-gray-800 text-sm">
        England Metro yellow Line
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
          From 770 $
        </div>
         <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
  Book Now
</button>
      </div>
    </div>

 {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden cursor-pointer group">

      <div className="relative h-40 overflow-hidden">
        <img
          src="/Osaka-Metro_Series400-409-01.jpg"
          alt="Hotel"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
          10% off
        </span>
      </div>

      <div className="p-3">
        <div className="font-semibold text-gray-800 text-sm">
Osaka Metro Blue Line
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
          From 770 $
        </div>
         <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
  Book Now
</button>
      </div>
    </div>
{/* Card 3 */}
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden cursor-pointer group">

      <div className="relative h-40 overflow-hidden">
        <img
          src="/Dubai-metro-blue-line-approved-1024x682.jpg"
          alt="Hotel"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
          10% off
        </span>
      </div>

      <div className="p-3">
        <div className="font-semibold text-gray-800 text-sm">
          England Metro Blue Line
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
          From 770 $
        </div>
         <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
  Book Now
</button>
      </div>
    </div>

{/* Card 4 */}
  <div className="bg-blue-800 rounded-2xl shadow card-hover cursor-pointer overflow-hidden">
  <img src="/trains newww.jpg" className="w-full h-36 object-cover" alt="Train" />
  <div className="text-4xl mb-3"></div>

  <div className="font-bold text-white text-center">
    Book your next train trip and explore the UK's top destinations with ease.
  </div>

  <div className="w-full flex justify-center mt-4">
    <button className="bg-white text-blue-900 font-bold px-6 py-2 rounded-full text-sm hover:bg-blue-50 transition-colors">
      Go Now
    </button>
  </div>
</div>

        </div>
      </section>
      {/* ── NEXT JOURNEY ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-4">
        <h2 className="text-2xl font-black text-blue-700 mb-2">Your next train journey starts here</h2>
        <p className="text-gray-500 text-sm mb-5 max-w-2xl">
          Your reliable and authorised train journey planner for South Korea, UK, Europe, Spain, China, Hong Kong offering cheap train tickets and the best plan for your next train journey.
        </p>
        <div className="rounded-2xl overflow-hidden mb-6">
          <img src="/firebird2176_high-quality_image_of_high-speed_train_in_britain_0086c2d1-5762-4b00-bcfe-4ec32d2f8d6a.webp" className="w-full h-64 object-cover" alt="Train" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {COUNTRY_TRAINS.map((t) => (
            <button key={t.name} className="flex items-center justify-between bg-blue-800 hover:bg-blue-900 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all">
              <div className="flex items-center gap-3"><span className="text-xl">{t.flag}</span>{t.name}</div>
              <span>›</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── SWITZERLAND ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">
        <div className="bg-blue-900 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">NEW</span>
            <h3 className="text-xl font-black text-white mt-2 mb-2">Get your pass to Switzerland!</h3>
            <p className="text-blue-200 text-sm">You can now buy rail passes for national and regional travel in Switzerland right here! Find the one for your journey.</p>
            <button className="mt-4 bg-white text-blue-900 font-bold px-6 py-2 rounded-full text-sm hover:bg-blue-50 transition-colors">Take a look</button>
          </div>
          <div className="flex gap-2">
            {[
              { city: "zurich", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=80" },
              { city: "geneva", img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=200&q=80" },
              { city: "lucerne", img: "/lurence.jpeg" },
            ].map((s) => (
              <div key={s.city} className="relative rounded-xl overflow-hidden w-28 h-20">
                <img src={s.img} className="w-full h-full object-cover" alt={s.city} />
                <div className="absolute bottom-1 left-1 text-white text-xs font-bold drop-shadow">{s.city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── POPULAR JOURNEYS ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-6 bg-white rounded-2xl my-4">
        <h2 className="text-2xl font-black text-blue-700 mb-6">Popular train journeys</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POPULAR_JOURNEYS.map((j) => (
            <div key={j.title}>
              <div className="font-bold text-blue-700 mb-3 border-b border-gray-100 pb-2">{j.title}</div>
              <ul className="space-y-2 text-sm text-blue-700">
                {j.routes.map((r) => <li key={r} className="hover:underline cursor-pointer">{r}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

    

      {/* ── FAQ ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-black text-blue-700 mb-4">FAQ</h2>
        <div className="bg-blue-900 rounded-2xl overflow-hidden">
          {FAQS.map((f) => <FAQ key={f.q} q={f.q} a={f.a} />)}
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