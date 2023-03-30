import { useModalContext } from '@/contexts/ModalContext';
import { useGlobalContext } from '@/contexts/GlobalContext';
import API from '@/services/axiosConfig';
import React from 'react';
import { useGroupContext } from '@/contexts/GroupContext';

interface IEditGroupParams {
  groupId: string;
  name: string;
  description: string;
}

export const useEditGroup = () => {
  const [editGroupData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const { setAlert } = useGlobalContext();
  const { setModalEditGroupActive } = useModalContext();
  const { setGroupInfoContext } = useGroupContext();
  const userId = localStorage.getItem('userLoggedId');

  const editGroup = ({ groupId, name, description }: IEditGroupParams) => {
    const body = { name, description };

    setLoading(true);

    API.put(`/group/${groupId}`, body, {
      headers: {
        user_id: userId
      }
    })
      .then((response) => {
        setGroupInfoContext(response.data);

        setAlert({
          type: 'success',
          title: 'Grupo atualizado com sucesso!'
        });
      })
      .catch(() => {
        setAlert({
          type: 'warning',
          title: 'Erro!',
          subtitle:
            'Não foi possível editar o grupo, tente novamente mais tarde.'
        });
      })
      .finally(() => {
        setLoading(false);
        setModalEditGroupActive(false);
      });
  };

  return { editGroup, loading, editGroupData };
};
