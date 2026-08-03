import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Theme from "../assets/Theme/Theme";

/* ─── tiny helpers ─────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

function InView({ children, className, variants, amount = 0.2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

/* ─── SVG illustrations ─────────────────────────────────────── */
const IlluOnboard = () => (
  <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px]">
    <circle cx="100" cy="60" r="38" fill={Theme.primary50} />
    <circle cx="100" cy="48" r="20" fill={Theme.primary} opacity=".15" />
    {/* person head */}
    <circle cx="100" cy="46" r="14" fill={Theme.primary200} />
    <circle cx="95" cy="44" r="2.5" fill={Theme.textPrimary} />
    <circle cx="105" cy="44" r="2.5" fill={Theme.textPrimary} />
    <path d="M95 52 Q100 56 105 52" stroke={Theme.textPrimary} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* body / laptop */}
    <rect x="72" y="90" width="56" height="36" rx="6" fill={Theme.primary} />
    <rect x="76" y="94" width="48" height="28" rx="4" fill={Theme.bgPage} />
    <rect x="80" y="98" width="20" height="3" rx="1.5" fill={Theme.primary300} />
    <rect x="80" y="104" width="32" height="2" rx="1" fill={Theme.border} />
    <rect x="80" y="109" width="28" height="2" rx="1" fill={Theme.border} />
    {/* envelope */}
    <rect x="130" y="95" width="32" height="22" rx="4" fill={Theme.primary50} stroke={Theme.primary} strokeWidth="1.5" />
    <path d="M130 97 L146 110 L162 97" stroke={Theme.primary} strokeWidth="1.5" fill="none" />
    {/* OTP dots */}
    <circle cx="136" cy="126" r="4" fill={Theme.primary} />
    <circle cx="146" cy="126" r="4" fill={Theme.primary600} />
    <circle cx="156" cy="126" r="4" fill={Theme.primary300} />
    {/* decorative ring */}
    <circle cx="36" cy="40" r="10" stroke={Theme.primary} strokeWidth="2" strokeDasharray="4 3" opacity=".5" />
    <circle cx="170" cy="140" r="8" stroke={Theme.primary300} strokeWidth="2" strokeDasharray="3 2" opacity=".6" />
  </svg>
);

const IlluKYC = () => (
  <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px]">
    <rect x="40" y="30" width="120" height="90" rx="10" fill={Theme.bgSurface} stroke={Theme.border} strokeWidth="2" />
    <rect x="52" y="44" width="36" height="44" rx="6" fill={Theme.primary100} />
    <circle cx="70" cy="58" r="10" fill={Theme.primary200} />
    <rect x="54" y="72" width="32" height="3" rx="1.5" fill={Theme.primary} />
    <rect x="54" y="78" width="24" height="3" rx="1.5" fill={Theme.primary300} />
    <rect x="96" y="44" width="52" height="6" rx="3" fill={Theme.border} />
    <rect x="96" y="54" width="40" height="6" rx="3" fill={Theme.border} />
    <rect x="96" y="64" width="44" height="6" rx="3" fill={Theme.border} />
    <rect x="96" y="74" width="36" height="6" rx="3" fill={Theme.border} />
    {/* shield check */}
    <path d="M80 135 L100 125 L120 135 L120 155 Q100 165 80 155 Z" fill={Theme.primary} opacity=".9" />
    <path d="M90 145 L97 152 L112 138" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* stars */}
    <text x="148" y="50" fontSize="18" fill={Theme.primary} opacity=".3">✦</text>
    <text x="30" y="130" fontSize="14" fill={Theme.primary300} opacity=".5">✦</text>
  </svg>
);

