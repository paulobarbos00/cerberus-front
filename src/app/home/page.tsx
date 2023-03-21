'use client';

import Image from 'next/image';
import React from 'react';
import styles from './page.module.css';

import addIcon from '@/../public/assets/icons/add.svg';
import AddModal from '@/components/subcomponents/AddModal/AddModal';
import { useGlobalContext } from '@/contexts/GlobalContext';

const Page = () => {
  const { modalActive, setModalActive } = useGlobalContext();

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

      {modalActive && <AddModal />}
    </>
  );
};

export default Page;
