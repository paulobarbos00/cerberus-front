/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';

import useGetGroupsByUser from '@/hooks/useGetGroupsByUser';
import Link from 'next/link';
import styles from './GroupsList.module.css';

export interface IGetGroupsByUserJSON {
  data: IGetGroupsByUser[];
}

export interface IGetGroupsByUser {
  createdAt: number;
  description: string;
  id: string;
  is_public: boolean;
  is_valid: boolean;
  name: string;
  shortURL: string;
  userId: string;
}

export default function GroupsList() {
  const { groupsData, getGroups, loading } = useGetGroupsByUser();

  React.useEffect(() => {
    getGroups();
  }, []);

  if (typeof window === 'undefined') return null;
  if (loading) return <p>Carregando...</p>;
  if (groupsData) {
    const { data }: IGetGroupsByUserJSON = groupsData;

    if (data.length) {
      return (
        <section className={styles.groups}>
          {data.map((group: IGetGroupsByUser) => {
            return (
              <Link
                key={group.id}
                href={`/home/group/${group.id}`}
                className={styles.groupCard}
              >
                <div className={styles.topLine}></div>
                <h3 className={styles.groupCardTitle}>{group.name}</h3>
                <small className={styles.groupCardSubtitle}>
                  {group.description}
                </small>
              </Link>
            );
          })}
        </section>
      );
    } else if (!data.length) {
      return (
        <section className={styles.groups}>
          <p className={styles.noGroups}>
            Você ainda não tem nenhum grupo de links.
          </p>
        </section>
      );
    }
  }

  return null;
}
