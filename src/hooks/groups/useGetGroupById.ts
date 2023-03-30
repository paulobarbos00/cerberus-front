import { useGroupContext } from './../../contexts/GroupContext';
import API from '@/services/axiosConfig';
import React from 'react';

export default function useGetGroupById(group_id: string) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const { setGroupInfoContext } = useGroupContext();

  function getGroup() {
    setLoading(true);
    setError(null);

    API.get(`/group/${group_id}`, {
      headers: {
        user_id: localStorage.getItem('userLoggedId')
      }
    })
      .then(({ data }) => {
        setGroupInfoContext(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return { getGroup, loading, error };
}
