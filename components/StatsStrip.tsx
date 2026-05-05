"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 1000, suffix: "+", label: "Pianos Restored" },
  { target: 40,   suffix: "+", label: "Years Experience" },
  { target: 100,  suffix: "%", label: "Client Satisfaction" },
  { target: 48,   suffix: "h", label: "Assessment Turnaround" },
];

function StatItem({
  target,
  suffix,
  label,
  started,
  index,
}: {
  target: number;
  suffix: string;
  label: string;
  started: boolean;
  index: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    let startTime: number | null = null;

    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    // Stagger each stat slightly
    const id = setTimeout(() => requestAnimationFrame(tick), index * 120);
    return () => clearTimeout(id);
  }, [started, target, index]);

  return (
    <div
      className={[
        "py-10 px-6 md:py-14 md:px-8 flex flex-col items-center justify-center border-white/20",
        index % 2 === 0 ? "border-r" : "md:border-r",
        index < 2 ? "border-b md:border-b-0" : "",
        index === stats.length - 1 ? "md:border-r-0" : "",
      ].join(" ")}
    >
      <p className="text-white text-4xl md:text-5xl font-bold mb-2 leading-none tabular-nums">
        {count >= 1000 ? count.toLocaleString() : count}{suffix}
      </p>
      <p className="text-white/55 text-xs uppercase tracking-[0.2em] text-center">{label}</p>
    </div>
  );
}

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 bg-[#8C1A2B]">
      {stats.map((stat, i) => (
        <StatItem key={stat.label} {...stat} started={started} index={i} />
      ))}
    </div>
  );
}
