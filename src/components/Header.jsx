function Header() {
  return (
    <>
      <nav>
        <div className="nav-brand">
          Dev<span>With</span>Rabbil<span>.dev</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#techstack">tech</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
        </ul>
        <a href="#contact" className="nav-cta">
          → hire me
        </a>
      </nav>
    </>
  );
}

export default Header;
