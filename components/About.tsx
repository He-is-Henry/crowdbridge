import styles from './About.module.css';

const services = [
  {
    title: 'Student mobilization',
    desc: 'Real students, on the ground, driving turnout across campuses.',
  },
  {
    title: 'Campus publicity',
    desc: 'Awareness campaigns built for how students actually communicate.',
  },
  {
    title: 'Event promotion',
    desc: 'From WhatsApp communities to flyers and campus ambassadors.',
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <p className="eyebrow">What we do</p>
        <h2 className={`display ${styles.heading}`}>
          We connect brands<br />to the right crowd.
        </h2>

        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
