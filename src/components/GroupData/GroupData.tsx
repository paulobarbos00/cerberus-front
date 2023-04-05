/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useModalContext } from '@/contexts/ModalContext';
import useGetGroupById from '@/hooks/groups/useGetGroupById';
import useDeleteGroup from '@/hooks/groups/useDeleteGroup';
import ModalAlert from '../subcomponents/Modals/ModalAlert/ModalAlert';
import styles from './GroupData.module.css';
import EditGroupModal from '../subcomponents/Modals/EditModal/EditGroupModal';
import AddGroupLinkModal from '../subcomponents/Modals/AddGroupLinkModal/AddGroupLinkModal';
import { useGroupContext } from '@/contexts/GroupContext';
import GroupTopInfo from '../subcomponents/Group/GroupDataTop/GroupTopInfo/GroupTopInfo';
import GroupConfig from '../subcomponents/Group/GroupDataTop/GroupConfig/GroupConfig';

interface pageProps {
  pageId: string;
}

const GroupData: FC<pageProps> = ({ pageId }) => {
  const router = useRouter();

  const { getGroup, loading: getGroupLoading } = useGetGroupById(pageId);

  const { groupInfoContext } = useGroupContext();

  const { modalAlertActive, modalEditGroupActive, modalCreateGroupLinkActive } =
    useModalContext();
  const {
    deleteGroup,
    loading: deleteLoading,
    error,
    response
  } = useDeleteGroup(pageId);

  const deleteGroupClick = () => {
    deleteGroup();
  };

  if (response) {
    router.push('/home');
  }

  React.useEffect(() => {
    getGroup();
  }, []);

  if (getGroupLoading) return <p>Carregando...</p>;

  if (groupInfoContext) {
    const { data } = groupInfoContext;

    return (
      <section className={styles.groupContainer}>
        <div className={styles.groupTopInfo}>
          <GroupTopInfo data={data} />
          <GroupConfig />
        </div>

        {modalAlertActive && (
          <ModalAlert
            modalAlertConfirmClick={deleteGroupClick}
            loading={deleteLoading}
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
