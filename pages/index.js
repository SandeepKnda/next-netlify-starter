import { useState } from "react";

/* ---------- SVG ICONS (NO LIBRARIES) ---------- */
const DatabaseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" />
  </svg>
);

const CloudIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 17.5a4.5 4.5 0 0 0-1-8.9A6 6 0 0 0 6 9a4 4 0 0 0 0 8h14z" />
  </svg>
);

const ChartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16v16H4z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

/* ---------- PAGE ---------- */
export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">

        {/* HEADER */}
        <header className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Sandeep Kumar K</h1>
          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 rounded-lg border dark:border-gray-700"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </header>

        {/* HERO */}
        <section className="text-center py-16 px-6 max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-4">Senior Data Engineer</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Data Engineer with 8+ years of experience designing scalable cloud
            data pipelines, ETL frameworks, and business intelligence solutions
            across finance, healthcare, and public-sector domains.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <a
              href="SandeepKondaResume.pdf"
              download
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/sandeep-kumar-knda/"
              target="_blank"
              className="px-6 py-3 border rounded-lg font-medium"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* SKILLS */}
        <section className="max-w-6xl mx-auto px-6 py-14">
          <h3 className="text-3xl font-bold mb-8">Core Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
              <DatabaseIcon />
              <p className="mt-3">SQL Server, Oracle, MySQL, Snowflake</p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
              <CloudIcon />
              <p className="mt-3">Azure Data Factory, Synapse, Databricks</p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
              <ChartIcon />
              <p className="mt-3">Power BI, Tableau, SSRS</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="max-w-6xl mx-auto px-6 py-14">
          <h3 className="text-3xl font-bold mb-8">Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
              <BriefcaseIcon />
              <p className="mt-3">Cloud Data Platform – CalSTRS</p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
              <BriefcaseIcon />
              <p className="mt-3">Healthcare Analytics – BCBS Arizona</p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
              <BriefcaseIcon />
              <p className="mt-3">Investment Reporting – American Century</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="max-w-xl mx-auto px-6 py-16">
          <h3 className="text-3xl font-bold text-center mb-8">Contact Me</h3>
          <form className="space-y-4">
            <input className="w-full p-3 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800" placeholder="Name" />
            <input className="w-full p-3 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800" placeholder="Email" />
            <textarea className="w-full p-3 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800" rows="4" placeholder="Message" />
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">
              <MailIcon /> Submit
            </button>
          </form>
        </section>

        {/* FOOTER */}
        <footer className="text-center py-6 text-sm text-gray-500">
          © 2026 Copyright, all rights are reserved
        </footer>

      </main>
    </div>
  );
}
