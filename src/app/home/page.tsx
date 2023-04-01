'use client';

import Image from 'next/image';
import React from 'react';
import styles from './page.module.css';

import addIcon from '@/../public/assets/icons/add2.svg';
import { useModalContext } from '@/contexts/ModalContext';
import GroupsList from '@/components/GroupsList/GroupsList';
import AddGroupModal from '@/components/subcomponents/Modals/AddGroupModal/AddGroupModal';

const Page = () => {
  const { modalCreateGroupActive, setModalCreateGroupActive } =
    useModalContext();

  const addButtonClick = () => {
    setModalCreateGroupActive(true);
  };

  return (
    <>
      <section className={styles.homeTop}>
        <h1 className={styles.homeTopTitle}>Meus Grupos</h1>
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
      </section>

      <GroupsList />

      {modalCreateGroupActive && <AddGroupModal />}
    </>
  );
};

export default Page;
