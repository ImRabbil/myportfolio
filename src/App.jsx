import { useEffect } from "react";
import AppLayout from "./layouts/AppLayout";

function App() {
  // Add this useEffect in your main App component or AppLayout
  useEffect(() => {
    // Trigger intersection observer check after mount
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <AppLayout>
        <section id="hero">
          <div className="hero-grid">
            <div>
              <div className="hero-tag">AVAILABLE FOR PROJECTS</div>
              <h1 className="hero-title">
                Building <span className="accent-mauve">Scalable SaaS</span>
                <br />& <span className="accent-blue">Automated</span>
                <br />
                <span className="accent-teal">E-commerce Systems</span>
              </h1>
              <p className="hero-desc">
                Senior Full-Stack Developer &amp; Software Agency Owner. I don't
                just write syntax — I architect business solutions using
                Laravel, React &amp; modern tooling that reduce operational
                costs and drive revenue.
              </p>
              <div className="hero-btns">
                <a href="#projects" className="btn-primary">
                  View Projects →
                </a>
                <a href="#contact" className="btn-secondary">
                  Get a Consultation
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-num">5+</div>
                  <div className="stat-label">YEARS EXP.</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">30+</div>
                  <div className="stat-label">PROJECTS SHIPPED</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">3</div>
                  <div className="stat-label">SAAS PRODUCTS</div>
                </div>
              </div>
            </div>

            <div className="hero-terminal">
              <div className="terminal-bar">
                <div className="t-dot red"></div>
                <div className="t-dot yellow"></div>
                <div className="t-dot green"></div>
                <span className="terminal-title">rabbil ~ developer.json</span>
              </div>
              <div className="terminal-body">
                <div className="t-bracket">{`{`}</div>
                <div style={{ paddingLeft: "1.2rem" }}>
                  <span className="t-key">"name"</span>
                  <span style={{ color: "var(--overlay1)" }}>: </span>
                  <span className="t-str">"Md. Rabbil Sarker"</span>
                  <span style={{ color: "var(--overlay1)" }}>,</span>
                </div>
                <div style={{ paddingLeft: "1.2rem" }}>
                  <span className="t-key">"role"</span>
                  <span style={{ color: "var(--overlay1)" }}>: </span>
                  <span className="t-str">"Senior Full-Stack Dev"</span>
                  <span style={{ color: "var(--overlay1)" }}>,</span>
                </div>
                <div style={{ paddingLeft: "1.2rem" }}>
                  <span className="t-key">"agency"</span>
                  <span style={{ color: "var(--overlay1)" }}>: </span>
                  <span className="t-str">"Dev With Rabbil"</span>
                  <span style={{ color: "var(--overlay1)" }}>,</span>
                </div>
                <div style={{ paddingLeft: "1.2rem" }}>
                  <span className="t-key">"stack"</span>
                  <span style={{ color: "var(--overlay1)" }}>: </span>
                  <span className="t-bracket">[</span>
                </div>
                <div style={{ paddingLeft: "2.4rem" }}>
                  <span className="t-val">"Laravel 11"</span>
                  <span style={{ color: "var(--overlay1)" }}>,</span>
                </div>
                <div style={{ paddingLeft: "2.4rem" }}>
                  <span className="t-val">"React.js"</span>
                  <span style={{ color: "var(--overlay1)" }}>,</span>
                </div>
                <div style={{ paddingLeft: "2.4rem" }}>
                  <span className="t-val">"Inertia.js"</span>
                  <span style={{ color: "var(--overlay1)" }}>,</span>
                </div>
                <div style={{ paddingLeft: "2.4rem" }}>
                  <span className="t-val">"Tailwind CSS"</span>
                </div>
                <div style={{ paddingLeft: "1.2rem" }}>
                  <span className="t-bracket">]</span>
                  <span style={{ color: "var(--overlay1)" }}>,</span>
                </div>
                <div style={{ paddingLeft: "1.2rem" }}>
                  <span className="t-key">"focus"</span>
                  <span style={{ color: "var(--overlay1)" }}>: </span>
                  <span className="t-str">"SaaS · E-commerce · APIs"</span>
                  <span style={{ color: "var(--overlay1)" }}>,</span>
                </div>
                <div style={{ paddingLeft: "1.2rem" }}>
                  <span className="t-key">"available"</span>
                  <span style={{ color: "var(--overlay1)" }}>: </span>
                  <span className="t-val">true</span>
                </div>
                <div className="t-bracket">{`}`}</div>
                <br />
                <span className="t-comment">
                  // Ready to solve your next problem
                </span>
                <br />
                <span style={{ color: "var(--mauve)" }}>rabbil@dev</span>
                <span style={{ color: "var(--overlay1)" }}>:~$ </span>
                <span className="t-cursor"></span>
              </div>
            </div>
          </div>
        </section>

        <div className="glitch-line"></div>

        <section id="services">
          <div className="section-wrap">
            <div className="section-label">WHAT I BUILD</div>
            <h2 className="section-title">
              Services That{" "}
              <span style={{ color: "var(--mauve)" }}>Move the Needle</span>
            </h2>
            <p className="section-sub">
              I specialize in high-impact systems — from SaaS platforms to
              intelligent e-commerce architecture — built for performance,
              scale, and real business outcomes.
            </p>

            <div className="services-grid">
              <div className="service-card fade-in" data-accent="mauve">
                <div className="service-icon">🚀</div>
                <div className="service-title">SaaS Architecture</div>
                <div className="service-desc">
                  End-to-end SaaS product development with multi-tenancy,
                  subscription billing, onboarding flows, and admin dashboards.
                  Built to scale from 10 to 10,000 users without a rewrite.
                </div>
                <div className="service-tags">
                  <span className="tag tag-mauve">Multi-tenancy</span>
                  <span className="tag tag-mauve">Stripe Integration</span>
                  <span className="tag tag-blue">Laravel 11</span>
                  <span className="tag tag-teal">React.js</span>
                </div>
              </div>

              <div className="service-card fade-in" data-accent="blue">
                <div className="service-icon">🛒</div>
                <div className="service-title">E-commerce Scaling</div>
                <div className="service-desc">
                  Advanced e-commerce systems using the EAV model for flexible
                  product attributes, complex membership tiers, custom pricing
                  engines, and shipping API integrations that automate
                  fulfilment.
                </div>
                <div className="service-tags">
                  <span className="tag tag-blue">EAV Model</span>
                  <span className="tag tag-blue">Membership Systems</span>
                  <span className="tag tag-peach">Payment APIs</span>
                  <span className="tag tag-teal">Shipping APIs</span>
                </div>
              </div>

              <div className="service-card fade-in" data-accent="teal">
                <div className="service-icon">⚡</div>
                <div className="service-title">Automation & APIs</div>
                <div className="service-desc">
                  Custom workflow automation, third-party API integrations
                  (payment gateways, shipping, SMS), queue-driven background
                  processing, and intelligent fraud detection systems.
                </div>
                <div className="service-tags">
                  <span className="tag tag-teal">Queue Jobs</span>
                  <span className="tag tag-teal">Webhooks</span>
                  <span className="tag tag-green">Fraud Detection</span>
                  <span className="tag tag-yellow">REST APIs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="glitch-line"></div>

        <section id="projects">
          <div className="section-wrap">
            <div className="section-label">FEATURED WORK</div>
            <h2 className="section-title">
              Projects That{" "}
              <span style={{ color: "var(--blue)" }}>Solved Real Problems</span>
            </h2>
            <p className="section-sub">
              Each project here represents a business challenge I was hired to
              solve. Not just code — measurable outcomes.
            </p>

            <div className="projects-grid">
              <div className="project-card fade-in">
                <div className="project-header">
                  <span className="project-num">01 / SAAS PRODUCT</span>
                  <span className="project-status status-live">● LIVE</span>
                </div>
                <div className="project-body">
                  <div className="project-name">
                    Fake Order Detection &amp; COD Risk Checker
                  </div>
                  <div className="project-desc">
                    A SaaS tool for Bangladeshi e-commerce merchants to flag
                    high-risk Cash-on-Delivery orders before dispatch — reducing
                    return losses and operational waste.
                  </div>
                  <div className="challenge-box">
                    <div className="challenge-label">
                      ⚡ CORE CHALLENGE SOLVED
                    </div>
                    <div className="challenge-text">
                      COD fraud was costing merchants 15–30% of revenue in
                      returned shipments. Built an ML-informed scoring engine
                      using order history, address validation, phone number
                      patterns, and behavioral signals to flag risky orders at
                      checkout.
                    </div>
                  </div>
                  <div className="project-stack">
                    <span className="tag tag-mauve">Laravel 11</span>
                    <span className="tag tag-teal">React.js</span>
                    <span className="tag tag-blue">Inertia.js</span>
                    <span className="tag tag-green">MySQL</span>
                    <span className="tag tag-yellow">Risk Scoring</span>
                  </div>
                </div>
              </div>

              <div className="project-card fade-in">
                <div className="project-header">
                  <span className="project-num">02 / WORKFLOW SYSTEM</span>
                  <span className="project-status status-prod">
                    ● PRODUCTION
                  </span>
                </div>
                <div className="project-body">
                  <div className="project-name">
                    Multi-User Task Management System
                  </div>
                  <div className="project-desc">
                    A role-based task platform with distinct Admin, QC, and
                    Worker interfaces — enabling teams to track deliverables,
                    validate quality, and manage assignments in real-time.
                  </div>
                  <div className="challenge-box">
                    <div className="challenge-label">
                      ⚡ CORE CHALLENGE SOLVED
                    </div>
                    <div className="challenge-text">
                      Manual QC bottlenecks were delaying 40% of tasks. Designed
                      a workflow engine where Workers submit, QC reviews, and
                      Admins approve — with automated status propagation and
                      audit logs so no task ever goes missing.
                    </div>
                  </div>
                  <div className="project-stack">
                    <span className="tag tag-mauve">Laravel</span>
                    <span className="tag tag-teal">React.js</span>
                    <span className="tag tag-blue">Role-based Auth</span>
                    <span className="tag tag-peach">Real-time</span>
                    <span className="tag tag-green">MySQL</span>
                  </div>
                </div>
              </div>

              <div className="project-card fade-in">
                <div className="project-header">
                  <span className="project-num">03 / ENTERPRISE POS</span>
                  <span className="project-status status-prod">
                    ● PRODUCTION
                  </span>
                </div>
                <div className="project-body">
                  <div className="project-name">
                    Advanced POS with Thermal Receipt Engine
                  </div>
                  <div className="project-desc">
                    A feature-rich Point of Sale system with inventory
                    management, multi-cashier support, discount engines, and
                    ESC/POS thermal printer integration for instant receipts.
                  </div>
                  <div className="challenge-box">
                    <div className="challenge-label">
                      ⚡ CORE CHALLENGE SOLVED
                    </div>
                    <div className="challenge-text">
                      Existing solutions couldn't handle local printer protocols
                      or complex discount stacking rules. Built a custom ESC/POS
                      layer and a rule-based discount engine that processes 5+
                      concurrent promotion types without conflicts.
                    </div>
                  </div>
                  <div className="project-stack">
                    <span className="tag tag-mauve">Laravel</span>
                    <span className="tag tag-teal">React.js</span>
                    <span className="tag tag-yellow">ESC/POS</span>
                    <span className="tag tag-blue">Tailwind CSS</span>
                    <span className="tag tag-green">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="glitch-line"></div>

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
                <div className="tech-card fade-in">
                  <div className="tech-icon-wrap">🐘</div>
                  <div className="tech-name">PHP 8.3</div>
                  <div className="tech-level">BACKEND CORE</div>
                </div>
                <div className="tech-card fade-in">
                  <div className="tech-icon-wrap">⚡</div>
                  <div className="tech-name">Laravel 11</div>
                  <div className="tech-level">PRIMARY FRAMEWORK</div>
                </div>
                <div className="tech-card fade-in">
                  <div className="tech-icon-wrap">⚛️</div>
                  <div className="tech-name">React.js</div>
                  <div className="tech-level">FRONTEND SPA</div>
                </div>
                <div className="tech-card fade-in">
                  <div className="tech-icon-wrap">🎨</div>
                  <div className="tech-name">Tailwind CSS</div>
                  <div className="tech-level">STYLING ENGINE</div>
                </div>
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
                  <div
                    className="tech-level"
                    style={{ color: "var(--subtext0)" }}
                  >
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
                <div className="tech-card fade-in">
                  <div className="tech-icon-wrap">🔐</div>
                  <div className="tech-name">Sanctum / JWT</div>
                  <div className="tech-level">AUTH LAYER</div>
                </div>
                <div className="tech-card fade-in">
                  <div className="tech-icon-wrap">📦</div>
                  <div className="tech-name">Redis / Queues</div>
                  <div className="tech-level">ASYNC JOBS</div>
                </div>
                <div className="tech-card fade-in">
                  <div className="tech-icon-wrap">💳</div>
                  <div className="tech-name">Payment APIs</div>
                  <div className="tech-level">STRIPE · SSLCOMMERZ</div>
                </div>
                <div className="tech-card fade-in">
                  <div className="tech-icon-wrap">🚢</div>
                  <div className="tech-name">Shipping APIs</div>
                  <div className="tech-level">PATHAO · STEADFAST</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="glitch-line"></div>

        <section id="about">
          <div className="section-wrap">
            <div className="about-grid">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <div className="about-avatar-wrap">
                  <div className="about-avatar">
                    <div className="avatar-initials">R</div>
                  </div>
                  <div className="about-badge">
                    <span className="badge-num">30+</span>
                    <span className="badge-label">Projects Delivered</span>
                  </div>
                </div>
              </div>
              <div className="about-content fade-in">
                <div className="section-label">ABOUT ME</div>
                <h2 className="section-title">
                  I Build Systems,
                  <br />
                  <span style={{ color: "var(--mauve)" }}>
                    Not Just Websites
                  </span>
                </h2>
                <p className="about-desc">
                  I'm Rabbil Sarker — the developer behind{" "}
                  <strong style={{ color: "var(--mauve)" }}>
                    Dev With Rabbil (Web Solutions)
                  </strong>
                  . I've spent 5+ years shipping production-grade web systems
                  that solve genuine business problems across e-commerce, SaaS,
                  and enterprise workflows.
                </p>
                <p className="about-desc">
                  My approach: understand the business problem first, then
                  architect the cleanest technical solution. I don't
                  over-engineer — I build what's needed, performantly, and with
                  full documentation.
                </p>
                <div className="about-items">
                  <div className="about-item">
                    <span className="about-item-icon">→</span>
                    <span>
                      Specialized in SaaS product architecture from 0 →
                      production
                    </span>
                  </div>
                  <div className="about-item">
                    <span className="about-item-icon">→</span>
                    <span>
                      Deep expertise in EAV models &amp; complex e-commerce
                      logic
                    </span>
                  </div>
                  <div className="about-item">
                    <span className="about-item-icon">→</span>
                    <span>
                      Payment &amp; shipping API integrations across BD + global
                      platforms
                    </span>
                  </div>
                  <div className="about-item">
                    <span className="about-item-icon">→</span>
                    <span>
                      Clean code advocate — SOLID principles, tested, documented
                    </span>
                  </div>
                  <div className="about-item">
                    <span className="about-item-icon">→</span>
                    <span>
                      Based in Bangladesh · Available for remote &amp; local
                      projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="glitch-line"></div>

        <section id="contact">
          <div className="section-wrap">
            <div className="contact-inner fade-in">
              <div
                className="section-label"
                style={{ justifyContent: "center" }}
              >
                LET'S WORK TOGETHER
              </div>
              <h2 className="contact-title">
                Have a Project
                <br />
                in <span style={{ color: "var(--mauve)" }}>Mind?</span>
              </h2>
              <p className="contact-desc">
                Whether you need a SaaS built from scratch, an e-commerce system
                that scales, or an automation that cuts your operational costs —
                let's talk. I offer a free 30-minute consultation for serious
                projects.
              </p>

              <div className="contact-cards">
                <a
                  href="mailto:hello@devwithrabbil.com"
                  className="contact-card"
                >
                  <div className="contact-card-icon">✉️</div>
                  <div className="contact-card-label">EMAIL</div>
                  <div className="contact-card-val">
                    hello@devwithrabbil.com
                  </div>
                </a>
                <a href="https://wa.me/880XXXXXXXXXX" className="contact-card">
                  <div className="contact-card-icon">💬</div>
                  <div className="contact-card-label">WHATSAPP</div>
                  <div className="contact-card-val">+880 · Message Me</div>
                </a>
                <a
                  href="https://github.com/devwithrabbil"
                  className="contact-card"
                >
                  <div className="contact-card-icon">🐙</div>
                  <div className="contact-card-label">GITHUB</div>
                  <div className="contact-card-val">@devwithrabbil</div>
                </a>
              </div>

              <a
                href="mailto:hello@devwithrabbil.com"
                className="btn-primary"
                style={{
                  fontSize: "0.9rem",
                  padding: "1rem 2.5rem",
                  display: "inline-block",
                }}
              >
                → Book Free Consultation
              </a>
            </div>
          </div>
        </section>
      </AppLayout>
    </>
  );
}

export default App;
