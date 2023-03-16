import { useGlobalContext } from '@/contexts/GlobalContext';
import API from '@/services/axiosConfig';
import React from 'react';

export interface ICreateLinkGroupProps {
  name: string;
  description: string;
}

export interface ICreateGroupResponseData {
  data: {
    createdAt: number;
    description: string;
    id: string;
    is_public: boolean;
    is_valid: boolean;
    name: string;
    shortURL: string;
    userId: string;
  };
}

export default function useCreateLinkGroup(params: ICreateLinkGroupProps) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [data, setData] = React.useState<ICreateGroupResponseData | null>(null);

  let localStorageData: string | null = null;

  if (typeof window !== 'undefined') {
    localStorageData = localStorage.getItem('userLoggedId');
  }

  const { setModalActive } = useGlobalContext();

  const addGroup = () => {
    if (!localStorageData) {
      setError('Usuário não logado');
    } else {
      const postBody = {
        name: params.name,
        description: params.description,
        shortURL: 'shortURL'
      };

      setLoading(true);
      setError(null);

      API.post('/group', postBody)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          throw new Error(err);
        })
        .finally(() => {
          setLoading(false);
          setModalActive(false);
        });
    }
  };

  return { loading, error, data, addGroup };
}
