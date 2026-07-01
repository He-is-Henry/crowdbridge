import styles from './About.module.css';

const services = [

  {
    title: 'Audience Mobilization',
    desc: "Coordinating and providing the required audience for events of every scale."
  },
  {
    title: 'Student Audience Mobilization',
    desc: 'Mobilizing verified student attendees for campus and youth-focused events.',
  },
  {
    title: 'Guest Attendance Fulfilment',
    desc: 'Helping organizers meet their desired attendance goals with reliable audience coordination.',
  },
  {
    title: 'Community Engagement Support',
    desc: 'Connecting organizations with relevant communities for impactful participation',
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
