const projectsData = [
  {
    num: "01 / SAAS PRODUCT",
    status: "LIVE",
    statusClass: "live",
    name: "Fake Order Detection & COD Risk Checker",
    desc: "A SaaS tool for Bangladeshi e-commerce merchants to flag high-risk Cash-on-Delivery orders before dispatch — reducing return losses and operational waste.",
    challenge:
      "COD fraud was costing merchants 15–30% of revenue in returned shipments. Built an ML-informed scoring engine using order history, address validation, phone number patterns, and behavioral signals to flag risky orders at checkout.",
    tags: ["Laravel 11", "React.js", "Inertia.js", "MySQL", "Risk Scoring"],
    tagColors: ["mauve", "teal", "blue", "green", "yellow"],
  },
  {
    num: "02 / WORKFLOW SYSTEM",
    status: "PRODUCTION",
    statusClass: "prod",
    name: "Multi-User Task Management System",
    desc: "A role-based task platform with distinct Admin, QC, and Worker interfaces — enabling teams to track deliverables, validate quality, and manage assignments in real-time.",
    challenge:
      "Manual QC bottlenecks were delaying 40% of tasks. Designed a workflow engine where Workers submit, QC reviews, and Admins approve — with automated status propagation and audit logs so no task ever goes missing.",
    tags: ["Laravel", "React.js", "Role-based Auth", "Real-time", "MySQL"],
    tagColors: ["mauve", "teal", "blue", "peach", "green"],
  },
  {
    num: "03 / ENTERPRISE POS",
    status: "PRODUCTION",
    statusClass: "prod",
    name: "Advanced POS with Thermal Receipt Engine",
    desc: "A feature-rich Point of Sale system with inventory management, multi-cashier support, discount engines, and ESC/POS thermal printer integration for instant receipts.",
    challenge:
      "Existing solutions couldn't handle local printer protocols or complex discount stacking rules. Built a custom ESC/POS layer and a rule-based discount engine that processes 5+ concurrent promotion types without conflicts.",
    tags: ["Laravel", "React.js", "ESC/POS", "Tailwind CSS", "MySQL"],
    tagColors: ["mauve", "teal", "yellow", "blue", "green"],
  },
];

const Projects = () => {
  return (
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
          {projectsData.map((project, idx) => (
            <div key={idx} className="project-card fade-in">
              <div className="project-header">
                <span className="project-num">{project.num}</span>
                <span
                  className={`project-status status-${project.statusClass}`}
                >
                  ● {project.status}
                </span>
              </div>
              <div className="project-body">
                <div className="project-name">{project.name}</div>
                <div className="project-desc">{project.desc}</div>
                <div className="challenge-box">
                  <div className="challenge-label">
                    ⚡ CORE CHALLENGE SOLVED
                  </div>
                  <div className="challenge-text">{project.challenge}</div>
                </div>
                <div className="project-stack">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`tag tag-${project.tagColors[i]}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
