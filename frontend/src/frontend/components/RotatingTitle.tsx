"use client";

import { useEffect, useState } from "react";

const titles = [
  "Full-Stack Software Engineer",
  "AI/ML Engineer",
  "Community Builder",
  "Startup Founder",
];

export default function RotatingTitle({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setVisible(true);
      }, 600);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block transition-all duration-500 ease-in-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } ${className}`}
    >
      - {titles[index]}
    </span>
  );
}
