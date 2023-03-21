'use client';

import React from 'react';

interface ModalContextProvider {
  inputHasText: boolean;
  setInputHasText: React.Dispatch<React.SetStateAction<boolean>>;
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ModalContextProviderProps {
  children: React.ReactNode;
}

const ModalContext = React.createContext({} as ModalContextProvider);

export const ModalContextProvider = ({
  children
}: ModalContextProviderProps) => {
  const [inputHasText, setInputHasText] = React.useState<boolean>(false);
  const [modalActive, setModalActive] = React.useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{ inputHasText, setInputHasText, modalActive, setModalActive }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => React.useContext(ModalContext);