const IlluProducts = () => (
  <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px]">
    {/* boxes */}
    <rect x="30" y="90" width="50" height="50" rx="6" fill={Theme.primary} />
    <rect x="36" y="82" width="38" height="12" rx="4" fill={Theme.primary600} />
    <path d="M55 82 L55 90" stroke={Theme.primary800} strokeWidth="2" />
    {/* small box */}
    <rect x="90" y="110" width="34" height="30" rx="5" fill={Theme.primary200} />
    <rect x="94" y="104" width="26" height="9" rx="3" fill={Theme.primary300} />
    <path d="M107 104 L107 110" stroke={Theme.primary600} strokeWidth="1.5" />
    {/* tag */}
    <rect x="130" y="60" width="44" height="28" rx="6" fill={Theme.primary50} stroke={Theme.primary} strokeWidth="1.5" />
    <circle cx="137" cy="74" r="3" fill={Theme.primary} />
    <rect x="144" y="68" width="24" height="3" rx="1.5" fill={Theme.border} />
    <rect x="144" y="74" width="18" height="3" rx="1.5" fill={Theme.primary300} />
    <rect x="144" y="80" width="22" height="3" rx="1.5" fill={Theme.border} />
    {/* upward arrow */}
    <path d="M152 130 L152 100 M144 108 L152 100 L160 108" stroke={Theme.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* sparkle */}
    <text x="40" y="50" fontSize="22" fill={Theme.primary} opacity=".2">✦</text>
  </svg>
);

const IlluOrders = () => (
  <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px]">
    {/* phone */}
    <rect x="70" y="20" width="60" height="110" rx="12" fill={Theme.textPrimary} />
    <rect x="76" y="30" width="48" height="90" rx="6" fill={Theme.bgPage} />
    <circle cx="100" cy="24" r="3" fill={Theme.bgSurface} />
    {/* notification */}
    <rect x="80" y="36" width="40" height="18" rx="4" fill={Theme.primary50} stroke={Theme.primary} strokeWidth="1.2" />
    <text x="84" y="49" fontSize="9" fill={Theme.primary} fontWeight="700">NEW ORDER</text>
    {/* check / reject */}
    <circle cx="88" cy="70" r="10" fill={Theme.primary} />
    <path d="M83 70 L87 74 L94 65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="112" cy="70" r="10" fill="#FEECE7" stroke={Theme.primary600} strokeWidth="1.2" />
    <path d="M107 65 L117 75 M117 65 L107 75" stroke={Theme.primary600} strokeWidth="2" strokeLinecap="round" />
    {/* truck */}
    <rect x="30" y="130" width="60" height="30" rx="6" fill={Theme.primary200} />
    <rect x="88" y="136" width="36" height="24" rx="4" fill={Theme.primary} />
    <path d="M88 148 L124 148" stroke={Theme.primary600} strokeWidth="1.5" />
    <circle cx="46" cy="162" r="8" fill={Theme.textPrimary} />
    <circle cx="46" cy="162" r="4" fill={Theme.bgPage} />
    <circle cx="110" cy="162" r="8" fill={Theme.textPrimary} />
    <circle cx="110" cy="162" r="4" fill={Theme.bgPage} />
  </svg>
);

const IlluEarnings = () => (
  <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px]">
    {/* wallet */}
    <rect x="30" y="50" width="100" height="70" rx="10" fill={Theme.primary} />
    <rect x="30" y="68" width="100" height="52" rx="8" fill={Theme.primary600} />
    <circle cx="120" cy="94" r="16" fill={Theme.primary800} />
    <text x="112" y="99" fontSize="16" fill={Theme.primary200} fontWeight="700">₹</text>
    {/* coins */}
    <circle cx="158" cy="60" r="18" fill={Theme.primary50} stroke={Theme.primary} strokeWidth="2" />
    <text x="150" y="65" fontSize="16" fill={Theme.primary} fontWeight="700">₹</text>
    {/* bar chart */}
    <rect x="34" y="140" width="14" height="28" rx="3" fill={Theme.primary200} />
    <rect x="52" y="128" width="14" height="40" rx="3" fill={Theme.primary} />
    <rect x="70" y="118" width="14" height="50" rx="3" fill={Theme.primary600} />
    <rect x="88" y="132" width="14" height="36" rx="3" fill={Theme.primary300} />
    <rect x="106" y="110" width="14" height="58" rx="3" fill={Theme.primary} />
    {/* trend line */}
    <path d="M41 152 L59 142 L77 130 L95 138 L113 120" stroke={Theme.primary800} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 2" fill="none" />
  </svg>
);

