import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Scroll animations
  useEffect(() => {
    const sections = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach(section => observer.observe(section));
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sandeep Kumar Konda | Senior Data Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAVBAR */}
      <nav className="nav">
        <h2>Sandeep Kumar K</h2>
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <button onClick={() => setDarkMode(!darkMode)}>🌗</button>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" className="hero animate">
        <h1>Sandeep Kumar Konda</h1>
        <h3>Senior Data Engineer</h3>

        <p className="summary">
          Senior Data Engineer with <strong>8+ years of experience</strong> designing,
          building, and optimizing enterprise-scale data platforms across
          finance, healthcare, and public-sector domains.
        </p>

        <p className="summary">
          Specialized in <strong>Azure Data Factory, Snowflake, SQL Server,
          Databricks, and Power BI</strong>, with a strong focus on scalable ETL
          pipelines, cloud data warehousing, CI/CD automation, and
          analytics-ready data models that support high-impact business decisions.
        </p>

      <div className="buttons">
  <a className="btn primary" href="SandeepKondaResume.pdf" download>
    📄 Download Resume
  </a>

  <a
    className="btn linkedin"
    href="https://www.linkedin.com/in/sandeep-kumar-knda/"
    target="_blank"
    rel="noreferrer"
  >
    in LinkedIn
  </a>
</div>


      {/* SKILLS */}
      <section id="skills" className="animate">
        <h2>Core Expertise</h2>
        <ul className="grid">
          <li>Azure Data Factory, Synapse, Databricks</li>
          <li>Snowflake, SQL Server, Oracle, MySQL</li>
          <li>ETL / ELT Pipeline Design</li>
          <li>Power BI, Tableau, SSRS</li>
          <li>Python, T-SQL, Data Modeling</li>
          <li>CI/CD – Azure DevOps, Git</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="animate">
        <h2>Key Projects</h2>
        <div className="cards">
          <div className="card">
            <h3>🏛️ CalSTRS – Cloud Data Platform</h3>
            <p>
              Designed and implemented end-to-end Azure data pipelines using
              ADF, Synapse, and Snowflake to support analytics and reporting
              at enterprise scale.
            </p>
          </div>

          <div className="card">
            <h3>🏥 BCBS Arizona – Healthcare Analytics</h3>
            <p>
              Built secure, CI/CD-enabled ETL pipelines and near-real-time
              Snowflake models powering Power BI dashboards for healthcare insights.
            </p>
          </div>

          <div className="card">
            <h3>💼 American Century – Investment Reporting</h3>
            <p>
              Developed optimized SQL datasets and Tableau reports supporting
              recurring and ad-hoc investment analytics.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        © 2026 Sandeep Kumar K. All rights reserved.
      </footer>

      {/* STYLES */}
      <style jsx>{`
      /* DATA ENGINEER THEME */
.hero {
  background:
    linear-gradient(180deg, rgba(14,165,233,0.12), transparent),
    radial-gradient(circle at top, rgba(56,189,248,0.15), transparent);
}

.dark .hero {
  background:
    linear-gradient(180deg, rgba(14,165,233,0.18), transparent),
    radial-gradient(circle at top, rgba(56,189,248,0.25), transparent);
}

.btn.primary {
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  box-shadow: 0 10px 30px rgba(14,165,233,0.35);
}

.btn.linkedin {
  background: #0a66c2;
  color: white;
  box-shadow: 0 8px 25px rgba(10,102,194,0.4);
}

.btn.linkedin:hover,
.btn.primary:hover {
  transform: translateY(-2px);
}

section h2 {
  background: linear-gradient(90deg, #38bdf8, #0ea5e9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card {
  border: 1px solid rgba(56,189,248,0.2);
  backdrop-filter: blur(6px);
}

.grid li {
  border: 1px solid rgba(56,189,248,0.15);
}

        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          font-family: system-ui;
        }
        .dark {
          background: #0f172a;
          color: #fff;
        }
        .nav {
          display: flex;
          justify-content: space-between;
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          background: inherit;
          z-index: 10;
        }
        .nav a {
          margin-right: 1rem;
          font-weight: 500;
        }
        .hero {
          padding: 4rem 1rem;
          text-align: center;
          max-width: 900px;
          margin: auto;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        h3 {
          font-size: 1.4rem;
          color: #38bdf8;
          margin-bottom: 1.5rem;
        }
        .summary {
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .buttons {
          margin-top: 2rem;
        }
        .btn {
          padding: 0.7rem 1.4rem;
          background: #0ea5e9;
          color: white;
          border-radius: 8px;
          margin-right: 1rem;
          display: inline-block;
        }
        .outline {
          background: transparent;
          border: 2px solid #0ea5e9;
        }
        section {
          padding: 3.5rem 1rem;
          max-width: 1000px;
          margin: auto;
        }
        h2 {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 2rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
        }
        .grid li {
          padding: 1rem;
          border-radius: 8px;
          background: rgba(255,255,255,0.05);
        }
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        .card {
          padding: 1.5rem;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          transition: transform 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
        }
        footer {
          text-align: center;
          padding: 1.5rem;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        /* Animations */
        .animate {
          opacity: 0;
          transform: translateY(40px);
          transition: 0.8s ease;
        }
        .animate.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
