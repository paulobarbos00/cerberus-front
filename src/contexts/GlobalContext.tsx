'use client';

import React from 'react';

interface SetUserInfoProps {
  displayName: string;
  email: string;
  photoURL: string;
  userName: string;
  id: string;
}

interface GlobalContextProvider {
  userInfo: SetUserInfoProps | null;
  setUserInfo: React.Dispatch<React.SetStateAction<SetUserInfoProps | null>>;
  alert: AlertProps | null;
  setAlert: React.Dispatch<React.SetStateAction<AlertProps | null>>;
}

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

interface AlertProps {
  type: string;
  title: string;
  subtitle: string;
}

const GlobalContext = React.createContext({} as GlobalContextProvider);

export const GlobalContextProvider = ({
  children
}: GlobalContextProviderProps) => {
  const [userInfo, setUserInfo] = React.useState<SetUserInfoProps | null>(null);
  const [alert, setAlert] = React.useState<AlertProps | null>(null);

  let localId: string | null = '';
  if (typeof window !== 'undefined') {
    localId = localStorage.getItem('userLoggedInfo');
  }

  React.useEffect(() => {
    const storedUser = localId;
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, [localId]);

  // Show alert when alert state is true
  React.useEffect(() => {
    if (alert) {
      const timeInMiliseconds = 10000;

      setTimeout(() => {
        setAlert(null);
      }, timeInMiliseconds);
    }
  }, [alert]);

  return (
    <GlobalContext.Provider value={{ userInfo, setUserInfo, alert, setAlert }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(GlobalContext);
