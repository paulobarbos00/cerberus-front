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
}

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const GlobalContext = React.createContext({} as GlobalContextProvider);

export const GlobalContextProvider = ({
  children
}: GlobalContextProviderProps) => {
  const [userInfo, setUserInfo] = React.useState<SetUserInfoProps | null>(null);

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

  return (
    <GlobalContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(GlobalContext);
