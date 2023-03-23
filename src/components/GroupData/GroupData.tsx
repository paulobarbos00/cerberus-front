/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import useGetGroupById from '@/hooks/useGetGroupById';
import React, { FC } from 'react';
import styles from './GroupData.module.css';

interface pageProps {
  pageId: string;
}

const GroupData: FC<pageProps> = ({ pageId }) => {
  const { getGroup, groupData } = useGetGroupById(pageId);

  React.useEffect(() => {
    getGroup();
  }, []);

  if (groupData) {
    const { data } = groupData;

    return (
      <section className={styles.groupContainer}>
        <div className={styles.groupTopInfo}>
          <div className={styles.groupInfo}>
            <h2 className={styles.groupTitle}>{data.name}</h2>
            <p className={styles.groupDescription}>{data.description}</p>
          </div>

          <div className={styles.groupConfig}>
            <button className={styles.groupConfigButton}>Excluir</button>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default GroupData;
