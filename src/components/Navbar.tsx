"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className={`${styles.links} ${styles.desktopOnly}`}>
          <Link href="#expert-section">ประสบการณ์</Link>
          <Link href="#trick-section">ทริคการสัมภาษณ์</Link>
          <Link href="#portfolio-section">ผลงาน</Link>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <Link href="#expert-section" onClick={() => setIsOpen(false)}>ประสบการณ์</Link>
          <Link href="#trick-section" onClick={() => setIsOpen(false)}>ทริคการสัมภาษณ์</Link>
          <Link href="#portfolio-section" onClick={() => setIsOpen(false)}>ผลงาน</Link>
          <div style={{ padding: '1rem', display: 'flex', justifyContent: 'center' }}>
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
