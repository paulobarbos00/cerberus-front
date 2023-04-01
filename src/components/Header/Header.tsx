'use client';

import React from 'react';
import Link from 'next/link';

import styles from './Header.module.css';
import LoginSession from '../subcomponents/login/LoginSession/LoginSession';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/home" className={styles.logo}>
        CerberusProject
      </Link>

      <LoginSession />
    </header>
  );
}
