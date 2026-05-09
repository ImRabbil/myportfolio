const Navbar = ({ activeSection }) => {
  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Client Work", href: "#clientwork" },
    { name: "Tech", href: "#techstack" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav>
      <div className="nav-brand">
        Dev<span>With</span>Rabbil<span>.dev</span>
      </div>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              style={{
                color:
                  activeSection === item.name.replace(" ", "")
                    ? "var(--lavender)"
                    : "",
              }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="nav-cta">
        → Get a Consultation
      </a>
    </nav>
  );
};

export default Navbar;
