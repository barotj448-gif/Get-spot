import React from 'react';

interface WelcomeScreenProps {
  onNext: () => void;
  onSelectRole?: (role: 'customer' | 'worker') => void;
  onGoToRoleSelection?: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onNext,
  onGoToRoleSelection,
}) => {
  const handleNext = () => {
    if (onNext) {
      onNext();
    } else if (onGoToRoleSelection) {
      onGoToRoleSelection();
    }
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
            {/* 'Next' Button */}
            <button
              className="w-full min-h-[52px] py-3.5 px-5 bg-slate-900 hover:bg-slate-800 text-white shadow-sm active:scale-[0.99] transition-all duration-150 ease-in-out rounded-xl flex items-center justify-center text-center font-semibold text-base select-none cursor-pointer tracking-tight"
              id="nextBtn"
              type="button"
              onClick={handleNext}
            >
              Next
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
    </div>
  );
};
