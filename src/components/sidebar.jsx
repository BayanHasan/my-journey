import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-52 shrink-0 bg-gray-100 py-6 px-3 gap-5 sticky top-20 self-start rounded-r-2xl border-r">
      <Link to="/hotels" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all">🏨 Hotel & Homes</Link>
      <Link to="/trains" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all">🚂 Trains</Link>
      <Link to="/flights" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all">✈️ Flights</Link>
      <div className="border-t border-gray-300"></div>
      <Link to="/cars" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all">🚗 Cars</Link>
      <Link to="/boats" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all">⛵ Boats</Link>
      <Link to="/flight-hotel" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all">✈️ Flight + Hotel</Link>
      <div className="border-t border-gray-300"></div>
      <Link to="/travel-inspiration" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all">🌍 Travel Inspiration</Link>
      <Link to="/app" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-white transition-all">📱 App</Link>
    </aside>
  );
}