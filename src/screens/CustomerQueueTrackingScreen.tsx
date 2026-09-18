import React from 'react';

interface CustomerQueueTrackingScreenProps {
  onBack: () => void;
  shopName?: string;
}

export const CustomerQueueTrackingScreen: React.FC<CustomerQueueTrackingScreenProps> = ({
  onBack,
  shopName = 'XYZ Luxury Salon & Spa',
}) => {
  return (
    <div className="bg-[#FAF8FF] min-h-screen text-[#1A1A2E] flex justify-center pb-12 font-sans antialiased">
      <div className="w-full max-w-[430px] min-h-screen bg-[#FAF8FF] flex flex-col shadow-xl relative border-x border-slate-100">
        {/* Top Sticky Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              aria-label="Go back"
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 flex items-center justify-center text-slate-700 transition cursor-pointer"
              onClick={onBack}
              type="button"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black tracking-tight text-slate-900 leading-tight">
                  {shopName}
                </h1>
              </div>
              <p className="text-xs font-semibold text-slate-400">Live queue &amp; token tracking</p>
            </div>
          </div>
        </header>

        {/* Main Content Flow */}
        <main className="flex-1 px-4 pt-4 space-y-4">
          {/* Queue Summary Stats Card */}
          <section className="bg-white rounded-2xl p-4 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-3 divide-x divide-slate-100 text-center">
              <div className="px-2">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Serving
                </span>
                <span className="text-2xl font-black text-emerald-600 mt-0.5 block leading-tight">2</span>
                <span className="text-[10px] font-medium text-slate-400 block mt-0.5">stations active</span>
              </div>
              <div className="px-2">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Waiting
                </span>
                <span className="text-2xl font-black text-blue-600 mt-0.5 block leading-tight">3</span>
                <span className="text-[10px] font-medium text-slate-400 block mt-0.5">in queue</span>
              </div>
              <div className="px-2">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Est. Wait
                </span>
                <span className="text-2xl font-black text-slate-900 mt-0.5 block leading-tight">
                  ~15<span className="text-sm font-bold text-slate-500">m</span>
                </span>
                <span className="text-[10px] font-medium text-slate-400 block mt-0.5">avg. turnaround</span>
              </div>
            </div>
          </section>

          {/* Active User Spot Highlight Banner */}
          <section className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-4 text-white shadow-[0_8px_25px_-5px_rgba(220,38,38,0.35)] relative overflow-hidden">
            {/* Background Pattern subtle */}
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-wider shadow-sm">
                    YOUR SPOT
                  </span>
                  <span className="text-xs font-semibold text-red-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping" />
                    Active Pass
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold text-red-100">Token</span>
                  <span className="text-2xl font-black text-white ml-1.5">#4</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-white/20 grid grid-cols-2 gap-3 items-center">
                <div className="bg-white/15 rounded-xl px-3 py-2 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold text-red-100 uppercase tracking-wide">
                    Queue Position
                  </p>
                  <p className="text-sm font-extrabold text-white mt-0.5 flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    1 person ahead
                  </p>
                </div>
                <div className="bg-white/15 rounded-xl px-3 py-2 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold text-red-100 uppercase tracking-wide">
                    Estimated Wait
                  </p>
                  <p className="text-sm font-extrabold text-white mt-0.5 flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    ~10 min estimated wait
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-red-100 bg-black/15 px-3 py-2 rounded-xl">
                <span className="flex items-center gap-1.5 font-medium">
                  🔔 Your turn is approaching soon. Please head toward {shopName}.
                </span>
              </div>
            </div>
          </section>

          {/* Section: CURRENTLY SERVING */}
          <section className="space-y-2.5 pt-1">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <h2 className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Currently Serving
                </h2>
              </div>
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">
                2 in service
              </span>
            </div>
            {/* Token #1 */}
            <div className="bg-white rounded-2xl p-3.5 border border-slate-200/60 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col items-center justify-center text-emerald-700 font-black shrink-0">
                  <span className="text-[9px] font-bold uppercase leading-none text-emerald-600">TOKEN</span>
                  <span className="text-lg font-black leading-none mt-0.5">#1</span>
                </div>
                <div>
                  <span className="text-base font-black text-slate-900">Token #1</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  In Service
                </span>
              </div>
            </div>
            {/* Token #2 */}
            <div className="bg-white rounded-2xl p-3.5 border border-slate-200/60 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col items-center justify-center text-emerald-700 font-black shrink-0">
                  <span className="text-[9px] font-bold uppercase leading-none text-emerald-600">TOKEN</span>
                  <span className="text-lg font-black leading-none mt-0.5">#2</span>
                </div>
                <div>
                  <span className="text-base font-black text-slate-900">Token #2</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  In Service
                </span>
              </div>
            </div>
          </section>

          {/* Section: WAITING */}
          <section className="space-y-2.5 pt-2">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <h2 className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Waiting Line
                </h2>
              </div>
              <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/50">
                3 in queue
              </span>
            </div>

            {/* Token #3 */}
            <div className="bg-white rounded-2xl p-3.5 border border-slate-200/60 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex flex-col items-center justify-center text-slate-700 font-black shrink-0">
                  <span className="text-[9px] font-bold uppercase leading-none text-slate-400">TOKEN</span>
                  <span className="text-lg font-black leading-none mt-0.5">#3</span>
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900">Token #3</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Waiting
                </span>
              </div>
            </div>

            {/* Token #4: YOUR SPOT */}
            <div className="bg-red-50/70 rounded-2xl p-3.5 border-2 border-red-500 shadow-sm flex items-center justify-between relative">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-red-600 flex flex-col items-center justify-center text-white font-black shrink-0 shadow-sm">
                  <span className="text-[9px] font-black uppercase leading-none text-red-200">TOKEN</span>
                  <span className="text-lg font-black leading-none mt-0.5">#4</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-black text-slate-900">Token #4</p>
                    <span className="px-1.5 py-0.5 bg-red-600 text-white text-[9px] font-black rounded-md uppercase tracking-wider">
                      YOUR SPOT
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-red-600 mt-0.5">1 person ahead • ~10 min wait</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-red-600 text-white text-xs font-black flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Waiting
                </span>
              </div>
            </div>

            {/* Token #5 */}
            <div className="bg-white rounded-2xl p-3.5 border border-slate-200/60 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex flex-col items-center justify-center text-slate-700 font-black shrink-0">
                  <span className="text-[9px] font-bold uppercase leading-none text-slate-400">TOKEN</span>
                  <span className="text-lg font-black leading-none mt-0.5">#5</span>
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900">Token #5</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Waiting
                </span>
              </div>
            </div>
          </section>

          <div className="pt-2">
            <p className="text-center font-bold text-slate-700 text-base tracking-tight py-2">
              Get Your Spot. Skip the wait
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};
