const servicesData = [
  {
    icon: "🚀",
    title: "SaaS Architecture",
    desc: "End-to-end SaaS product development with multi-tenancy, subscription billing, onboarding flows, and admin dashboards. Built to scale from 10 to 10,000 users without a rewrite.",
    tags: ["Multi-tenancy", "Stripe Integration", "Laravel 11", "React.js"],
    tagColors: ["mauve", "mauve", "blue", "teal"],
    accent: "mauve",
  },
  {
    icon: "🛒",
    title: "E-commerce Scaling",
    desc: "Advanced e-commerce systems using the EAV model for flexible product attributes, complex membership tiers, custom pricing engines, and shipping API integrations that automate fulfilment.",
    tags: ["EAV Model", "Membership Systems", "Payment APIs", "Shipping APIs"],
    tagColors: ["blue", "blue", "peach", "teal"],
    accent: "blue",
  },
  {
    icon: "⚡",
    title: "Automation & APIs",
    desc: "Custom workflow automation, third-party API integrations (payment gateways, shipping, SMS), queue-driven background processing, and intelligent fraud detection systems.",
    tags: ["Queue Jobs", "Webhooks", "Fraud Detection", "REST APIs"],
    tagColors: ["teal", "teal", "green", "yellow"],
    accent: "teal",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="section-wrap">
        <div className="section-label">WHAT I BUILD</div>
        <h2 className="section-title">
          Services That{" "}
          <span style={{ color: "var(--mauve)" }}>Move the Needle</span>
        </h2>
        <p className="section-sub">
          I specialize in high-impact systems — from SaaS platforms to
          intelligent e-commerce architecture — built for performance, scale,
          and real business outcomes.
        </p>
        <div className="services-grid">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className="service-card fade-in"
              data-accent={service.accent}
            >
              <div className="service-icon">{service.icon}</div>
              <div className="service-title">{service.title}</div>
              <div className="service-desc">{service.desc}</div>
              <div className="service-tags">
                {service.tags.map((tag, i) => (
                  <span key={i} className={`tag tag-${service.tagColors[i]}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
