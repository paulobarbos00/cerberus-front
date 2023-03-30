import API from '@/services/axiosConfig';
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

export default function useGetGroupById(group_id: string) {
  const [groupData, setGroupData] =
    React.useState<IGetGroupByIdResponseData | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  function getGroup() {
    setLoading(true);
    setError(null);

    API.get(`/group/${group_id}`, {
      headers: {
        user_id: localStorage.getItem('userLoggedId')
      }
    })
      .then(({ data }) => {
        setGroupData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return { getGroup, groupData, loading, error, setGroupData };
}
