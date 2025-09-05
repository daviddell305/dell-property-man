import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Phone, Mail, MapPin, ShieldCheck, Wrench, CalendarRange, Home, Star } from "lucide-react";

// ====== COMPANY INFO — UPDATED WITH USER DATA ======
const COMPANY_NAME = "Dell Property Management";
const PHONE_NUMBER = "1 888 462 8705";
const CONTACT_EMAIL = "info@dellpropertymanagement.com";
const STREET_ADDRESS = "575 Morosgo Dr NE";
const CITY_STATE_ZIP = "Atlanta, GA 30324";
const YEAR_STARTED = 2014;

// ====== FORMSPREE ENDPOINT (replace with your real endpoint) ======
// After you create a Formspree form, paste the endpoint below, e.g.,
// "https://formspree.io/f/abcd1234"
const FORM_ENDPOINT = "https://formspree.io/f/mrbaodzg";

// ====== TESTIMONIALS ======
const TESTIMONIALS = [
  {
    name: "S. Williams",
    role: "Single‑family owner",
    quote: "Dell Property Management took over in 2022 and our vacancy dropped to zero within a month. Communication is fast and professional.",
    rating: 5,
  },
  {
    name: "Harper Investments, LLC",
    role: "Small multifamily portfolio",
    quote: "Transparent fees and strong reporting. They treat the asset like their own and focus on NOI.",
    rating: 5,
  },
  {
    name: "N. Patel",
    role: "Condo board member",
    quote: "Maintenance requests are handled quickly and residents have noticed the difference. Night and day from our last manager.",
    rating: 4,
  },
];

