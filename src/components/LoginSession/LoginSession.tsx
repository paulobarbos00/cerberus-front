'use client';

import React from 'react';
import Image from 'next/image';
import loginAvatar from '../../../public/assets/icons/login-avatar.svg';
import styles from './LoginSession.module.css';

import useGetGoogleUser from '@/hooks/useGetGoogleUser';
import { useGlobalContext } from '@/contexts/GlobalContext';

const LoginGoogleButton = () => {
  const { signInGoogle } = useGetGoogleUser();
  const { userInfo } = useGlobalContext();

  if (userInfo) {
    return (
      <button className={styles.loginSession}>
        <span className={styles.userNickname}>{userInfo.displayName}</span>
        <div className={styles.loginButton}>
          <Image
            src={loginAvatar}
            width={20}
            height={20}
            alt="Ícone de avatar"
          />
        </div>
      </button>
    );
  }

  return (
    <button className={styles.loginSession} onClick={() => signInGoogle()}>
      <span className={styles.userNickname}>Entrar com Google</span>
      <div className={styles.loginButton}>
        <Image src={loginAvatar} width={20} height={20} alt="Ícone de avatar" />
      </div>
    </button>
  );
};

export default LoginGoogleButton;
