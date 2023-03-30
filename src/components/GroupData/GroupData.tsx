/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useModalContext } from '@/contexts/ModalContext';
import useGetGroupById, {
  IGetGroupByIdResponseData
} from '@/hooks/useGetGroupById';
import useDeleteGroup from '@/hooks/useDeleteGroup';
import ModalAlert from '../subcomponents/Modals/ModalAlert/ModalAlert';
import DeleteIconRed from '@/../public/assets/icons/delete-red.svg';
import editIcon from '@/../public/assets/icons/edit.svg';
import styles from './GroupData.module.css';
import EditGroupModal from '../subcomponents/Modals/EditModal/EditGroupModal';

interface pageProps {
  pageId: string;
}

const GroupData: FC<pageProps> = ({ pageId }) => {
  const router = useRouter();

  const { getGroup, groupData, setGroupData } = useGetGroupById(pageId);

  const {
    modalAlertActive,
    setModalAlertActive,
    modalEditGroupActive,
    setModalEditGroupActive
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

  if (groupData) {
    const { data } = groupData;

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
          />
        )}

        {modalEditGroupActive && (
          <EditGroupModal groupId={pageId} setGroupData={setGroupData} />
        )}
      </section>
    );
  }

  return null;
};

export default GroupData;
