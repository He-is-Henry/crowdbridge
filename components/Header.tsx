'use client';

import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logoLink}>
          <Image
            src="/crowdbridge_logo.png"
            alt="CrowdBridge"
            width={44}
            height={44}
            className={styles.logoImg}
            priority
          />
          <span className={styles.logoText}>CrowdBridge</span>
        </a>

        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className={styles.cta}>
          Book Us
        </a>
      </div>
    </header>
  );
}