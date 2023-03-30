'use client';

import React from 'react';

export interface IGroupData {
  createdAt: number;
  description: string;
  id: string;
  is_public: boolean;
  is_valid: boolean;
  name: string;
  shortURL: string;
  userId: string;
}

export interface IGetGroupByIdResponseData {
  data: IGroupData;
}

interface GroupContextProvider {
  groupInfoContext: IGetGroupByIdResponseData | null;
  setGroupInfoContext: React.Dispatch<
    React.SetStateAction<IGetGroupByIdResponseData | null>
  >;
}

interface GroupContextProviderProps {
  children: React.ReactNode;
}

const GroupContext = React.createContext({} as GroupContextProvider);

export const GroupContextProvider = ({
  children
}: GroupContextProviderProps) => {
  const [groupInfoContext, setGroupInfoContext] =
    React.useState<IGetGroupByIdResponseData | null>(null);

  return (
    <GroupContext.Provider
      value={{
        groupInfoContext,
        setGroupInfoContext
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroupContext = () => React.useContext(GroupContext);
