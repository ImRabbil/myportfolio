import { useState } from "react";

const clientProjects = [
  {
    category: "fashion",
    title: "Fashion Store BD",
    catLabel: "FASHION",
    catColor: "mauve",
    client: "Client Name / Brand",
    desc: "Full-featured clothing store with size/color variant management, EAV product model, and integrated bKash & SSLCommerz payment gateway.",
    tags: ["Laravel", "React", "bKash API"],
    tagColors: ["mauve", "teal", "peach"],
    url: "https://kibanshoe.com",
    icon: "🛍️",
  },
  {
    category: "electronics",
    title: "Tech Gadgets Store",
    catLabel: "ELECTRONICS",
    catColor: "blue",
    client: "Client Name / Brand",
    desc: "Electronics marketplace with advanced product filtering, warranty tracking, COD risk scoring, and automated Pathao courier integration for delivery.",
    tags: ["Laravel", "Inertia", "Pathao API"],
    tagColors: ["blue", "teal", "green"],
    url: "https://oceansdreams.com",
    icon: "💻",
  },
  {
    category: "multivendor",
    title: "Multi-vendor Marketplace",
    catLabel: "MULTI-VENDOR",
    catColor: "teal",
    client: "Client Name / Brand",
    desc: "Vendor onboarding, commission management, per-vendor inventory, and a unified checkout experience for buyers. Multiple payment options supported.",
    tags: ["Laravel", "React", "Commission"],
    tagColors: ["teal", "blue", "yellow"],
    url: "https://ecom.prodevs.com.bd",
    icon: "🏪",
  },
  {
    category: "grocery",
    title: "Online Grocery Delivery",
    catLabel: "GROCERY",
    catColor: "green",
    client: "Client Name / Brand",
    desc: "Time-slot based delivery scheduling, perishable inventory control, bulk order discounts, and real-time stock level notifications via SMS.",
    tags: ["Laravel", "Tailwind", "SMS API"],
    tagColors: ["green", "teal", "peach"],
    url: "https://unisalemart.com",
    icon: "🛒",
  },
  {
    category: "fashion",
    title: "Women's Boutique Store",
    catLabel: "FASHION",
    catColor: "pink",
    client: "Client Name / Brand",
    desc: "Boutique e-commerce with lookbook gallery, membership loyalty points, gift card system, and automated social media order notification flow.",
    tags: ["Laravel", "React", "Loyalty"],
    tagColors: ["mauve", "blue", "green"],
    url: "https://hklifestyle.com.bd",
    icon: "👗",
  },
  {
    category: "electronics",
    title: "Mobile Accessories Shop",
    catLabel: "ELECTRONICS",
    catColor: "yellow",
    client: "Client Name / Brand",
    desc: "High-volume accessories store with bulk pricing tiers, compatible device lookup, reseller portal, and Steadfast courier API for nationwide delivery.",
    tags: ["Laravel", "Inertia", "Steadfast"],
    tagColors: ["yellow", "teal", "blue"],
    url: "https://projectkitsbd.com",
    icon: "📱",
  },
];

const ClientWork = () => {
  const [filter, setFilter] = useState("all");

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "fashion", label: "Fashion" },
    { value: "electronics", label: "Electronics" },
    { value: "grocery", label: "Grocery" },
    { value: "multivendor", label: "Multi-vendor" },
  ];

  const filteredProjects =
    filter === "all"
      ? clientProjects
      : clientProjects.filter((p) => p.category === filter);

  return (
    <section id="clientwork">
      <div className="section-wrap">
        <div className="section-label">CLIENT WORK</div>
        <h2 className="section-title">
          Live <span style={{ color: "var(--peach)" }}>E-commerce</span>{" "}
          Projects
        </h2>
        <p className="section-sub">
          Real stores, real clients, real revenue. These projects are live and
          actively serving customers across Bangladesh and beyond.
        </p>

        <div className="cw-filter-bar">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`cw-filter ${filter === f.value ? "active" : ""}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="cw-grid">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="cw-card fade-in"
              data-category={project.category}
            >
              <div className="cw-browser">
                <div className="cw-browser-bar">
                  <div className="b-dot r"></div>
                  <div className="b-dot y"></div>
                  <div className="b-dot g"></div>
                  <div className="b-url">
                    <span>https://</span>
                    {project.url.replace("https://", "")}
                  </div>
                </div>
                <div
                  className="cw-preview-placeholder"
                  style={{
                    background: `linear-gradient(135deg, #1a1a2e, #1e2030)`,
                  }}
                >
                  {project.icon}
                </div>
              </div>
              <div className="cw-body">
                <div className="cw-top">
                  <div className="cw-title">{project.title}</div>
                  <span
                    className="cw-cat"
                    style={{
                      background: `rgba(var(--${project.catColor}-rgb),0.1)`,
                      color: `var(--${project.catColor})`,
                      border: `1px solid rgba(var(--${project.catColor}-rgb),0.3)`,
                    }}
                  >
                    {project.catLabel}
                  </span>
                </div>
                <div className="cw-client">{project.client}</div>
                <div className="cw-desc">{project.desc}</div>
                <div className="cw-footer">
                  <div className="cw-tags">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`tag tag-${project.tagColors[i]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    className="cw-live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="cw-live-dot"></div>Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWork;
