'use client';

import React from 'react';
import Link from 'next/link';

import LoginSession from '@/components/LoginSession/LoginSession';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/home" className={styles.logo}>
        Cerberus Project
      </Link>

      <LoginSession />
    </header>
  );
}
