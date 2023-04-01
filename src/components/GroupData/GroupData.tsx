/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useModalContext } from '@/contexts/ModalContext';
import useGetGroupById from '@/hooks/groups/useGetGroupById';
import useDeleteGroup from '@/hooks/groups/useDeleteGroup';
import ModalAlert from '../subcomponents/Modals/ModalAlert/ModalAlert';
import DeleteIconRed from '@/../public/assets/icons/delete-red.svg';
import editIcon from '@/../public/assets/icons/edit.svg';
import styles from './GroupData.module.css';
import EditGroupModal from '../subcomponents/Modals/EditModal/EditGroupModal';
import AddGroupLinkModal from '../subcomponents/Modals/AddGroupLinkModal/AddGroupLinkModal';
import { useGroupContext } from '@/contexts/GroupContext';

interface pageProps {
  pageId: string;
}

const GroupData: FC<pageProps> = ({ pageId }) => {
  const router = useRouter();

  const { getGroup } = useGetGroupById(pageId);

  const { groupInfoContext } = useGroupContext();

  const {
    modalAlertActive,
    setModalAlertActive,
    modalEditGroupActive,
    setModalEditGroupActive,
    modalCreateGroupLinkActive,
    setModalCreateGroupLinkActive
  } = useModalContext();
  const { deleteGroup, loading, error, response } = useDeleteGroup(pageId);

  const deleteGroupClick = () => {
    deleteGroup();
  };

  if (response) {
    router.push('/home');
  }

  React.useEffect(() => {
    getGroup();
  }, []);

  if (groupInfoContext) {
    const { data } = groupInfoContext;

    return (
      <section className={styles.groupContainer}>
        <div className={styles.groupTopInfo}>
          <div className={styles.groupInfo}>
            <h2 className={styles.groupTitle}>{data.name}</h2>
            <p className={styles.groupDescription}>{data.description}</p>
          </div>

          <div className={styles.groupConfig}>
            <button
              className={styles.groupConfigButton}
              title="Adicionar Link"
              onClick={() => {
                setModalCreateGroupLinkActive(true);
              }}
            >
              Criar Link
            </button>

            <button
              className={styles.groupConfigButton}
              title="Editar Grupo"
              onClick={() => {
                setModalEditGroupActive(true);
              }}
            >
              <Image
                src={editIcon}
                width={20}
                height={20}
                alt="Ícone de Lápis"
              />
            </button>

            <button
              className={`${styles.groupConfigButton} ${styles.groupConfigButtonRed}`}
              title="Excluir Grupo"
              onClick={() => {
                setModalAlertActive(true);
              }}
            >
              <Image
                src={DeleteIconRed}
                width={22}
                height={22}
                alt="Ícone de Lixeira"
              />
            </button>
          </div>
        </div>

        {modalAlertActive && (
          <ModalAlert
            modalAlertConfirmClick={deleteGroupClick}
            loading={loading}
            error={error}
            type="confirm"
          />
        )}

        {modalEditGroupActive && <EditGroupModal groupId={pageId} />}

        {modalCreateGroupLinkActive && <AddGroupLinkModal groupId={pageId} />}
      </section>
    );
  }

  return null;
};

export default GroupData;
