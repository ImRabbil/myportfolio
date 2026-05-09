const Hero = () => {
  return (
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
            just write syntax — I architect business solutions using Laravel,
            React &amp; modern tooling that reduce operational costs and drive
            revenue.
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
        <Terminal />
      </div>
    </section>
  );
};

const Terminal = () => (
  <div className="hero-terminal">
    <div className="terminal-bar">
      <div className="t-dot red"></div>
      <div className="t-dot yellow"></div>
      <div className="t-dot green"></div>
      <span className="terminal-title">rabbil ~ developer.json</span>
    </div>
    <div className="terminal-body">
      <div className="t-bracket">{"{"}</div>
      <div style={{ paddingLeft: "1.2rem" }}>
        <span className="t-key">"name"</span>
        <span style={{ color: "var(--overlay1)" }}>: </span>
        <span className="t-str">"Rabbil Hasan"</span>
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
      <div className="t-bracket">{"}"}</div>
      <br />
      <span className="t-comment">// Ready to solve your next problem</span>
      <br />
      <span style={{ color: "var(--mauve)" }}>rabbil@dev</span>
      <span style={{ color: "var(--overlay1)" }}>:~$ </span>
      <span className="t-cursor"></span>
    </div>
  </div>
);

export default Hero;
