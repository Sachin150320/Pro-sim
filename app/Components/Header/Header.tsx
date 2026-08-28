"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Search,
  X,
  ArrowRight,
  ChevronDown,
  PhoneCall,
  Menu,
} from "lucide-react";

type MenuItem = {
  name: string;
  href: string;
  children?: {
    name: string;
    href: string;
  }[];
};

const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "#",
    children: [
      { name: "About Company", href: "/about-us" },
      { name: "Promoter", href: "/why-us" },
      { name: "Vision and Mission", href: "/leadership-team" },
      { name: "Unique Value Proposition", href: "/awards" },
      { name: "Customer Visits", href: "/pricing" },
      { name: "Team", href: "/faqs" },
      { name: "Gallery", href: "/careers" },
      { name: "Our Customer Benefits", href: "#" },
    ],
  },
  {
    name: "Offerings",
    href: "#",
    children: [
      { name: "Detailed Engineering", href: "#" },
      { name: "Seismic Analysis and Qualification", href: "#" },
      { name: "Piping and Pipeline Engineering", href: "#" },
      { name: "3D Plant Modelling", href: "#" },
      { name: "FEA", href: "#" },
      { name: "CFD", href: "#" },
      { name: "Structural Integrity Assessment", href: "#" },
      { name: "Engineering Process Automation", href: "#" },
      { name: "Digital Twin", href: "#" },
      { name: "Owner's Engineering, Advisory", href: "#" },
    ],
  },
  {
    name: "Industries",
    href: "#",
    children: [
      { name: "Nuclear Power", href: "#" },
      { name: "Thermal Power", href: "#" },
      { name: "Oil & Gas, Off Shore", href: "#" },
      { name: "Defence", href: "#" },
      { name: "Heavy Engineering Equipment / General Engineering", href: "#" },
      { name: "Renewable & Green Energy", href: "#" },
    ],
  },
  
  { name: "Projects", href: "#" },
  
  { name: "Careers", href: "#" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  // Handle header background switch on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown((current) => (current === name ? null : name));
  };

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          {/* Logo */}
         {/* Logo */}
          <div className="logo">
            <Link href="/">
              <img
                src={scrolled ? "/assets/images/logo/logo-dark.webp" : "/assets/images/logo/logo.webp"}
                alt="ProSIM Logo"
                className="logo-image"
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul>
              {menuItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                return (
                  <li
                    key={item.name}
                    className={`nav__item ${hasChildren ? "has-dropdown" : ""}`}
                  >
                    <Link href={item.href} className="nav__item-link">
                      <span>{item.name}</span>
                      {hasChildren && <ChevronDown size={14} />}
                    </Link>

                    {hasChildren && (
                      <ul className="dropdown-menu">
                        {item.children?.map((child) => (
                          <li key={child.name}>
                            <Link href={child.href}>{child.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <button type="button" className="search-btn" aria-label="Search">
              <Search size={20} />
            </button>

            <Link href="/contact-us" className="btn-primary">
              <PhoneCall size={15} />
              <span>Reach Us</span>
              <ArrowRight size={15} />
            </Link>

            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen(true)}
              aria-label="Open Mobile Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile Sidebar Navigation Drawer */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <div className="mobile-logo">
             <div className="logo">
            <Link href="/">
              <img
                src={"/assets/images/logo/logo-dark.webp"}
                alt="ProSIM Logo"
                className="logo-image"
              />
            </Link>
          </div>
          </div>
          <button
            type="button"
            className="close-menu"
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav>
          <ul className="mobile-nav-links">
            {menuItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isDropdownOpen = openMobileDropdown === item.name;

              return (
                <li
                  key={item.name}
                  className={hasChildren && isDropdownOpen ? "mobile-dropdown-parent open" : "mobile-dropdown-parent"}
                >
                  {hasChildren ? (
                    <button
                      type="button"
                      className="mobile-dropdown-toggle"
                      onClick={() => toggleMobileDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} />
                    </button>
                  ) : (
                    <Link href={item.href} onClick={closeMenu}>
                      <span>{item.name}</span>
                    </Link>
                  )}

                  {hasChildren && (
                    <ul className="mobile-sub-menu">
                      {item.children?.map((child) => (
                        <li key={child.name}>
                          <Link href={child.href} onClick={closeMenu}>
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <Link href="/contact-us" className="btn-primary" onClick={closeMenu}>
          <PhoneCall size={16} />
          <span>Reach Us</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </>
  );
}