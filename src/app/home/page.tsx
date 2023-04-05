'use client';

import React from 'react';
import styles from './page.module.css';

import GroupsList from '@/components/GroupsList/GroupsList';
import AddGroupModal from '@/components/subcomponents/Modals/AddGroupModal/AddGroupModal';
import { useModalContext } from '@/contexts/ModalContext';
import AddButton from '@/components/subcomponents/Buttons/AddButton/AddButton';

const Page = () => {
  const { modalCreateGroupActive } = useModalContext();
  return (
    <>
      <section className={styles.homeTop}>
        <h1 className={styles.homeTopTitle}>Meus Grupos</h1>
        <AddButton />
      </section>
      <GroupsList />
      {modalCreateGroupActive && <AddGroupModal />}
    </>
  );
};

export default Page;
