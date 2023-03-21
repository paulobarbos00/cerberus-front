'use client';

import React from 'react';
import Image from 'next/image';
import googleIcon from '@/../public/assets/icons/google.svg';
import styles from './LoginButton.module.css';

import useGetGoogleUser from '@/hooks/useGetGoogleUser';

const LoginGoogleButton = () => {
  const { signInGoogle } = useGetGoogleUser();

  return (
    <button className={styles.loginSession} onClick={() => signInGoogle()}>
      <div className={styles.loginButton}>
        <Image src={googleIcon} width={20} height={20} alt="Ícone do Google" />
      </div>
      <span className={styles.loginTitle}>Login com Google</span>
    </button>
  );
};

export default LoginGoogleButton;
