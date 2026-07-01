'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

const work = [
  { src: '/mark_hack_5.0.png', title: 'MarkHack 5.0', tag: 'Marketing & Tech Conference' },
  { src: '/preppys_lab.png', title: "Preppy's Lab", tag: 'Club Event' },
  { src: '/rhythms_of_the_continent.png', title: 'AFRIFF 14 — Rhythms of the Continent', tag: 'Panel Session' },
  { src: '/seven_doors_making.png', title: 'AFRIFF 14 — Seven Doors', tag: 'Panel Session' },
  { src: '/shut_down_lagos.png', title: 'Shut Down Lagos', tag: 'Anniversary Edition' },
  { src: '/to_kill_a_monkey_making.png', title: 'AFRIFF 14 — To Kill A Monkey', tag: 'Panel Session' },
  { src: '/ultimate_champions_league.png', title: 'Ultimate Champions League Finale 3.0', tag: 'Gray Tiger' },
  { src: '/gray_control.png', title: 'Gray Control', tag: 'Gray Tiger' },
];

function GalleryCard({ item, index }: { item: typeof work[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
    >
      <div
        className={styles.imgWrap}
        style={{ transitionDelay: `${(index % 4) * 80}ms` }}
      >
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className={styles.img}
        />
      </div>
      <p className={styles.tag}>{item.tag}</p>
      <p className={styles.title}>{item.title}</p>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="work" className={styles.gallery}>
      <div className="container">
        <p className="eyebrow">Our Impact</p>
        <h2 className={`display ${styles.heading}`}>Events we&apos;ve served.</h2>

        <div className={styles.grid}>
          {work.map((item, i) => (
            <GalleryCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}