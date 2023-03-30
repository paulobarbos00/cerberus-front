import { useGlobalContext } from '@/contexts/GlobalContext';
import { useModalContext } from '@/contexts/ModalContext';
import React from 'react';
import API from '@/services/axiosConfig';

export default function useDeleteGroup(id_group: string) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [response, setResponse] = React.useState(null);
  const { setModalAlertActive } = useModalContext();
  const { setAlert } = useGlobalContext();

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

      API.delete(`/group/${id_group}`, {
        headers: {
          user_id: localStorage.getItem('userLoggedId')
        }
      })
        .then((response) => {
          setResponse(response.data);
          setAlert({
            type: 'success',
            title: 'Grupo excluído com sucesso'
          });
        })
        .catch(() => {
          setAlert({
            type: 'warning',
            title: 'Ops! Algo deu errado.',
            subtitle:
              'O grupo rebelou-se e não quer ser excluído. Tente novamente.'
          });
        })
        .finally(() => {
          setLoading(false);
          setModalAlertActive(false);
        });
    }
  };

  return { loading, error, response, deleteGroup };
}