/* ─── step data ─────────────────────────────────────────────── */
const STEPS = [
  {
    number: "01",
    title: "Create Vendor Account",
    description:
      "Sign up with your username, email, phone and password. Verify via OTP over email or SMS, then proceed to KYC.",
    tags: ["OTP Verification", "Email / SMS", "Referral Code"],
    Illustration: IlluOnboard,
    flip: false,
  },
  {
    number: "02",
    title: "Complete KYC & Get Approved",
    description:
      "Submit your business details, GST number, PAN, Aadhaar and bank info. Admin reviews and activates your full dashboard.",
    tags: ["Business Verification", "Document Upload", "Admin Approval"],
    Illustration: IlluKYC,
    flip: true,
  },
  {
    number: "03",
    title: "Add Products & Manage Inventory",
    description:
      "List products with images, specs and pricing. Manage branch-wise stock, bulk updates and warehouse transfers effortlessly.",
    tags: ["Multi-Branch", "Bulk Updates", "Product Approval"],
    Illustration: IlluProducts,
    flip: false,
  },
  {
    number: "04",
    title: "Receive & Fulfill Orders",
    description:
      "Accept orders from Maarto, pack and generate invoices, then dispatch. Maarto handles all sales, marketing and customer reach.",
    tags: ["Accept / Reject", "Invoice Generation", "Dispatch"],
    Illustration: IlluOrders,
    flip: true,
  },
  {
    number: "05",
    title: "Get Paid & Grow",
    description:
      "Earnings land in your wallet after every completed order. Track profit-share, payouts, referral income and monthly graphs.",
    tags: ["Wallet", "Profit Sharing", "Referral Rewards"],
    Illustration: IlluEarnings,
    flip: false,
  },
];

/* ─── journey steps (mini timeline at bottom) ──────────────── */
const JOURNEY = [
  "Create Account",
  "Verify OTP",
  "Complete KYC",
  "Admin Approval",
  "Add Products",
  "Manage Inventory",
  "Receive Orders",
  "Pack & Dispatch",
  "Get Paid",
  "Earn Profit",
];

