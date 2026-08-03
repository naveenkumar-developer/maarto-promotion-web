import { motion } from "framer-motion";
import Theme from "../assets/Theme/Theme";
import EarningsCard from "./EarningsCard";

const highlights = [
  {
    id: 1,
    title: "Zero Commission",
    desc: "Sell your products without paying any commission on every order.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke={Theme.primary} strokeWidth="1.5" />
        <path d="M7 10.5L9 12.5L13 8" stroke={Theme.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "No Advertising Costs",
    desc: "We promote your products — no need to spend on ads.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10H17M3 6H17M3 14H11" stroke={Theme.primary} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Account Stability",
    desc: "No sudden deactivations. Your business stays secure and consistent.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L4 5V10C4 13.31 6.69 16.42 10 17C13.31 16.42 16 13.31 16 10V5L10 2Z" stroke={Theme.primary} strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Fast & Reliable Payouts",
    desc: "Get paid quickly with smooth and transparent payout processing.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="5" width="16" height="11" rx="2" stroke={Theme.primary} strokeWidth="1.5" />
        <path d="M2 9H18" stroke={Theme.primary} strokeWidth="1.5" />
        <circle cx="6" cy="13" r="1" fill={Theme.primary} />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Free Storage Support",
    desc: "No warehouse? We provide storage space at zero cost.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="7" width="16" height="10" rx="1.5" stroke={Theme.primary} strokeWidth="1.5" />
        <path d="M5 7V5C5 3.9 5.9 3 7 3H13C14.1 3 15 3.9 15 5V7" stroke={Theme.primary} strokeWidth="1.5" />
        <path d="M8 11H12" stroke={Theme.primary} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const HighLights = () => {
  return (
    <section
      style={{
        background: "#fafaf8",
        padding: "6rem 1.5rem",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Syne:wght@600;700&display=swap"
        rel="stylesheet"
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3.5rem" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: Theme.primary,
              background: `${Theme.primary}14`,
              border: `0.5px solid ${Theme.primary}40`,
              borderRadius: 20,
              padding: "4px 12px",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: Theme.primary,
                display: "inline-block",
              }}
            />
            For vendors
          </span>

          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              color: "#1a1a1a",
              margin: "0 0 0.75rem",
              lineHeight: 1.2,
              maxWidth: 520,
            }}
          >
            Built for sellers who want{" "}
            <span style={{ color: Theme.primary }}>more profit</span>
          </h2>

          <p style={{ color: "#888", fontSize: 15, margin: 0 }}>
            No hidden charges. No stress. Just growth-focused selling.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            alignItems: "start",
          }}
          className="hl-layout"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {highlights.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  background: "#ffffff",
                  border: "0.5px solid #e8e8e4",
                  borderRadius: 12,
                  padding: "16px 18px",
                  cursor: "default",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${Theme.primary}60`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#e8e8e4")
                }
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: `${Theme.primary}10`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  {item.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 4,
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#1a1a1a",
                      }}
                    >
                      {item.title}
                    </p>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        color: "#ccc",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      0{item.id}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      color: "#888",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 10,
              }}
            >
              {[
                { val: "0%", label: "Commission" },
                { val: "₹0", label: "Ad spend" },
                { val: "7-day payout • Instant on sales", label: "Payout on sale" }
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "#ffffff",
                    border: "0.5px solid #e8e8e4",
                    borderRadius: 12,
                    padding: "16px 12px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 4px",
                      fontWeight: 700,
                      fontSize: 22,
                      color: Theme.primary,
                    }}
                  >
                    {s.val}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 12,
                      color: "#aaa",
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div> */}
            <motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  viewport={{ once: true }}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
>
  {[
    { val: "0%", label: "Commission" },
    { val: "₹0", label: "Ad spend" },
    { val: "7-day payout • Instant on sales", label: "Payout on sale" }
  ].map((s) => (
    <div
      key={s.label}
      className="bg-white border border-gray-200 rounded-xl p-4 text-center"
    >
      <p
        className="font-bold text-lg sm:text-xl md:text-2xl mb-1"
        style={{ color: Theme.primary }}
      >
        {s.val}
      </p>

      <p className="text-xs sm:text-sm text-gray-400 font-medium">
        {s.label}
      </p>
    </div>
  ))}
</motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                background: "#ffffff",
                border: "0.5px solid #e8e8e4",
                borderRadius: 16,
                padding: "24px",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "#888",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: Theme.primary,
                    display: "inline-block",
                  }}
                />
                Coming soon
              </span>

              <h3
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#1a1a1a",
                  margin: "0 0 8px",
                  lineHeight: 1.3,
                }}
              >
                Exciting launch offers for vendors
              </h3>

              <p
                style={{
                  fontSize: 13,
                  color: "#888",
                  lineHeight: 1.6,
                  margin: "0 0 20px",
                }}
              >
                Early vendors get exclusive benefits, premium support, and special perks at launch.
              </p>

              <button
              onClick={() => window.open("https://seller.maarto.com/seller/signin", "_blank")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  color: Theme.primary,
                  background: `${Theme.primary}10`,
                  border: `0.5px solid ${Theme.primary}40`,
                  borderRadius: 8,
                  padding: "9px 16px",
                  cursor: "pointer",
                }}
              >
                Join early access
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7H11M8 4L11 7L8 10" stroke={Theme.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </motion.div>


          </div>
        </div>

<div className="my-4">
        <EarningsCard />

</div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hl-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HighLights;