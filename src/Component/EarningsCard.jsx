import { useEffect, useRef, useState } from "react";
import Theme from "../assets/Theme/Theme";

const EarningsCard = () => {
  const cardRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  const [counter, setCounter] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const [saved, setSaved] = useState(0);

  const animateValue = (setter, target, duration) => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setter(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          setTimeout(() => animateValue(setCounter, 150000, 1600), 200);
          setTimeout(() => animateValue(setBarWidth, 75, 1200), 400);
          setTimeout(() => animateValue(setSaved, 45000, 1400), 300);
        }
      },
      { threshold: 0.3 }
    );
    if (cardRef.current) obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, [animated]);

  const formatCounter = (val) => {
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L`;
    if (val >= 1000) return `₹${Math.round(val / 1000)}K`;
    return `₹${val}`;
  };

  const formatSaved = (val) => {
    if (val >= 1000) return `₹${Math.round(val / 1000)}K`;
    return `₹${val}`;
  };

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-[20px] p-7"
      style={{ background: Theme.darkBrown }} // #2B1A0A — deep warm dark bg
    >
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 200, height: 200,
          border: `44px solid ${Theme.primary}12`,
          top: -80, right: -60,
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 120, height: 120,
          border: `28px solid ${Theme.primary}0A`,
          bottom: -40, left: -30,
        }}
      />

      <div
        className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full text-[11px] font-medium tracking-widest uppercase"
        style={{
          color: Theme.primary300,       // #FC9A5C
          background: `${Theme.primary}1A`,
          border: `0.5px solid ${Theme.primary}40`,
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: Theme.primary300 }}
        />
        Profit booster
      </div>

      <h3 className="text-[20px] font-semibold leading-snug text-white mb-1.5">
        Maximize your earnings<br />with every sale
      </h3>
      <p className="text-[13px] leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
        Zero commission. Zero ad spend. Just pure profit back in your pocket.
      </p>

      <p
        className="text-[38px] font-bold tracking-tight mb-1"
        style={{ color: Theme.primary }}
      >
        {formatCounter(counter)}
      </p>
      <p className="text-[12px] mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
        potential monthly earnings at 50 orders/day
      </p>

      <div className="grid grid-cols-3 gap-2 mb-5">
        {[
          { val: "0%", label: "Commission" },
          { val: "₹0", label: "Ad spend" },
          { val: formatSaved(saved), label: "You save vs others" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-2.5"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: `0.5px solid ${Theme.primary}25`,
            }}
          >
            <p className="text-[16px] font-bold mb-0.5" style={{ color: Theme.primary }}>
              {s.val}
            </p>
            <p className="text-[11px] m-0" style={{ color: "rgba(255,255,255,0.4)" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>
          Earnings potential
        </span>
        <span className="text-[12px]" style={{ color: Theme.primary }}>
          {barWidth}%
        </span>
      </div>
      <div
        className="rounded-md h-2 overflow-hidden mb-1.5"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        <div
          className="h-full rounded-md transition-all duration-[1200ms] ease-out"
          style={{
            width: `${barWidth}%`,
            background: `linear-gradient(90deg, ${Theme.primary600}, ${Theme.primary})`,
          }}
        />
      </div>
      <div className="flex justify-between mb-5">
        <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>₹0</span>
        <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>₹1L/mo</span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {["Vendor amount + Vendor profit", "Platform incentives", "Referral earnings"].map((tag) => (
          <span
            key={tag}
            className="text-[12px] font-medium rounded-full px-3 py-1 cursor-default transition-colors duration-200"
            style={{
              background: `${Theme.primary}15`,
              color: Theme.primary200,     // #FBBC93
              border: `0.5px solid ${Theme.primary}30`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = `${Theme.primary}28`)}
            onMouseLeave={(e) => (e.currentTarget.style.background = `${Theme.primary}15`)}
          >
            {tag}
          </span>
        ))}
      </div>

      <button
      onClick={() => window.open("https://seller.maarto.com/seller/signin", "_blank")}
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold rounded-[10px] px-4 py-2.5 transition-all duration-150 hover:-translate-y-0.5 active:scale-[0.97]"
        style={{
          color: Theme.darkBrown,         // #2B1A0A — dark text on orange btn
          background: Theme.primary,
          border: "none",
        }}
      >
        Start earning more
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7H11M8 4L11 7L8 10" stroke={Theme.darkBrown} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default EarningsCard;