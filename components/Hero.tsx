import styles from './Hero.module.css';

const events = [
  'AFRIFF', 'MARKHACK 5.0', 'SHUT DOWN LAGOS', 'GRAY CONTROL',
  "PREPPY'S LAB", 'CHAMPIONS LEAGUE FINALE', 'AFRIFF', 'MARKHACK 5.0',
];

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...events, ...events].map((name, i) => (
            <span key={i} className={styles.marqueeItem}>{name}</span>
          ))}
        </div>
      </div>

      <div className={`container ${styles.inner}`}>
        <p className={`eyebrow ${styles.fadeUp1}`}>
          Student mobilization &amp; campus publicity
        </p>

        <h1 className={`display ${styles.headline} ${styles.fadeUp2}`}>
          We bring<br />the crowd.
        </h1>

        <div className={`${styles.bridgeWrap} ${styles.fadeUp3}`}>
          <span className={styles.dot} />
          <span className={styles.bridgeLineAnim} />
          <span className={styles.dot} />
        </div>

        <p className={`${styles.subtext} ${styles.fadeUp3}`}>
          CrowdBridge connects brands and event organizers to real, engaged
          audiences across campuses and cities, from awareness to turnout.
        </p>

        <div className={`${styles.ctaRow} ${styles.fadeUp4}`}>
          <a href="#contact" className={styles.primaryCta}>
            Book CrowdBridge
          </a>
          <a href="#work" className={styles.secondaryCta}>
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}