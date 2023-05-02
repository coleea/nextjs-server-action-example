import styles from './footer.module.css';

export default function Footer() {
  console.log('use client안에서 호출된 footer');
  return (
    <div>
      <footer className={styles.footer}>
        Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC |
        Contact
      </footer>
    </div>
  );
}
