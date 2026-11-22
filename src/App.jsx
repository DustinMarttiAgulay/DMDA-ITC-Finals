import { useEffect } from "react";
import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import { profile, contact } from "./data.js";
import { Home, Education, About, Skills } from "./pages.jsx";

// Each item is its own page. Contact is not a page: it scrolls to the footer.
const pages = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Me" },
  { to: "/education", label: "Educational Background" },
  { to: "/skills", label: "Skills" },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <header className="bar">
        <Link className="brand" to="/">{profile.name} - Finals Project</Link>
        <nav aria-label="Main">
          <ul>
            {pages.map((p) => (
              <li key={p.to}><NavLink to={p.to} end={p.end}>{p.label}</NavLink></li>
            ))}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer id="contact">
        <div className="contact-flex">
        <h2>Contact</h2>
        <p>{contact.message}</p>
        <p><a className="mail" href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <ul>
          {contact.links.map((l) => (
            <li key={l.label}><a href={l.url} target="_blank" rel="noreferrer">{l.label}</a></li>
          ))}
        </ul>
        <small>© {new Date().getFullYear()} {profile.name}</small>
        </div>
        
        <div className="contact-flex">
          <h2>Contact Form</h2>
          <p>If you want to contact me, please fill out the form below:</p>
          <form action="" method="POST">
            <div className="form-group">
              <label for="full-name">Full Name</label>
              <input type="text" id="full-name" name="name" placeholder="Jane Doe" required />
            </div>
            <div className="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="jane@example.com" required />
            </div>
            <div className="form-group">
              <label for="topic">Reason for Contact</label>
              <select id="topic" name="topic" required>
                <option value="" disabled selected>Select an option...</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" placeholder="How can I help you?" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </footer>
    </>
  );
}
