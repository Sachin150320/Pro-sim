"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Fuse from "fuse.js";
import {
  Search,
  X,
  ArrowRight,
  ChevronDown,
  PhoneCall,
  Menu,
} from "lucide-react";
import { searchIndex, SearchItem } from "@/lib/searchData";

type MenuItem = {
  name: string;
  href: string;
  children?: {
    name: string;
    href: string;
  }[];
};

export const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "#",
    children: [
      { name: "About Company", href: "/about-us" },
      { name: "Team", href: "/Team" },
      { name: "Gallery", href: "/Gallery" },
    ],
  },
  {
    name: "Offerings",
    href: "#",
    children: [
      {
        name: "Detailed Engineering services",
        href: "/Detailed-Engineering-services",
      },
      {
        name: "Seismic Analysis & Qualification",
        href: "/Seismic-analysis-and-qualification",
      },
      {
        name: "Piping & Pipeline Engineering Services",
        href: "/Piping-&-pipeline-engineering-services",
      },
      {
        name: "3D Plant Modelling Services",
        href: "/Three-D-plant-modelling-services",
      },
      {
        name: "Finite Element Analysis Services",
        href: "/finite-element-analysis-services",
      },
      {
        name: "CFD & Multiphysics Simulations Services",
        href: "/Computational-fluid-dynamics-services",
      },
      {
        name: "RLA/RLE & Fitness-for-Service (FFS)",
        href: "/structural-integrity-assessments",
      },
      {
        name: "Engineering Automation & Digital Twin",
        href: "/Engineering-Automation-&-Digital-Twin",
      },
      {
        name: "Pre-Bid & Owner's Engineering",
        href: "/Pre-Bid-&-Owners-Engineering",
      },
    ],
  },
  {
    name: "Industries",
    href: "#",
    children: [
      { name: "Nuclear Power", href: "/nuclear-power" },
      { name: "Thermal Power", href: "/thermal-power" },
      { name: "Oil & Gas", href: "/oil-gas" },
      { name: "Aerospace & Defence", href: "/defence-systems" },
      { name: " Industrial & Heavy Engineering", href: "/heavy-engineering" },
    ],
  },
  { name: "Onsite Deputation", href: "/onsite-deputation" },
  { name: "Projects", href: "/projects" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  // --- Search state ---
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(searchIndex, {
        keys: ["title", "excerpt", "category"],
        threshold: 0.35,
      }),
    []
  );

  const results: SearchItem[] = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).map((r) => r.item).slice(0, 8);
  }, [query, fuse]);

  // Handle header background switch on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu or search is active
  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown((current) => (current === name ? null : name));
  };

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">
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
            <button
              type="button"
              className="search-btn"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
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

      {/* --- Search Overlay --- */}
      <div
        className={`search-overlay ${searchOpen ? "active" : ""}`}
        onClick={closeSearch}
      >
        <div className="search-panel" onClick={(e) => e.stopPropagation()}>
          <div className="search-input-row">
            <Search size={20} />
            <input
              type="text"
              autoFocus
              placeholder="Search the site..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="button" onClick={closeSearch} aria-label="Close search">
              <X size={20} />
            </button>
          </div>

          {query.trim() && (
            <ul className="search-results">
              {results.length > 0 ? (
                results.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={closeSearch}>
                      <span className="search-result-category">{item.category}</span>
                      <span className="search-result-title">{item.title}</span>
                      <span className="search-result-excerpt">{item.excerpt}</span>
                    </Link>
                  </li>
                ))
              ) : (
                <li className="search-no-results">No results found for "{query}"</li>
              )}
            </ul>
          )}
        </div>
      </div>

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
