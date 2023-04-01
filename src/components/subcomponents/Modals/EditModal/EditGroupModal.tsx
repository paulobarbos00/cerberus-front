import React from 'react';
import Image from 'next/image';
import { useModalContext } from '@/contexts/ModalContext';
import { useSetModalAlert } from '@/hooks/useSetModalAlert';
import { useEditGroup } from '@/hooks/groups/useEditGroup';
import ModalAlert from '../ModalAlert/ModalAlert';
import closeIcon from '@/../public/assets/icons/close.svg';
import styles from '@/components/subcomponents/Modals/Modal.module.css';

interface IPageProps {
  groupId: string;
}

export default function EditGroupModal({ groupId }: IPageProps) {
  const { setModalEditGroupActive, modalAlertActive } = useModalContext();
  const { editGroup, loading } = useEditGroup();

  const [inputName, setInputName] = React.useState<string>('');
  const [inputDesc, setInputDesc] = React.useState<string>('');

  const outSideModal = React.useRef<HTMLElement>(null);
  const inputNameRef = React.useRef<HTMLInputElement>(null);

  const handleEditClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const groupUpdateInfo = {
      groupId,
      name: inputName,
      description: inputDesc
    };

    editGroup(groupUpdateInfo);
  };

  const closeModal = () => {
    setModalEditGroupActive(false);
  };

  const { handleCloseButtonClick, outsideElementClick } = useSetModalAlert({
    modalInputsValues: [inputName, inputDesc],
    outSideElement: outSideModal,
    closeModal
  });

  React.useEffect(() => {
    if (!inputName && !inputDesc) {
      inputNameRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className={styles.modalContainer}
      ref={outSideModal}
      onClick={outsideElementClick}
    >
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Editar Grupo</h2>
          <button
            className={styles.modalCloseButton}
            onClick={handleCloseButtonClick}
          >
            <Image src={closeIcon} alt="Close" width={18} height={18} />
          </button>
        </div>

        <form className={styles.modalBody} onSubmit={handleEditClick}>
          <label className={styles.label}>
            <span className={styles.labelText}>Alterar nome:</span>
            <input
              onChange={({ target }) => setInputName(target.value)}
              className={styles.labelInput}
              ref={inputNameRef}
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

          <button
            type="submit"
            disabled={loading}
            className={styles.submitButton}
          >
            {loading ? 'Confirmando...' : 'Confirmar Mudanças'}
          </button>
        </form>
      </div>

      {modalAlertActive && (
        <ModalAlert modalAlertConfirmClick={closeModal} type="change" />
      )}
    </section>
  );
}
