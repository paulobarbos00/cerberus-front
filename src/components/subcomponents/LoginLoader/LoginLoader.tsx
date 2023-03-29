import styles from './LoginLoader.module.css';

import React from 'react';

export default function LoginLoader() {
  return (
    <section className={styles.loaderContainer}>
      <div className={styles.loaderContent}>
        <div className={styles.spinner}></div>
        <h3 className={styles.title}>Fazendo login...</h3>
      </div>
    </section>
  );
}
