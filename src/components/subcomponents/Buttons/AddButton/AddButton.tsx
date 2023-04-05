import Image from 'next/image';
import React from 'react';
import addIcon from '@/../public/assets/icons/add2.svg';
import { useModalContext } from '@/contexts/ModalContext';
import styles from './AddButton.module.css';

export default function AddButton() {
  const { setModalCreateGroupActive } = useModalContext();
  const addButtonClick = () => {
    setModalCreateGroupActive(true);
  };
  return (
    <button
      type="button"
      className={styles.homeTopButton}
      onClick={addButtonClick}
    >
      <Image
        src={addIcon}
        width={18}
        height={18}
        alt="Ícone de operador matemático de soma"
      />
      Adicionar
    </button>
  );
}
