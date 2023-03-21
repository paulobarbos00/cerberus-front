import useLogout from '@/hooks/useLogout';
import Image from 'next/image';
import React from 'react';
import styles from './LoginSession.module.css';

export interface IUserStorageData {
  id: string;
  userName: string;
  displayName: string;
  email: string;
  photoURL: string;
}

export default function LoginSession() {
  const [storageUser, setStorageUser] = React.useState<IUserStorageData | null>(
    null
  );
  const [isActive, setIsActive] = React.useState(false);

  const { logOut } = useLogout();
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const userStorageData = localStorage.getItem('userLoggedInfo');
      userStorageData && setStorageUser(JSON.parse(userStorageData));
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const outsideClick = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setIsActive(false);
        console.log(e.target);
      }
    };

    document.addEventListener('mousedown', outsideClick);

    return () => {
      document.removeEventListener('mousedown', outsideClick);
    };
  }, [isActive]);

  const onClick = () => {
    setIsActive(!isActive);
  };

  const accountLogout = () => {
    logOut();
  };

  const LoginSessionElement = () => {
    return (
      <div className={styles.session} ref={menuRef}>
        <div className={styles.sessionButton} onClick={onClick}>
          <h3 className={styles.userName}>
            {storageUser?.displayName || 'Usuário'}
          </h3>

          {storageUser && (
            <Image
              src={storageUser.photoURL}
              width={35}
              height={35}
              alt="Foto de perfil do usuário"
              className={styles.userPhoto}
            />
          )}
        </div>

        {isActive && (
          <div className={styles.dropdown}>
            <button className={styles.dropdownButton} onClick={accountLogout}>
              Sair da Conta
            </button>
          </div>
        )}
      </div>
    );
  };

  if (storageUser) {
    return <LoginSessionElement />;
  }

  return null;
}
