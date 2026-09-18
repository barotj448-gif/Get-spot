import React, { useState } from 'react';

interface CustomerDiscoverScreenProps {
  onNavigateTab: (tab: 'discover' | 'booking' | 'profile') => void;
  onTrackQueue: () => void;
}

export const CustomerDiscoverScreen: React.FC<CustomerDiscoverScreenProps> = ({
  onNavigateTab,
  onTrackQueue,
}) => {
  const [selectedState, setSelectedState] = useState('Gujarat');
  const [selectedCity, setSelectedCity] = useState('Vadodara');
  const [selectedArea, setSelectedArea] = useState('Gotri');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Business Follow / Spot state
  const [followingState, setFollowingState] = useState<{ [id: string]: boolean }>({
    'card-xyz-salon': true,
    'card-lifecare-lab': true,
    'card-sterling-hospital': true,
    'card-apex-dental': false,
  });

  const [activeSpots, setActiveSpots] = useState<{ [id: string]: boolean }>({
    'card-xyz-salon': true,
  });

  const toggleFollow = (id: string) => {
    setFollowingState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getSpot = (id: string) => {
    setActiveSpots((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <div className="bg-white min-h-screen text-gray-900 flex flex-col font-sans antialiased">
      {/* 1. HEADER */}
      <header className="w-full bg-white border-b border-gray-200 pt-3 pb-3 px-4 sticky top-0 z-40">
        <div className="flex items-center justify-between min-h-[44px]">
          <div className="flex items-center gap-2">
            <img
              alt="GET SPOT"
              className="h-12 w-auto object-contain shrink-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnrbF6tsQ1lvqL89yk9m5l3FDXFj_rUPwbhTR-HSrX42BExXnx6HcRAvQfqJj23U1JqnhTmI3P-m16RAZAY2snc6ujp34aDnfYxPuERGA7uSyYDuU6pwaoj-dLiaDJeCyiPTJIfwHCWj4VjTeMTk4ikCUB5MmBhHxDaDQO-ZY5mt5Ibyj-VCLpZWJp8iWnOFT06z2YWbdmjLttH-RlyQmEkLqFIxGHkEbuleHrXsT19T6tDiah1igCwL5oq6xL1AhILjQ"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              Live Queue
            </span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full pb-28">
        {/* 2. SEARCH BAR */}
        <section className="px-4 pt-4 pb-2">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <span className="material-symbols-outlined text-[22px]">search</span>
            </div>
            <input
              className="w-full pl-11 pr-20 py-3.5 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 font-medium text-sm focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 focus:outline-none focus:shadow-md transition-all"
              id="customer-search-input"
              placeholder="Search shops, clinics, restaurants & more"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1 text-gray-500">
              <button className="p-1 hover:text-blue-600 cursor-pointer" type="button">
                <span className="material-symbols-outlined text-[20px]">mic</span>
              </button>
              <button className="p-1 hover:text-blue-600 cursor-pointer" type="button">
                <span className="material-symbols-outlined text-[20px]">tune</span>
              </button>
            </div>
          </div>
        </section>

        {/* 3. MOVING POPULAR BUSINESS CARDS */}
        <section className="mt-4 pt-2">
          <div className="px-4 mb-2">
            <h2 className="font-display text-lg font-black text-gray-900 tracking-tight">
              Popular &amp; High-Demand Businesses
            </h2>
            <p className="text-xs text-gray-500 font-medium">Trending across your region</p>
          </div>
          <div className="flex gap-4 overflow-x-auto px-4 pb-3 pt-1 no-scrollbar">
            {/* Card 1: Urban Cut & Shave */}
            <div className="shrink-0 w-[270px] bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative h-32 w-full bg-gray-100">
                  <img
                    alt="Urban Cut & Shave"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyV6lKKJckzmvrGYSkKGnKMdFhuJX7H6268HcIyoQHWHMazFNQ12tQ6Q4eHLbw0L5c4TyPtosufsUrU6E7qZ6Xu_3We82f4r39bdI3ZLf-Xp-AiQyq3-2xT8srUohMb__vlZ-vQaMtI-HVNZA5XhGmVEiuLSadRwbM-CmETORI5sWaLSRI7BDzEqVLg-P-cthXlPY6h7VN6yYR6RVYArQ3hD7dzNvQKX6oabNGLrCnCSHidQGpbr6LrQ"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-yellow-400 text-gray-950 font-black text-[11px] px-2 py-0.5 rounded shadow-sm tracking-wide">
                    TOP 1
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/80 text-white font-bold text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
                    <span>⚡ High Footfall</span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-display font-bold text-gray-900 text-base leading-snug">
                    Urban Cut &amp; Shave
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mt-0.5">Barber Shop &amp; Grooming</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
                    <span className="font-bold text-gray-900 flex items-center gap-0.5">
                      <span className="text-amber-500">★</span> 4.8
                    </span>
                    <span>(340+ reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                    <span className="material-symbols-outlined text-[15px] text-gray-400">location_on</span>
                    <span>Gotri, Vadodara</span>
                  </div>
                </div>
              </div>
              <div className="p-3 pt-0">
                <button
                  className="w-full py-2 bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                  onClick={onTrackQueue}
                  type="button"
                >
                  View Live Queue
                </button>
              </div>
            </div>

            {/* Card 2: Apex Dental Care */}
            <div className="shrink-0 w-[270px] bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative h-32 w-full bg-gray-100">
                  <img
                    alt="Apex Dental Care"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1VoQWS6YPW5eEzwNkCr9BTxV_QWSTcOU0gmHephXTVp5n4NvSBsyBoU7yrDw_tLeSPbWAQmPWMBSAUqq2wD-WGJP4xucFUScyMMsrQivzlci4CMwrC_Bgtgr8sMjf3XbK_oQDAiuJpa1H_25qj-bgGGTq7X44wkRjak1j_liTB1b9OdTnybqSZ7qglAsD_VkG1J85lARE251UqIPo1fYKrnvpjQS-knOsuT0rLnIJEkPvwcjsa20RunYWFa"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-blue-600 text-white font-black text-[11px] px-2 py-0.5 rounded shadow-sm tracking-wide">
                    CUSTOMER CHOICE
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/80 text-white font-bold text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
                    <span>⚡ High Footfall</span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-display font-bold text-gray-900 text-base leading-snug">
                    Apex Dental Care
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mt-0.5">Doctor &amp; Dental Clinic</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
                    <span className="font-bold text-gray-900 flex items-center gap-0.5">
                      <span className="text-amber-500">★</span> 4.9
                    </span>
                    <span>(210+ reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                    <span className="material-symbols-outlined text-[15px] text-gray-400">location_on</span>
                    <span>Gotri Main Road</span>
                  </div>
                </div>
              </div>
              <div className="p-3 pt-0">
                <button
                  className="w-full py-2 bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                  onClick={onTrackQueue}
                  type="button"
                >
                  View Live Queue
                </button>
              </div>
            </div>

            {/* Card 3: Saffron Pure Veg Dining */}
            <div className="shrink-0 w-[270px] bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative h-32 w-full bg-gray-100">
                  <img
                    alt="Saffron Veg Dining"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuApKeffbAc88bo42EjasynfQdCJN0HIpUvxVGfOWxAX0o2_bdUpQmBg_szcs3CuMQFYJNi6GK4Wsx8_mQo8-001VWgYZjisxIzPeov6CuGGJfv8uIBGpY9BNoJyBGBzs8yYoIG46cT5_DxP29InuVLC-gDY8u9UxBvamu83btahTygnyk5-5JSUTN8WgE21mmV543xF1fDHJV3QWObKobxojcDOjpzdLAvgyY_S_c4cKDpvegLyeRjUZg"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-red-600 text-white font-black text-[11px] px-2 py-0.5 rounded shadow-sm tracking-wide">
                    HIGH DEMAND
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/80 text-white font-bold text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
                    <span>⚡ High Footfall</span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-display font-bold text-gray-900 text-base leading-snug">
                    Saffron Veg Dining
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mt-0.5">Restaurant &amp; Thali</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
                    <span className="font-bold text-gray-900 flex items-center gap-0.5">
                      <span className="text-amber-500">★</span> 4.6
                    </span>
                    <span>(520+ reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                    <span className="material-symbols-outlined text-[15px] text-gray-400">location_on</span>
                    <span>Near Yash Complex, Gotri</span>
                  </div>
                </div>
              </div>
              <div className="p-3 pt-0">
                <button
                  className="w-full py-2 bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                  onClick={onTrackQueue}
                  type="button"
                >
                  View Live Queue
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="px-4 my-2 border-t border-gray-200" />

        {/* 4. SELECT YOUR STATE */}
        <section className="px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-display text-base font-bold text-gray-900 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                1
              </span>
              Select Your State
            </h2>
            <span className="text-xs text-gray-500 font-medium">India</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Gujarat',
              'Maharashtra',
              'Rajasthan',
              'Delhi NCR',
              'Karnataka',
              'Punjab',
              'Tamil Nadu',
              'Telangana',
              'Uttar Pradesh',
            ].map((state) => (
              <button
                key={state}
                className={`px-3.5 py-1.5 rounded-full border-2 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  selectedState === state
                    ? 'bg-[#2563eb] border-[#2563eb] text-white shadow-sm'
                    : 'bg-white border-[#2563eb] text-[#2563eb] hover:bg-blue-50'
                }`}
                onClick={() => setSelectedState(state)}
                type="button"
              >
                {selectedState === state && (
                  <span className="material-symbols-outlined text-[16px]">check</span>
                )}
                <span>{state}</span>
              </button>
            ))}
          </div>
        </section>

        {/* 5. SELECT CITY */}
        <section className="px-4 py-3 bg-gray-50 border-y border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-display text-base font-bold text-gray-900 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                2
              </span>
              Select City in Gujarat
            </h2>
            <span className="text-xs text-blue-700 font-semibold">Active Hubs</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Vadodara',
              'Ahmedabad',
              'Surat',
              'Rajkot',
              'Gandhinagar',
              'Bhavnagar',
              'Jamnagar',
              'Anand',
            ].map((city) => (
              <button
                key={city}
                className={`px-3.5 py-1.5 rounded-full border-2 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  selectedCity === city
                    ? 'bg-[#2563eb] border-[#2563eb] text-white shadow-sm'
                    : 'bg-white border-[#2563eb] text-[#2563eb] hover:bg-blue-50'
                }`}
                onClick={() => setSelectedCity(city)}
                type="button"
              >
                {selectedCity === city && (
                  <span className="material-symbols-outlined text-[16px]">check</span>
                )}
                <span>{city}</span>
              </button>
            ))}
          </div>
        </section>

        {/* 6. SELECT AREA */}
        <section className="px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-display text-base font-bold text-gray-900 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                3
              </span>
              Select Area in Vadodara
            </h2>
            <span className="text-xs text-gray-500 font-medium">8 Zones</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Gotri',
              'Gorwa',
              'Manjalpur',
              'Alkapuri',
              'Akota',
              'Karelibaug',
              'Vasna',
              'Fatehgunj',
              'Subhanpura',
            ].map((area) => (
              <button
                key={area}
                className={`px-3.5 py-1.5 rounded-full border-2 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  selectedArea === area
                    ? 'bg-[#2563eb] border-[#2563eb] text-white shadow-sm'
                    : 'bg-white border-[#2563eb] text-[#2563eb] hover:bg-blue-50'
                }`}
                onClick={() => setSelectedArea(area)}
                type="button"
              >
                {selectedArea === area && (
                  <span className="material-symbols-outlined text-[16px]">check</span>
                )}
                <span>{area}</span>
              </button>
            ))}
          </div>
        </section>

        {/* 7. CATEGORY PILLS */}
        <section className="px-4 py-3 bg-white border-t border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Filter by Category</h3>
            <span className="text-[11px] text-blue-600 font-semibold">6 Categories</span>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {['ALL', 'BARBER & SALON', 'DOCTORS', 'CLINICS', 'LABS', 'HOSPITALS'].map((cat) => (
              <button
                key={cat}
                className={`shrink-0 px-3.5 py-1.5 rounded-full border-2 text-xs font-bold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2563eb] border-[#2563eb] text-white shadow-sm'
                    : 'bg-white border-[#2563eb] text-[#2563eb] hover:bg-blue-50'
                }`}
                onClick={() => setSelectedCategory(cat)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* 8. BUSINESS LIST */}
        <section className="px-4 pt-4 pb-6 bg-gray-50 border-t border-gray-200">
          <div className="mb-4">
            <h2 className="font-display text-lg font-black text-gray-900">
              Businesses in {selectedArea} (14 Active)
            </h2>
            <p className="text-xs text-gray-600 mt-0.5">
              Follow a business to unlock live queue &amp; get your digital Spot
            </p>
          </div>

          <div className="space-y-4" id="business-list">
            {/* CARD 1: XYZ Luxury Salon & Spa (Active Spot Top Card) */}
            <div
              className={`bg-white rounded-xl p-4 transition-all duration-300 ${
                activeSpots['card-xyz-salon']
                  ? 'border-2 border-[#2563eb] shadow-md'
                  : 'border-2 border-gray-200 shadow-sm'
              }`}
              id="card-xyz-salon"
            >
              <div className="flex gap-3 items-start">
                <div className="relative w-28 h-28 rounded-lg overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                  <img
                    alt="XYZ Luxury Salon"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMJOebPAqfeevxdtoBqEA_WKI6L2WkMVPba4v1RZ0xFy4edukjFirfgJJfhkjO6gT344zQbamBCQHN8vJQvi6DT4iOz27lnVYOKe4Z49EMaASJXBIkiYruessh-iu8-PE393AL6etb0GF_b2uzZaeIv7RPij9QX13WPSy3pRVvrcNawKr9yrYZtYEd9dY4DVjnkmlm6i2oCS75rTA8HUyLhkhUklRsoaKszchmEuXr5JNOjBqQx91H2A"
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold uppercase text-blue-600 tracking-wide">
                      Barber &amp; Salon
                    </span>
                    <button
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full cursor-pointer"
                      onClick={() => toggleFollow('card-xyz-salon')}
                      type="button"
                    >
                      <span>{followingState['card-xyz-salon'] ? 'FOLLOWING' : 'FOLLOW'}</span>
                      <span className="material-symbols-outlined text-[14px]">
                        {followingState['card-xyz-salon'] ? 'check' : 'add'}
                      </span>
                    </button>
                  </div>
                  <h3 className="font-display font-bold text-base text-gray-900 leading-snug truncate">
                    XYZ Luxury Salon &amp; Spa
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-700 mt-1 font-semibold">
                    <span className="text-amber-500">★</span>
                    <span>4.8</span>
                  </div>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1 truncate">
                    <span className="material-symbols-outlined text-[14px] text-gray-400 shrink-0">
                      location_on
                    </span>
                    <span className="truncate">Opp. Iscon Heights, Gotri</span>
                  </p>
                </div>
              </div>

              {/* Action Footer: Active Spot State or GET SPOT button */}
              <div className="mt-3">
                {activeSpots['card-xyz-salon'] ? (
                  <div className="flex flex-col gap-3">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex items-center justify-between border-b border-blue-200 pb-2 mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                            Active Spot Token
                          </span>
                        </div>
                        <span className="bg-[#dc2626] text-white font-black text-xs px-2.5 py-0.5 rounded-full shadow-sm">
                          YOUR SPOT: #18
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-center py-1">
                        <div className="bg-white rounded border border-blue-200 p-2">
                          <div className="font-display text-lg font-black text-gray-900">4 People</div>
                          <div className="text-[10px] uppercase font-bold text-gray-500">Waiting Ahead</div>
                        </div>
                        <div className="bg-white rounded border border-blue-200 p-2">
                          <div className="font-display text-lg font-black text-[#dc2626]">~20 Min</div>
                          <div className="text-[10px] uppercase font-bold text-gray-500">Estimated Wait</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 px-3 py-2 rounded-lg text-xs font-semibold text-gray-900">
                        <span className="material-symbols-outlined text-amber-500 text-[18px]">
                          notifications_active
                        </span>
                        <span>Your Spot is coming! Leave now.</span>
                      </div>
                      <button
                        className="w-full py-3 px-4 bg-[#2563eb] hover:bg-blue-700 text-white font-display font-black text-sm uppercase tracking-wider rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                        onClick={onTrackQueue}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">navigation</span>
                        <span>TRACK LIVE QUEUE →</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    className="w-full py-3 px-4 bg-[#dc2626] hover:bg-red-700 text-white font-display font-black text-sm uppercase tracking-wider rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                    onClick={() => getSpot('card-xyz-salon')}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]">confirmation_number</span>
                    <span>GET SPOT</span>
                  </button>
                )}
              </div>
            </div>

            {/* CARD 2: FOLLOWED STATE (LifeCare Pathology & Diagnostic Lab) */}
            <div
              className={`bg-white rounded-xl p-4 shadow-sm flex flex-col gap-3 transition-all duration-300 ${
                activeSpots['card-lifecare-lab']
                  ? 'border-2 border-[#2563eb] shadow-md'
                  : 'border-2 border-gray-200'
              }`}
              id="card-lifecare-lab"
            >
              <div className="flex gap-3 items-start">
                <div className="relative w-28 h-28 rounded-lg overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                  <img
                    alt="LifeCare Pathology & Diagnostic Lab"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1WPVZ0dQgYw5QNqNqdZHX5MGmx3X-VrrUY5lSs0JHijykzXjblMVDm1hWjcztRz336Ef12utBTsAl7WgBSWb10VoNqPnMsaODn-NPF0Agl0gwgTNi4BK_4m34xp54H_UDFFPtpfpj_j1IOZW8Hf9jMqb_MXGiwfR7t6R6U07GAjB9dw5a7_0luNcOLckm7SmUIVDszdjEUD951n_51aUjfDso9O4Ij_6gzqP0vSB5FPt4h7KnHh3MPgF6_e"
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold uppercase text-blue-600 tracking-wide">
                      Pathology Lab
                    </span>
                    <button
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full cursor-pointer"
                      onClick={() => toggleFollow('card-lifecare-lab')}
                      type="button"
                    >
                      <span>{followingState['card-lifecare-lab'] ? 'FOLLOWING' : 'FOLLOW'}</span>
                      <span className="material-symbols-outlined text-[14px]">
                        {followingState['card-lifecare-lab'] ? 'check' : 'add'}
                      </span>
                    </button>
                  </div>
                  <h3 className="font-display font-bold text-base text-gray-900 leading-snug truncate">
                    LifeCare Pathology &amp; Diagnostic Lab
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-700 mt-1 font-semibold">
                    <span className="text-amber-500">★</span>
                    <span>4.8</span>
                  </div>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1 truncate">
                    <span className="material-symbols-outlined text-[14px] text-gray-400 shrink-0">
                      location_on
                    </span>
                    <span className="truncate">Near Yash Complex, Gotri, Vadodara</span>
                  </p>

                  {/* Live Queue Line */}
                  {followingState['card-lifecare-lab'] && (
                    <div className="flex items-center gap-2 mt-2.5 bg-blue-50 border-2 border-blue-200 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-black shadow-sm tracking-tight">
                      <span className="relative flex h-2.5 w-2.5 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
                      </span>
                      <span className="text-blue-900 font-extrabold">8 people</span>
                      <span className="text-blue-700 font-bold">waiting ahead</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Footer */}
              {followingState['card-lifecare-lab'] && (
                <div>
                  {activeSpots['card-lifecare-lab'] ? (
                    <div className="flex flex-col gap-2">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-2.5 flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-900">YOUR SPOT: #22</span>
                        <span className="text-xs font-semibold text-blue-700">~15 Min Wait</span>
                      </div>
                      <button
                        className="w-full py-3 px-4 bg-[#2563eb] hover:bg-blue-700 text-white font-display font-black text-sm uppercase tracking-wider rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                        onClick={onTrackQueue}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">navigation</span>
                        <span>TRACK LIVE QUEUE →</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      className="w-full py-3 px-4 bg-[#dc2626] hover:bg-red-700 text-white font-display font-black text-sm uppercase tracking-wider rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                      onClick={() => getSpot('card-lifecare-lab')}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px]">confirmation_number</span>
                      <span>GET SPOT</span>
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* CARD 3: FOLLOWED STATE (Sterling Multi-Speciality Hospital & Clinic) */}
            <div
              className={`bg-white rounded-xl p-4 shadow-sm flex flex-col gap-3 transition-all duration-300 ${
                activeSpots['card-sterling-hospital']
                  ? 'border-2 border-[#2563eb] shadow-md'
                  : 'border-2 border-gray-200'
              }`}
              id="card-sterling-hospital"
            >
              <div className="flex gap-3 items-start">
                <div className="relative w-28 h-28 rounded-lg overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                  <img
                    alt="Sterling Multi-Speciality Hospital & Clinic"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1VoQWS6YPW5eEzwNkCr9BTxV_QWSTcOU0gmHephXTVp5n4NvSBsyBoU7yrDw_tLeSPbWAQmPWMBSAUqq2wD-WGJP4xucFUScyMMsrQivzlci4CMwrC_Bgtgr8sMjf3XbK_oQDAiuJpa1H_25qj-bgGGTq7X44wkRjak1j_liTB1b9OdTnybqSZ7qglAsD_VkG1J85lARE251UqIPo1fYKrnvpjQS-knOsuT0rLnIJEkPvwcjsa20RunYWFa"
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold uppercase text-blue-600 tracking-wide">
                      Hospital &amp; Clinic
                    </span>
                    <button
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full cursor-pointer"
                      onClick={() => toggleFollow('card-sterling-hospital')}
                      type="button"
                    >
                      <span>{followingState['card-sterling-hospital'] ? 'FOLLOWING' : 'FOLLOW'}</span>
                      <span className="material-symbols-outlined text-[14px]">
                        {followingState['card-sterling-hospital'] ? 'check' : 'add'}
                      </span>
                    </button>
                  </div>
                  <h3 className="font-display font-bold text-base text-gray-900 leading-snug truncate">
                    Sterling Multi-Speciality Hospital &amp; Clinic
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-700 mt-1 font-semibold">
                    <span className="text-amber-500">★</span>
                    <span>4.9</span>
                  </div>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1 truncate">
                    <span className="material-symbols-outlined text-[14px] text-gray-400 shrink-0">
                      location_on
                    </span>
                    <span className="truncate">Gotri Main Circle, Vadodara</span>
                  </p>

                  {/* Live Queue Line */}
                  {followingState['card-sterling-hospital'] && (
                    <div className="flex items-center gap-2 mt-2.5 bg-blue-50 border-2 border-blue-200 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-black shadow-sm tracking-tight">
                      <span className="relative flex h-2.5 w-2.5 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
                      </span>
                      <span className="text-blue-900 font-extrabold">12 people</span>
                      <span className="text-blue-700 font-bold">waiting ahead</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Footer */}
              {followingState['card-sterling-hospital'] && (
                <div>
                  {activeSpots['card-sterling-hospital'] ? (
                    <div className="flex flex-col gap-2">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-2.5 flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-900">YOUR SPOT: #31</span>
                        <span className="text-xs font-semibold text-blue-700">~35 Min Wait</span>
                      </div>
                      <button
                        className="w-full py-3 px-4 bg-[#2563eb] hover:bg-blue-700 text-white font-display font-black text-sm uppercase tracking-wider rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                        onClick={onTrackQueue}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">navigation</span>
                        <span>TRACK LIVE QUEUE →</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      className="w-full py-3 px-4 bg-[#dc2626] hover:bg-red-700 text-white font-display font-black text-sm uppercase tracking-wider rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                      onClick={() => getSpot('card-sterling-hospital')}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px]">confirmation_number</span>
                      <span>GET SPOT</span>
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* CARD 4: UNFOLLOWED STATE (Apex Dental & Orthodontic Clinic) */}
            <div
              className={`bg-white rounded-xl p-4 shadow-sm flex flex-col gap-3 transition-all duration-300 ${
                activeSpots['card-apex-dental']
                  ? 'border-2 border-[#2563eb] shadow-md'
                  : 'border-2 border-gray-200'
              }`}
              id="card-apex-dental"
            >
              <div className="flex gap-3 items-start">
                <div className="relative w-28 h-28 rounded-lg overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                  <img
                    alt="Apex Dental Clinic"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzp6QXGCWGbo6oAVHEJp5wKeBc3RvllaJzW4YOySnti8pjE5VnopHZMn7qXffP7xrcP4mwWDBShL4TeoPDyL2_OuCUUzg4zZehF1LeVOBkUGD4jy5HDq-IDdLkOHW41KmhUsFi2XdHPPJvyyrpj4LI6H4zt_0TNp2CbX2QltfY-SIL4umP2RYyrM7FKwqsMtqAfB5oeD9jgUuG6ukK2__Qc8a1GFRq4UvPQIixInmpalkgvhKionD9eA"
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold uppercase text-blue-600 tracking-wide">
                      Doctor &amp; Clinic
                    </span>
                    <button
                      className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full transition-colors shadow-sm cursor-pointer ${
                        followingState['card-apex-dental']
                          ? 'text-blue-700 bg-blue-50 border border-blue-200'
                          : 'text-white bg-[#2563eb] hover:bg-blue-700'
                      }`}
                      onClick={() => toggleFollow('card-apex-dental')}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        {followingState['card-apex-dental'] ? 'check' : 'add'}
                      </span>
                      <span>{followingState['card-apex-dental'] ? 'FOLLOWING' : 'FOLLOW'}</span>
                    </button>
                  </div>
                  <h3 className="font-display font-bold text-base text-gray-900 leading-snug truncate">
                    Apex Dental &amp; Orthodontic
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-700 mt-1 font-semibold">
                    <span className="text-amber-500">★</span>
                    <span>4.9</span>
                  </div>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1 truncate">
                    <span className="material-symbols-outlined text-[14px] text-gray-400 shrink-0">
                      location_on
                    </span>
                    <span className="truncate">Gotri Main Road</span>
                  </p>

                  {/* Live Queue Line (only if followed) */}
                  {followingState['card-apex-dental'] && (
                    <div className="flex items-center gap-2 mt-2.5 bg-blue-50 border-2 border-blue-200 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-black shadow-sm tracking-tight">
                      <span className="relative flex h-2.5 w-2.5 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
                      </span>
                      <span className="text-blue-900 font-extrabold">6 people</span>
                      <span className="text-blue-700 font-bold">waiting ahead</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Footer */}
              {followingState['card-apex-dental'] && (
                <div>
                  {activeSpots['card-apex-dental'] ? (
                    <div className="flex flex-col gap-2">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-2.5 flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-900">YOUR SPOT: #14</span>
                        <span className="text-xs font-semibold text-blue-700">~18 Min Wait</span>
                      </div>
                      <button
                        className="w-full py-3 px-4 bg-[#2563eb] hover:bg-blue-700 text-white font-display font-black text-sm uppercase tracking-wider rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                        onClick={onTrackQueue}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">navigation</span>
                        <span>TRACK LIVE QUEUE →</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      className="w-full py-3 px-4 bg-[#dc2626] hover:bg-red-700 text-white font-display font-black text-sm uppercase tracking-wider rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                      onClick={() => getSpot('card-apex-dental')}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px]">confirmation_number</span>
                      <span>GET SPOT</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* 8. BOTTOM NAVIGATION BAR (Exact 3-Tab: Discover, Booking, Profile) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-md mx-auto h-16 flex items-center justify-around px-2">
          {/* Discover (Active) */}
          <button
            className="flex flex-col items-center justify-center text-blue-600 font-bold min-w-[56px] relative py-1 cursor-pointer"
            onClick={() => onNavigateTab('discover')}
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">explore</span>
            <span className="text-[11px] mt-0.5">Discover</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-0.5" />
          </button>

          {/* Booking */}
          <button
            className="flex flex-col items-center justify-center text-gray-500 hover:text-blue-600 font-medium min-w-[56px] py-1 cursor-pointer"
            onClick={() => onNavigateTab('booking')}
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">calendar_month</span>
            <span className="text-[11px] mt-0.5">Booking</span>
          </button>

          {/* Profile */}
          <button
            className="flex flex-col items-center justify-center text-gray-500 hover:text-blue-600 font-medium min-w-[56px] py-1 cursor-pointer"
            onClick={() => onNavigateTab('profile')}
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">person</span>
            <span className="text-[11px] mt-0.5">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};
