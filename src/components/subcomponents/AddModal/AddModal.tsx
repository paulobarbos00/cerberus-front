import React from 'react';
import Image from 'next/image';

import closeIcon from '@/../public/assets/icons/close.svg';
import AddGroup from './AddGroup/AddGroup';
import styles from './AddModal.module.css';
import { useModalContext } from '@/contexts/ModalContext';

export default function AddModal() {
  const { setModalActive, inputHasText } = useModalContext();
  const outSideModal = React.useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const outsideClick = ({ target }: any) => {
    if (target === outSideModal.current && !inputHasText) {
      setModalActive(false);
    }
  };

  return (
    <section
      className={styles.modalContainer}
      ref={outSideModal}
      onClick={outsideClick}
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
