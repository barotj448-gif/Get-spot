import React, { useState } from 'react';

interface WorkerLiveQueueScreenProps {
  onNavigateTab: (tab: 'queue' | 'completed' | 'profile') => void;
}

interface QueueItem {
  id: string;
  name: string;
  token: string;
  status: 'active' | 'waiting';
}

export const WorkerLiveQueueScreen: React.FC<WorkerLiveQueueScreenProps> = ({
  onNavigateTab,
}) => {
  const [activeQueue, setActiveQueue] = useState<QueueItem[]>([
    { id: '1', name: 'Rahul Patel', token: 'Token #01', status: 'active' },
    { id: '2', name: 'Amit Shah', token: 'Token #02', status: 'active' },
  ]);

  const [waitingQueue, setWaitingQueue] = useState<QueueItem[]>([
    { id: '3', name: 'Jay Patel', token: 'Token #03', status: 'waiting' },
    { id: '4', name: 'Vishal Mehta', token: 'Token #04', status: 'waiting' },
  ]);

  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleCallNext = (item: QueueItem) => {
    setAlertMessage(`Calling ${item.name} (${item.token}) to station!`);
    setTimeout(() => setAlertMessage(null), 2500);
  };

  const handleComplete = (item: QueueItem) => {
    setActiveQueue((prev) => prev.filter((q) => q.id !== item.id));
    if (waitingQueue.length > 0) {
      const [nextUp, ...remaining] = waitingQueue;
      setWaitingQueue(remaining);
      setActiveQueue((prev) => [...prev, { ...nextUp, status: 'active' }]);
      setAlertMessage(`${item.name} completed. ${nextUp.name} called to station!`);
    } else {
      setAlertMessage(`${item.name} completed.`);
    }
    setTimeout(() => setAlertMessage(null), 2500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between pb-24 font-sans">
      {/* Top Navigation / Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img
              alt="GET SPOT Logo"
              className="h-10 sm:h-12 w-auto object-contain object-left"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfDEtUo5zDa5QXkIGtAKiwXWEmigC7H1-pLIL6wdn_5na_du1veCEHILmXSQnia00wGIyCkHQxhImjHMasVIBODKtpawG9njNoyAeE8wq35EWXY04xhkRaIw0NA2EGtdm3G8fIYTb49kLwfH33_gyh05uzaGS8GXqDFtlDmu4EfM8eaZARmYLoqJ7nfSTGuB4jxIh6uBSHYv88TR8Tent1u9_E4eUM43QLQ12QzdwA6q3a6C-ERzgkFaGciXiYIOd2ydk"
            />
          </div>
        </div>
      </header>

      {/* Alert toast notification */}
      {alertMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{alertMessage}</span>
        </div>
      )}

      {/* Main Content Area: Responsive Grid */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT SIDE: Large Shop Banner / Shop Photo & Shop Name */}
          <div className="lg:col-span-5 w-full">
            <div className="lg:sticky lg:top-28 space-y-4">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <img
                  alt="Classic Cuts Barbershop"
                  className="w-full h-56 sm:h-72 lg:h-80 object-cover object-center rounded-xl"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Xsl6dvyswFG2MF9vTGJu6iW4nTFIqyhfum7KioMmScSKv9aymy8_tlAWj1nnz4Yhlut5XskYgkA9see-NrMlRu5RQH9pkZCVFMKpk5E7swY1pRM8jhNBuTRjGLhWiibGtj6VfptNd7PUayMcVMWgXEevXSZzvl7VvEiYxvPiHYQhia13IecVHJaN-KHCeBaRo5BiGNV9wGocjJRDV_0BxFMgrmWWXFXBASjx3NJEVhFilgrF7t3KwnENk"
                />
              </div>
              <div className="pt-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Classic Cuts Barbershop
                </h1>
                <p className="text-sm text-slate-500 mt-1 font-medium">
                  Shop 14, High Street Market, Downtown
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Live Queue (#1, #2 Active; Divider; #3, #4 Waiting) */}
          <div className="lg:col-span-7 w-full">
            <div className="border border-slate-200 rounded-lg p-5 sm:p-7 shadow-sm bg-white">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                    Live Serving &amp; Queue
                  </h2>
                </div>
              </div>

              {/* ACTIVE CUSTOMERS */}
              <div className="space-y-4">
                {activeQueue.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50/70 shadow-sm"
                  >
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-slate-900 tracking-tight whitespace-nowrap">
                        {item.name}
                      </span>
                      <span className="text-sm font-medium text-slate-500">{item.token}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#2563eb] text-white hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap cursor-pointer"
                        onClick={() => handleCallNext(item)}
                        type="button"
                      >
                        Call Next
                      </button>
                      <button
                        className="px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
                        onClick={() => handleComplete(item)}
                        type="button"
                      >
                        <span>Complete</span>
                        <span>✓</span>
                      </button>
                    </div>
                  </div>
                ))}
                {activeQueue.length === 0 && (
                  <div className="p-6 text-center text-sm text-slate-500 border border-dashed rounded-xl">
                    No active spots in service right now.
                  </div>
                )}
              </div>

              {/* ONE LONG HORIZONTAL DIVIDER */}
              <div className="my-6 border-t-2 border-slate-200" />

              {/* WAITING CUSTOMERS */}
              <div className="space-y-4">
                {waitingQueue.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-200/80 bg-white hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-slate-900 tracking-tight whitespace-nowrap">
                        {item.name}
                      </span>
                      <span className="text-sm font-medium text-slate-500">{item.token}</span>
                    </div>
                    <div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 whitespace-nowrap">
                        Waiting
                      </span>
                    </div>
                  </div>
                ))}
                {waitingQueue.length === 0 && (
                  <div className="p-4 text-center text-xs text-slate-400">
                    No customers waiting in line.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Clean Minimalist Footer */}
      <footer className="border-t border-slate-200 py-6 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <span>GET SPOT Live Queue Management</span>
        </div>
      </footer>

      {/* Worker Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 py-2.5 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-around md:justify-center md:gap-16">
          {/* Live Queue (Active) */}
          <button
            className="flex flex-col items-center gap-1 text-blue-600 font-semibold text-xs transition-colors cursor-pointer"
            onClick={() => onNavigateTab('queue')}
            type="button"
          >
            <span className="material-symbols-outlined text-2xl leading-none">format_list_bulleted</span>
            <span>Live Queue</span>
          </button>

          {/* Completed */}
          <button
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-900 font-medium text-xs transition-colors cursor-pointer"
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
