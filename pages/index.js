import { useState } from "react";
import { Moon, Sun, Database, Cloud, BarChart3, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground transition-colors">
        {/* Header */}
        <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">Sandeep Kumar Konda</h1>
          <Button variant="outline" onClick={() => setDark(!dark)}>
            {dark ? <Sun /> : <Moon />}
          </Button>
        </header>

        {/* Hero */}
        <section className="text-center py-16 max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-4">Senior Data Engineer</h2>
          <p className="text-lg text-muted-foreground">
            Data Engineer with 8+ years of experience building scalable data pipelines, 
            cloud data platforms, and business intelligence solutions across finance, 
            healthcare, and public-sector domains.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button asChild>
              <a href="/resume.pdf" download>Download Resume</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="https://www.linkedin.com/in/sandeep-kumar-knda/" target="_blank">LinkedIn</a>
            </Button>
          </div>
        </section>

        {/* Skills */}
        <section className="max-w-6xl mx-auto py-12">
          <h3 className="text-3xl font-bold mb-6">Core Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card><CardContent className="p-6"><Database className="mb-2" /> SQL Server, Oracle, MySQL, Snowflake</CardContent></Card>
            <Card><CardContent className="p-6"><Cloud className="mb-2" /> Azure Data Factory, Synapse, Databricks</CardContent></Card>
            <Card><CardContent className="p-6"><BarChart3 className="mb-2" /> Power BI, Tableau, SSRS</CardContent></Card>
          </div>
        </section>

        {/* Projects */}
        <section className="max-w-6xl mx-auto py-12">
          <h3 className="text-3xl font-bold mb-6">Key Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card><CardContent className="p-6"><Briefcase /> Cloud Data Platform – CalSTRS</CardContent></Card>
            <Card><CardContent className="p-6"><Briefcase /> Healthcare Analytics – BCBS Arizona</CardContent></Card>
            <Card><CardContent className="p-6"><Briefcase /> Investment Reporting – American Century</CardContent></Card>
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-xl mx-auto py-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Contact Me</h3>
          <form className="grid gap-4">
            <input className="p-3 rounded-md border" placeholder="Name" />
            <input className="p-3 rounded-md border" placeholder="Email" />
            <textarea className="p-3 rounded-md border" placeholder="Message" rows={4} />
            <Button className="w-full"><Mail className="mr-2" /> Submit</Button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-muted-foreground">
          © 2026 Copyright, all rights are reserved
        </footer>
      </div>
    </div>
  );
}
