import Navbar from "../components/Navbar";

const HERO_FEATURES = [
  { icon: "🧳", title: "Travel with a discount" },
  { icon: "✈️", title: "Ease in Booking" },
  { icon: "📋", title: "Book quicker" },
];

const APP_FEATURES = [
  { icon: "✨", title: "AI Travel Assistant", desc: "Smart travel tips from our AI travel assistant" },
  { icon: "📱", title: "App-exclusive Deals", desc: "Get instant savings by booking with the app" },
  { icon: "🧳", title: "Easy Trip Planning", desc: "Plan your trips with the app and receive the latest travel updates" },
  { icon: "🌐", title: "Worldwide Coverage", desc: "Book your next trip to any corner of the globe" },
];

export default function Travelapplication() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[480px] flex flex-col justify-center items-center px-8 py-12 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80')" }} />
        <div className="absolute inset-0 bg-blue-950/40" />
        
        <div className="relative z-10 max-w-screen-xl mx-auto w-full flex flex-col items-center text-center">
          <h1 className="text-4xl font-black text-white mb-3 drop-shadow-md">Your all-in-one travel app</h1>
          <p className="text-white text-lg mb-10 max-w-2xl">Our award-winning app offers exclusive deals for flights, hotels, and more</p>

          <div className="bg-white/10 border border-white/40 backdrop-blur-sm rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/30 w-full max-w-4xl">
            {HERO_FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col items-center text-center py-4 md:py-0 md:px-4">
                <div className="text-3xl mb-2">{f.icon}</div>
                <div className="text-white font-semibold text-lg">{f.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP BANNER STATS ── */}
      <section className="bg-blue-900 text-white px-6 py-14 text-center">
        <h2 className="text-3xl font-black mb-8">Your all-in-one travel app</h2>
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full px-2 py-2 flex gap-3">
            <span className="flex items-center gap-2 text-blue-900 text-sm font-medium px-3">
              <span className="w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center text-xs">✓</span>
              App-only Deals
            </span>
            <span className="flex items-center gap-2 text-blue-900 text-sm font-medium px-3">
              <span className="w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center text-xs">✓</span>
              Easy Trip Planning
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 mb-8 flex-wrap">
          <div><div className="text-5xl font-black">2M+</div><div className="text-blue-200 text-base mt-1">Daily Users</div></div>
          <div className="border-l border-blue-700 h-16 hidden md:block"></div>
          <div><div className="text-5xl font-black">200k+</div><div className="text-blue-200 text-base mt-1">Daily Downloads</div></div>
          <div className="border-l border-blue-700 h-16 hidden md:block"></div>
          <div><div className="text-5xl font-black">9.4</div><div className="text-blue-200 text-base mt-1">Rating</div></div>
          <div className="bg-white p-2 rounded-lg">
            <div className="w-24 h-24 bg-white flex items-center justify-center text-5xl">▦</div>
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center flex-wrap">
          <button className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2">🍎 App Store</button>
          <button className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2">▶ Google Play</button>
          <span className="text-blue-200 text-sm ml-2">Scan the QR code to download the app</span>
        </div>
      </section>

      {/* ── APP FEATURES ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {APP_FEATURES.map((f) => (
            <div key={f.title} className="bg-blue-900 text-white rounded-2xl p-6 text-center hover:bg-blue-950 transition-colors cursor-pointer">
              <div className="text-3xl mb-3">{f.icon}</div>
              <div className="font-bold text-base mb-2">{f.title}</div>
              <p className="text-blue-200 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MEMBERSHIP BANNER ── */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">
        <div className="bg-blue-900 rounded-2xl p-10 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-800 text-white text-xs font-black px-3 py-2 rounded-lg leading-tight inline-block">
              MY<br />JOURNEY
            </div>
          </div>
          <h2 className="text-2xl font-black mb-6">Plan . Book . Share . MY JOURNEY.com</h2>
          <p className="text-blue-200 text-sm leading-relaxed max-w-2xl mx-auto">
            Welcome to the membership program that rewards you for planning, sharing, and booking. Best of all—it's free to join.<br />
            Your first reward's on us: Join today and get $30 off Things to Do.
          </p>
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