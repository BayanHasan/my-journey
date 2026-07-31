import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const links = [
    { href: "/hotels", label: "🏨 Hotels & Homes" },
    { href: "/trains", label: "🚆 Trains" },
    { href: "/flights", label: "✈️ Flights" },
    { href: "/cars", label: "🚗 Cars" },
    { href: "/boats", label: "🛥️ Boats" },
    { href: "/flight-hotel", label: "🎫 Flight + Hotel" },
    { href: "/my-bookings", label: "📅 My Booking" },
  ];

  return (
    <nav className="bg-blue-900 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/">
          <img src="/logo.png" alt="My Journey" className="h-16 w-auto" />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-5 text-sm font-medium text-white">
          {links.map((link) => (
            <Link key={link.href} to={link.href} className="hover:text-blue-300">
              {link.label.replace(/^[^\s]+\s/, "")}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 text-sm text-white">
          <span className="hidden lg:block hover:text-blue-300 cursor-pointer">🎧 Support</span>
          <span className="hidden lg:block hover:text-blue-300 cursor-pointer">📱 App</span>
          <span className="hidden lg:block hover:text-blue-300 cursor-pointer">EN</span>
          
          {user ? (
            <div className="hidden md:flex items-center gap-3">
              <span className="text-blue-200 text-sm">👋 {user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="hidden md:inline-block bg-white text-blue-900 font-bold px-4 py-1.5 rounded-lg text-xs hover:bg-blue-50 transition-colors">
              Login
            </Link>
          )}

          {/* HAMBURGER BUTTON - MOBILE ONLY */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-blue-200 text-2xl px-1"
            aria-label="Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 px-4 pb-4 pt-2 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-white text-sm font-medium py-2.5 px-2 rounded-lg hover:bg-white transition-colors block"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="border-t border-blue-700 my-2"></div>

          {user ? (
            <div className="flex items-center justify-between px-2 py-2">
              <span className="text-blue-200 text-sm">👋 {user.name}</span>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
                className="bg-red-500 hover:bg-red-600 text-white text-xs px-4 py-2 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-white text-blue-900 font-bold text-center px-4 py-2.5 rounded-lg text-sm hover:bg-blue-50 transition-colors block"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}