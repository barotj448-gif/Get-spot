import React, { useState } from 'react';

interface WorkerShopSetupScreenProps {
  onBack: () => void;
  onFinish: () => void;
}

export const WorkerShopSetupScreen: React.FC<WorkerShopSetupScreenProps> = ({
  onBack,
  onFinish,
}) => {
  const [shopName, setShopName] = useState('Classic Cuts Barbershop');
  const [category, setCategory] = useState('Barber Shops');
  const [serviceTime, setServiceTime] = useState('15 mins');
  const [customTime, setCustomTime] = useState('');
  const [capacity, setCapacity] = useState('2');
  const [address, setAddress] = useState('Shop 14, High Street Market, Downtown');
  const [area, setArea] = useState('gotri');
  const [hasPhoto, setHasPhoto] = useState(true);
  const [isSuccessToast, setIsSuccessToast] = useState(false);

  const handleDetectGPS = () => {
    setAddress('Detecting high-precision GPS...');
    setTimeout(() => {
      setAddress('Shop 14, High Street Market, Downtown');
      setArea('gotri');
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccessToast(true);
    setTimeout(() => {
      onFinish();
    }, 1200);
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between px-gutter-mobile h-16 relative">
          <div className="flex items-center gap-2 z-10">
            <button
              aria-label="Go back"
              className="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface hover:bg-surface-container-low transition-colors cursor-pointer"
              onClick={onBack}
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">arrow_back</span>
            </button>
            <img
              alt="GET SPOT logo"
              className="w-auto object-contain h-12"
              style={{ mixBlendMode: 'multiply' }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlK5uNzTKrL4IbtskmkPBnKBqPz9cFxE92if-J8uOxdNkZPzTR4--TblOrLOIE-X8A-DDWHC0UJqKRSo7aoJW_rjOx1tFZ5qyJPYax5SLYp6Ye7Rxdhvq_c3ovG2R7MMB0yl7PpB5yOVeW9oggHc59bfFAG-d_UmIr-uYCqTTNwS-zvBD5KxZILIiGhGzhTdL50efWAAfopeWI0RaG2rKm9zs8y9ur91pHmepBF9myrbEDpPTUp0pOzuXB0Q-xEauKBhM"
            />
          </div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative w-full px-gutter-mobile pt-16 pb-safe bg-surface">
        <div className="flex flex-col w-full pb-8 max-w-xl mx-auto">
          {/* Progress Tracker */}
          <div className="w-full bg-surface-container-lowest shadow-sm rounded-xl p-space-md mb-space-md">
            <div className="flex items-center justify-between mb-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
                  Step 2 of 2: Create Business
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">100% Ready</span>
            </div>
            <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-full rounded-full transition-all duration-500 ease-out" />
            </div>
          </div>

          {/* Page Context Header */}
          <div className="mb-space-md">
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface tracking-tight">
              Set up your business
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Provide your shop details so customers can find and queue for you.
            </p>
          </div>

          {/* Main Business Profile Form */}
          <form className="flex flex-col gap-space-md" id="business-onboarding-form" onSubmit={handleSubmit}>
            {/* 1. Shop Photo Upload */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <label className="block font-title-sm text-title-sm text-on-surface mb-1">
                Shop Front / Cover Photo
              </label>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-space-xs">
                Help visitors instantly recognize your storefront on the queue map.
              </p>
              <div
                className="relative group cursor-pointer bg-surface-container-low rounded-xl p-space-lg flex flex-col items-center justify-center text-center transition-all hover:bg-surface-container"
                id="photo-dropzone"
                onClick={() => setHasPhoto(true)}
              >
                {!hasPhoto ? (
                  <div className="flex flex-col items-center" id="upload-idle-state">
                    <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary mb-space-xs group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[24px]">add_a_photo</span>
                    </div>
                    <span className="font-title-sm text-title-sm text-on-surface">Tap to upload shop photo</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">PNG, JPG up to 10MB</span>
                  </div>
                ) : (
                  <div className="w-full flex flex-col items-center" id="upload-preview-state">
                    <div className="relative w-full h-36 rounded-lg overflow-hidden mb-space-xs shadow-inner">
                      <img
                        alt="Shop front preview"
                        className="w-full h-full object-cover"
                        id="preview-image"
                        src="https://lh3.googleusercontent.com/aida/AEtjO1Xsl6dvyswFG2MF9vTGJu6iW4nTFIqyhfum7KioMmScSKv9aymy8_tlAWj1nnz4Yhlut5XskYgkA9see-NrMlRu5RQH9pkZCVFMKpk5E7swY1pRM8jhNBuTRjGLhWiibGtj6VfptNd7PUayMcVMWgXEevXSZzvl7VvEiYxvPiHYQhia13IecVHJaN-KHCeBaRo5BiGNV9wGocjJRDV_0BxFMgrmWWXFXBASjx3NJEVhFilgrF7t3KwnENk"
                      />
                      <div className="absolute inset-0 bg-inverse-surface/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-surface text-on-surface font-label-md text-label-md px-space-sm py-1 rounded-full shadow">
                          Change Photo
                        </span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary flex items-center gap-1 font-semibold">
                      <span className="material-symbols-outlined text-[16px]">check_circle</span> Cover photo attached
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* 2. Shop Name */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <label className="block font-title-sm text-title-sm text-on-surface mb-1" htmlFor="shop-name-input">
                Shop / Business Name
              </label>
              <div className="relative">
                <input
                  className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg px-space-md py-3 border border-outline-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all placeholder:text-outline"
                  id="shop-name-input"
                  placeholder="e.g., Prime Salon & Barber or Apex Dental Care"
                  required
                  type="text"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                />
                <span className="absolute right-3 top-3.5 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[20px]">storefront</span>
                </span>
              </div>
            </div>

            {/* 3. Business Category & Service Duration */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <label className="block font-title-sm text-title-sm text-on-surface mb-space-xs">
                Category
              </label>
              <div className="grid grid-cols-2 gap-space-xs mb-space-md" id="category-group">
                {[
                  { name: 'Barber Shops', icon: 'content_cut' },
                  { name: 'Doctors', icon: 'stethoscope' },
                  { name: 'Dentist', icon: 'dentistry' },
                  { name: 'Pathology Labs', icon: 'science' },
                ].map((item) => (
                  <button
                    key={item.name}
                    className={`cat-pill py-2.5 px-space-sm rounded-lg flex items-center gap-space-xs font-label-md text-label-md transition-all text-left cursor-pointer ${
                      category === item.name
                        ? 'bg-primary text-on-primary shadow-sm'
                        : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                    }`}
                    onClick={() => setCategory(item.name)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                    <span className="truncate">{item.name}</span>
                  </button>
                ))}
              </div>

              <label className="block font-title-sm text-title-sm text-on-surface mb-1">
                Approx. Average Service Time per Customer
              </label>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-space-xs">
                Helps GET SPOT calculate exact live queue wait predictions.
              </p>
              <div className="grid grid-cols-3 gap-space-xs" id="time-group">
                {['15 mins', '30 mins', '45 mins'].map((time) => (
                  <button
                    key={time}
                    className={`time-pill py-2.5 rounded-lg text-center font-label-md text-label-md transition-all cursor-pointer ${
                      serviceTime === time
                        ? 'bg-primary text-on-primary shadow-sm'
                        : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                    }`}
                    onClick={() => {
                      setServiceTime(time);
                      setCustomTime('');
                    }}
                    type="button"
                  >
                    {time}
                  </button>
                ))}
              </div>
              <div className="mt-space-xs relative">
                <input
                  type="number"
                  min="1"
                  max="480"
                  placeholder="Or enter custom minutes (e.g. 20, 60)"
                  className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg px-space-md py-3 pr-10 border border-outline-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all placeholder:text-outline"
                  id="custom-time-input"
                  value={customTime}
                  onChange={(e) => {
                    setCustomTime(e.target.value);
                    if (e.target.value) setServiceTime(`${e.target.value} mins`);
                  }}
                />
                <span className="absolute right-3 top-3.5 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </span>
              </div>
            </div>

            {/* Customers Served at One Time */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <label className="block font-title-sm text-title-sm text-on-surface mb-1">
                Customers Served at One Time
              </label>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-space-xs">
                How many customers or chairs can you serve concurrently?
              </p>
              <div className="grid grid-cols-4 gap-space-xs mb-space-sm" id="capacity-pill-group">
                {['1', '2', '3', '4+'].map((cap) => (
                  <button
                    key={cap}
                    type="button"
                    className={`py-2.5 rounded-lg text-center font-label-md text-label-md transition-all cursor-pointer ${
                      capacity === cap
                        ? 'bg-primary text-on-primary shadow-sm'
                        : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                    }`}
                    onClick={() => setCapacity(cap)}
                  >
                    {cap}
                  </button>
                ))}
              </div>
              <div className="space-y-space-xs">
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={capacity === '4+' ? '4' : capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    placeholder="Or enter manually (e.g. 5)"
                    className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg px-space-md py-3 pr-10 border border-outline-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all placeholder:text-outline"
                    id="capacity-input"
                  />
                  <span className="absolute right-3 top-3.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[20px]">groups</span>
                  </span>
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  This determines how many live tokens GET SPOT calls simultaneously.
                </p>
              </div>
            </div>

            {/* 4. Business Location & Map Integration */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <div className="flex items-center justify-between mb-space-xs">
                <label className="block font-title-sm text-title-sm text-on-surface">
                  Business Address &amp; Area
                </label>
                <button
                  className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-bold hover:underline cursor-pointer"
                  onClick={handleDetectGPS}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">my_location</span>
                  <span>Use GPS</span>
                </button>
              </div>
              <div className="space-y-space-xs mb-space-sm">
                <div className="relative">
                  <input
                    className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg px-space-md py-3 border border-outline-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all placeholder:text-outline"
                    id="address-input"
                    placeholder="Street address or suite number"
                    required
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <select
                    className="w-full appearance-none bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg px-space-md py-3 pr-10 border border-outline-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all cursor-pointer"
                    id="area-select"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  >
                    <option value="gotri">Gotri, Vadodara</option>
                    <option value="alkapuri">Alkapuri, Vadodara</option>
                    <option value="manjalpur">Manjalpur, Vadodara</option>
                    <option value="sayajigunj">Sayajigunj, Vadodara</option>
                  </select>
                  <span className="material-symbols-outlined pointer-events-none absolute right-3 top-3.5 text-on-surface-variant text-[20px]">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Live Static Mini Map */}
              <div className="relative w-full h-32 rounded-lg overflow-hidden shadow-inner">
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-location="Gotri, Vadodara"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBi9vTv23VdL-Jqyt_62WwvKdeNTH8h1RsnrpKyAnhCJdD4IQnzt6Wm5gs2wo1dJdXLwogBEiFbTXdnclcCCNE5jOvD1OgnNeTSXaMvnn4kq5JSK1xk8VmyLiH5rvDO87f5VTZZ0S4RBdMPNFuGRfGVY2qKspvFurZJr4LBGzGovpbjnigBZUISqCmmKm2tx95nJvvT-hPy7AGWuXxGBqrMzw5DJlejPTr_fVkBz_25R2_t7GUuCJFs4w')",
                  }}
                />
                <div className="absolute inset-0 bg-inverse-surface/10 pointer-events-none flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-lg animate-bounce">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 bg-surface/90 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] font-medium text-on-surface">
                  Gotri Main Road Area Pin
                </div>
              </div>
            </div>

            {/* Bottom Submission Block */}
            <div className="mt-space-xs flex flex-col gap-space-xs">
              <button
                className="w-full py-4 px-space-md rounded-xl bg-secondary hover:bg-on-error-container active:scale-[0.99] text-on-secondary font-title-sm text-title-sm tracking-wider uppercase flex items-center justify-center gap-space-xs shadow-md transition-all cursor-pointer"
                id="finish-submit-btn"
                type="submit"
                disabled={isSuccessToast}
              >
                <span>Finish &amp; Create Business</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
              <div className="flex items-start gap-2 px-space-xs py-1">
                <span className="material-symbols-outlined text-outline text-[16px] mt-0.5">info</span>
                <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
                  You can edit your business details, queue limits, and staff schedules anytime from the Worker Dashboard.
                </p>
              </div>
            </div>
          </form>

          {/* Submission Feedback Toast */}
          {isSuccessToast && (
            <div
              className="fixed inset-x-4 bottom-8 z-50 p-space-md bg-inverse-surface text-inverse-on-surface rounded-xl shadow-xl flex items-center gap-space-sm"
              id="success-modal"
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[20px]">check</span>
              </div>
              <div className="flex-1">
                <p className="font-title-sm text-title-sm font-bold">Shop registered successfully!</p>
                <p className="font-label-sm text-label-sm text-surface-variant">Redirecting to your live queue board...</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
