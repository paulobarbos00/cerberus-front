'use client';

import Image from 'next/image';
import React from 'react';
import styles from './page.module.css';

import addIcon from '@/../public/assets/icons/add.svg';
import AddModal from '@/components/subcomponents/Modals/AddModal/AddModal';
import { useModalContext } from '@/contexts/ModalContext';
import GroupsList from '@/components/GroupsList/GroupsList';

const Page = () => {
  const { modalActive, setModalActive } = useModalContext();

  const addButtonClick = () => {
    setModalActive(true);
  };

  return (
    <>
      <section className={styles.homeTop}>
        <h1 className={styles.homeTopTitle}>Grupos de Links</h1>
        <button
          type="button"
          className={styles.homeTopButton}
          onClick={addButtonClick}
        >
          <Image
            src={addIcon}
            width={20}
            height={20}
            alt="Ícone de operador matemático de soma"
          />
          Adicionar
        </button>
      </section>

      <GroupsList />

      {modalActive && <AddModal />}
    </>
  );
};

export default Page;
