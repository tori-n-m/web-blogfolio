import React from "react";
import footerIcon from "../assets/images/footer-icon.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <img src={footerIcon} alt="Footer icon" className="footer-icon" />
        <p>© {new Date().getFullYear()} Tori Mitchell</p>
      </div>
    </footer>
  );
}
