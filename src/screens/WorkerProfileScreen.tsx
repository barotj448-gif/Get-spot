import React, { useState } from 'react';

interface WorkerProfileScreenProps {
  onNavigateTab: (tab: 'queue' | 'completed' | 'profile') => void;
  onLogout: () => void;
}

export const WorkerProfileScreen: React.FC<WorkerProfileScreenProps> = ({
  onNavigateTab,
  onLogout,
}) => {
  const [shopName, setShopName] = useState('Classic Cuts Barbershop');
  const [workerName, setWorkerName] = useState('Marcus Vance');
  const [email, setEmail] = useState('marcus.vance@getspot.com');
  const [location, setLocation] = useState('Shop 14, High Street Market, Downtown, Sector 4');
  const [activeCapacity, setActiveCapacity] = useState('2');
  const [avgTime, setAvgTime] = useState('15 min');

  const [editingField, setEditingField] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between font-sans">
      {/* Top Navigation / Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img
              alt="GET SPOT Logo"
              className="h-10 sm:h-12 w-auto object-contain object-left"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVTwE0YWspHZsW3DzgnKBGUJlJDTdMax8qOhXeanRxotbd3AOycmep9tFMt-VbPZbYuDojAd6cgiYg5eaEACTDVmuWM7X9qt3Mw5JN1Uzif2hVURFQ9iIRVmL-oI1LmS2EY_xNEEzRxOb1ZySsN6JG0VlfmCNV-Wiqx6ZaZIrjVhJw6xkGyWJD2e8NnbKu0OZzn4Yyn3fsTlI5IxfS3XXU3mhlBLGwiKzwlEQJ2CS551TUfFNM_IIZM9KPN1i3d1M7nC0"
            />
          </div>
          <button
            className="text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200 cursor-pointer"
            onClick={onLogout}
            type="button"
          >
            Log Out
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-grow max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 pb-28">
        {/* Worker Profile Photo Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="relative">
                <img
                  alt="Worker Profile Photo"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-slate-200 shadow-sm"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1W_tcBMOiW9RjQiMT5HLcL-HMYyPKCCosDN_8lqENYJr8u5AjDZgjtrT9AiMmQk0v17Zdb0nDSUfyGNi9RrHlD9NbEN3vPUotUUYSfWcxqpeX4ZSpjKP6RVwBhVQ3JpRek1Q2c9BjAHR3mw2yL-xiQiBXotgTKWlJGgm94b5lCZVZ7sr2Y3Ie6nES4KUfemn4VfYrWpjmR6EFO9cpqojHu5T7tLB61Jtdk3Be0ZUbcm-eJRBn_3NWfDaRpf"
                />
                <button
                  className="absolute bottom-0 right-0 bg-white border border-slate-300 rounded-full p-1.5 shadow-sm text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
                  title="Change photo"
                  type="button"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Worker Account
                </span>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900">{workerName}</h1>
                <p className="text-sm text-slate-500">Master Barber &amp; Shop Manager</p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 px-6 py-3 rounded-2xl text-center shadow-sm sm:self-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#2563eb] leading-tight">100</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 mt-0.5 whitespace-nowrap">
                Followers
              </div>
            </div>
          </div>
        </div>

        {/* Large Shop Banner / Cover Photo */}
        <div className="mb-8 relative rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
          <img
            alt="Shop Cover Banner"
            className="w-full h-44 sm:h-60 md:h-72 object-cover object-center"
            src="https://lh3.googleusercontent.com/aida/AEtjO1Xsl6dvyswFG2MF9vTGJu6iW4nTFIqyhfum7KioMmScSKv9aymy8_tlAWj1nnz4Yhlut5XskYgkA9see-NrMlRu5RQH9pkZCVFMKpk5E7swY1pRM8jhNBuTRjGLhWiibGtj6VfptNd7PUayMcVMWgXEevXSZzvl7VvEiYxvPiHYQhia13IecVHJaN-KHCeBaRo5BiGNV9wGocjJRDV_0BxFMgrmWWXFXBASjx3NJEVhFilgrF7t3KwnENk"
          />
          <button
            className="absolute top-3 right-3 bg-white/95 backdrop-blur-none border border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
            type="button"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            Edit Cover
          </button>
        </div>

        {/* Shop & Worker Details List */}
        <div className="space-y-6">
          {/* Shop Name */}
          <div className="flex items-center justify-between py-3.5 border-b border-slate-200">
            <div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide block">Shop Name</span>
              {editingField === 'shopName' ? (
                <input
                  autoFocus
                  className="text-base sm:text-lg font-semibold text-slate-900 border-b-2 border-blue-600 outline-none mt-0.5 px-1 py-0.5 rounded-sm focus:ring-2 focus:ring-blue-500/20 focus:bg-blue-50/40 transition-all"
                  value={shopName}
                  onBlur={() => setEditingField(null)}
                  onChange={(e) => setShopName(e.target.value)}
                />
              ) : (
                <p className="text-base sm:text-lg font-semibold text-slate-900 mt-0.5">{shopName}</p>
              )}
            </div>
            <button
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
              onClick={() => setEditingField(editingField === 'shopName' ? null : 'shopName')}
              type="button"
            >
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              {editingField === 'shopName' ? 'Done' : 'Edit'}
            </button>
          </div>

          {/* Worker Name */}
          <div className="flex items-center justify-between py-3.5 border-b border-slate-200">
            <div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide block">Worker Name</span>
              {editingField === 'workerName' ? (
                <input
                  autoFocus
                  className="text-base sm:text-lg font-semibold text-slate-900 border-b-2 border-blue-600 outline-none mt-0.5 px-1 py-0.5 rounded-sm focus:ring-2 focus:ring-blue-500/20 focus:bg-blue-50/40 transition-all"
                  value={workerName}
                  onBlur={() => setEditingField(null)}
                  onChange={(e) => setWorkerName(e.target.value)}
                />
              ) : (
                <p className="text-base sm:text-lg font-semibold text-slate-900 mt-0.5">{workerName}</p>
              )}
            </div>
            <button
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
              onClick={() => setEditingField(editingField === 'workerName' ? null : 'workerName')}
              type="button"
            >
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              {editingField === 'workerName' ? 'Done' : 'Edit'}
            </button>
          </div>

          {/* Email */}
          <div className="flex items-center justify-between py-3.5 border-b border-slate-200">
            <div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide block">Email</span>
              {editingField === 'email' ? (
                <input
                  autoFocus
                  className="text-base sm:text-lg font-medium text-slate-900 border-b-2 border-blue-600 outline-none mt-0.5 px-1 py-0.5 rounded-sm focus:ring-2 focus:ring-blue-500/20 focus:bg-blue-50/40 transition-all"
                  value={email}
                  onBlur={() => setEditingField(null)}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <p className="text-base sm:text-lg font-medium text-slate-900 mt-0.5">{email}</p>
              )}
            </div>
            <button
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
              onClick={() => setEditingField(editingField === 'email' ? null : 'email')}
              type="button"
            >
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              {editingField === 'email' ? 'Done' : 'Edit'}
            </button>
          </div>

          {/* Location */}
          <div className="flex items-center justify-between py-3.5 border-b border-slate-200">
            <div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide block">Location</span>
              {editingField === 'location' ? (
                <input
                  autoFocus
                  className="text-base sm:text-lg font-medium text-slate-900 border-b-2 border-blue-600 outline-none mt-0.5 px-1 py-0.5 rounded-sm focus:ring-2 focus:ring-blue-500/20 focus:bg-blue-50/40 transition-all"
                  value={location}
                  onBlur={() => setEditingField(null)}
                  onChange={(e) => setLocation(e.target.value)}
                />
              ) : (
                <p className="text-base sm:text-lg font-medium text-slate-900 mt-0.5">{location}</p>
              )}
            </div>
            <button
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
              onClick={() => setEditingField(editingField === 'location' ? null : 'location')}
              type="button"
            >
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              {editingField === 'location' ? 'Done' : 'Edit'}
            </button>
          </div>

          {/* Operational Capacities Section */}
          <div className="pt-4 space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700">Queue &amp; Serving Parameters</h2>

            {/* How many customers do you serve at one time? */}
            <div className="flex items-center justify-between py-3.5 border-b border-slate-200">
              <div className="pr-4">
                <span className="text-xs sm:text-sm font-medium text-slate-600 block">
                  How many customers do you serve at one time?
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">{activeCapacity}</span>
                  <span className="text-xs text-slate-500">simultaneous spots active</span>
                </div>
              </div>
              <button
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
                onClick={() => setActiveCapacity(activeCapacity === '2' ? '3' : '2')}
                type="button"
              >
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                Edit
              </button>
            </div>

            {/* How much time does it take to complete one customer? */}
            <div className="flex items-center justify-between py-3.5 border-b border-slate-200">
              <div className="pr-4">
                <span className="text-xs sm:text-sm font-medium text-slate-600 block">
                  Approx Average Service Time per Customer
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">{avgTime}</span>
                  <span className="text-xs text-slate-500">average turnaround per customer</span>
                </div>
              </div>
              <button
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
                onClick={() => setAvgTime(avgTime === '15 min' ? '20 min' : '15 min')}
                type="button"
              >
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                Edit
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Clean Minimalist Footer */}
      <footer className="border-t border-slate-200 py-6 bg-white mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <span>GET SPOT Worker Management</span>
          <span>Profile &amp; Shop Settings • All details synchronized</span>
        </div>
      </footer>

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

          {/* Completed */}
          <button
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-900 font-medium text-xs transition-colors cursor-pointer"
            onClick={() => onNavigateTab('completed')}
            type="button"
          >
            <span className="material-symbols-outlined text-2xl leading-none">check_circle</span>
            <span>Completed</span>
          </button>

          {/* Profile (Active) */}
          <button
            className="flex flex-col items-center gap-1 text-blue-600 font-semibold text-xs transition-colors cursor-pointer"
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
