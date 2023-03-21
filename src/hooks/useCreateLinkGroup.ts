import React from 'react';
import { useGlobalContext } from '@/contexts/GlobalContext';
import API from '@/services/axiosConfig';

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

export interface ICreateLinkGroupProps {
  name: string;
  description: string;
  shortURL: string;
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
        shortURL: params.shortURL
      };

      setLoading(true);
      setError(null);

      API.post('/group', postBody)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          console.log(err);
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
