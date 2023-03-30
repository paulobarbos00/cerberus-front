import { useModalContext } from '@/contexts/ModalContext';
import { useGlobalContext } from '@/contexts/GlobalContext';
import API from '@/services/axiosConfig';
import React from 'react';

interface ICreateGroupLinkParams {
  title: string;
  url: string;
  description: string;
  shortURL: string;
  groupId: string;
}

export const useCreateGroupLink = () => {
  const [createGroupLinkData, setCreateGroupLinkData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const { setAlert } = useGlobalContext();
  const { setModalCreateGroupLinkActive } = useModalContext();

  const userId = localStorage.getItem('userLoggedId');

  const createGroupLink = (data: ICreateGroupLinkParams) => {
    setLoading(true);

    API.post('/link', data, {
      headers: {
        user_id: userId
      }
    })
      .then((response) => {
        setCreateGroupLinkData(response.data);

        setAlert({
          type: 'success',
          title: 'Link criado com sucesso!'
        });
      })
      .catch(() => {
        setAlert({
          type: 'warning',
          title: 'Erro!',
          subtitle: 'Não foi possível criar o Link, tente novamente mais tarde.'
        });
      })
      .finally(() => {
        setLoading(false);
        setModalCreateGroupLinkActive(false);
      });
  };

  return {
    createGroupLink,
    loading,
    createGroupLinkData,
    setCreateGroupLinkData
  };
};
