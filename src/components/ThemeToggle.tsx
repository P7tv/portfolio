"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Mark as mounted to avoid hydration mismatch if needed

    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }

    // Hide hint after 5 seconds
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  if (!mounted) {
    // Return a placeholder or the default server-rendered state (Light mode icon)
    // to match server output but without client specifics logic if any
    return (
      <button
        className="theme-toggle-btn"
        aria-label="Toggle Theme"
      >
        🌙
      </button>
    );
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div
        id="theme-hint"
        style={{
          opacity: showHint ? 1 : 0,
          pointerEvents: showHint ? 'auto' : 'none',
          transition: 'opacity 0.5s ease',
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: '10px',
          background: 'var(--primary)',
          color: 'white',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '0.8rem',
          whiteSpace: 'nowrap',
          zIndex: 20
        }}
      >
        กดปุ่มนี้เพื่อเปลี่ยนธีม!
        {/* Simple arrow for tooltip */}
        <div style={{
          position: 'absolute',
          top: '-4px',
          left: '50%',
          transform: 'translateX(-50%)',
          borderLeft: '4px solid transparent',
          borderRight: '4px solid transparent',
          borderBottom: '4px solid var(--primary)'
        }}></div>
      </div>
      <button
        id="theme-toggle"
        className="theme-toggle-btn"
        aria-label="Toggle Theme"
        onClick={toggleTheme}
        style={{ fontSize: '1.2rem', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
