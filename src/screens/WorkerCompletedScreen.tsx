import React from 'react';

interface WorkerCompletedScreenProps {
  onNavigateTab: (tab: 'queue' | 'completed' | 'profile') => void;
}

export const WorkerCompletedScreen: React.FC<WorkerCompletedScreenProps> = ({
  onNavigateTab,
}) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between pb-24 font-sans">
      {/* TOP HEADER */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              alt="GET SPOT"
              className="h-10 sm:h-12 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjaN-gu8BbUtGynlwC3Yjv2SmKvHLwufI8peJ7g6WABTlEy6QzDVQlo4_Q3ZFQrOgmPiQGysWRLM5Mr5UN6Z32vTMoTk8POYgjLoI1Y_UtplMoJy3Z0_o_9aWS9vPSb-GUcDWCuuYfu5eEKjsz4kXE0rYID1TbqzyjRIJPRW6P7ZdKwYVNu2fn-Y8fRIMEJ1idF16pp0dj6ZDRywl-jE5RHlNjynKm8lWRepe74-m-_JX714lSLBKphrQKxU_KRkNuinc"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-900 font-bold text-lg md:text-xl tracking-tight">
              Classic Cuts Barbershop
            </span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT: SIMPLE & PRACTICAL COMPLETED STATS */}
      <main className="flex-grow max-w-xl w-full mx-auto px-4 sm:px-6 pt-6 pb-28">
        {/* Screen Title */}
        <div className="mb-5">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                COMPLETED
              </span>
              <h1 className="text-xl font-bold text-slate-900">Customer Service History</h1>
            </div>
          </div>

          {/* Summary Banner */}
          <div className="grid grid-cols-2 bg-slate-50 border border-slate-200 rounded-xl divide-x divide-slate-200 shadow-sm overflow-hidden">
            <div className="p-3.5 sm:p-4">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Total Weekly
                </span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900">24</span>
                <span className="text-xs text-slate-500 font-medium">Customers</span>
              </div>
            </div>
            <div className="p-3.5 sm:p-4">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Total Monthly
                </span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900">47</span>
                <span className="text-xs text-slate-500 font-medium">Customers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction / Service History List */}
        <div className="space-y-6">
          {/* Group 1: TODAY */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
              Today, 24 Sep
            </div>
            <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 shadow-sm overflow-hidden">
              {/* Item 1 */}
              <div className="flex items-center justify-between p-3.5 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 leading-tight">Amit Shah</div>
                    <div className="text-xs text-slate-500 mt-0.5">Token #19</div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-3">
                  <div className="text-xs font-semibold text-slate-900">11:05 AM</div>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 mt-0.5">
                    Completed
                  </span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between p-3.5 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 leading-tight">Rahul Patel</div>
                    <div className="text-xs text-slate-500 mt-0.5">Token #18</div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-3">
                  <div className="text-xs font-semibold text-slate-900">10:42 AM</div>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 mt-0.5">
                    Completed
                  </span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center justify-between p-3.5 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 leading-tight">Suresh Gupta</div>
                    <div className="text-xs text-slate-500 mt-0.5">Token #17</div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-3">
                  <div className="text-xs font-semibold text-slate-900">10:15 AM</div>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 mt-0.5">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Group 2: YESTERDAY */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
              Yesterday, 23 Sep
            </div>
            <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 shadow-sm overflow-hidden">
              {/* Item 1 */}
              <div className="flex items-center justify-between p-3.5 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 leading-tight">Vishal Patel</div>
                    <div className="text-xs text-slate-500 mt-0.5">Token #15</div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-3">
                  <div className="text-xs font-semibold text-slate-900">6:47 PM</div>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 mt-0.5">
                    Completed
                  </span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between p-3.5 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 leading-tight">Jay Mehta</div>
                    <div className="text-xs text-slate-500 mt-0.5">Token #14</div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-3">
                  <div className="text-xs font-semibold text-slate-900">6:20 PM</div>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 mt-0.5">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Worker Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 py-2.5 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-around md:justify-center md:gap-16">
          {/* Live Queue */}
          <button
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-900 font-medium text-xs transition-colors cursor-pointer"
            onClick={() => onNavigateTab('queue')}
            type="button"
          >
            <span className="material-symbols-outlined text-2xl leading-none">format_list_bulleted</span>
            <span>Live Queue</span>
          </button>

          {/* Completed (Active) */}
          <button
            className="flex flex-col items-center gap-1 text-blue-600 font-semibold text-xs transition-colors cursor-pointer"
            onClick={() => onNavigateTab('completed')}
            type="button"
          >
            <span className="material-symbols-outlined text-2xl leading-none">check_circle</span>
            <span>Completed</span>
          </button>

          {/* Profile */}
          <button
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-900 font-medium text-xs transition-colors cursor-pointer"
            onClick={() => onNavigateTab('profile')}
            type="button"
          >
            <span className="material-symbols-outlined text-2xl leading-none">person</span>
            <span>Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};
