import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ContentContainer from "./ContentContainer";
import logo3_mono from "../assets/logo3_mono.png";

import "./Footer.css";

const contacts = [
  { icon: faLocationDot, info: "Address" },
  { icon: faPhone, info: "Phone" },
  { icon: faEnvelope, info: "Email" },
];

const socials = [
  { icon: faFacebook, name: "facebook" },
  { icon: faInstagram, name: "instagram" },
  { icon: faTwitter, name: "twitter" },
  { icon: faYoutube, name: "youtube" },
];

function Footer() {
  return (
    <footer className="site-footer" role="contentinfo" aria-label="Footer">
      <ContentContainer>
        <section className="footer-content">
          <div className="footer-logo">
            <img src={logo3_mono} alt="Little Lemon logo" width="120" />
          </div>
          <div className="footer-links" aria-label="Footer navigation">
            <h3>SITEMAP</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><HashLink to="/#about">About</HashLink></li>
              <li><HashLink to="/#highlights">Menu</HashLink></li>
              <li><Link to="/booking">Reservations</Link></li>
              <li><Link to="/order-online">Order Online</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
          <div className="footer-contact" aria-label="Contact details">
            <h3>CONTACT US</h3>
            <address>
              {contacts.map((contact, index) => (
                <p key={index}>
                  <FontAwesomeIcon icon={contact.icon} /> {contact.info}
                </p>
              ))}
            </address>
          </div>
          <div className="footer-social" aria-label="Social media links">
            <h3>SOCIALS</h3>
            {socials.map((social, index) => (
              <a
                key={index}
                href={`https://www.${social.name}.com`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </a>
            ))}
          </div>
        </section>
      </ContentContainer>
    </footer>
  );
}

export default Footer;
