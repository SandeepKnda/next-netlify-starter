import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Scroll reveal animation
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
        <title>Sandeep Kumar K | Senior Data Engineer</title>
        <meta
          name="description"
          content="Senior Data Engineer with 8+ years of experience in Azure, Snowflake, ETL pipelines, and Business Intelligence solutions."
        />
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

      {/* HERO / ABOUT */}
      <section id="about" className="hero animate">
        <h1>Sandeep Kumar K</h1>
        <h3>Senior Data Engineer</h3>

        <p className="summary">
          Senior Data Engineer with <strong>8+ years of experience</strong>
          designing, building, and supporting enterprise-scale data platforms
          across finance, healthcare, and public-sector domains.
        </p>

        <p className="summary">
          Expert in building <strong>cloud-native ETL pipelines</strong>,
          analytics-ready data warehouses, and BI solutions using
          <strong> Azure Data Factory, Snowflake, SQL Server, Databricks,
          Power BI, and Tableau</strong>. Strong focus on performance,
          data reliability, and CI/CD-driven deployments.
        </p>

        <div className="buttons">
          <a className="btn primary" href="/SandeepKondaResume.pdf" download>
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
      </section>

      {/* SKILLS */}
      <section id="skills" className="animate">
        <h2>Core Expertise</h2>
        <ul className="grid">
          <li>Azure Data Factory, Synapse, Databricks</li>
          <li>Snowflake, SQL Server, Oracle, MySQL</li>
          <li>ETL / ELT Pipeline Architecture</li>
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
              ADF, Synapse, and Snowflake to enable secure, scalable analytics
              and enterprise reporting.
            </p>
          </div>

          <div className="card">
            <h3>🏥 BCBS Arizona – Healthcare Analytics</h3>
            <p>
              Built CI/CD-enabled ETL workflows and near-real-time Snowflake
              models powering Power BI dashboards for healthcare insights.
            </p>
          </div>

          <div className="card">
            <h3>💼 American Century – Investment Reporting</h3>
            <p>
              Developed optimized SQL datasets and Tableau reports supporting
              recurring and ad-hoc investment analytics with high data volumes.
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
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont;
        }

        .dark {
          background: #0b1220;
          color: #ffffff;
        }

        /* NAV */
        .nav {
          display: flex;
          justify-content: space-between;
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          background: inherit;
          z-index: 10;
          border-bottom: 1px solid rgba(56, 189, 248, 0.15);
        }

        .nav a {
          margin-right: 1rem;
          font-weight: 500;
        }

        /* HERO */
        .hero {
          padding: 4.5rem 1rem;
          text-align: center;
          max-width: 900px;
          margin: auto;
          background:
            linear-gradient(180deg, rgba(14,165,233,0.18), transparent),
            radial-gradient(circle at top, rgba(56,189,248,0.25), transparent);
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }

        h3 {
          font-size: 1.4rem;
          color: #38bdf8;
          margin-bottom: 1.8rem;
        }

        .summary {
          font-size: 1.05rem;
          line-height: 1.75;
          margin-bottom: 1.2rem;
          opacity: 0.95;
        }

        .buttons {
          margin-top: 2.2rem;
        }

        .btn {
          padding: 0.75rem 1.6rem;
          border-radius: 10px;
          margin-right: 1rem;
          display: inline-block;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn.primary {
          background: linear-gradient(135deg, #0ea5e9, #2563eb);
          color: white;
          box-shadow: 0 10px 30px rgba(14,165,233,0.35);
        }

        .btn.linkedin {
          background: #0a66c2;
          color: white;
          box-shadow: 0 8px 25px rgba(10,102,194,0.4);
        }

        .btn:hover {
          transform: translateY(-3px);
        }

        /* SECTIONS */
        section {
          padding: 3.8rem 1rem;
          max-width: 1000px;
          margin: auto;
        }

        h2 {
          text-align: center;
          margin-bottom: 2.5rem;
          font-size: 2rem;
          background: linear-gradient(90deg, #38bdf8, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.2rem;
        }

        .grid li {
          padding: 1.2rem;
          border-radius: 10px;
          border: 1px solid rgba(56,189,248,0.2);
          background: rgba(255,255,255,0.04);
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.6rem;
        }

        .card {
          padding: 1.7rem;
          border-radius: 14px;
          border: 1px solid rgba(56,189,248,0.25);
          background: rgba(255,255,255,0.04);
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
        }

        footer {
          text-align: center;
          padding: 1.6rem;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        /* ANIMATIONS */
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
