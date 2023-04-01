'use client';

import React from 'react';

interface ModalContextProvider {
  modalAlertActive: boolean;
  setModalAlertActive: React.Dispatch<React.SetStateAction<boolean>>;
  modalCreateGroupActive: boolean;
  setModalCreateGroupActive: React.Dispatch<React.SetStateAction<boolean>>;
  modalEditGroupActive: boolean;
  setModalEditGroupActive: React.Dispatch<React.SetStateAction<boolean>>;
  modalCreateGroupLinkActive: boolean;
  setModalCreateGroupLinkActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ModalContextProviderProps {
  children: React.ReactNode;
}

const ModalContext = React.createContext({} as ModalContextProvider);

export const ModalContextProvider = ({
  children
}: ModalContextProviderProps) => {
  const [modalAlertActive, setModalAlertActive] =
    React.useState<boolean>(false);
  const [modalEditGroupActive, setModalEditGroupActive] =
    React.useState<boolean>(false);
  const [modalCreateGroupLinkActive, setModalCreateGroupLinkActive] =
    React.useState<boolean>(false);
  const [modalCreateGroupActive, setModalCreateGroupActive] =
    React.useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        modalAlertActive,
        setModalAlertActive,
        modalCreateGroupActive,
        setModalCreateGroupActive,
        modalEditGroupActive,
        setModalEditGroupActive,
        modalCreateGroupLinkActive,
        setModalCreateGroupLinkActive
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => React.useContext(ModalContext);
