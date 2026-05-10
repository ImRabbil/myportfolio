import { useRef, useEffect } from "react";
const About = () => {
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".skill-bar-fill")
              .forEach((bar, i) => {
                setTimeout(() => bar.classList.add("animated"), i * 150);
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { num: "30+", label: "PROJECTS\nDELIVERED", color: "mauve", icon: "🚀" },
    { num: "5+", label: "YEARS OF\nEXPERIENCE", color: "blue", icon: "🗓️" },
    { num: "3", label: "SAAS PRODUCTS\nLAUNCHED", color: "teal", icon: "⚡" },
    { num: "100%", label: "CLIENT\nSATISFACTION", color: "green", icon: "⭐" },
  ];

  const skills = [
    { name: "Laravel / PHP", pct: 95, color: "mauve" },
    { name: "React.js / Inertia", pct: 88, color: "blue" },
    { name: "SaaS Architecture", pct: 90, color: "teal" },
    { name: "API Integrations", pct: 92, color: "green" },
  ];

  return (
    <section id="about">
      <div className="section-wrap">
        <div className="about-grid">
          <div className="about-left fade-in">
            <div className="about-avatar">
              <div className="avatar-ring">
                <div className="avatar-initials">R</div>
              </div>
              <div className="avatar-name">Md. Rabbil Sarker</div>
              <div className="avatar-role">SENIOR FULL-STACK DEVELOPER</div>
              <div className="avatar-location">📍 Dhaka, Bangladesh</div>
              <div className="avail-dot">OPEN TO PROJECTS</div>
            </div>
            <div className="about-stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="astat">
                  <div
                    className="astat-accent"
                    style={{
                      background: `linear-gradient(90deg, var(--${stat.color}), transparent)`,
                    }}
                  ></div>
                  <div className="astat-icon">{stat.icon}</div>
                  <div
                    className="astat-num"
                    style={{ color: `var(--${stat.color})` }}
                  >
                    {stat.num}
                  </div>
                  <div className="astat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-content fade-in">
            <div className="section-label">ABOUT ME</div>
            <h2 className="section-title">
              I Build Systems,
              <br />
              <span style={{ color: "var(--mauve)" }}>Not Just Websites</span>
            </h2>
            <p className="about-desc">
              I'm Md. Rabbil Sarker — the developer behind{" "}
              <strong style={{ color: "var(--mauve)" }}>
                Dev With Rabbil (Web Solutions)
              </strong>
              . I've spent 5+ years shipping production-grade web systems that
              solve genuine business problems across e-commerce, SaaS, and
              enterprise workflows.
            </p>
            <p className="about-desc">
              My approach: understand the business problem first, then architect
              the cleanest technical solution. I don't over-engineer — I build
              what's needed, performantly, and with full documentation.
            </p>
            <div className="about-items">
              <div className="about-item">
                <span className="about-item-icon">🏗️</span>
                <span>SaaS product architecture — from idea to production</span>
              </div>
              <div className="about-item">
                <span className="about-item-icon">🛒</span>
                <span>EAV model &amp; complex e-commerce logic at scale</span>
              </div>
              <div className="about-item">
                <span className="about-item-icon">🔌</span>
                <span>
                  Payment &amp; shipping API integrations — BD + global
                </span>
              </div>
              <div className="about-item">
                <span className="about-item-icon">✅</span>
                <span>Clean code — SOLID principles, tested, documented</span>
              </div>
            </div>

            <div className="skill-bars" ref={skillRef}>
              {skills.map((skill, idx) => (
                <div key={idx} className="skill-row">
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span className="skill-pct">{skill.pct}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{
                        "--pct": `${skill.pct}%`,
                        background: `var(--${skill.color})`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
