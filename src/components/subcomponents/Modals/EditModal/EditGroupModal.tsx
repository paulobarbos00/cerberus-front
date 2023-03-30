import React from 'react';
import Image from 'next/image';
import styles from './EditModal.module.css';
import closeIcon from '@/../public/assets/icons/close.svg';
import { useEditGroup } from '@/hooks/groups/useEditGroup';
import { useModalContext } from '@/contexts/ModalContext';
import { IGetGroupByIdResponseData } from '@/hooks/useGetGroupById';

interface IPageProps {
  groupId: string;
  setGroupData: any;
}

export default function EditGroupModal({ groupId, setGroupData }: IPageProps) {
  const { setModalEditGroupActive } = useModalContext();
  const { editGroup, editGroupData } = useEditGroup();

  const [inputName, setInputName] = React.useState<string>('');
  const [inputDesc, setInputDesc] = React.useState<string>('');

  const handleEditClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const groupUpdateInfo = {
      groupId,
      name: inputName,
      description: inputDesc
    };

    editGroup(groupUpdateInfo);

    if (editGroupData) {
      setGroupData((data: IGetGroupByIdResponseData) => {
        const newData = { ...data };
        newData.data.name = inputName;
        newData.data.description = inputDesc;
        return newData;
      });
    }
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      setModalEditGroupActive(false);
    }
  };

  return (
    <section className={styles.modalContainer} onClick={handleOutsideClick}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Editar Grupo</h2>
          <button
            className={styles.modalCloseButton}
            onClick={() => setModalEditGroupActive(false)}
          >
            <Image src={closeIcon} alt="Close" width={20} height={20} />
          </button>
        </div>

        <form className={styles.modalBody} onSubmit={handleEditClick}>
          <label className={styles.label}>
            <span className={styles.labelText}>Alterar nome:</span>
            <input
              onChange={({ target }) => setInputName(target.value)}
              className={styles.labelInput}
              type="text"
              placeholder="Exemplo: Jogos"
              required
            />
          </label>

          <label className={styles.label}>
            <span className={styles.labelText}>Alterar descrição:</span>
            <input
              onChange={({ target }) => setInputDesc(target.value)}
              className={styles.labelInput}
              type="text"
              placeholder="Exemplo: Grupo de Jogos"
            />
          </label>

          <button type="submit" className={styles.submitButton}>
            Confirmar Mudanças
          </button>
        </form>
      </div>
    </section>
  );
}
