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
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: SetUserInfoProps | null;
  setUserInfo: React.Dispatch<React.SetStateAction<SetUserInfoProps | null>>;
}
1;

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const GlobalContext = React.createContext({} as GlobalContextProvider);

export const GlobalContextProvider = ({
  children
}: GlobalContextProviderProps) => {
  const [modalActive, setModalActive] = React.useState<boolean>(false);
  const [userInfo, setUserInfo] = React.useState<SetUserInfoProps | null>(null);

  React.useEffect(() => {
    const storedUser = localStorage.getItem('userLoggedInfo');
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{ modalActive, setModalActive, userInfo, setUserInfo }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(GlobalContext);
