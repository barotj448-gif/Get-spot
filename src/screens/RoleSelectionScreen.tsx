import React, { useState } from 'react';

interface RoleSelectionScreenProps {
  onBack: () => void;
  onContinue: (role: 'customer' | 'worker') => void;
  initialRole?: 'customer' | 'worker';
}

export const RoleSelectionScreen: React.FC<RoleSelectionScreenProps> = ({
  onBack,
  onContinue,
  initialRole = 'customer',
}) => {
  const [selectedRole, setSelectedRole] = useState<'customer' | 'worker'>(initialRole);

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col pt-safe pb-safe">
      <main className="flex-1 flex flex-col relative w-full px-gutter-mobile bg-surface">
        <div className="flex flex-col w-full max-w-md mx-auto pb-space-xl">
          {/* Top Navigation & Brand Header */}
          <div className="flex items-center justify-between py-space-sm">
            <div className="flex items-center gap-space-sm">
              <button
                aria-label="Go back"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors active:scale-95 text-on-surface cursor-pointer"
                type="button"
                onClick={onBack}
              >
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
              </button>
              <div className="flex items-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZFa-0l0bqLVztWDmCO3pDZnJXSXq0WDezSA8ph1PQd9jRYnnL9XBMmN0o13114f98iuXeWMwvXGwfTNRaOn50uICFkTnWDqQ9eJwKHbgcDtmpk1Cy4LumXhGx1zcMdXcFnbLUgYG2DEUmjNrWcgaDNqTjdHjrCJRrjfCd-SZOZigyer7hfSmJcKkf8iJDi0ZvfWpfcVmBVamu15poDWpPZCmytBtN8MU_1HVWT4PTY0XWYu2w_5ImywIuLGhU73UZipw"
                  alt="GET SPOT"
                  className="h-12 object-contain bg-transparent"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </div>
            <div className="w-10 h-10 flex items-center justify-end">
              <span className="font-label-sm text-outline font-semibold">1/2</span>
            </div>
          </div>

          {/* Intro Typography */}
          <div className="mt-space-md mb-space-lg">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant mb-space-xs">
              <span className="material-symbols-outlined text-[14px] text-primary">verified_user</span>
              <span className="font-label-sm uppercase tracking-wider text-[10px]">Google Authenticated</span>
            </div>
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface tracking-tight">
              What are you here for?
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-2xs leading-relaxed">
              Select your account type to personalize your experience.
            </p>
          </div>

          {/* Role Selection Cards Group */}
          <div aria-label="Account Role Selection" className="flex flex-col gap-space-md" role="radiogroup">
            {/* Role 1: Customer Card */}
            <div
              aria-checked={selectedRole === 'customer'}
              className="group relative flex flex-col p-space-md rounded-xl bg-surface-container-lowest shadow-sm cursor-pointer transition-all duration-200 active:scale-[0.99]"
              id="role-customer"
              onClick={() => setSelectedRole('customer')}
              role="radio"
              tabIndex={0}
            >
              {/* Selection Highlight Ring Background */}
              <div
                className={`absolute inset-0 rounded-xl transition-all pointer-events-none ${
                  selectedRole === 'customer'
                    ? 'shadow-[0_0_0_2px_#004ac6]'
                    : 'shadow-none'
                }`}
                id="ring-customer"
              />
              <div className="flex items-start justify-between relative z-10">
                <div className="flex items-center gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary transition-transform group-hover:scale-105">
                    <span className="material-symbols-outlined text-[24px]">person</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-label-sm uppercase tracking-wider bg-primary text-on-primary font-bold">
                        CUSTOMER
                      </span>
                      {selectedRole === 'customer' && (
                        <span className="flex items-center text-primary text-[12px] font-label-md" id="badge-customer">
                          <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        </span>
                      )}
                    </div>
                    <h2 className="font-headline-md text-title-sm text-on-surface mt-1">
                      I'm a Customer
                    </h2>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm relative z-10 pl-0.5">
                Find businesses, jump into live virtual queues, and get your spot without standing in line.
              </p>
              <div className="mt-space-sm pt-space-xs flex items-center gap-space-xs text-outline relative z-10 text-[12px] font-label-md">
                <span className="material-symbols-outlined text-[14px]">bolt</span>
                <span>Instant queue alerts &amp; walk-up reservations</span>
              </div>
            </div>

            {/* Role 2: Business Card */}
            <div
              aria-checked={selectedRole === 'worker'}
              className="group relative flex flex-col p-space-md rounded-xl bg-surface-container-lowest shadow-sm cursor-pointer transition-all duration-200 active:scale-[0.99]"
              id="role-worker"
              onClick={() => setSelectedRole('worker')}
              role="radio"
              tabIndex={0}
            >
              {/* Selection Highlight Ring Background */}
              <div
                className={`absolute inset-0 rounded-xl transition-all pointer-events-none ${
                  selectedRole === 'worker'
                    ? 'shadow-[0_0_0_2px_#bb0112]'
                    : 'shadow-none'
                }`}
                id="ring-worker"
              />
              <div className="flex items-start justify-between relative z-10">
                <div className="flex items-center gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary transition-transform group-hover:scale-105">
                    <span className="material-symbols-outlined text-[24px]">storefront</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-label-sm uppercase tracking-wider bg-surface-container-highest text-on-surface-variant font-bold">
                        BUSINESS / WORKER
                      </span>
                      {selectedRole === 'worker' && (
                        <span className="flex items-center text-secondary text-[12px] font-label-md" id="badge-worker">
                          <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        </span>
                      )}
                    </div>
                    <h2 className="font-headline-md text-title-sm text-on-surface mt-1">
                      I'm a Business Owner
                    </h2>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm relative z-10 pl-0.5">
                Manage live door queues, optimize foot-traffic capacity, and notify arriving patrons effortlessly.
              </p>
              <div className="mt-space-sm pt-space-xs flex items-center gap-space-xs text-outline relative z-10 text-[12px] font-label-md">
                <span className="material-symbols-outlined text-[14px]">tune</span>
                <span>Real-time door dashboard &amp; capacity analytics</span>
              </div>
            </div>
          </div>

          {/* Bottom Interactive CTA Section */}
          <div className="mt-space-xl flex flex-col gap-space-xs">
            <button
              className="w-full py-3.5 px-space-md rounded-xl bg-on-surface hover:bg-inverse-surface text-surface font-title-sm text-title-sm font-semibold tracking-wide flex items-center justify-center gap-space-xs shadow-sm transition-all active:scale-[0.98] cursor-pointer"
              id="continue-btn"
              type="button"
              onClick={() => onContinue(selectedRole)}
            >
              <span>{selectedRole === 'customer' ? 'Continue as Customer' : 'Continue to Business Console'}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <div className="flex items-center justify-center gap-1.5 px-space-sm mt-space-xs">
              <span className="material-symbols-outlined text-[14px] text-outline">info</span>
              <p className="font-label-sm text-label-sm text-outline text-center">
                You can switch or register additional businesses anytime later.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
