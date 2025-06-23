
import React from 'react';
import { Mail, Linkedin, Search, BarChart3, Globe } from 'lucide-react';

function Card({ title, icon: Icon, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
      <Icon className="w-6 h-6 mb-2" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{children}</p>
    </div>
  );
}

export default function SEOPortfolio() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-10 space-y-12">
      <header className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Angela Nicole Castillo</h1>
        <p className="text-lg">Senior SEO & Digital Experience Specialist</p>
        <div className="flex justify-center space-x-4">
          <a href="mailto:angelanicole.castillo@gmail.com" aria-label="Email">
            <Mail className="w-5 h-5 hover:text-blue-600" />
          </a>
          <a href="https://linkedin.com/in/angelanicolecastillo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 hover:text-blue-600" />
          </a>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="SEO Strategy" icon={Search}>
          Over 5 years of experience leading SEO strategy for Shopify and enterprise e‑commerce sites, boosting organic sessions by 27% year over year.
        </Card>
        <Card title="Analytics & Optimization" icon={BarChart3}>
          Expert in GA4, GSC, SEMrush, and Screaming Frog. Skilled in translating data into insights that improve UX and conversion rates.
        </Card>
        <Card title="Technical SEO" icon={Globe}>
          Performed audits, fixed crawl issues, optimized Core Web Vitals, and implemented structured data across multilingual Shopify domains.
        </Card>
      </section>

      <section className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold text-center">Notable Achievements</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Increased organic traffic by 27% YoY across global Shopify properties</li>
          <li>Built scalable content workflows and internal linking strategies</li>
          <li>Improved average load speed by 35% through Core Web Vitals optimization</li>
          <li>Collaborated seamlessly with development, content, and marketing teams</li>
        </ul>
      </section>

      <footer className="text-center pt-10 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Angela Nicole Castillo. All rights reserved.
      </footer>
    </div>
  );
}
