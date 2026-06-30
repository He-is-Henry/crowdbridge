'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Stats.module.css';

const stats = [
  { target: 20, suffix: '+', label: 'Events mobilized' },
  { target: 5000, suffix: '+', label: 'Students reached' },
  { target: 10, suffix: '+', label: 'Brands worked with' },
  { target: 5, suffix: '', label: 'Campuses covered' },
];

function formatValue(n: number) {
  return n >= 1000 ? n.toLocaleString() : n.toString();
}

function useCountUp(target: number, start: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let frame: number;

    function tick(timestamp: number) {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return value;
}

function StatItem({
  target,
  suffix,
  label,
  start,
}: {
  target: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const value = useCountUp(target, start);
  return (
    <div className={styles.item}>
      <p className={`display ${styles.value}`}>
        {formatValue(value)}
        {suffix}
      </p>
      <p className={styles.label}>{label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.stats} ref={ref}>
      <div className={`container ${styles.grid}`}>
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} start={inView} />
        ))}
      </div>
    </section>
  );
}