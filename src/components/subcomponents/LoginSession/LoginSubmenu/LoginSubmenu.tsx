import styles from '../LoginSession.module.css';

export default function LoginSubmenu() {
  return (
    <div className={styles.floatNav}>
      <button className={styles.logOut}>Sair da conta</button>
    </div>
  );
}
