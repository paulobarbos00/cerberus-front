import { useGlobalContext } from '@/contexts/GlobalContext';
import API from '@/services/axiosConfig';
import React from 'react';

export default function useCreateLinkGroup(params: any) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [data, setData] = React.useState<any>(null);

  const localStorageData = localStorage.getItem('userLoggedId');
  const { setModalActive } = useGlobalContext();

  const addGroup = () => {
    if (!localStorageData) {
      setError('Usuário não logado');
    } else {
      const postBody = {
        name: params.name,
        description: params.description,
        shortURL: 'a'
      };

      setLoading(true);

      API.post('/group', postBody)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
          setModalActive(false);
        });
    }
  };

  return { loading, error, data, addGroup };
}
