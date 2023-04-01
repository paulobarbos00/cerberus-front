'use client';

import { useGlobalContext } from '@/contexts/GlobalContext';
import styles from './Alert.module.css';
import closeIcon from '@/../public/assets/icons/close.svg';
import Image from 'next/image';

export default function Alert() {
  const { alert, setAlert } = useGlobalContext();

  if (alert) {
    let type;

    switch (alert?.type) {
      case 'warning':
        type = styles.warning;
        break;
      case 'success':
        type = styles.success;
        break;
      case 'info':
        type = styles.info;
    }

    return (
      <div className={`${styles.alert} ${type}`}>
        <div className={styles.alertInfo}>
          <h4 className={styles.title}>{alert.title || 'Título'}</h4>
          {alert.subtitle && (
            <p className={styles.subtitle}>{alert.subtitle}</p>
          )}
        </div>
        <button className={styles.close} onClick={() => setAlert(null)}>
          <Image width={18} height={18} src={closeIcon} alt="Fechar" />
        </button>
      </div>
    );
  }

  return null;
}
