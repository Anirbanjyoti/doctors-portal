import React from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "contain",
      }}
      className="p-20"
    >
      <div className="footer">
      <div>
        <span className="footer-title">Services</span>
        <Link as={Link} to="/" className="link link-hover">
          Branding
        </Link>
        <Link as={Link} to="/" className="link link-hover">
          Design
        </Link>
        <Link as={Link} to="/" className="link link-hover">
          Marketing
        </Link>
        <Link as={Link} to="/" className="link link-hover">
          Advertisement
        </Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link as={Link} to="about" className="link link-hover">
          About us
        </Link>
        <Link as={Link} to="/" className="link link-hover">
          Contact
        </Link>
        <Link as={Link} to="/" className="link link-hover">
          Jobs
        </Link>
        <Link as={Link} to="/" className="link link-hover">
          Press kit
        </Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link as={Link} to="/" className="link link-hover">
          Privacy policy
        </Link>
        <Link as={Link} to="/" className="link link-hover">
          Terms of use
        </Link>
        <Link as={Link} to="/" className="link link-hover">
          Cookie policy
        </Link>
      </div>
      </div>
      <div className="text-center mt-20">
        <p>Copyright 2022 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
