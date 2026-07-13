import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-900 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="/">
          <img src="/logo.png" alt="My Journey" className="h-16 w-auto" />
        </a>
        <a href="/my-bookings" className="flex items-center gap-1 cursor-pointer hover:text-blue-300 font-semibold transition-colors">
  📋 My Booking
</a>
        <div className="hidden md:flex items-center gap-5 text-sm font-medium text-white">
          <a href="/hotels" className="hover:text-blue-300">Hotels & Homes</a>
          <a href="/trains" className="hover:text-blue-300">Trains</a>
          <a href="/flights" className="hover:text-blue-300">Flights</a>
          <a href="/cars" className="hover:text-blue-300">Cars</a>
          <a href="/boats" className="hover:text-blue-300">Boats</a>
          <a href="/flight-hotel" className="hover:text-blue-300">Flight + Hotel</a>
        </div>
        <div className="flex items-center gap-4 text-sm text-white">
          <span className="hidden lg:block hover:text-blue-300">🎧 Support</span>
          <span className="hidden lg:block hover:text-blue-300">📱 App</span>
          <span className="hidden lg:block hover:text-blue-300">EN</span>
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-blue-200 text-sm">👋 {user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <a href="/login" className="bg-white text-blue-900 font-bold px-4 py-1.5 rounded-lg text-xs hover:bg-blue-50 transition-colors">
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}