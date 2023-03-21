import React from 'react';

import styles from './AddModal.module.css';
import closeIcon from '@/../public/assets/icons/close.svg';
import Image from 'next/image';
import { useGlobalContext } from '@/contexts/GlobalContext';
import AddGroup from './AddGroup/AddGroup';

export default function AddModal() {
  const { setModalActive } = useGlobalContext();
  const outSideModal = React.useRef(null);

  const closeModal = ({ target }: any) => {
    if (target === outSideModal.current) setModalActive(false);
  };

  return (
    <section
      className={styles.modalContainer}
      ref={outSideModal}
      onClick={closeModal}
    >
      <div className={styles.modal}>
        <div className={styles.modalTop}>
          <h2 className={styles.modalTitle}>Adicionar</h2>
          <button
            type="button"
            className={styles.modalClose}
            onClick={() => setModalActive(false)}
          >
            <Image
              src={closeIcon}
              width={20}
              height={20}
              alt="Ícone de fechar"
            />
          </button>
        </div>
        <div className={styles.modalToggle}>
          <button
            type="button"
            className={`${styles.modalToggleButton} ${styles.modalToggleButtonActive}`}
          >
            Grupo de Links
          </button>
          <button type="button" className={styles.modalToggleButton}>
            Link Único
          </button>
        </div>

        <AddGroup />
      </div>
    </section>
  );
}
