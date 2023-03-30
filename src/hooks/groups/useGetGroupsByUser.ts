import API from '@/services/axiosConfig';
import React from 'react';

export default function useCreateGroup() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [groupsData, setGroupsData] = React.useState(null);

  let localStorageData: string | null = null;

  if (typeof window !== 'undefined') {
    localStorageData = localStorage.getItem('userLoggedId');
  }

  const getGroups = () => {
    if (!localStorageData) {
      console.log('Usuário não logado');
    } else {
      setLoading(true);
      setError(null);

      API.get('/groups/user', {
        headers: {
          user_id: localStorage.getItem('userLoggedId')
        }
      })
        .then((response) => {
          setGroupsData(response.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return { loading, error, groupsData, getGroups };
}
