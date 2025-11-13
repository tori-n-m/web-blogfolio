import React from "react";
import headerIcon from "../assets/images/header-icon.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <img src={headerIcon} alt="Header icon" className="header-icon" />
        <h1 className="site-title">Tori’s Blogfolio</h1>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#blog">Blog</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
