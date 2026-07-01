import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <section id="about-me" className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <p className="eyebrow">About Me</p>
          <h2 className={`display ${styles.title}`}>
            The bridge to every<br />successful event.
          </h2>
        </div>

        <div className={styles.body}>
          <p className={styles.intro}>
            Hi, I&apos;m Arogbodo Motunrayo Olayimade, popularly known as Motun,
            founder of CrowdBridge and a final-year Project Management Technology
            student at the prestigious Lagos State University (LASU), with a
            passion for delivering professional audience mobilization solutions
            that contribute to successful events.
          </p>
          <p className={styles.text}>
            I help event organizers, brands, and agencies achieve their audience
            goals through strategic mobilization and professional coordination.
            I connect the right people to the right experiences, whether it&apos;s
            a concert, conference, product launch, campus event or brand activation.
          </p>
          <p className={styles.text}>
            At CrowdBridge, we don&apos;t just mobilize audiences. We create the
            presence that brings events to life.
          </p>
        </div>
      </div>
    </section>
  );
}