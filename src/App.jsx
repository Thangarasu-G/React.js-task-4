import React, { useState } from "react";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

export default function App() {
    const [count, setCount] = useState(0);
    const [isDark, setIsDark] = useState(false);

    return (
        <div className={isDark ? "app dark" : "app light"}>
          <div className="container">
            <h1>React Counter App</h1>
            <p className="subtitle"> useState Hook Implementation </p>
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
          <Counter count={count} setCount={setCount} />
          <p className="footer"> Built with React useState Hook </p>
          </div>
        </div>
);
}

