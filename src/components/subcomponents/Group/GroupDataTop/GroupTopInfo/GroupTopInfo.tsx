import React from 'react';
import styles from '../GroupDataTop.module.css';
import { IGroupData } from '@/contexts/GroupContext';

interface GroupTopProps {
  data: IGroupData;
}

export default function GroupTopInfo({ data }: GroupTopProps) {
  return (
    <div className={styles.groupInfo}>
      <h2 className={styles.groupTitle}>{data.name}</h2>
      <p className={styles.groupDescription}>{data.description}</p>
    </div>
  );
}
