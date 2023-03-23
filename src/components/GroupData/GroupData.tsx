import styles from './GroupData.module.css';

export default function GroupData() {
  return (
    <section className={styles.groupContainer}>
      <div className={styles.groupTopInfo}>
        <div className={styles.groupInfo}>
          <h2 className={styles.groupTitle}>Nome do grupo</h2>
          <p className={styles.groupDescription}>Descrição do grupo</p>
        </div>

        <div className={styles.groupConfig}>
          <button className={styles.groupConfigButton}>Excluir</button>
        </div>
      </div>
    </section>
  );
}
