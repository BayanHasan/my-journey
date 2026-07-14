
import Navbar from "../components/Navbar";

export default function hotelsPage() {

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />


      {/* ═══ HERO ═══ */}
      <section className="relative h-[430px] flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Family-Pool.webp')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/50"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl px-6">

          <h1 className="text-4xl md:text-5xl font-black text-white text-center mb-8">
            Hotels & Homes
          </h1>

         {/* ── Search Box── */}
          <div className="bg-white rounded-2xl shadow-xl p-3 max-w-6xl w-full mx-auto">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2.5 items-center">

              {/* Destination */}
              <div className="lg:col-span-3 flex items-center gap-3 border border-gray-200 rounded-xl px-4 h-[64px] hover:border-blue-500 transition-all bg-white">
                <div className="w-full">
                  <div className="text-xs text-gray-400 mb-0.5 font-medium">Destination</div>
                  <input
                    type="text"
                    placeholder="Destination"
                    defaultValue="Istanbul"
                    className="outline-none text-sm text-blue-700 w-full font-bold bg-transparent"
                  />
                </div>
              </div>

              {/* Check-in  */}
              <div className="lg:col-span-2 border border-gray-200 rounded-xl px-4 h-[64px] flex flex-col justify-center hover:border-blue-500 transition-all bg-white relative">
                <div className="text-xs text-gray-400 font-medium">Check-in</div>
                <input
                  type="text"
                  defaultValue="Thu, Jul 24"
                  className="outline-none text-sm text-blue-700 font-bold bg-transparent mt-0.5"
                />
                <span className="absolute top-1 right-2 text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-bold">1 night</span>
              </div>

              {/* Check-out */}
              <div className="lg:col-span-2 border border-gray-200 rounded-xl px-4 h-[64px] flex flex-col justify-center hover:border-blue-500 transition-all bg-white">
                <div className="text-xs text-gray-400 font-medium">Check-out</div>
                <input
                  type="text"
                  defaultValue="Fri, Jul 25"
                  className="outline-none text-sm text-blue-700 font-bold bg-transparent mt-0.5"
                />
              </div>

              {/* Guests */}
              <div className="lg:col-span-3 border border-gray-200 rounded-xl px-4 h-[64px] flex items-center justify-between hover:border-blue-500 transition-all bg-white cursor-pointer">
                <div>
                  <div className="text-xs text-gray-400 font-medium mb-0.5">Rooms and Guests</div>
                  <div className="text-sm text-blue-700 font-bold">1 room, 2 adults</div>
                </div>
                <span className="text-gray-400 text-xs">▼</span>
              </div>

              {/* Search Button */}
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

      {/* ═══ WELCOME BANNER ═══ */}
      <section className="max-w-screen-xl mx-auto px-6 py-6">

        <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-sm flex gap-4">
          <div>
            <h2 className="font-bold text-blue-700 text-lg">
              Welcome aboard! Enjoy a 15% discount on stays !
            </h2>

            <div className="mt-3 space-y-2 text-sm text-red-600">
              <p>
                ● Snag a promo code and save up to 10%
              </p>

              <p>
                ● Download the app to earn Trip Coins
              </p>
            </div>
          </div>
        </div>
      </section>
{/* ═══ RECENTLY VIEWED ═══ */}
<section className="max-w-screen-xl mx-auto px-4 py-1">
  <div className="flex items-center justify-between mb-4">
    
    <h2 className="text-xl font-black text-blue-700">
      Recently Viewed
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

    {/* Card 1 */}
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition-all cursor-pointer overflow-hidden flex gap-3 p-3">

      <img
        src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=200&q=80"
        className="w-24 h-20 object-cover rounded-xl shrink-0"
        alt="Hotel"
      />

      <div>
        <div className="text-blue-700 font-bold text-sm">
          The Astari Villa and Residence
        </div>

        <p className="text-xs text-gray-400 mt-1 line-clamp-2">
          The Astari Villa & Residence is located in Jimbaran hills,
          5 minutes drive to Golden white sands of Jimbaran Sunset Beach.
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className="bg-blue-800 text-white text-xs px-2 py-0.5 rounded font-bold">
            8.9/10
          </span>

          <span className="text-yellow-400 text-xs">
            ★★★★
          </span>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-blue-800 rounded-2xl p-5 text-white hover:shadow-xl transition-all cursor-pointer">

      <div className="text-2xl mb-2">
        🎵
      </div>

      <div className="font-bold">
        Get Rewarded for Traveling
      </div>

      <p className="text-blue-200 text-xs mt-2">
        Get money-saving rewards with every booking, with no limits
        to how you spend. Learn More
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-blue-900 rounded-2xl p-5 text-white hover:shadow-xl transition-all cursor-pointer">

      <div className="text-2xl mb-2">
        📎
      </div>

      <div className="font-bold">
        We Price Match
      </div>

      <p className="text-blue-200 text-xs mt-2">
        We aim to offer you the best possible price. If you find
        a cheaper option elsewhere, we'll refund the difference.
      </p>
    </div>

  </div>
</section>

{/* ═══ WHAT'S NEW ═══ */}
<section className="max-w-screen-xl mx-auto px-6 py-4">

  <h2 className="text-xl font-black text-blue-700 mb-4">
    What's New
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

    {/* Card 1 */}
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition-all cursor-pointer overflow-hidden">

      <div className="relative h-40 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80"
          className="w-full h-full object-cover"
          alt="Taiwan"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
          <span className="text-white font-black text-lg">
            EXPLORE THE WORLD WITH US
          </span>
        </div>
      </div>

      <div className="p-3">

        <div className="font-bold text-black-500">
          Discover Taiwan
        </div>

        <div className="text-xs text-gray-400 mt-0.5">
          Up to 50% Off Hotels
        </div>

        <div className="flex items-center gap-2 mt-2">

          <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded font-bold">
            A
          </span>

          <span className="text-xs font-bold text-gray-700">
            4.8/5
          </span>

          <span className="text-yellow-400 text-xs">
            ★★★★★
          </span>

          <span className="text-xs text-gray-400">
            206,715 reviews
          </span>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition-all cursor-pointer overflow-hidden">

      <div className="h-40 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&q=80"
          className="w-full h-full object-cover"
          alt="Brand Hotels"
        />
      </div>

      <div className="p-3">

        <div className="font-bold text-black-500">
          Brand Hotel Offers
        </div>

        <div className="text-xs text-gray-400 mt-0.5">
          Up to 50% Off Hotels
        </div>

        <div className="flex items-center gap-2 mt-2">

          <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded font-bold">
            A
          </span>

          <span className="text-xs font-bold text-gray-700">
            4.8/5
          </span>

          <span className="text-yellow-400 text-xs">
            ★★★★★
          </span>

          <span className="text-xs text-gray-400">
            206,715 reviews
          </span>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition-all cursor-pointer overflow-hidden">

      <div className="h-40 overflow-hidden">

        <img
          src="/Palm-House-Palm-Beach-2025-new-hotel-LEAD-1.jpg"
          className="w-full h-full object-cover"
          alt="New Hotels"
        />
      </div>

      <div className="p-3">

        <div className="font-bold text-black-500">
          Up to 20% off on New Hotels
        </div>

        <div className="text-xs text-gray-400 mt-0.5">
          Grab New Stays
        </div>

        <div className="flex items-center gap-2 mt-2">

          <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded font-bold">
            A
          </span>

          <span className="text-xs font-bold text-gray-700">
            4.8/5
          </span>

          <span className="text-yellow-400 text-xs">
            ★★★★★
          </span>

          <span className="text-xs text-gray-400">
            206,715 reviews
          </span>
        </div>
      </div>
    </div>

  </div>
</section>
      {/* ═══ POPULAR PROPERTIES ═══ */}
      <section className="max-w-screen-xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-black text-blue-700">
            Popular Properties in Turkey
          </h2>
           <a 
            href="#all-boats" 
            className="text-blue-700 hover:text-blue-900 font-bold text-sm flex items-center gap-1 transition-all hover:underline"
          >
            See all <span>→</span>
          </a>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap align-items-c gap-3 mb-8">

          {[
            "Istanbul",
            "Bursa",
            "Izmir",
            "Bodrum",
          ].map((city) => (
            <button
              key={city}
              className="px-5 py-2 rounded-full border border-gray-200 hover:border-blue-500 hover:text-blue-700 transition-all text-sm font-medium"
            >
              {city}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all">

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80"
                  alt=""
                  className="w-full h-52 object-cover"
                />

                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                  10% OFF
                </span>
              </div>

              <div className="p-4">

                <h3 className="font-bold text-gray-800">
                  Taxim Express Bosphorus
                </h3>

                <div className="text-yellow-400 text-sm mt-1">
                  ★★★★
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <span className="bg-blue-700 text-white text-xs px-2 py-1 rounded-lg font-bold">
                    9/10
                  </span>

                  <span className="text-xs text-gray-400">
                    775 reviews
                  </span>
                </div>

                <div className="font-bold text-red-500">
                  From 550 $
                </div>
                <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
                Book Now
               </button>
              </div>
            </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all">

              <div className="relative">
                <img
                  src="/Conrad Istanbul Bosphorus.jpeg"
                  alt=""
                  className="w-full h-52 object-cover"
                />

                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                  10% OFF
                </span>
              </div>

              <div className="p-4">

                <h3 className="font-bold text-gray-800">
                Conrad Istanbul Bosphorus        
                        </h3>

                <div className="text-yellow-400 text-sm mt-1">
                  ★★★★
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <span className="bg-blue-700 text-white text-xs px-2 py-1 rounded-lg font-bold">
                    9/10
                  </span>

                  <span className="text-xs text-gray-400">
                    775 reviews
                  </span>
                </div>

                <div className="mt-2 text-red-500 font-bold text-sm">
                  From 580 $
                </div>
                <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
                Book Now
                </button>
              </div>
            </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all">

              <div className="relative">
                <img
                  src="/download.jpeg"
                  alt=""
                  className="w-full h-52 object-cover"
                />

                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                  10% OFF
                </span>
              </div>

              <div className="p-4">

                <h3 className="font-bold text-gray-800">
                  Edition Old City Hotel
                </h3>

                <div className="text-yellow-400 text-sm mt-1">
                  ★★★★
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <span className="bg-blue-700 text-white text-xs px-2 py-1 rounded-lg font-bold">
                    9/10
                  </span>

                  <span className="text-xs text-gray-400">
                    775 reviews
                  </span>
                </div>

                <div className="font-bold text-red-500">
                  From 380 $
                </div>
                <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
                 Book Now
               </button>
              </div>
            </div>
          
      <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all">

              <div className="relative">
                <img
                  src="/images.jpeg"
                  alt=""
                  className="w-full h-52 object-cover"
                />

                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                  10% OFF
                </span>
              </div>

              <div className="p-4">

                <h3 className="font-bold text-gray-800">
                  Med Life Hotel Istanbul Airport
                </h3>

                <div className="text-yellow-400 text-sm mt-1">
                  ★★★★
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <span className="bg-blue-700 text-white text-xs px-2 py-1 rounded-lg font-bold">
                    9/10
                  </span>

                  <span className="text-xs text-gray-400">
                    775 reviews
                  </span>
                </div>

                <div className="font-bold text-red-500">
                  From 780 $
                </div>
                <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
                 Book Now
                </button>
              </div>
            </div>
          
      
        </div>
      </section>

     {/* ═══ EXPLORE STAYS ═══ */}
<section className="max-w-screen-xl mx-auto px-6 py-4">

  <div className="flex items-start justify-between mb-4 w-full">
    <div>
      <h2 className="text-xl font-black text-blue-700 mb-1">
        Explore stays in popular destinations
      </h2>
    </div>
    <a 
      href="#all-stays" 
      className="text-blue-700 hover:text-blue-900 font-bold text-sm flex items-center gap-1 transition-all hover:underline mt-1"
    >
      See all <span>→</span>
    </a>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition-all cursor-pointer overflow-hidden">
      <img src="/Antalya.jpeg" className="w-full h-36 object-cover" alt="Antalya" />
      <div className="p-3">
        <div className="text-blue-700 font-bold">Antalya</div>
        <div className="text-xs text-gray-400">Antalya Region, Türkiye</div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">avg. nightly price</span>
          <span className="text-red-500 font-bold text-sm">From 240 $</span>
        </div>
        <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
          Book Now
        </button>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition-all cursor-pointer overflow-hidden">
      <img src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400&q=80" className="w-full h-36 object-cover" alt="Fethiye" />
      <div className="p-3">
        <div className="text-blue-700 font-bold">Fethiye</div>
        <div className="text-xs text-gray-400">Muğla, Türkiye</div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded ">avg. nightly price</span>
          <span className="text-red-500 font-bold text-sm ">From 440 $</span>
        </div>
        <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
          Book Now
        </button>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition-all cursor-pointer overflow-hidden">
      <img src="/Bodrum.jpeg" className="w-full h-36 object-cover" alt="Bodrum" />
      <div className="p-3">
        <div className="text-blue-700 font-bold">Bodrum</div>
        <div className="text-xs text-gray-400">Antalya Region, Türkiye</div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">avg. nightly price</span>
          <span className="text-red-500 font-bold text-sm">From 350 $</span>
        </div>
        <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
          Book Now
        </button>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition-all cursor-pointer overflow-hidden">
      <img src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&q=80" className="w-full h-36 object-cover" alt="Istanbul" />
      <div className="p-3">
        <div className="text-blue-700 font-bold">Istanbul</div>
        <div className="text-xs text-gray-400">Antalya Region, Türkiye</div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">avg. nightly price</span>
          <span className="text-red-500 font-bold text-sm">From 680 $</span>
        </div>
        <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
          Book Now
        </button>
      </div>
    </div>
  </div>
</section>

{/* ═══ POPULAR CITIES WORLDWIDE ═══ */}
<section className="max-w-screen-xl mx-auto px-6 py-4">

  <div className="flex items-center justify-between mb-4 w-full">
    <h2 className="text-xl font-black text-blue-700">
      Popular cities worldwide
    </h2>
    <a 
      href="#all-cities" 
      className="text-blue-700 hover:text-blue-900 font-bold text-sm flex items-center gap-1 transition-all hover:underline"
    >
      See all <span>→</span>
    </a>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      {
        name: "Pattaya",
        location: "Pattaya, Thailand",
        price: "From 240 $",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&q=80",
      },
      {
        name: "Bangkok",
        location: "Bangkok, Thailand",
        price: "From 440 $",
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=400&q=80",
      },
      {
        name: "Bali",
        location: "Bali, Indonesia",
        price: "From 350 $",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80",
      },
      {
        name: "Stockholm",
        location: "Stockholm, Sweden",
        price: "From 680 $",
        image: "/Stockholm Hotel Plaza.jpeg",
      },
    ].map((city, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow hover:shadow-xl transition-all cursor-pointer overflow-hidden"
      >
        <img src={city.image} className="w-full h-36 object-cover" alt={city.name} />
        <div className="p-3">
          <div className="text-blue-700 font-bold">
            {city.name}
          </div>
          <div className="text-xs text-gray-400">
            {city.location}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
              avg. nightly price
            </span>
            <span className="text-red-500 font-bold font-black text-sm">
              {city.price}
            </span>
          </div>
          <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
            Book Now
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

{/* ═══ HIGH-END 5-STAR RESORTS ═══ */}
<section className="max-w-screen-xl mx-auto px-6 py-4">

  <div className="flex items-center justify-between mb-4 w-full">
    <h2 className="text-xl font-black text-blue-700">
      High-end 5-star Resorts
    </h2>
    <a 
      href="#all-high-end" 
      className="text-blue-700 hover:text-blue-900 font-bold text-sm flex items-center gap-1 transition-all hover:underline"
    >
      See all <span>→</span>
    </a>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    {[
      {
        name: "Asia International Hotel",
        rating: "9/10",
        reviews: "775 reviews",
        stars: "★★★★★",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80",
      },
      {
        name: "Regal Airport Hotel",
        rating: "8.5/10",
        reviews: "3425 reviews",
        stars: "★★★★★",
        image: "/download (8).jpeg",
      },
      {
        name: "Crowne Plaza Shanghai",
        rating: "7.5/10",
        reviews: "3425 reviews",
        stars: "★★★★★",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80",
      },
      {
        name: "Radisson Hotel Beijing",
        rating: "7.5/10",
        reviews: "3425 reviews",
        stars: "★★★★★",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&q=80",
      },
    ].map((hotel, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow hover:shadow-xl transition-all cursor-pointer overflow-hidden"
      >
        <img src={hotel.image} className="w-full h-36 object-cover" alt={hotel.name} />
        <div className="p-3">
          <div className="text-blue-700 font-bold text-sm">
            {hotel.name}
          </div>
          <div className="text-yellow-400 text-xs mt-1">
            {hotel.stars}
          </div>
          <p className="text-xs text-gray-400 mt-1 line-clamp-2">
            The hotel provides comfortably designed rooms and luxury amenities.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-blue-700 text-white text-xs px-2 py-0.5 rounded font-bold">
              {hotel.rating}
            </span>
            <span className="text-xs text-gray-400">
              {hotel.reviews}
            </span>
          </div>
          <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
            Book Now
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

{/* ═══ LOW-COST STAYS ═══ */}
<section className="max-w-screen-xl mx-auto px-6 py-4">

  <div className="flex items-center justify-between mb-4 w-full">
    <h2 className="text-xl font-black text-blue-700">
      Low-cost Stays Around the World
    </h2>
    <a 
      href="#all-low-cost" 
      className="text-blue-700 hover:text-blue-900 font-bold text-sm flex items-center gap-1 transition-all hover:underline"
    >
      See all <span>→</span>
    </a>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    {[
      {
        name: "Shahana II Guest House",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80",
      },
      {
        name: "Mahesh Guest House",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80",
      },
      {
        name: "Jaipur Jantar Hostel",
        image: "https://images.unsplash.com/photo-1555921015-5532091f6026?w=400&q=80",
      },
      {
        name: "Chongqing Shanchen",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80",
      },
    ].map((hotel, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow hover:shadow-xl transition-all cursor-pointer overflow-hidden"
      >
        <img src={hotel.image} className="w-full h-36 object-cover" alt={hotel.name} />
        <div className="p-3">
          <div className="text-blue-700 font-bold text-sm">
            {hotel.name}
          </div>
          <div className="text-yellow-400 text-xs mt-1">
            ★★★
          </div>
          <p className="text-xs text-gray-400 mt-1 line-clamp-2">
            Comfortable budget stay with modern amenities and great location.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-blue-700 text-white text-xs px-2 py-0.5 rounded font-bold">
              7/10
            </span>
            <span className="text-xs text-gray-400">
              455 reviews
            </span>
          </div>
          <button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-xl transition-all">
            Book Now
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

{/* ═══ FAQ ═══ */}
<section className="max-w-screen-xl mx-auto px-6 py-4">

  <h2 className="text-xl font-black text-blue-700 mb-4">
    FAQ
  </h2>

  <div className="bg-blue-900 rounded-2xl overflow-hidden">

    {[
      "How many hotels are listed in My Journey ?",
      "How do I book a hotel on My Journey ?",
      "How to get cheap hotels on My Journey ?",
      "What is the way to get lower prices at hotels ?",
      "Can I cancel or change my hotel reservation ?",
      "How do I contact My Journey customer service ?",
    ].map((question, index) => (
      <div
        key={index}
        className="border-b border-blue-800"
      >

        <button className="w-full flex items-center justify-between px-6 py-4 text-white text-sm font-medium text-left hover:bg-blue-800 transition-colors">

          {question}

          <span className="text-blue-300 text-lg">
            ▼
          </span>
        </button>
      </div>
    ))}
  </div>
</section>

{/* ═══ AT-A-GLANCE PROPERTIES ═══ */}
<section className="max-w-screen-xl mx-auto px-6 py-4">

  <h2 className="text-xl font-black text-blue-700 mb-4">
    At-a-Glance Properties
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border border-gray-200">

    <div className="bg-gray-100 p-4 text-center border-r border-gray-200">
      <div className="text-xs text-gray-500 font-medium">
        Total Properties
      </div>

      <div className="text-blue-800 font-black text-lg mt-1">
        1,688,516
      </div>
    </div>

    <div className="bg-blue-800 p-4 text-center border-r border-blue-700">
      <div className="text-xs text-blue-200 font-medium">
        Highest Price
      </div>

      <div className="text-white font-black text-lg mt-1">
        T.L 2,907
      </div>
    </div>

    <div className="bg-blue-800 p-4 text-center border-r border-blue-700">
      <div className="text-xs text-blue-200 font-medium">
        Lowest Price
      </div>

      <div className="text-white font-black text-lg mt-1">
        T.L 6789
      </div>
    </div>

    <div className="bg-blue-800 p-4 text-center">
      <div className="text-xs text-blue-200 font-medium">
        Number of Reviews
      </div>

      <div className="text-white font-black text-lg mt-1">
        141,120,854
      </div>
    </div>
  </div>
</section>

      {/* ═══ APP BANNER ═══ */}
      <section className="bg-blue-900 text-white px-6 py-16 mt-10 relative overflow-hidden">

        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-700 opacity-30 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>

        <div className="relative z-10">

          <h2 className="text-3xl font-black mb-3 text-center">
            Your all-in-one travel app
          </h2>

          <div className="flex justify-center gap-4 mt-4 mb-10 flex-wrap">
            <span className="bg-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              App-only Deals
            </span>

            <span className="bg-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              Easy Trip Planning
            </span>
          </div>

          <div className="flex justify-center gap-16 mb-10 flex-wrap">

            <div className="text-center">
              <div className="text-5xl font-black">
                2M+
              </div>

              <div className="text-blue-200 text-sm mt-1">
                Daily Users
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-black">
                200k+
              </div>

              <div className="text-blue-200 text-sm mt-1">
                Daily Downloads
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-black">
                9.4
              </div>

              <div className="text-blue-200 text-sm mt-1">
                Rating
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-black hover:bg-gray-900 px-8 py-3 rounded-2xl font-semibold text-sm shadow-xl">
              App Store
            </button>

            <button className="bg-black hover:bg-gray-900 px-8 py-3 rounded-2xl font-semibold text-sm shadow-xl">
              Google Play
            </button>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-white border-t border-gray-200 px-6 py-12">

        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">

          <div>
            <h3 className="font-bold text-gray-900 mb-4">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-blue-700">
                  Customer Support
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-700">
                  Service Guarantee
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-700">
                  More Service Info
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">
              About
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-blue-700">
                  About My Journey
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-700">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-700">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">
              Other Services
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-blue-700">
                  Investor Relations
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-700">
                  Security
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-700">
                  List Your Property
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">
              Payment Methods
            </h3>

            <div className="flex flex-wrap gap-2">

              {[
                "VISA",
                "MC",
                "PayPal",
                "JCB",
                "AMEX",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-gray-200 px-3 py-1 rounded-lg text-xs font-bold"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4 text-lg text-gray-400">
              <a href="#" className="hover:text-blue-700">
                f
              </a>

              <a href="#" className="hover:text-blue-700">
                𝕏
              </a>

              <a href="#" className="hover:text-blue-700">
                ▶️
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-xs text-gray-400">
          Copyright © 2025 My Journey.com. All rights reserved.
        </div>
      </footer>
    </div>
  );
}