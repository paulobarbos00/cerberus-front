import React from 'react';
import styles from '../GroupDataTop.module.css';
import Image from 'next/image';
import DeleteIconRed from '@/../public/assets/icons/delete-red.svg';
import editIcon from '@/../public/assets/icons/edit.svg';
import addIcon from '@/../public/assets/icons/add2.svg';
import { useModalContext } from '@/contexts/ModalContext';

export default function GroupConfig() {
  const {
    setModalAlertActive,
    setModalEditGroupActive,
    setModalCreateGroupLinkActive
  } = useModalContext();

  return (
    <div className={styles.groupConfig}>
      <button
        className={`${styles.groupConfigButton} ${styles.createLinkButton}`}
        title="Adicionar um Link neste grupo"
        onClick={() => {
          setModalCreateGroupLinkActive(true);
        }}
      >
        <Image src={addIcon} width={18} height={18} alt="Ícone de soma" />
        Criar Link
      </button>

      <button
        className={styles.groupConfigButton}
        title="Editar Grupo"
        onClick={() => {
          setModalEditGroupActive(true);
        }}
      >
        <Image src={editIcon} width={20} height={20} alt="Ícone de Lápis" />
      </button>

      <button
        className={`${styles.groupConfigButton} ${styles.groupConfigButtonRed}`}
        title="Excluir Grupo"
        onClick={() => {
          setModalAlertActive(true);
        }}
      >
        <Image
          src={DeleteIconRed}
          width={22}
          height={22}
          alt="Ícone de Lixeira"
        />
      </button>
    </div>
  );
}
