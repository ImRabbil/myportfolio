const TechStack = () => {
  const techs = [
    { icon: "🐘", name: "PHP 8.3", level: "BACKEND CORE" },
    { icon: "⚡", name: "Laravel 11", level: "PRIMARY FRAMEWORK" },
    { icon: "⚛️", name: "React.js", level: "FRONTEND SPA" },
    { icon: "🎨", name: "Tailwind CSS", level: "STYLING ENGINE" },
  ];

  const bottomTechs = [
    { icon: "🔐", name: "Sanctum / JWT", level: "AUTH LAYER" },
    { icon: "📦", name: "Redis / Queues", level: "ASYNC JOBS" },
    { icon: "💳", name: "Payment APIs", level: "STRIPE · SSLCOMMERZ" },
    { icon: "🚢", name: "Shipping APIs", level: "PATHAO · STEADFAST" },
  ];

  return (
    <section id="techstack">
      <div className="section-wrap">
        <div className="section-label">EXPERTISE</div>
        <h2 className="section-title">
          The <span style={{ color: "var(--teal)" }}>Tech Stack</span>
        </h2>
        <p className="section-sub">
          A symmetrical, battle-tested toolkit — every technology chosen for
          reliability, developer experience, and production performance.
        </p>
        <div className="tech-orbit-wrap">
          <div className="tech-grid">
            {techs.map((tech, idx) => (
              <div key={idx} className="tech-card fade-in">
                <div className="tech-icon-wrap">{tech.icon}</div>
                <div className="tech-name">{tech.name}</div>
                <div className="tech-level">{tech.level}</div>
              </div>
            ))}
          </div>
          <div className="tech-center-row">
            <div className="tech-card fade-in" style={{ flex: 1 }}>
              <div className="tech-icon-wrap">🔗</div>
              <div className="tech-name">Inertia.js</div>
              <div className="tech-level">SPA BRIDGE</div>
            </div>
            <div className="tech-center-card fade-in" style={{ flex: 1.4 }}>
              <div
                className="tech-icon-wrap"
                style={{ background: "rgba(198,160,246,0.15)" }}
              >
                🛠️
              </div>
              <div className="tech-name">Full-Stack Monolith</div>
              <div className="tech-level" style={{ color: "var(--subtext0)" }}>
                Laravel + React via Inertia = DX heaven
              </div>
            </div>
            <div className="tech-card fade-in" style={{ flex: 1 }}>
              <div className="tech-icon-wrap">🗄️</div>
              <div className="tech-name">MySQL</div>
              <div className="tech-level">DATA LAYER</div>
            </div>
          </div>
          <div className="tech-grid">
            {bottomTechs.map((tech, idx) => (
              <div key={idx} className="tech-card fade-in">
                <div className="tech-icon-wrap">{tech.icon}</div>
                <div className="tech-name">{tech.name}</div>
                <div className="tech-level">{tech.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
