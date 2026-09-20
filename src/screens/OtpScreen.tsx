import React, { useEffect, useRef, useState } from 'react';

interface OtpScreenProps {
  role: 'customer' | 'worker';
  onBack: () => void;
  onVerify: () => void;
}

const logoUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxBFBNANzUh2K3Mp5GUKioQTWz0BJbjoJZJZ8YIGh6LmzkRBa98uglk24mvgwksTJ-_O3I_XEIOM-4ehDQrYtjiHKKjqOO3-XhhA0994Q8sOKTvFXT97g4GWvihnPBN-nws50RjyV_tJQNt9UikZ0IKGwemN5pnl4_RrXQsi7VpZa7CuBvuoMQc527cAbuhDFLMGJSwIDs_7JV1IeMoheoy4snVMugr60nHjGXD25EafQCfJVh1XpM4cE0NUFToW0rzms';

export const OtpScreen: React.FC<OtpScreenProps> = ({ onBack, onVerify }) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('Marcus Vance');
  const [phoneNumber, setPhoneNumber] = useState('98765 43210');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [seconds, setSeconds] = useState(60);
  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (seconds === 0) return;
    const timer = window.setInterval(() => setSeconds((value) => value - 1), 1000);
    return () => window.clearInterval(timer);
  }, [seconds]);

  const updateOtp = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    setOtp((current) => current.map((item, itemIndex) => itemIndex === index ? digit : item));
    if (digit && index < 5) otpRefs.current[index + 1]?.focus();
  };

  const handleOtpKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) otpRefs.current[index - 1]?.focus();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#d8d8dc] font-sans text-[#20293b]">
      <div className="absolute inset-0 scale-110 bg-[#f7f8fc] blur-[10px]" aria-hidden="true">
        <div className="mx-auto flex min-h-screen max-w-[1100px] flex-col bg-white/80 px-10 py-8 opacity-80">
          <img src={logoUrl} alt="" className="h-12 w-fit object-contain" />
          <div className="mt-16 max-w-[430px] space-y-7">
            <h2 className="text-5xl font-extrabold leading-[1.08]">Find and get<br />your spot</h2>
            <p className="text-xl text-slate-500">Skip the wait. Book your place in line before you arrive.</p>
            <div className="h-14 w-56 rounded-xl bg-[#df1d2b]" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[#172033]/45" aria-hidden="true" />

      <main className="relative z-10 flex min-h-screen items-center justify-center p-0 sm:p-6">
        <section className="flex min-h-screen w-full max-w-[548px] flex-col overflow-y-auto bg-[#fbfcff] px-8 pb-8 pt-7 shadow-2xl sm:max-h-[calc(100vh-32px)] sm:min-h-0 sm:rounded-[25px] sm:px-9 sm:pb-9 sm:pt-8">
          <header className="flex items-center justify-between">
            <img src={logoUrl} alt="GET SPOT" className="h-10 w-auto object-contain" />
            <button type="button" onClick={onBack} aria-label="Go back" className="flex h-10 w-10 items-center justify-center text-[30px] leading-none text-[#172033] transition hover:opacity-70">←</button>
          </header>

          <div className="mt-8 flex flex-col items-center text-center">
            <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full border border-[#f2cdd1] bg-[#fff8f8] shadow-[0_0_0_10px_rgba(255,248,248,0.8)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[15px] bg-[#df1d2b] text-white">
                <span className="material-symbols-outlined text-[31px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              </div>
            </div>
            <h1 className="mt-8 text-[30px] font-bold tracking-[-0.03em]">Verify Your Number</h1>
            <p className="mt-2 max-w-[430px] text-[17px] leading-7 text-[#6d7482]">We&apos;ve sent a 6-digit code to your mobile number.<br />Please enter it below to continue.</p>
          </div>

          <div className="mt-10 space-y-6">
            <label className="block text-[16px] font-bold uppercase tracking-wide text-[#555e6e]">Email Address
              <div className="relative mt-2"><input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email address" className="h-[62px] w-full rounded-[12px] border border-[#d8dce4] bg-white px-5 pr-14 text-[17px] outline-none transition focus:border-[#df1d2b]" /><span className="material-symbols-outlined absolute right-4 top-[18px] text-[27px] text-[#5f6775]">mail</span></div>
            </label>
            <label className="block text-[16px] font-bold uppercase tracking-wide text-[#555e6e]">Full Name
              <div className="relative mt-2"><input value={fullName} onChange={(event) => setFullName(event.target.value)} className="h-[62px] w-full rounded-[12px] border border-[#d8dce4] bg-white px-5 pr-14 text-[17px] outline-none transition focus:border-[#df1d2b]" /><span className="material-symbols-outlined absolute right-4 top-[18px] text-[27px] text-[#5f6775]">person</span></div>
            </label>
            <div className="text-[16px] font-bold uppercase tracking-wide text-[#555e6e]">Mobile Phone Number
              <div className="mt-2 flex gap-3"><div className="flex h-[62px] w-[126px] items-center justify-center gap-2 rounded-[12px] border border-[#d8dce4] bg-white text-[17px] font-medium normal-case"><span>IN</span><span>+91</span><span className="text-xl">⌄</span></div><input value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} className="h-[62px] min-w-0 flex-1 rounded-[12px] border border-[#d8dce4] bg-white px-5 text-[17px] font-medium outline-none focus:border-[#df1d2b]" /></div>
            </div>
            <div className="text-[16px] font-bold uppercase tracking-wide text-[#555e6e]">SMS Verification
              <div className="mt-2 grid grid-cols-6 gap-3">{otp.map((digit, index) => <input key={index} ref={(element) => { otpRefs.current[index] = element; }} value={digit} onChange={(event) => updateOtp(index, event.target.value)} onKeyDown={(event) => handleOtpKeyDown(index, event)} inputMode="numeric" maxLength={1} aria-label={`Verification digit ${index + 1}`} className="h-[68px] min-w-0 rounded-[12px] border border-[#d8dce4] bg-white text-center text-[23px] font-semibold outline-none focus:border-[#df1d2b]" />)}</div>
              <div className="mt-5 flex items-center justify-between text-[16px] font-normal normal-case tracking-normal text-[#697181]"><span>Resend code in <b className="font-semibold text-[#df1d2b]">{`00:${String(seconds).padStart(2, '0')}`}</b></span><button type="button" className="font-semibold text-[#df1d2b] disabled:opacity-40" disabled={seconds > 0} onClick={() => setSeconds(60)}>Resend</button></div>
            </div>
          </div>
          <button type="button" onClick={onVerify} className="mt-10 flex h-[64px] items-center justify-center gap-3 rounded-[12px] bg-[#df1d2b] text-[18px] font-bold text-white shadow-[0_5px_12px_rgba(223,29,43,0.22)] transition hover:bg-[#c91826]">Verify &amp; Continue <span className="text-[27px] font-normal">→</span></button>
        </section>
      </main>
    </div>
  );
};
