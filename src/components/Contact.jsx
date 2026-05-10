const Contact = () => {
  const contacts = [
    {
      icon: "✉️",
      label: "EMAIL",
      value: "career.rabbil@gmail.com",
      href: "mailto:career.rabbil@gmail.com",
    },
    {
      icon: "💬",
      label: "WHATSAPP",
      value: "+880 · Message Me",
      href: "https://wa.me/8801846760532",
    },
    {
      icon: "🐙",
      label: "GITHUB",
      value: "@ImRabbil",
      href: "https://github.com/ImRabbil",
    },
  ];

  return (
    <section id="contact">
      <div className="section-wrap">
        <div className="contact-inner fade-in">
          <div className="section-label" style={{ justifyContent: "center" }}>
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
            {contacts.map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-card-icon">{contact.icon}</div>
                <div className="contact-card-label">{contact.label}</div>
                <div className="contact-card-val">{contact.value}</div>
              </a>
            ))}
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
  );
};

export default Contact;
