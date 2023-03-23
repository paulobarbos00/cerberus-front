import React from 'react';
import API from '@/services/axiosConfig';

export default function useDeleteGroup(id_group: string) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [response, setResponse] = React.useState(null);

  let localStorageData: string | null = null;

  if (typeof window !== 'undefined') {
    localStorageData = localStorage.getItem('userLoggedId');
  }

  const deleteGroup = () => {
    if (!localStorageData) {
      setError('Usuário não logado');
    } else {
      setLoading(true);
      setError(null);

      API.delete(`/group/${id_group}`)
        .then((response) => {
          setResponse(response.data);
        })
        .catch((err) => {
          console.log(err);
          throw new Error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return { loading, error, response, deleteGroup };
}
