import React, { useState, useEffect } from 'react';

interface OtpScreenProps {
  role: 'customer' | 'worker';
  onBack: () => void;
  onVerify: () => void;
}

export const OtpScreen: React.FC<OtpScreenProps> = ({ role, onBack, onVerify }) => {
  const [fullName, setFullName] = useState(role === 'customer' ? 'Aarav Patel' : 'Marcus Vance');
  const [email] = useState(role === 'customer' ? 'aarav.patel@acmelabs.in' : 'marcus.vance@getspot.com');
  const [phoneNumber, setPhoneNumber] = useState('98765 43210');
  const [otp, setOtp] = useState(['5', '8', '2', '9', '1', '4']);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [resendStatus, setResendStatus] = useState('Resend via SMS');
  const [timerSeconds, setTimerSeconds] = useState(24);

  useEffect(() => {
    if (timerSeconds > 0) {
      const timer = setTimeout(() => setTimerSeconds(timerSeconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timerSeconds]);

  const handleResend = () => {
    setResendStatus('Sending...');
    setTimeout(() => {
      setResendStatus('SMS Sent!');
      setTimerSeconds(30);
      setTimeout(() => {
        setResendStatus('Resend via SMS');
      }, 3000);
    }, 600);
  };

  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) val = val.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    // auto focus next input if applicable
    if (val && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between px-gutter-mobile h-16 relative">
          <div className="flex items-center gap-space-xs">
            <button
              aria-label="Go back"
              className="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface hover:bg-surface-container-low transition-colors cursor-pointer"
              onClick={onBack}
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">arrow_back</span>
            </button>
            <img
              alt="GET SPOT"
              className="h-12 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxBFBNANzUh2K3Mp5GUKioQTWz0BJbjoJZJZ8YIGh6LmzkRBa98uglk24mvgwksTJ-_O3I_XEIOM-4ehDQrYtjiHKKjqOO3-XhhA0994Q8sOKTvFXT97g4GWvihnPBN-nws50RjyV_tJQNt9UikZ0IKGwemN5pnl4_RrXQsi7VpZa7CuBvuoMQc527cAbuhDFLMGJSwIDs_7JV1IeMoheoy4snVMugr60nHjGXD25EafQCfJVh1XpM4cE0NUFToW0rzms"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative w-full px-gutter-mobile pt-16 pb-safe bg-surface">
        <div className="flex flex-col w-full max-w-md mx-auto pb-space-2xl">
          {/* Progress Header Component */}
          <div className="flex flex-col gap-space-xs mt-space-sm mb-space-lg">
            <div className="mt-space-md">
              <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface font-bold tracking-tight">
                Tell us about yourself
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                We will verify your phone number to secure your account.
              </p>
            </div>
          </div>

          {/* Main Card Surface */}
          <div className="flex flex-col gap-space-lg bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            {/* Verified Google SSO Banner */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
              <div className="flex items-center gap-space-xs">
                <div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.94 0 12s.45 3.84 1.25 5.42l4.03-3.15z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm font-semibold text-on-surface">Connected via Google</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">{email}</span>
                </div>
              </div>
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
            </div>

            {/* Identity Details Input Form */}
            <div className="flex flex-col gap-space-md">
              {/* Field: Full Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold"
                  htmlFor="full-name-input"
                >
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <input
                    className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg px-3.5 py-3 pr-10 border border-outline-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all"
                    id="full-name-input"
                    placeholder="Legal name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <span className="material-symbols-outlined absolute right-3 text-outline text-[20px] pointer-events-none">
                    badge
                  </span>
                </div>
              </div>

              {/* Field: Phone Number */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold"
                  htmlFor="phone-input"
                >
                  Mobile Phone Number
                </label>
                <div className="flex items-center gap-2">
                  {/* Country Prefix Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-3 rounded-lg bg-surface-container-low font-title-sm text-title-sm text-on-surface shrink-0 cursor-default border border-outline-variant/50">
                    <span className="text-base leading-none">🇮🇳</span>
                    <span className="font-semibold">+91</span>
                    <span className="material-symbols-outlined text-outline text-[16px]">expand_more</span>
                  </div>
                  {/* Number Input */}
                  <div className="relative flex-1">
                    <input
                      className="w-full bg-surface-container-low text-on-surface font-title-sm text-title-sm font-semibold tracking-wide rounded-lg px-3.5 py-3 border border-outline-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all"
                      id="phone-input"
                      placeholder="00000 00000"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
                  <span className="material-symbols-outlined text-[14px]">sms</span>
                  We'll send an SMS verification code to verify authority
                </p>
              </div>
            </div>

            {/* Active OTP Verification Section */}
            <div className="flex flex-col gap-space-sm pt-space-md bg-surface-container-low/60 rounded-xl p-space-md">
              {/* Dispatch Status Notice */}
              <div className="flex items-start justify-between gap-space-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[14px]">send_to_mobile</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md font-semibold text-on-surface">
                      Code Sent to +91 {phoneNumber}
                    </p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Enter the 6-digit confirmation key below
                    </p>
                  </div>
                </div>
                <button
                  className="font-label-sm text-label-sm font-semibold text-primary hover:underline shrink-0 cursor-pointer"
                  type="button"
                  onClick={() => {
                    setIsEditingPhone(!isEditingPhone);
                    const phoneInput = document.getElementById('phone-input');
                    phoneInput?.focus();
                  }}
                >
                  Edit
                </button>
              </div>

              {/* 6-Digit Code Cells Grid */}
              <div className="grid grid-cols-6 gap-2 w-full mt-space-xs" id="otp-container">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-input-${idx}`}
                    className="flex flex-col items-center justify-center h-13 py-3 rounded-lg bg-surface-container-lowest shadow-sm text-center font-headline-md text-headline-md font-bold text-on-surface border-2 border-outline-variant/40 focus:border-primary focus:ring-4 focus:ring-primary/20 focus:outline-none focus:scale-105 transition-all w-full"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                  />
                ))}
              </div>

              {/* Resend Interval & Micro-actions */}
              <div className="flex items-center justify-between pt-space-xs">
                <div className="flex items-center gap-1.5 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span className="font-label-sm text-label-sm" id="timer-display">
                    {timerSeconds > 0 ? `Resend in ${timerSeconds}s` : 'Code expired?'}
                  </span>
                </div>
                <button
                  className="font-label-sm text-label-sm font-semibold transition-colors text-primary cursor-pointer hover:underline"
                  id="resend-btn"
                  onClick={handleResend}
                  type="button"
                >
                  {resendStatus}
                </button>
              </div>
            </div>

            {/* Security Micro-Callout */}
            <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-surface-container-low">
              <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Protected with bank-grade 256-bit encryption for your account.
              </p>
            </div>
          </div>

          {/* Operational Action Section */}
          <div className="flex flex-col gap-space-xs mt-space-lg">
            <button
              className="w-full flex items-center justify-center gap-2 py-3.5 px-space-md rounded-lg bg-inverse-surface hover:bg-on-surface text-inverse-on-surface font-title-sm text-title-sm font-semibold shadow-md active:scale-[0.99] transition-all cursor-pointer"
              type="button"
              onClick={onVerify}
            >
              <span>Verify &amp; Continue</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <p className="font-label-sm text-label-sm text-center text-on-surface-variant px-space-sm mt-1">
              By verifying, you confirm and agree to verify your identity and account security.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
