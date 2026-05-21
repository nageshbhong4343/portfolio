import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "services", label: "What I Do" },
  { id: "experiences", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    const handleScroll = () => {
      let current = "about";
      document.querySelectorAll("section[id]").forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) current = section.id;
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav>
        <a href="#about" className="nav-logo">
          Nagesh <span>Bhong</span>
        </a>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={activeSection === item.id ? "active" : ""}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          id="ham"
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} id="mobileMenu">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </div>

      <section id="about">
        <div className="hero-glow" />
        <div className="hero-inner">
          <div className="reveal visible">
            <div className="hero-badge">Available for Opportunities</div>
            <h1 className="hero-name">
              Hi, I&apos;m
              <br />
              <span className="highlight">Nagesh</span>
              <br />
              Bhong.
            </h1>
            <p className="hero-role">
              FullStack <strong>Developer</strong> · 1+ Years Experience
            </p>
            <p className="hero-desc">
              Java Full Stack Developer with 1+ years of experience in building scalable web
              applications using Java, Spring Boot, and React. Strong expertise in REST API
              development, frontend-backend integration, and database management.
            </p>
            <p className="hero-contact-line">
              Pune, Maharashtra, India | +91 74472 61469 | nageshbhong4343@gmail.com
            </p>
            <div className="hero-btns">
              <a href="mailto:nageshbhong4343@gmail.com" className="btn-primary">
                Let's Connect
              </a>
              <a href="#experiences" className="btn-outline">
                View Projects →
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">1+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-num">2</span>
                <span className="stat-label">Major Projects</span>
              </div>
              <div className="stat">
                <span className="stat-num">Java + React</span>
                <span className="stat-label">Full Stack</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <div className="section-label reveal">What I Do</div>
          <h2 className="section-title reveal">Professional Summary</h2>
          <p className="section-sub reveal">
            Java Full Stack Developer with strong expertise in REST APIs, frontend-backend
            integration, JDBC, and responsive UI development. Familiar with Agile methodology, Git
            version control, and application performance optimization.
          </p>
          <div className="services-grid">
            <ServiceCard
              icon="🖥️"
              title="Frontend Development"
              pills={["React", "HTML", "CSS", "JavaScript (ES6+)", "Responsive UI"]}
              desc="Building dynamic, responsive interfaces using React and modern JavaScript. Focused on clean components, user dashboards, and smooth user experience."
            />
            <ServiceCard
              icon="⚙️"
              title="Backend Development"
              pills={["Java", "Spring Boot", "Spring MVC", "Spring REST", "REST API"]}
              desc="Developing robust server-side applications and RESTful APIs for user management, authentication, course handling, and order management workflows."
            />
            <ServiceCard
              icon="🗄️"
              title="Database Management"
              pills={["MySQL", "PostgreSQL", "JDBC", "CRUD", "Transactions"]}
              desc="Performing CRUD operations and handling relational data using JDBC with MySQL/PostgreSQL for scalable real-world applications."
            />
            <ServiceCard
              icon="🔍"
              title="Development Practices"
              pills={["Git", "GitHub", "Agile", "Postman", "Maven"]}
              desc="Collaborating in Agile environments with Git-based version control, API testing through Postman, and ongoing debugging and performance optimization."
            />
          </div>
        </div>
      </section>

      <section id="experiences">
        <div className="exp-inner">
          <div className="section-label reveal">Experience & Projects</div>
          <h2 className="section-title reveal">My Work</h2>
          <p className="section-sub reveal">
            Professional experience and key full stack projects built using Java, Spring Boot,
            React, and JDBC.
          </p>
          <div className="timeline">
            <TimelineItem
              year="03/2025 - Present"
              title="Java FullStack Developer"
              subtitle="Web Minds It Solution | Pune"
              points={[
                "Developed and maintained scalable full-stack applications using React.js and Spring Boot.",
                "Designed and implemented RESTful APIs for user management, authentication, and data handling.",
                "Integrated frontend and backend systems ensuring seamless API communication.",
                "Performed CRUD operations using JDBC with MySQL/PostgreSQL databases.",
                "Used Git for version control and collaborated in Agile development environment.",
                "Debugged, tested, and optimized application performance."
              ]}
            />
            <TimelineItem
              year="Project 01"
              title="Learning Management System (LMS)"
              subtitle="Similar to Udemy - Course Selling & Learning Platform"
              points={[
                "Developed a full-stack Learning Management System enabling users to browse, purchase, and access online courses.",
                "Built responsive user interfaces using React for course listing, video streaming, and user dashboard.",
                "Designed and developed RESTful APIs using Spring Boot for course management, user authentication, and enrollment.",
                "Implemented backend logic for course creation, content management, and progress tracking.",
                "Integrated database operations using JDBC for storing user data, course details, and transactions.",
                "Collaborated with cross-functional teams and followed Git-based version control."
              ]}
            />
            <TimelineItem
              year="Project 02"
              title="Rushing To Your Need (R2YN)"
              subtitle="Food Delivery Platform - Similar to Zomato/Domino's"
              points={[
                "Developed a scalable food delivery web application allowing users to browse restaurants and order food online.",
                "Created dynamic and responsive frontend using React for menu display, cart, and order tracking.",
                "Built REST APIs using Spring Boot for order management, user handling, and payment flow integration.",
                "Implemented core features such as add-to-cart, order placement, and order status updates.",
                "Managed database interactions using JDBC for storing user orders, restaurant data, and transactions.",
                "Optimized application performance and handled bug fixing to improve user experience."
              ]}
            />
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="skills-inner">
          <div className="section-label reveal">Skills</div>
          <h2 className="section-title reveal">Skills & Education</h2>
          <p className="section-sub reveal">
            Technical skills from my resume, along with education and language proficiency.
          </p>
          <div className="skills-cats">
            <SkillGroup
              title="Frontend"
              items={[
                ["📄", "HTML"],
                ["🎨", "CSS"],
                ["🌐", "JavaScript"],
                ["⚛️", "React"]
              ]}
            />
            <SkillGroup
              title="Backend"
              items={[
                ["☕", "Java"],
                ["🔧", "Spring Core"],
                ["🔗", "Spring MVC"],
                ["🚀", "Spring Boot"],
                ["📡", "Spring REST / REST APIs"]
              ]}
            />
            <SkillGroup
              title="Database"
              items={[
                ["🔌", "JDBC"],
                ["🐬", "MySQL"],
                ["🐘", "PostgreSQL"]
              ]}
            />
            <SkillGroup
              title="Tools"
              items={[
                ["🐙", "Git"],
                ["💻", "GitHub"],
                ["📮", "Postman"],
                ["📦", "Maven"],
                ["🎨", "Figma"]
              ]}
            />
            <SkillGroup
              title="Core Concepts"
              items={[
                ["📚", "Collection Framework"],
                ["🧩", "OOPs"],
                ["🔗", "REST APIs"]
              ]}
            />
            <SkillGroup
              title="Education & Languages"
              items={[
                ["🎓", "BBA (Computer Application) - Savitribai Phule Pune University"],
                ["📅", "06/2022 - 03/2025 | Pune"],
                ["🗣️", "English"],
                ["🗣️", "Hindi"],
                ["🗣️", "Marathi"]
              ]}
            />
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact-inner">
          <div className="contact-grid">
            <div>
              <div className="section-label reveal">Contact</div>
              <div className="contact-info reveal">
                <h2>Let&apos;s Connect</h2>
                <p>
                  I am open to FullStack Developer opportunities where I can build scalable
                  applications with Java, Spring Boot, and React.
                </p>
              </div>
              <div className="contact-links reveal">
                <ContactLink icon="✉️" label="Email" value="nageshbhong4343@gmail.com" href="mailto:nageshbhong4343@gmail.com" />
                <ContactLink
                  icon="💼"
                  label="LinkedIn"
                  value="linkedin.com/in/nageshbhong2003"
                  href="https://www.linkedin.com/in/nageshbhong2003"
                />
                <ContactLink icon="📍" label="Location" value="Pune" href="#" />
                <ContactLink icon="📞" label="Phone" value="+91 74472 61469" href="tel:+917447261469" />
              </div>
            </div>
            <div className="contact-form reveal">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Job Opportunity / Project" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Hi Nagesh, I'd like to discuss..." />
              </div>
              <button
                className="btn-primary"
                style={{ alignSelf: "flex-start" }}
                onClick={() => window.alert("Message sent! (Demo)")}
              >
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>
          © 2026 <a href="#about">Nagesh Bhong</a>. FullStack Developer.
        </p>
        <p className="footer-note">Java, Spring Boot, React, and continuous learning.</p>
      </footer>
    </>
  );
}

function ServiceCard({ icon, title, pills, desc }) {
  return (
    <div className="service-card reveal">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <div className="service-tech-pills">
        {pills.map((pill) => (
          <span key={pill} className="pill">
            {pill}
          </span>
        ))}
      </div>
      <p>{desc}</p>
    </div>
  );
}

function TimelineItem({ year, title, subtitle, points }) {
  return (
    <div className="timeline-item reveal">
      <div className="timeline-dot" />
      <div className="timeline-card">
        <div className="timeline-year">{year}</div>
        <h3>{title}</h3>
        <div className="timeline-subtitle">{subtitle}</div>
        <ul>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className="skill-cat reveal">
      <div className="skill-cat-title">{title}</div>
      <div className="skill-list">
        {items.map(([icon, text]) => (
          <div key={text} className="skill-item">
            <div className="skill-icon">{icon}</div>
            <span className="skill-name">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactLink({ icon, label, value, href }) {
  return (
    <a href={href} className="contact-link" target={href.startsWith("http") ? "_blank" : undefined}>
      <div className="contact-link-icon">{icon}</div>
      <div>
        <span className="contact-link-label">{label}</span>
        <span className="contact-link-val">{value}</span>
      </div>
    </a>
  );
}
