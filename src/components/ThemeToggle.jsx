import React from "react";

export default function ThemeToggle({ isDark, setIsDark }) {
    return (
        <div className="theme-section">
            <p> Current Theme: {isDark ? "Dark Mode" : "Light Mode"} </p>
            <button className="theme-btn" onClick={() => setIsDark(!isDark)}>
                    {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"} </button>
        </div>
);
}

