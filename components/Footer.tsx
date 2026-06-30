import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.brand}>CrowdBridge</p>
        <p className={styles.meta}>
          By Arogbodo Motunrayo · Lagos, Nigeria
        </p>
        <p className={styles.copy}>
          © {new Date().getFullYear()} CrowdBridge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