/* ─── Step card ─────────────────────────────────────────────── */
function StepCard({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* connector line */}
      {index < STEPS.length - 1 && (
        <div
          className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-orange-200 to-transparent"
          style={{ top: "100%", height: "60px", zIndex: 0 }}
        />
      )}

      <div
        className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
          !isEven ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Illustration side */}
        <motion.div
          className="flex-1 flex justify-center"
          variants={isEven ? fadeLeft(0.1) : fadeRight(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div
            className="relative w-64 h-64 flex items-center justify-center rounded-3xl"
            style={{ background: Theme.bgSurface }}
          >
            {/* big number watermark */}
            <span
              className="absolute -top-5 -right-4 text-8xl font-black select-none"
              style={{ color: Theme.primary, opacity: 0.08, lineHeight: 1 }}
            >
              {step.number}
            </span>
            <step.Illustration />
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div
          className="flex-1"
          variants={isEven ? fadeRight(0.2) : fadeLeft(0.2)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* step badge */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-black"
              style={{ background: Theme.primary, color: "#fff" }}
            >
              {step.number}
            </span>
            <span
              className="h-px flex-1 max-w-[40px]"
              style={{ background: Theme.primary, opacity: 0.3 }}
            />
          </div>

          <h3
            className="text-2xl md:text-3xl font-black mb-3 leading-tight"
            style={{ color: Theme.textPrimary}}
          >
            {step.title}
          </h3>
          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: Theme.textSecond }}
          >
            {step.description}
          </p>

          {/* tags */}
          <div className="flex flex-wrap gap-2">
            {step.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold rounded-full border"
                style={{
                  borderColor: Theme.primary,
                  color: Theme.primary,
                  background: Theme.primary50,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Journey ticker ────────────────────────────────────────── */
function JourneyBar() {
  return (
    <div className="overflow-x-auto pb-4 hide-scrollbar">
      <div className="flex items-center gap-0 min-w-max mx-auto">
        {JOURNEY.map((item, i) => (
          <div key={item} className="flex items-center">
            <motion.div
              className="flex flex-col items-center gap-2"
              variants={fadeUp(i * 0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md"
                style={{ background: i === 0 || i === JOURNEY.length - 1 ? Theme.primary600 : Theme.primary }}
              >
                {i + 1}
              </div>
              <span
                className="text-xs font-semibold text-center max-w-[72px] leading-tight"
                style={{ color: Theme.textSecond }}
              >
                {item}
              </span>
            </motion.div>
            {i < JOURNEY.length - 1 && (
              <div
                className="w-8 h-0.5 mb-5 mx-1 flex-shrink-0"
                style={{ background: Theme.primary, opacity: 0.25 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Why Maarto quick cards ────────────────────────────────── */
/* ─── Why SVG icons ─────────────────────────────────────────── */
const IconOnboarding = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <circle cx="24" cy="24" r="22" fill={Theme.primary50} />
    {/* person silhouette */}
    <circle cx="24" cy="18" r="7" fill={Theme.primary} />
    <path d="M10 38 C10 30 38 30 38 38" fill={Theme.primary} opacity=".7" />
    {/* check badge */}
    <circle cx="36" cy="14" r="7" fill={Theme.primary600} />
    <path d="M32.5 14 L35 16.5 L39.5 11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const IconInventory = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <circle cx="24" cy="24" r="22" fill={Theme.primary50} />
    {/* main box */}
    <rect x="10" y="18" width="18" height="18" rx="3" fill={Theme.primary} />
    <path d="M10 24 L28 24" stroke={Theme.primary600} strokeWidth="1.5" />
    <path d="M19 18 L19 24" stroke={Theme.primary600} strokeWidth="1.5" />
    {/* small box stacked */}
    <rect x="24" y="12" width="13" height="13" rx="3" fill={Theme.primary300} />
    <path d="M24 18 L37 18" stroke={Theme.primary} strokeWidth="1.2" />
    <path d="M30.5 12 L30.5 18" stroke={Theme.primary} strokeWidth="1.2" />
    {/* arrow up */}
    <path d="M34 30 L34 38 M30 34 L34 30 L38 34" stroke={Theme.primary600} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const IconMarketing = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <circle cx="24" cy="24" r="22" fill={Theme.primary50} />
    {/* megaphone body */}
    <path d="M12 20 L12 28 L18 28 L30 34 L30 14 L18 20 Z" fill={Theme.primary} />
    {/* sound waves */}
    <path d="M33 18 Q37 21 37 24 Q37 27 33 30" stroke={Theme.primary600} strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M34.5 20.5 Q37.5 22 37.5 24 Q37.5 26 34.5 27.5" stroke={Theme.primary300} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* handle */}
    <path d="M15 28 L13 36" stroke={Theme.primary600} strokeWidth="2.5" strokeLinecap="round" />
    {/* stars */}
    <circle cx="10" cy="16" r="2" fill={Theme.primary300} opacity=".7" />
    <circle cx="38" cy="14" r="1.5" fill={Theme.primary200} opacity=".8" />
  </svg>
);

const IconWallet = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <circle cx="24" cy="24" r="22" fill={Theme.primary50} />
    {/* wallet body */}
    <rect x="8" y="16" width="32" height="22" rx="4" fill={Theme.primary} />
    <rect x="8" y="20" width="32" height="18" rx="3" fill={Theme.primary600} />
    {/* pocket */}
    <rect x="28" y="22" width="10" height="10" rx="3" fill={Theme.primary800} />
    <circle cx="33" cy="27" r="3" fill={Theme.primary300} />
    {/* rupee symbol */}
    <text x="13" y="31" fontSize="10" fill="white" fontWeight="700" fontFamily="sans-serif">₹</text>
    {/* card line */}
    <rect x="10" y="14" width="20" height="5" rx="2" fill={Theme.primary300} opacity=".5" />
  </svg>
);

const IconReferral = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <circle cx="24" cy="24" r="22" fill={Theme.primary50} />
    {/* center node */}
    <circle cx="24" cy="24" r="5" fill={Theme.primary} />
    {/* spokes */}
    <line x1="24" y1="19" x2="24" y2="12" stroke={Theme.primary} strokeWidth="2" />
    <line x1="24" y1="29" x2="24" y2="36" stroke={Theme.primary} strokeWidth="2" />
    <line x1="19" y1="24" x2="12" y2="24" stroke={Theme.primary} strokeWidth="2" />
    <line x1="29" y1="24" x2="36" y2="24" stroke={Theme.primary} strokeWidth="2" />
    <line x1="20.5" y1="20.5" x2="15" y2="15" stroke={Theme.primary300} strokeWidth="1.5" />
    <line x1="27.5" y1="27.5" x2="33" y2="33" stroke={Theme.primary300} strokeWidth="1.5" />
    <line x1="27.5" y1="20.5" x2="33" y2="15" stroke={Theme.primary300} strokeWidth="1.5" />
    <line x1="20.5" y1="27.5" x2="15" y2="33" stroke={Theme.primary300} strokeWidth="1.5" />
    {/* outer nodes */}
    {[[24,10],[24,38],[10,24],[38,24],[14,14],[34,34],[34,14],[14,34]].map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="3.5" fill={i < 4 ? Theme.primary600 : Theme.primary200} />
    ))}
  </svg>
);

const IconAnalytics = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <circle cx="24" cy="24" r="22" fill={Theme.primary50} />
    {/* bars */}
    <rect x="10" y="30" width="6" height="10" rx="2" fill={Theme.primary200} />
    <rect x="19" y="22" width="6" height="18" rx="2" fill={Theme.primary} />
    <rect x="28" y="16" width="6" height="24" rx="2" fill={Theme.primary600} />
    <rect x="37" y="26" width="1" height="0" rx="0" fill="none" />
    {/* trend line */}
    <path d="M13 28 L22 20 L31 14 L40 18" stroke={Theme.primary800} strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" fill="none" />
    {/* dot on trend */}
    <circle cx="31" cy="14" r="3" fill={Theme.primary600} />
    {/* axis */}
    <line x1="8" y1="40" x2="42" y2="40" stroke={Theme.border} strokeWidth="1.5" />
  </svg>
);

const WHY = [
  { Icon: IconOnboarding, title: "Easy Onboarding", desc: "Simple account creation and KYC process designed for every vendor." },
  { Icon: IconInventory, title: "Smart Inventory", desc: "Manage multi-branch stock, bulk updates and warehouse transfers." },
  { Icon: IconMarketing, title: "Sales & Marketing", desc: "Maarto handles all promotions and customer reach so you don't have to." },
  { Icon: IconWallet, title: "Secure Wallet", desc: "Transparent profit-sharing, payouts and real-time earning history." },
  { Icon: IconReferral, title: "Referral Income", desc: "Earn extra by inviting vendors. Track direct & indirect referrals." },
  { Icon: IconAnalytics, title: "Live Analytics", desc: "Full dashboard with order stats, top products and growth graphs." },
];

function WhyCard({ item, delay }) {
  const { Icon } = item;
  return (
    <InView variants={fadeUp(delay)} className="h-full">
      <motion.div
        className="h-full p-6 rounded-2xl flex flex-col gap-3 border cursor-default"
        style={{ background: Theme.bgSurface, borderColor: Theme.border }}
        whileHover={{ y: -6, boxShadow: `0 16px 40px ${Theme.primary}22` }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Icon />
        <h4 className="font-black text-base" style={{ color: Theme.textPrimary}}>
          {item.title}
        </h4>
        <p className="text-sm leading-relaxed" style={{ color: Theme.textSecond }}>
          {item.desc}
        </p>
      </motion.div>
    </InView>
  );
}

/* ─── Main component ────────────────────────────────────────── */
const HowItWorks = () => {
  return (
    <div style={{ background: Theme.bgPage, fontFamily: "'DM Sans', sans-serif" }} className="min-h-screen">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600&display=swap');
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-4 pt-20 pb-24 text-center">
        {/* decorative blobs */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${Theme.primary} 0%, transparent 70%)` }}
        />
        <InView variants={fadeUp(0)} className="relative z-10">
          <span
            className="inline-block px-4 py-1 text-xs font-bold rounded-full mb-6 tracking-widest uppercase"
            style={{ background: Theme.primary50, color: Theme.primary }}
          >
            Vendor Platform
          </span>
        </InView>

        <InView variants={fadeUp(0.1)} className="relative z-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight max-w-3xl mx-auto mb-6"
            style={{ color: Theme.textPrimary }}
          >
            How{" "}
            <span style={{ color: Theme.primary }}>Maarto</span>{" "}
            Works
          </h1>
        </InView>

        <InView variants={fadeUp(0.2)} className="relative z-10">
          <p
            className="text-lg max-w-xl mx-auto mb-8 leading-relaxed"
            style={{ color: Theme.textSecond }}
          >
            Maarto handles sales &amp; marketing while you focus on products, inventory and order fulfillment. Simple, secure, and smart.
          </p>
        </InView>

        <InView variants={fadeUp(0.3)} className="relative z-10">
          <motion.button
            className="px-8 py-3 rounded-full font-bold text-white text-sm shadow-lg"
            style={{ background: Theme.primary }}
            whileHover={{ scale: 1.05, boxShadow: `0 8px 32px ${Theme.primary}66` }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started Free
          </motion.button>
        </InView>

        {/* floating chips */}
        {["Multi-Branch", "OTP Secure", "Instant Wallet", "Admin Approved"].map((c, i) => (
          <motion.span
            key={c}
            className="absolute hidden md:block text-xs font-semibold px-3 py-1 rounded-full border shadow-sm"
            style={{
              borderColor: Theme.primary,
              color: Theme.primary,
              background: Theme.bgPage,
              top: `${[30, 55, 30, 60][i]}%`,
              left: i < 2 ? `${[4, 8][i]}%` : undefined,
              right: i >= 2 ? `${[8, 4][i - 2]}%` : undefined,
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          >
            {c}
          </motion.span>
        ))}
      </section>

      {/* ── Steps ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16 flex flex-col gap-20">
        {STEPS.map((step, index) => (
          <StepCard key={step.number} step={step} index={index} />
        ))}
      </section>

      {/* ── Journey timeline ── */}
      <section className="py-16 px-4" style={{ background: Theme.bgSurface }}>
        <InView variants={fadeUp(0)}>
          <h2
            className="text-2xl md:text-3xl font-black text-center mb-12"
            style={{ color: Theme.textPrimary}}
          >
            Complete Vendor Journey
          </h2>
        </InView>
        <div className="max-w-5xl mx-auto">
          <JourneyBar />
        </div>
      </section>

      {/* ── Why Maarto ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
        <InView variants={fadeUp(0)}>
          <h2
            className="text-2xl md:text-3xl font-black text-center mb-12"
            style={{ color: Theme.textPrimary}}
          >
            Why Choose{" "}
            <span style={{ color: Theme.primary }}>Maarto?</span>
          </h2>
        </InView>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY.map((item, i) => (
            <WhyCard key={item.title} item={item} delay={i * 0.07} />
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="mx-4 sm:mx-8 mb-20 rounded-3xl overflow-hidden relative"
        style={{ background: `linear-gradient(135deg, ${Theme.primary} 0%, ${Theme.primary600} 100%)` }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 text-center py-16 px-6">
          <InView variants={fadeUp(0)}>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" >
              Ready to Grow Your Business?
            </h2>
          </InView>
          <InView variants={fadeUp(0.1)}>
            <p className="text-white/80 mb-8 max-w-md mx-auto text-base">
              Join thousands of vendors already growing with Maarto's smart platform.
            </p>
          </InView>
          <InView variants={fadeUp(0.2)}>
            <motion.button
              className="px-10 py-3 rounded-full font-bold text-sm shadow-xl"
              style={{ background: Theme.bgPage, color: Theme.primary }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Create Vendor Account →
            </motion.button>
          </InView>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;