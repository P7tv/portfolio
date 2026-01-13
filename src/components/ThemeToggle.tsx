"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check local storage or system preference
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
            setIsDarkMode(true);
            document.body.classList.add("dark-mode");
        } else {
            setIsDarkMode(false);
            document.body.classList.remove("dark-mode");
        }

        // Show hint loop
        const hintInterval = setInterval(() => {
            setShowHint(prev => !prev);
        }, 3000); // Toggle every 3 seconds

        return () => clearInterval(hintInterval);
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

    // Prevent hydration mismatch by returning a placeholder or consistently rendered server state until mounted
    if (!mounted) {
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
