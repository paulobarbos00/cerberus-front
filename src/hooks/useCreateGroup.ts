import React from 'react';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useModalContext } from '@/contexts/ModalContext';
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

export default function useCreateGroup(params: ICreateLinkGroupProps) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [data, setData] = React.useState<ICreateGroupResponseData | null>(null);
  const { setAlert } = useGlobalContext();

  let localStorageData: string | null = null;

  if (typeof window !== 'undefined') {
    localStorageData = localStorage.getItem('userLoggedId');
  }

  const { setModalActive } = useModalContext();

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
          setAlert({
            type: 'success',
            title: 'Grupo criado com sucesso!',
            subtitle: 'Agora você pode adicionar links a ele.'
          });
        })
        .catch(() => {
          setAlert({
            type: 'warning',
            title: 'Erro ao criar grupo',
            subtitle:
              'Ops! Um erro inesperado aconteceu. Tente novamente mais tarde.'
          });
        })
        .finally(() => {
          setLoading(false);
          setModalActive(false);
        });
    }
  };

  return { loading, error, data, addGroup };
}
