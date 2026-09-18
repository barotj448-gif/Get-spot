import React, { useState } from 'react';

interface CustomerProfileScreenProps {
  onNavigateTab: (tab: 'discover' | 'booking' | 'profile') => void;
  onLogout: () => void;
}

export const CustomerProfileScreen: React.FC<CustomerProfileScreenProps> = ({
  onNavigateTab,
  onLogout,
}) => {
  const [showLogoutToast, setShowLogoutToast] = useState(false);

  const handleLogout = () => {
    setShowLogoutToast(true);
    setTimeout(() => {
      onLogout();
    }, 900);
  };

  return (
    <div className="bg-surface font-body-md text-on-surface flex flex-col min-h-screen antialiased">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
        <div className="h-20 max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop flex items-center justify-between gap-space-xs relative">
          <div className="flex items-center gap-3 min-w-0">
            <img
              alt="GET SPOT"
              className="h-12 md:h-14 w-auto object-contain shrink-0 mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcKXAJm2qB-gfk6ipXlNiOApzLh7xmaZnTzG6KvwIDxRLkLVpg4mHCbtQu1HK20JqtnPovT5tlQZQpc841FWN3vbH5tJLEA9NtUB_y1sDG1nMWHqP5O8JK0y403wjHzbjIBGqtN0RdjMkz_kqwYmvgsBSH3QsVym61IpC_qTE8b1ks4nAjyTuZ0vE6OoBpdWM5o2LJVaCZqAIXHli6dXUdskCtYEEV-7ciTDCrcnaccop0GkiWi6lsigYpOnE8-VMT7mg"
            />
          </div>
          <div className="flex items-center gap-space-xs shrink-0">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative w-full max-w-container-max mx-auto pt-20 pb-28 px-gutter-mobile md:px-gutter-desktop bg-surface">
        <div className="flex flex-col w-full pb-8">
          {/* User Profile Card */}
          <div className="w-full flex flex-col items-center text-center pt-2 pb-6 px-gutter-mobile">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-sm bg-surface-container">
                <img
                  alt="Aarav Patel portrait"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtRKAf8dEDMr2g35ytqXR2UbyZMHkNdm3OjSQpvnZGVsNEi4UZen3WxPu95KTE5765ULil_gZWO6ZIQ7fqeO7oGDbDuU6ql29A0FHfb1_pT3SVlsuP8Zlg8q5x4YJYcElpyjozs21KO939gBe9-c36QvA5kHxZWvrIaw81Vl_JL58BduRa7-BO6PciTDWk8pDX8NsschdDkSif-oCWBYDPjIvv_hetU2Gvzkl2uoesuCqPfDK5zLmrNw"
                />
              </div>
              <button
                aria-label="Edit profile photo"
                className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md active:scale-95 transition-transform cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">photo_camera</span>
              </button>
            </div>
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface mb-1">
              Aarav Patel
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              +91 98765 43210 • aarav.patel@example.com
            </p>
            <button
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-lg bg-surface-container-lowest text-primary font-title-sm text-title-sm shadow-sm active:bg-surface-container-low transition-colors cursor-pointer"
              id="edit-profile-btn"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">edit</span>
              <span>Edit Profile</span>
            </button>
          </div>

          {/* Settings Section */}
          <div className="w-full space-y-5">
            <div>
              <h2 className="px-gutter-mobile mb-2 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                Account Settings
              </h2>
              <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                <button
                  className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-surface-container-low active:bg-surface-container transition-colors cursor-pointer"
                  type="button"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">badge</span>
                    </div>
                    <div className="truncate">
                      <span className="font-title-sm text-title-sm text-on-surface block truncate">Change Name</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block truncate">Aarav Patel</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[20px] shrink-0">chevron_right</span>
                </button>
                <div className="h-[1px] bg-surface-container-low mx-4" />

                <button
                  className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-surface-container-low active:bg-surface-container transition-colors cursor-pointer"
                  type="button"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">add_a_photo</span>
                    </div>
                    <div className="truncate">
                      <span className="font-title-sm text-title-sm text-on-surface block truncate">Change Profile Photo</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block truncate">Update your display avatar</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[20px] shrink-0">chevron_right</span>
                </button>
                <div className="h-[1px] bg-surface-container-low mx-4" />

                <button
                  className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-surface-container-low active:bg-surface-container transition-colors cursor-pointer"
                  type="button"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">contact_phone</span>
                    </div>
                    <div className="truncate">
                      <span className="font-title-sm text-title-sm text-on-surface block truncate">Phone &amp; Email</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block truncate">Primary verification contacts</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[20px] shrink-0">chevron_right</span>
                </button>
                <div className="h-[1px] bg-surface-container-low mx-4" />

                <button
                  className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-surface-container-low active:bg-surface-container transition-colors cursor-pointer"
                  type="button"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">notifications_active</span>
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className="font-title-sm text-title-sm text-on-surface">Notifications</span>
                        <span className="inline-flex items-center px-2 py-0.2 rounded-full bg-surface-container text-primary font-label-sm text-label-sm">Active</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block truncate">Live queue alerts &amp; SMS enabled</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[20px] shrink-0">chevron_right</span>
                </button>
                <div className="h-[1px] bg-surface-container-low mx-4" />

                <button
                  className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-surface-container-low active:bg-surface-container transition-colors cursor-pointer"
                  type="button"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                    </div>
                    <div className="truncate">
                      <span className="font-title-sm text-title-sm text-on-surface block truncate">Payment Settings</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block truncate">Saved UPI IDs &amp; Cards</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[20px] shrink-0">chevron_right</span>
                </button>
                <div className="h-[1px] bg-surface-container-low mx-4" />

                <button
                  className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-surface-container-low active:bg-surface-container transition-colors cursor-pointer"
                  type="button"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">security</span>
                    </div>
                    <div className="truncate">
                      <span className="font-title-sm text-title-sm text-on-surface block truncate">Privacy &amp; Security</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block truncate">Passcode, sessions &amp; permissions</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[20px] shrink-0">chevron_right</span>
                </button>
              </div>
            </div>

            {/* Support & Legal */}
            <div>
              <h2 className="px-gutter-mobile mb-2 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                Support &amp; Legal
              </h2>
              <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                <button
                  className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-surface-container-low active:bg-surface-container transition-colors cursor-pointer"
                  type="button"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0">
                      <span className="material-symbols-outlined text-[20px]">help_outline</span>
                    </div>
                    <span className="font-title-sm text-title-sm text-on-surface truncate">Help &amp; FAQ</span>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[20px] shrink-0">chevron_right</span>
                </button>
                <div className="h-[1px] bg-surface-container-low mx-4" />

                <button
                  className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-surface-container-low active:bg-surface-container transition-colors cursor-pointer"
                  type="button"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0">
                      <span className="material-symbols-outlined text-[20px]">description</span>
                    </div>
                    <span className="font-title-sm text-title-sm text-on-surface truncate">Terms of Service</span>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[20px] shrink-0">chevron_right</span>
                </button>
              </div>
            </div>

            {/* Log Out Button */}
            <div className="pt-2 px-gutter-mobile">
              <button
                className="w-full py-3.5 px-4 rounded-xl bg-error-container text-error font-title-sm text-title-sm flex items-center justify-center gap-2 shadow-sm active:opacity-90 transition-opacity cursor-pointer"
                id="logout-btn"
                onClick={handleLogout}
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">logout</span>
                <span className="tracking-wide uppercase font-semibold">Log Out</span>
              </button>
              <p className="text-center font-label-sm text-label-sm text-on-surface-variant mt-4">
                GET SPOT App v2.4.1 • Fast-Lane Queue Verification
              </p>
            </div>
          </div>

          {/* Toast */}
          {showLogoutToast && (
            <div
              className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-4 py-2.5 rounded-full shadow-lg font-label-md text-label-md flex items-center gap-2 z-50 animate-fade-in"
              id="logout-toast"
            >
              <span className="material-symbols-outlined text-[18px] text-secondary-fixed">info</span>
              <span>Logged out successfully</span>
            </div>
          )}
        </div>
      </main>

      {/* Customer 3-Tab Bottom Navigation */}
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

          {/* Booking */}
          <button
            className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant transition-colors hover:text-on-surface cursor-pointer"
            onClick={() => onNavigateTab('booking')}
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">calendar_month</span>
            <span className="font-label-sm text-label-sm">Booking</span>
          </button>

          {/* Profile (Active) */}
          <button
            aria-current="page"
            className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 transition-colors text-primary font-semibold cursor-pointer"
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
