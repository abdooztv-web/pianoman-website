"use client";

import { useEffect, useState } from "react";

export default function BlogProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 bg-gray-100 z-[60]">
      <div
        className="h-full bg-[#8C1A2B] transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
