import React, { useState } from 'react';

interface CustomerBookingScreenProps {
  onNavigateTab: (tab: 'discover' | 'booking' | 'profile') => void;
  onTrackQueue: () => void;
}

export const CustomerBookingScreen: React.FC<CustomerBookingScreenProps> = ({
  onNavigateTab,
  onTrackQueue,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'completed' | 'cancelled'>('all');

  return (
    <div className="bg-surface font-body-md text-on-surface flex flex-col min-h-screen antialiased">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
        <div className="max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop py-2">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center gap-space-xs shrink-0">
              <img
                alt="GET SPOT Logo"
                className="w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9CM81dsoy3H2qUID46SDItMTB6ZZornw4IH79zfYNIYPtp7U-9zlA3MJ3ekIAEgqcBzsEcgQWPAOOeqvty2wejj_j3lxfU3h5bz3DYWanDSjPLz8AVoD5j2bit9_Ior0V5HyIOLbLZC8VWXmu1mU2_0ALcg-VbCVVKL0fLJl8yDCzRsRXQM96lt8JRky5pG_Ed7zywtbgxKXFBcxPPI-LAnIRWSTkk33Bg14N8hozIHCH2OdfqczFeceUDX5h_mg8omk"
                style={{ height: 48, mixBlendMode: 'multiply' }}
              />
            </div>
            <div className="flex items-center gap-space-xs shrink-0">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant text-center mt-1 truncate">
            Why wait there when you can wait anywhere?
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative w-full max-w-container-max mx-auto pt-20 pb-28 px-gutter-mobile md:px-gutter-desktop bg-surface">
        <div className="flex flex-col w-full gap-space-md">
          {/* Header Title & Subtitle */}
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center justify-between">
              <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface">
                My Bookings
              </h1>
              <span className="font-label-md text-label-md px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-semibold">
                4 Entries
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Manage your digital queue passes, view tickets, and rebook spots.
            </p>
          </div>

          {/* Filter Tab Bar */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1" id="filter-tab-bar" role="tablist">
            {[
              { id: 'all', label: 'All (4)' },
              { id: 'active', label: 'Active (1)' },
              { id: 'completed', label: 'Completed (2)' },
              { id: 'cancelled', label: 'Cancelled (1)' },
            ].map((tab) => (
              <button
                key={tab.id}
                aria-selected={activeFilter === tab.id}
                className={`filter-btn px-4 py-2 rounded-lg font-label-md text-label-md transition-colors cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-primary-container text-on-primary shadow-sm'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                }`}
                onClick={() => setActiveFilter(tab.id as any)}
                role="tab"
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Booking List */}
          <div className="flex flex-col gap-space-md" id="booking-list">
            {/* Card 1: Active */}
            {(activeFilter === 'all' || activeFilter === 'active') && (
              <div
                className="booking-card active-booking bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md"
                data-status="active"
              >
                <div className="bg-secondary text-on-secondary px-space-md py-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-surface-container-lowest animate-ping" />
                    <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
                      Your turn is arriving soon
                    </span>
                  </div>
                  <span className="font-label-md text-label-md font-bold">Spot #19</span>
                </div>
                <div className="p-space-md flex flex-col gap-space-md">
                  <div className="flex gap-space-md items-start">
                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container relative">
                      <img
                        alt="Modern high-end hair salon"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1etyyrCJ5VEQ3qdhnxx88CgK3vwYMWkGIGuMzo7OxE-LI_OzW3QQ47SKtPWJ8Hk9LXVKWyYrXCbFz_U2yMlOT9xA0JAb2tl04nbT5vRQ4rLVd3WqoaKaFvTIXnIU4nLsMqrz2E9-05vvU1zBD7VVN7t1stoEVvuycuGYgDYc-SeswV8aQDFB2F5JAOLxcyybIcZrZnCibWvpMkz5hOTI13LTbxW4eEUJusRoeotBTkvDqZrlpKc3svQ"
                      />
                      <span className="absolute bottom-1 right-1 bg-surface-container-lowest/90 px-1.5 py-0.5 rounded text-[10px] font-bold text-on-surface flex items-center gap-0.5">
                        <span
                          className="material-symbols-outlined text-[12px] text-tertiary-container"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>{' '}
                        4.8
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          Active Pass
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Today, 04:30 PM
                        </span>
                      </div>
                      <h2 className="font-title-sm text-title-sm text-on-surface font-bold truncate">
                        XYZ Luxury Salon &amp; Spa
                      </h2>
                      <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-0.5 mt-0.5">
                        <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                        <span className="truncate">Gotri, Vadodara</span>
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-error-container text-secondary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">group</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-bold text-on-surface">
                          7 People Ahead
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Estimated wait ~25 min
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary-container animate-pulse text-[20px]">
                      timer
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 pt-1">
                    <button
                      className="w-full py-3 px-4 rounded-lg bg-secondary text-on-secondary font-title-sm text-title-sm font-bold flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] transition-transform cursor-pointer"
                      onClick={onTrackQueue}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px]">radar</span>
                      TRACK LIVE QUEUE
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Card 2: Completed */}
            {(activeFilter === 'all' || activeFilter === 'completed') && (
              <div
                className="booking-card bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md"
                data-status="completed"
              >
                <div className="p-space-md flex flex-col gap-space-md">
                  <div className="flex gap-space-md items-start">
                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container relative">
                      <img
                        alt="Dental clinic reception"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-O1puD0H5eY5uY_hvHWSrTeikbubcSyvWCCyjaKVCDWiFq8KAs8R4Q4lkZmRkyY5lHGyLzXCDak2iERfcV7CyR8mwALqOoMDfGBG9gvhcEcMO2UhteGVjr5TNixuHivCXhQPWUoZgs5f8y-NW7bshnd5HDbLEj95nVyz3d9KV-Vi4Bze36jhERcwNGV5PML_VcjIJSkEePWINNKE22otpO6VX4s_GHBqoQSbbtufUaWh41ACGYbq3ug"
                      />
                      <span className="absolute bottom-1 right-1 bg-surface-container-lowest/90 px-1.5 py-0.5 rounded text-[10px] font-bold text-on-surface flex items-center gap-0.5">
                        <span
                          className="material-symbols-outlined text-[12px] text-tertiary-container"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>{' '}
                        4.9
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[14px]">check_circle</span>
                          Completed
                        </span>
                        <span className="font-label-md text-label-md font-bold text-primary">
                          Spot #08
                        </span>
                      </div>
                      <h2 className="font-title-sm text-title-sm text-on-surface font-bold truncate">
                        Apex Dental &amp; Orthodontic Clinic
                      </h2>
                      <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-0.5 mt-0.5">
                        <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                        <span className="truncate">Gotri Main Road, Vadodara</span>
                      </p>
                      <span className="font-label-sm text-label-sm text-outline mt-1">
                        Yesterday, 11:15 AM
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between text-on-surface-variant">
                    <span className="font-label-sm text-label-sm">
                      Checked in on time • Queue cleared in 14m
                    </span>
                    <span className="font-label-sm text-label-sm font-semibold text-primary">
                      Paid Online
                    </span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      className="flex-1 py-2.5 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 hover:bg-surface-variant transition-colors cursor-pointer"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                      View Invoice
                    </button>
                    <button
                      className="flex-1 py-2.5 px-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 hover:bg-primary-container transition-colors shadow-sm cursor-pointer"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">refresh</span>
                      Book Again
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Card 3: Completed */}
            {(activeFilter === 'all' || activeFilter === 'completed') && (
              <div
                className="booking-card bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md"
                data-status="completed"
              >
                <div className="p-space-md flex flex-col gap-space-md">
                  <div className="flex gap-space-md items-start">
                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container relative">
                      <img
                        alt="Indian vegetarian restaurant"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNF0rfh9XvdQYdv8xq0qki9ihH6eV8bcKSgZ4xh0Fzi404NUYpKjKPWGHMQTdt5iiFfKtTMGbEVIzGMW7HeLAn2yD2QpWQrtmbCS0n77dbLyb9UcKBhz6YP2qvC-BRKcSn_KXPmWHFl7SD5U2BVG0ilvLqf0axXU-acFm1rI1duNJSUTi7KQS0pLnCE4a43fPjLId07X42lA-3pQRugwKyuicxW2tyrb8FSw7D32LRiGO95wmC_Cio5g"
                      />
                      <span className="absolute bottom-1 right-1 bg-surface-container-lowest/90 px-1.5 py-0.5 rounded text-[10px] font-bold text-on-surface flex items-center gap-0.5">
                        <span
                          className="material-symbols-outlined text-[12px] text-tertiary-container"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>{' '}
                        4.6
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[14px]">check_circle</span>
                          Completed
                        </span>
                        <span className="font-label-md text-label-md font-bold text-primary">
                          Spot #34
                        </span>
                      </div>
                      <h2 className="font-title-sm text-title-sm text-on-surface font-bold truncate">
                        Saffron Pure Veg Dining &amp; Café
                      </h2>
                      <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-0.5 mt-0.5">
                        <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                        <span className="truncate">Near Yash Complex, Gotri</span>
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-label-sm text-label-sm text-outline">04 Sep 2026, 08:00 PM</span>
                        <span className="w-1 h-1 rounded-full bg-outline" />
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                          Table for 4
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <button
                      className="py-2.5 px-3 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-colors cursor-pointer"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">rate_review</span>
                      Rate Venue
                    </button>
                    <button
                      className="flex-1 py-2.5 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 hover:bg-primary-container transition-colors shadow-sm cursor-pointer"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">replay</span>
                      Book Again
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Card 4: Cancelled */}
            {(activeFilter === 'all' || activeFilter === 'cancelled') && (
              <div
                className="booking-card bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col opacity-90 transition-all hover:opacity-100"
                data-status="cancelled"
              >
                <div className="p-space-md flex flex-col gap-space-md">
                  <div className="flex gap-space-md items-start">
                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container relative filter grayscale-[30%]">
                      <img
                        alt="Vintage barbershop"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Dg7TZNexBSX_Dsv_4_UNSYZmiDxkgjrl2ap6s6-JQSelai-AvKRzs_nzYf14IMStkhgi7Dod5YKr-vJi9KEnmzWb0ssx7qr7TOdRkLPbU4prpdG_fZl3_j0_Wr1xVpepOD2yD_ot3Zvy64UfIaZ0RYn2DmU7i54hY_jQNXz2V4Yo1h6TsvI1YQdFqYW_ET89dYltFt3ixA1S6EWeu7nUruF5ZiramutbcWZti4K39gVEcxEaNMlDyg"
                      />
                      <span className="absolute bottom-1 right-1 bg-surface-container-lowest/90 px-1.5 py-0.5 rounded text-[10px] font-bold text-on-surface flex items-center gap-0.5">
                        <span
                          className="material-symbols-outlined text-[12px] text-tertiary-container"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>{' '}
                        4.8
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-secondary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">cancel</span>
                          Cancelled
                        </span>
                        <span className="font-label-md text-label-md font-medium text-outline line-through">
                          Spot #12
                        </span>
                      </div>
                      <h2 className="font-title-sm text-title-sm text-on-surface font-bold truncate">
                        Urban Cut &amp; Shave
                      </h2>
                      <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-0.5 mt-0.5">
                        <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                        <span className="truncate">Gotri, Vadodara</span>
                      </p>
                      <span className="font-label-sm text-label-sm text-outline mt-1">
                        28 Aug 2026, 02:15 PM
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface-container-low rounded-lg px-space-sm py-2 flex items-center justify-between text-on-surface-variant">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-error">info</span>
                      <span className="font-label-sm text-label-sm">Cancelled by user</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-outline">No penalty applied</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      className="w-full py-2.5 px-3 rounded-lg bg-surface-container text-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-colors cursor-pointer"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">restore</span>
                      Re-book Spot
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Customer 3-Tab Bottom Navigation Bar */}
      <nav
        className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)]"
      >
        <div className="max-w-container-max mx-auto flex justify-around items-center h-16 px-gutter-mobile">
          {/* Discover */}
          <button
            className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant transition-colors hover:text-on-surface cursor-pointer"
            onClick={() => onNavigateTab('discover')}
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">explore</span>
            <span className="font-label-sm text-label-sm">Discover</span>
          </button>

          {/* Booking (Active) */}
          <button
            aria-current="page"
            className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 transition-colors text-primary font-semibold cursor-pointer"
            onClick={() => onNavigateTab('booking')}
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">calendar_month</span>
            <span className="font-label-sm text-label-sm">Booking</span>
          </button>

          {/* Profile */}
          <button
            className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant transition-colors hover:text-on-surface cursor-pointer"
            onClick={() => onNavigateTab('profile')}
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">person</span>
            <span className="font-label-sm text-label-sm">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};