export default function LandingPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState({ submitting: false, succeeded: false, error: null });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, succeeded: false, error: null });
    try {
      const formEl = e.currentTarget;
      const data = new FormData(formEl);
      // Progressive enhancement: if JS fails, the form will still POST to FORM_ENDPOINT.
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus({ submitting: false, succeeded: true, error: null });
        formEl.reset();
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        const payload = await res.json().catch(() => null);
        const msg = payload?.errors?.[0]?.message || "There was a problem submitting your inquiry.";
        setStatus({ submitting: false, succeeded: false, error: msg });
      }
    } catch (err) {
      setStatus({ submitting: false, succeeded: false, error: "Network error. Please email or call us." });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* SEO basics: set <title> in index.html if desired */}

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6" />
            <span className="font-semibold tracking-tight">{COMPANY_NAME}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#why" className="hover:text-white">Why Us</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="tel:18884628705" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white text-neutral-900 font-medium hover:opacity-90 transition">
            <Phone className="h-4 w-4" /> {PHONE_NUMBER}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-cyan-400/10 to-fuchsia-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Professional Property Management in Atlanta
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-2xl text-neutral-300"
          >
            Since {YEAR_STARTED}, {COMPANY_NAME} has helped owners and boards maximize returns, minimize vacancies, and deliver a great resident experience.
          </motion.p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-2xl px-5 py-3 bg-sky-400 text-neutral-900 font-semibold hover:brightness-110 transition">Get a Free Consultation</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-2xl px-5 py-3 ring-1 ring-white/20 hover:bg-white/5 transition">Email Us</a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-neutral-300">
            <span className="rounded-full border border-white/10 px-3 py-1 bg-white/5">Established {YEAR_STARTED}</span>
            <span className="rounded-full border border-white/10 px-3 py-1 bg-white/5">Atlanta, GA</span>
            <span className="rounded-full border border-white/10 px-3 py-1 bg-white/5">Owner‑first reporting</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">End‑to‑End Management</h2>
            <p className="mt-3 text-neutral-300">Full‑service management for single‑family, multifamily, and community associations. Flexible packages for investors and boards.</p>
            <ul className="mt-6 space-y-3 text-neutral-200">
              <li className="flex gap-2"><span className="mt-1">•</span> Leasing & tenant placement</li>
              <li className="flex gap-2"><span className="mt-1">•</span> Rent collection & accounting</li>
              <li className="flex gap-2"><span className="mt-1">•</span> Maintenance coordination</li>
              <li className="flex gap-2"><span className="mt-1">•</span> Turnovers & renovations</li>
              <li className="flex gap-2"><span className="mt-1">•</span> Owner reporting & dashboards</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block rounded-2xl px-5 py-3 bg-white text-neutral-900 font-semibold hover:opacity-90 transition">Request Proposal</a>
          </div>
          <div className="rounded-3xl border border-white/10 p-6 bg-gradient-to-br from-white/10 to-transparent">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Avg. days to lease", value: "21" },
                { label: "On‑time rent", value: "98%" },
                { label: "Owner satisfaction", value: "4.9/5" },
                { label: "Vetted vendors", value: "120+" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 p-4 bg-white/5">
                  <p className="text-3xl font-bold">{s.value}</p>
                  <p className="text-sm text-neutral-300">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-neutral-400">* Illustrative metrics — replace with your real KPIs.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About {COMPANY_NAME}</h2>
            <p className="mt-3 text-neutral-300">Founded in {YEAR_STARTED}, we are Atlanta‑based real estate professionals dedicated to protecting your investment and elevating the resident experience. Our approach is simple: clear communication, data‑driven decisions, and reliable execution.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: "Experienced Team", text: "Licensed professionals with local market expertise." },
                { title: "Compliance‑first", text: "Fair‑housing, lease enforcement, and risk management." },
                { title: "Owner Transparency", text: "Clean financials and on‑demand reporting." },
              ].map((f) => (
                <div key={f.title} className="rounded-2xl border border-white/10 p-4 bg-white/5">
                  <h3 className="font-semibold text-sm">{f.title}</h3>
                  <p className="mt-1 text-xs text-neutral-300">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold">Our Promise</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li className="flex gap-2"><ShieldCheck className="h-4 w-4 mt-0.5" /> Clear, transparent pricing</li>
              <li className="flex gap-2"><ShieldCheck className="h-4 w-4 mt-0.5" /> Proactive maintenance & vetted vendors</li>
              <li className="flex gap-2"><ShieldCheck className="h-4 w-4 mt-0.5" /> Responsive resident support</li>
              <li className="flex gap-2"><ShieldCheck className="h-4 w-4 mt-0.5" /> Owner‑first financial reporting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Owners Choose {COMPANY_NAME}</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Transparent fees", text: "Simple pricing with no junk add‑ons." },
            { title: "Resident experience", text: "Online portals, maintenance SLAs, responsive support." },
            { title: "Investor mindset", text: "We focus on NOI, not busywork." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-300">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Straightforward Pricing</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Essential", price: "8% of monthly rent", features: ["Leasing & screening", "Rent collection", "Basic maintenance"] },
            { name: "Plus", price: "10% of monthly rent", features: ["Everything in Essential", "Owner reports", "Renewals & inspections"] },
            { name: "Premium", price: "12% of monthly rent", features: ["All Plus features", "Project management", "Eviction coordination"] },
          ].map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 p-6 bg-white/5 flex flex-col">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-2xl font-bold">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300 flex-1">
                {p.features.map((x) => (
                  <li key={x} className="flex gap-2"><span className="mt-1">•</span> {x}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-block rounded-2xl px-4 py-2 bg-sky-400 text-neutral-900 font-semibold text-center hover:brightness-110 transition">Get Started</a>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-neutral-400">* Replace with your real pricing and management fees. Many markets also charge leasing/startup fees.</p>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Clients Say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-neutral-200">“{t.quote}”</p>
              <p className="mt-3 text-xs text-neutral-400">— {t.name}, {t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s Talk</h2>
            <p className="mt-3 text-neutral-300">Ready to take the hassle out of property management? Contact {COMPANY_NAME} today for a free consultation.</p>
            <div className="mt-6 space-y-3 text-neutral-200">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href="tel:18884628705" className="hover:underline">{PHONE_NUMBER}</a></p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">{CONTACT_EMAIL}</a></p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {STREET_ADDRESS}, {CITY_STATE_ZIP}</p>
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 p-5 bg-white/5">
              <p className="text-sm text-neutral-300">"Dell Property Management turned our rental portfolio into a hands-off investment. Highly recommended!" — Local Property Owner</p>
            </div>
          </div>

          <form action={FORM_ENDPOINT} method="POST" onSubmit={onSubmit} className="rounded-3xl border border-white/10 p-6 bg-white/5">
            {status.succeeded ? (
              <div className="text-green-400 font-medium">Thanks! Your inquiry has been submitted. We will contact you shortly.</div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-neutral-300">Name</label>
                    <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                  </div>
                  <div>
                    <label className="text-sm text-neutral-300">Email</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm text-neutral-300">Phone</label>
                    <input name="phone" value={form.phone} onChange={onChange} className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm text-neutral-300">Message</label>
                    <textarea name="message" value={form.message} onChange={onChange} rows={5} className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                  </div>
                </div>
                <button disabled={status.submitting} className="mt-4 w-full rounded-2xl px-5 py-3 bg-sky-400 text-neutral-900 font-semibold hover:brightness-110 transition">
                  {status.submitting ? "Sending..." : "Send Inquiry"}
                </button>
                {status.error && <p className="mt-3 text-xs text-red-400">{status.error}</p>}
                <p className="mt-3 text-xs text-neutral-400">Inquiries are delivered to {CONTACT_EMAIL} via Formspree.</p>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              <span className="font-semibold">{COMPANY_NAME}</span>
            </div>
            <p className="text-sm text-neutral-400">Real estate professionals since {YEAR_STARTED}. Trusted property management for Atlanta and surrounding areas.</p>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-2 text-neutral-300 text-sm space-y-1">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href="tel:18884628705" className="hover:underline">{PHONE_NUMBER}</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">{CONTACT_EMAIL}</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {STREET_ADDRESS}, {CITY_STATE_ZIP}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Links</h4>
            <ul className="mt-2 text-sm text-neutral-300 space-y-1">
              <li><a className="hover:underline" href="#services">Services</a></li>
              <li><a className="hover:underline" href="#about">About</a></li>
              <li><a className="hover:underline" href="#testimonials">Testimonials</a></li>
              <li><a className="hover:underline" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</span>
            <span>Established {YEAR_STARTED}</span>
          </div>
        </div>
      </footer>

      {/* JSON-LD for LocalBusiness (basic) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: COMPANY_NAME,
        telephone: PHONE_NUMBER,
        email: CONTACT_EMAIL,
        address: {
          "@type": "PostalAddress",
          streetAddress: STREET_ADDRESS,
          addressLocality: "Atlanta",
          addressRegion: "GA",
          postalCode: "30324",
          addressCountry: "US"
        }
      }) }} />
    </div>
  );
}
