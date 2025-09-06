import React, { useState } from "react";
import "./styles/old.css";

const FORM_ENDPOINT = "https://formspree.io/f/mrbaodzg";

const Header = () => (
  <header
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: "rgba(0,0,0,0.9)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid #444",
      padding: "1rem 0",
    }}
  >
    <div
      className="container"
      style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            background: "linear-gradient(45deg, #d9fb06, #84cc16)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          D
        </div>
        <div>
          <h1 style={{ color: "#d9fb06", fontSize: "20px", fontWeight: "bold", margin: 0 }}>DELL</h1>
          <p style={{ color: "#888", fontSize: "12px", margin: 0 }}>PROPERTY MANAGEMENT</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          fontSize: "14px",
          color: "#e0e0e0",
        }}
      >
        <a href="tel:+18884628705" style={{ color: "#e0e0e0", textDecoration: "none" }}>
          📞 1 888 462 8705
        </a>
        <a
          href="mailto:info@dellpropertymanagement.com"
          style={{ color: "#e0e0e0", textDecoration: "none" }}
        >
          ✉️ info@dellpropertymanagement.com
        </a>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="hero-section" id="home">
    <div className="container">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <div>
            <h1 className="brand-display">Premier Property Management Solutions</h1>
            <p className="body-large" style={{ maxWidth: "500px", marginTop: "20px" }}>
              Expert property management services for residential and commercial properties.
              Maximize your investment returns with our comprehensive management solutions.
            </p>
          </div>
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-primary">Get Free Quote →</a>
            <a href="#services" className="btn-secondary">View Our Services</a>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              paddingTop: "30px",
              borderTop: "1px solid #444",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: "bold", color: "#d9fb06" }}>500+</div>
              <div style={{ fontSize: "14px", color: "#e0e0e0" }}>Properties Managed</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: "bold", color: "#d9fb06" }}>15+</div>
              <div style={{ fontSize: "14px", color: "#e0e0e0" }}>Years Experience</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: "bold", color: "#d9fb06" }}>98%</div>
              <div style={{ fontSize: "14px", color: "#e0e0e0" }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className="service-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}>
              <div style={{ padding: "12px", background: "rgba(217, 251, 6, 0.1)", borderRadius: "8px" }}>🛡️</div>
              <div>
                <h3 className="heading-3" style={{ marginBottom: "10px" }}>
                  Trusted & Reliable
                </h3>
                <p className="body-small">Licensed, bonded, and insured property management with a proven track record.</p>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}>
              <div style={{ padding: "12px", background: "rgba(217, 251, 6, 0.1)", borderRadius: "8px" }}>🏆</div>
              <div>
                <h3 className="heading-3" style={{ marginBottom: "10px" }}>Award-Winning Service</h3>
                <p className="body-small">Recognized for excellence in property management and customer service.</p>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}>
              <div style={{ padding: "12px", background: "rgba(217, 251, 6, 0.1)", borderRadius: "8px" }}>👥</div>
              <div>
                <h3 className="heading-3" style={{ marginBottom: "10px" }}>Dedicated Team</h3>
                <p className="body-small">Professional property managers available 24/7 for your property needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" style={{ padding: "120px 0", background: "rgba(48, 47, 44, 0.3)" }}>
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 4rem, 5rem)",
            fontWeight: "900",
            textTransform: "uppercase",
            marginBottom: "20px",
            color: "#d9fb06",
          }}
        >
          Our Services
        </h2>
        <p className="body-large" style={{ maxWidth: "600px", margin: "0 auto" }}>
          Comprehensive property management solutions designed to maximize your investment returns.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
        {[
          { icon: "🏠", title: "Residential Management", desc: "Complete residential property management including tenant screening, rent collection, and maintenance." },
          { icon: "🏢", title: "Commercial Management", desc: "Professional commercial property management for office buildings and retail spaces." },
          { icon: "🔑", title: "Property Sales & Leasing", desc: "Expert assistance in buying, selling, and leasing properties with market knowledge." },
          { icon: "💰", title: "Financial Management", desc: "Comprehensive financial services including accounting, budgeting, and detailed reporting." },
          { icon: "🔧", title: "Maintenance & Repairs", desc: "24/7 maintenance services with trusted contractors and emergency response." },
          { icon: "📋", title: "Legal Compliance", desc: "Ensure your properties comply with all local, state, and federal regulations." }
        ].map((service, i) => (
          <div key={i} className="service-card">
            <div style={{ fontSize: "40px", marginBottom: "20px" }}>{service.icon}</div>
            <h3 className="heading-3" style={{ marginBottom: "15px" }}>{service.title}</h3>
            <p className="body-small">{service.desc}</p>
            <a href="#contact" className="btn-secondary" style={{ marginTop: "20px", width: "100%", textAlign: "center" }}>
              Learn More
            </a>
          </div>
        ))}
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "60px",
          padding: "40px",
          background: "rgba(217, 251, 6, 0.1)",
          borderRadius: "15px",
          border: "1px solid rgba(217, 251, 6, 0.2)",
        }}
      >
        <h3 className="heading-3" style={{ marginBottom: "15px" }}>📞 Ready to Get Started?</h3>
        <p className="body-small" style={{ marginBottom: "25px", maxWidth: "500px", margin: "0 auto 25px" }}>
          Contact us today for a free consultation and discover how our services can maximize your investment returns.
        </p>
        <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" className="btn-primary">Schedule Free Consultation</a>
          <a href="tel:+18884628705" className="btn-secondary">Call 1 888 462 8705</a>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [status, setStatus] = useState({ submitting: false, succeeded: false, error: null });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, succeeded: false, error: null });
    try {
      const data = new FormData(e.currentTarget);
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (res.ok) {
        setStatus({ submitting: false, succeeded: true, error: null });
        e.currentTarget.reset();
      } else {
        const payload = await res.json().catch(() => null);
        setStatus({ submitting: false, succeeded: false, error: payload?.errors?.[0]?.message || "Submission failed." });
      }
    } catch {
      setStatus({ submitting: false, succeeded: false, error: "Network error. Please email or call us." });
    }
  };

  const inputStyle = {
    width: "100%",
    background: "#302f2c",
    border: "1px solid #3f4816",
    color: "#e0e0e0",
    padding: "12px 14px",
    borderRadius: "10px",
  };

  return (
    <section id="contact" style={{ padding: "120px 0" }}>
      <div className="container">
        <div className="service-card">
          <h2 className="heading-3" style={{ marginBottom: 20, fontSize: "2rem" }}>Request a Free Consultation</h2>
          {status.succeeded ? (
            <div style={{ color: "#8bff87", fontWeight: 600 }}>Thanks! Your inquiry has been submitted. We will contact you shortly.</div>
          ) : (
            <form onSubmit={onSubmit} action={FORM_ENDPOINT} method="POST">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label className="body-small">Name</label>
                  <input name="name" required style={inputStyle} />
                </div>
                <div>
                  <label className="body-small">Email</label>
                  <input type="email" name="email" required style={inputStyle} />
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <label className="body-small">Phone</label>
                  <input name="phone" style={inputStyle} />
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <label className="body-small">Message</label>
                  <textarea name="message" rows={5} style={{ ...inputStyle, resize: "vertical" }} />
                </div>
              </div>
              <button disabled={status.submitting} className="btn-primary" style={{ marginTop: 16, width: "100%" }}>
                {status.submitting ? "Sending..." : "Send Inquiry"}
              </button>
              {status.error && (
                <p className="body-small" style={{ color: "#ff9b9b", marginTop: 10 }}>
                  {status.error}
                </p>
              )}
              <p className="body-small" style={{ marginTop: 10 }}>
                Or email us at <a href="mailto:info@dellpropertymanagement.com" style={{ color: "#d9fb06" }}>info@dellpropertymanagement.com</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{ background: "#000", borderTop: "1px solid #444", padding: "60px 0 30px" }}>
    <div className="container">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          marginBottom: "40px",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(45deg, #d9fb06, #84cc16)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "black",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              D
            </div>
            <div>
              <h3 style={{ color: "#d9fb06", fontSize: "20px", fontWeight: "bold", margin: 0 }}>DELL</h3>
              <p style={{ color: "#888", fontSize: "12px", margin: 0 }}>PROPERTY MANAGEMENT</p>
            </div>
          </div>
          <p className="body-small" style={{ marginBottom: "20px" }}>
            Premier property management services for residential and commercial properties.
          </p>
        </div>
        <div>
          <h4 className="heading-3" style={{ marginBottom: "20px" }}>Services</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Residential Management",
              "Commercial Management",
              "Property Sales",
              "Financial Management",
              "Maintenance Services",
              "Legal Compliance",
            ].map((service) => (
              <span key={service} className="body-small" style={{ cursor: "pointer" }}>
                {service}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="heading-3" style={{ marginBottom: "20px" }}>Contact Info</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div className="body-small">
              📍 575 Morosgo Dr NE
              <br />
              Atlanta, GA 30324
            </div>
            <div className="body-small">
              📞 <a href="tel:+18884628705" style={{ color: "#d9fb06", textDecoration: "none" }}>1 888 462 8705</a>
            </div>
            <div className="body-small">
              ✉️ <a href="mailto:info@dellpropertymanagement.com" style={{ color: "#d9fb06", textDecoration: "none" }}>info@dellpropertymanagement.com</a>
            </div>
            <div className="body-small">
              ⏰ Mon-Fri: 8AM-6PM
              <br />
              Sat: 9AM-4PM
              <br />
              Emergency: 24/7
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #444", paddingTop: "20px", textAlign: "center" }}>
        <p className="body-small">© {new Date().getFullYear()} Dell Property Management. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
