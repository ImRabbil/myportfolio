export default function Home() {
  return (
    <>
      <main>
        <div className="container">
          <section id="home" className="hero">
            <div className="hero-content">
              <span className="badge">
                <i className="fas fa-code"></i> ২+ বছর অভিজ্ঞতা
              </span>
              <h1>
                আমি <span className="gradient-text">সাইফুল ইসলাম</span>
                <br />
                ওয়েব ডেভেলপার
              </h1>
              <p>
                আমি মডার্ন ওয়েব অ্যাপ্লিকেশন তৈরি করি যা দ্রুত, রেস্পন্সিভ এবং
                ইউজার-ফ্রেন্ডলি। React, Node.js ও MongoDB-তে বিশেষজ্ঞ।
              </p>

              <div className="hero-stats">
                <div className="stat">
                  <h3>২০+</h3>
                  <p>প্রজেক্ট সম্পন্ন</p>
                </div>
                <div className="stat">
                  <h3>১৫+</h3>
                  <p>সন্তুষ্ট ক্লায়েন্ট</p>
                </div>
                <div className="stat">
                  <h3>২+</h3>
                  <p>বছর অভিজ্ঞতা</p>
                </div>
              </div>

              <div className="btn-group">
                <a
                  href="#"
                  className="btn-primary"
                  onClick={() => scrollToSection("projects")}
                >
                  প্রজেক্ট দেখুন <i className="fas fa-arrow-right"></i>
                </a>
                <a
                  href="#"
                  className="btn-outline"
                  onClick={() => scrollToSection("contact")}
                >
                  যোগাযোগ করুন
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="https://via.placeholder.com/450x500/6366f1/ffffff?text=PROFILE"
                alt="Profile"
              />
              <div className="floating-card card-1">
                <i className="fab fa-react" style={{ color: "#61dafb" }}></i>
                <span>React Developer</span>
              </div>
              <div className="floating-card card-2">
                <i className="fab fa-node" style={{ color: "#68a063" }}></i>
                <span>Node.js Expert</span>
              </div>
            </div>
          </section>

          <section id="about" className="section">
            <h2 className="section-title">
              সম্পর্কে <span>আমি</span>
            </h2>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  আমি সাইফুল ইসলাম, একজন পেশাদার ফুল-স্ট্যাক ওয়েব ডেভেলপার। আমি
                  ২০২২ সাল থেকে পেশাদারভাবে ওয়েব ডেভেলপমেন্ট নিয়ে কাজ করছি।
                  আমার যাত্রা শুরু হয়েছিল ছোটবেলা থেকে প্রোগ্রামিং শেখার
                  মাধ্যমে, এবং আজ আমি দেশি-বিদেশি ক্লায়েন্টদের জন্য ওয়েব
                  সলিউশন তৈরি করি।
                </p>
                <p>
                  আমি বিশ্বাস করি যে ভালো কোড শুধু কাজ করে না, এটি সুন্দর,
                  মেইনটেইনেবল এবং স্কেলেবলও হয়। আমি সবসময় আমার ক্লায়েন্টদের
                  ব্যবসায়িক লক্ষ্য বুঝে সেই অনুযায়ী সেরা সমাধান দিতে চেষ্টা
                  করি।
                </p>

                <div className="info-list">
                  <div className="info-item">
                    <i className="fas fa-check-circle"></i> ফুল-স্ট্যাক
                    ডেভেলাপমেন্ট
                  </div>
                  <div className="info-item">
                    <i className="fas fa-check-circle"></i> API ডিজাইন ও
                    ইন্টিগ্রেশন
                  </div>
                  <div className="info-item">
                    <i className="fas fa-check-circle"></i> ডাটাবেজ ডিজাইন
                    (MongoDB, PostgreSQL)
                  </div>
                  <div className="info-item">
                    <i className="fas fa-check-circle"></i> পারফরম্যান্স
                    অপটিমাইজেশন
                  </div>
                </div>
              </div>
              <div className="experience-card">
                <h3>
                  <i className="fas fa-briefcase"></i> বর্তমানে আমি
                </h3>
                <p style={{ margin: "1rem 0" }}>
                  ফ্রিল্যান্সিং করছি এবং বিভিন্ন স্টার্টআপের জন্য কাস্টম ওয়েব
                  সলিউশন তৈরি করছি। পাশাপাশি, আমি আমার দক্ষতা বাড়ানোর জন্য নতুন
                  টেকনোলজি শিখতে ভালোবাসি।
                </p>
                <hr
                  style={{
                    borderColor: "rgba(99,102,241,0.2)",
                    margin: "1rem 0",
                  }}
                />
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i> ঢাকা, বাংলাদেশ
                </div>
                <div className="info-item">
                  <i className="fas fa-clock"></i> ফুল-টাইম ফ্রিল্যান্সার
                </div>
                <div className="info-item">
                  <i className="fas fa-globe"></i> বিশ্বব্যাপী ক্লায়েন্টদের
                  সেবা
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="section">
            <h2 className="section-title">
              আমার <span>দক্ষতাসমূহ</span>
            </h2>
            <div className="skills-grid">
              <div className="skill-card">
                <i className="fab fa-react"></i>
                <h4>React.js</h4>
              </div>
              <div className="skill-card">
                <i className="fab fa-js"></i>
                <h4>JavaScript</h4>
              </div>
              <div className="skill-card">
                <i className="fab fa-node"></i>
                <h4>Node.js</h4>
              </div>
              <div className="skill-card">
                <i className="fas fa-database"></i>
                <h4>MongoDB</h4>
              </div>
              <div className="skill-card">
                <i className="fab fa-python"></i>
                <h4>Python</h4>
              </div>
              <div className="skill-card">
                <i className="fab fa-html5"></i>
                <h4>HTML5/CSS3</h4>
              </div>
              <div className="skill-card">
                <i className="fab fa-tailwind"></i>
                <h4>Tailwind</h4>
              </div>
              <div className="skill-card">
                <i className="fab fa-git-alt"></i>
                <h4>Git/GitHub</h4>
              </div>
            </div>
          </section>

          <section id="projects" className="section">
            <h2 className="section-title">
              সাম্প্রতিক <span>প্রজেক্ট</span>
            </h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  🛒
                  <div className="project-overlay">
                    <a
                      href="#"
                      className="btn-outline"
                      style={{ padding: "0.5rem 1rem" }}
                    >
                      লাইভ প্রিভিউ
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">E-Commerce প্ল্যাটফর্ম</h3>
                  <p className="project-desc">
                    পূর্ণাঙ্গ ই-কমার্স ওয়েবসাইট। পেমেন্ট গেটওয়ে, অ্যাডমিন
                    প্যানেল, অর্ডার ট্র্যাকিং সিস্টেম।
                  </p>
                  <div className="tech-stack">
                    <span className="tech">React</span>
                    <span className="tech">Node.js</span>
                    <span className="tech">MongoDB</span>
                    <span className="tech">Stripe</span>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="project-image">
                  📊
                  <div className="project-overlay">
                    <a
                      href="#"
                      className="btn-outline"
                      style={{ padding: "0.5rem 1rem" }}
                    >
                      লাইভ প্রিভিউ
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">টাস্ক ম্যানেজমেন্ট সিস্টেম</h3>
                  <p className="project-desc">
                    টিম কলাবোরেশনের জন্য রিয়েল-টাইম টাস্ক ম্যানেজার।
                    ড্র্যাগ-এন্ড-ড্রপ, নোটিফিকেশন।
                  </p>
                  <div className="tech-stack">
                    <span className="tech">Next.js</span>
                    <span className="tech">Prisma</span>
                    <span className="tech">PostgreSQL</span>
                    <span className="tech">Socket.io</span>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="project-image">
                  🌤️
                  <div className="project-overlay">
                    <a
                      href="#"
                      className="btn-outline"
                      style={{ padding: "0.5rem 1rem" }}
                    >
                      লাইভ প্রিভিউ
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">ওয়েদার ফোরকাস্ট অ্যাপ</h3>
                  <p className="project-desc">
                    রিয়েল-টাইম আবহাওয়ার তথ্য, ৭ দিনের ফোরকাস্ট, লোকেশন
                    ট্র্যাকিং।
                  </p>
                  <div className="tech-stack">
                    <span className="tech">React</span>
                    <span className="tech">OpenWeather API</span>
                    <span className="tech">Chart.js</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="section">
            <h2 className="section-title">
              যোগাযোগ <span>করুন</span>
            </h2>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4>ফোন</h4>
                    <p>+880 1XXX-XXXXXX</p>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4>ইমেইল</h4>
                    <p>saiful@example.com</p>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div>
                    <h4>LinkedIn</h4>
                    <p>linkedin.com/in/saiful</p>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fab fa-github"></i>
                  </div>
                  <div>
                    <h4>GitHub</h4>
                    <p>github.com/saiful</p>
                  </div>
                </div>
              </div>
              <form className="contact-form" id="contactForm">
                <div className="form-group">
                  <input type="text" placeholder="আপনার নাম" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="আপনার ইমেইল" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="বিষয়" />
                </div>
                <div className="form-group">
                  <textarea
                    rows="5"
                    placeholder="আপনার বার্তা..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  বার্তা পাঠান <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
