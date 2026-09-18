import React, { useState } from 'react';

interface WelcomeScreenProps {
  onSelectRole: (role: 'customer' | 'worker') => void;
  onGoToRoleSelection: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onSelectRole,
  onGoToRoleSelection,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleGoogleClick = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      onGoToRoleSelection();
    }, 400);
  };

  const handleRoleSelect = (role: 'customer' | 'worker') => {
    setIsModalOpen(false);
    onSelectRole(role);
  };

  return (
    <div className="bg-white font-sans text-slate-900 antialiased min-h-screen flex flex-col pt-safe pb-safe selection:bg-red-100 selection:text-red-700">
      <main className="flex-1 flex flex-col relative w-full px-5 sm:px-8 bg-white max-w-lg mx-auto justify-between py-6 sm:py-10">
        {/* TOP SECTION: Centered Logo & Brief Intro */}
        <div className="flex flex-col items-start text-left pt-2 sm:pt-4 w-full">
          {/* Left-aligned Official GET SPOT Logo */}
          <div className="w-full flex justify-start items-center mb-3">
            <img
              alt="GET SPOT"
              className="h-14 sm:h-16 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAduYZoz4Ipa4kGR2CJ-A78ZWPwflxGoFq1p7VnUTxg5wHLDO9TbuwIBV6r9Ku9FfHBQmLywBPFoeQI3Duf5cFcGOEoTmGDba-kiAQNWxCNSonOOab9UUv63VPQHoewIj8464fgiUSzGbRqt4DWFrNdBScZjuFEiNkQQDWKndV_vJVHQ9_ysL64QZKQ_TNWFuvvIADXnRGUCqX2_6R31VfiTP_J8Bt6-s1qfEB99yhfzlz4M02LwEQamr_Hm6d9sUkZpeE"
            />
          </div>
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-snug">
            Smart queueing &amp; live spot tracking
          </p>
        </div>

        {/* CENTER SECTION: 2D Minimal Branded Animation & Tagline */}
        <div className="flex flex-col items-center justify-center my-8 sm:my-10">
          <div className="w-full max-w-[280px] bg-slate-50/70 border border-slate-100 rounded-2xl p-4 flex flex-col items-center justify-center">
            {/* Minimal 2D Vector Map Canvas */}
            <div className="relative w-full h-28 flex items-center justify-center overflow-visible">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 210 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Abstract Map Road Grid Lines */}
                <path d="M 10 32 H 200" stroke="#E2E8F0" strokeWidth="1.75" strokeLinecap="round" />
                <path d="M 10 76 H 200" stroke="#E2E8F0" strokeWidth="1.75" strokeLinecap="round" />
                <path d="M 62 10 V 90" stroke="#E2E8F0" strokeWidth="1.75" strokeLinecap="round" />
                <path d="M 148 10 V 90" stroke="#E2E8F0" strokeWidth="1.75" strokeLinecap="round" />
                <path
                  d="M 10 92 C 55 92, 75 42, 120 42 C 165 42, 175 14, 205 14"
                  stroke="#CBD5E1"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  opacity="0.55"
                />

                {/* User Origin Stationary Pulse Ring */}
                <circle
                  className="user-pulse-ring"
                  cx="36"
                  cy="76"
                  r="6"
                  fill="none"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                />
                <circle cx="36" cy="76" r="3.5" fill="#94A3B8" opacity="0.7" />

                {/* Base Dashed Route Guidance */}
                <path
                  d="M 36 76 C 54 76, 68 58, 102 54 C 132 50, 146 38, 168 28"
                  stroke="#CBD5E1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="3 5"
                />

                {/* Active Animated Dynamic Route Layer */}
                <path
                  className="route-active-line"
                  d="M 36 76 C 54 76, 68 58, 102 54 C 132 50, 146 38, 168 28"
                  stroke="#DC2626"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Ripple expanding when spot reached */}
                <circle
                  className="spot-ripple-circle"
                  cx="168"
                  cy="28"
                  r="12"
                  fill="none"
                  stroke="#DC2626"
                />

                {/* Gliding User Location Dot */}
                <g className="user-nav-dot">
                  <circle
                    cx="0"
                    cy="0"
                    r="6.5"
                    fill="#0F172A"
                    filter="drop-shadow(0 1px 2px rgba(15,23,42,0.3))"
                  />
                  <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
                </g>

                {/* Spot Arrival Badge Popover */}
                <g className="spot-badge-group" transform="translate(168, 6)">
                  <rect x="-24" y="-14" width="48" height="14" rx="7" fill="#0F172A" />
                  <text
                    x="0"
                    y="-4"
                    fill="#FFFFFF"
                    fontSize="8.5"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontWeight="700"
                    letterSpacing="0.04em"
                    textAnchor="middle"
                  >
                    GET SPOT
                  </text>
                  <polygon points="-3,0 3,0 0,3" fill="#0F172A" />
                </g>

                {/* Destination Red Map Pin */}
                <g className="spot-marker-group">
                  <ellipse cx="168" cy="28" rx="4.5" ry="2" fill="#0F172A" opacity="0.18" />
                  <g transform="translate(168, 28)">
                    <path
                      d="M 0 0 C -1.5 -2 -9 -11.5 -9 -17.5 C -9 -22.5 -5 -26.5 0 -26.5 C 5 -26.5 9 -22.5 9 -17.5 C 9 -11.5 1.5 -2 0 0 Z"
                      fill="#DC2626"
                      filter="drop-shadow(0 2px 3px rgba(220,38,38,0.35))"
                    />
                    <circle cx="0" cy="-17.5" r="3.5" fill="#FFFFFF" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Authentication & Terms */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-sm flex flex-col gap-4">
            {/* Prominent 'Continue with Google' Button */}
            <button
              className="w-full min-h-[52px] py-3.5 px-5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-sm active:scale-[0.99] transition-all duration-150 ease-in-out rounded-xl flex items-center justify-center gap-3.5 text-slate-800 font-semibold text-base select-none cursor-pointer group"
              id="googleAuthBtn"
              type="button"
              onClick={handleGoogleClick}
            >
              <svg aria-hidden="true" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                <path
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  fill="#4285F4"
                />
                <path
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  fill="#34A853"
                />
                <path
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  fill="#EA4335"
                />
              </svg>
              <span className="tracking-tight" id="googleBtnText">
                {isConnecting ? 'Connecting...' : 'Continue with Google'}
              </span>
            </button>

            <div className="w-full pt-1 pb-0.5 text-center flex flex-col items-center gap-3">
              <div className="grid grid-cols-3 gap-2 w-full pt-1.5">
                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-transparent">
                  <svg
                    className="w-5 h-5 mb-1 text-[#2563eb]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="font-bold text-[11px] text-slate-900 tracking-wider uppercase">
                    FIND
                  </span>
                  <span className="text-[11px] text-slate-500 leading-tight mt-0.5">
                    Nearby businesses
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-transparent">
                  <svg
                    className="w-5 h-5 mb-1 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                    <path d="M13 5v2" />
                    <path d="M13 17v2" />
                    <path d="M13 11v2" />
                  </svg>
                  <span className="font-bold text-[11px] text-red-600 tracking-wider uppercase">
                    GET SPOT
                  </span>
                  <span className="text-[11px] text-slate-500 leading-tight mt-0.5">
                    Join the live queue
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-transparent">
                  <svg
                    className="w-5 h-5 mb-1 text-[#f59e0b]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                  <span className="font-bold text-[11px] text-slate-900 tracking-wider uppercase">
                    ARRIVE
                  </span>
                  <span className="text-[11px] text-slate-500 leading-tight mt-0.5">
                    Come when your turn is near
                  </span>
                </div>
              </div>
            </div>

            {/* Terms & Privacy Links */}
            <p className="text-center text-xs text-slate-400 leading-relaxed px-2">
              By continuing, you agree to our{' '}
              <span className="text-slate-600 hover:text-slate-900 underline underline-offset-2 transition-colors cursor-pointer">
                Terms of Service
              </span>{' '}
              and{' '}
              <span className="text-slate-600 hover:text-slate-900 underline underline-offset-2 transition-colors cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </div>
      </main>

      {/* ROLE SELECTION MODAL / BOTTOM SHEET */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-200"
          id="roleSelectionModal"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-2xl p-6 sm:p-7 shadow-2xl transition-transform duration-250 ease-out border border-slate-100 flex flex-col gap-5"
            id="roleModalContent"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  GET SPOT Account
                </span>
                <h3 className="text-xl font-bold font-display text-slate-900 tracking-tight mt-0.5">
                  Who are you?
                </h3>
              </div>
              <button
                aria-label="Close"
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
                id="closeModalBtn"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                <span className="material-symbols-outlined text-xl leading-none">close</span>
              </button>
            </div>

            {/* Role Options */}
            <div className="flex flex-col gap-3 pt-1">
              {/* Customer Option */}
              <button
                className="role-card group w-full text-left p-4 rounded-xl border border-slate-200 hover:border-red-500 hover:bg-red-50/40 active:scale-[0.99] transition-all flex items-start gap-3.5 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
                type="button"
                onClick={() => handleRoleSelect('customer')}
              >
                <div className="w-10 h-10 rounded-lg bg-red-100/80 text-red-600 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">person</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-semibold text-base text-slate-900 group-hover:text-red-600 transition-colors">
                      I’m a Customer
                    </span>
                    <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-red-600 group-hover:translate-x-0.5 transition-all">
                      arrow_forward
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Find businesses and get your digital spot
                  </p>
                </div>
              </button>

              {/* Worker Option */}
              <button
                className="role-card group w-full text-left p-4 rounded-xl border border-slate-200 hover:border-slate-800 hover:bg-slate-50 active:scale-[0.99] transition-all flex items-start gap-3.5 focus:outline-none focus:ring-2 focus:ring-slate-800 cursor-pointer"
                type="button"
                onClick={() => handleRoleSelect('worker')}
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">storefront</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-semibold text-base text-slate-900 group-hover:text-slate-900 transition-colors">
                      I’m a Worker
                    </span>
                    <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-slate-800 group-hover:translate-x-0.5 transition-all">
                      arrow_forward
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Manage your business and live queue
                  </p>
                </div>
              </button>
            </div>

            <div className="pt-1 pb-1 text-center">
              <p className="text-[11px] text-slate-400">
                You can switch or link accounts anytime in Settings
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
