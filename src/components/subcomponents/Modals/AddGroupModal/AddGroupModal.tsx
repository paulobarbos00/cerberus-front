import React from 'react';
import styles from '@/components/subcomponents/Modals/Modal.module.css';
import Image from 'next/image';
import closeIcon from '@/../public/assets/icons/close.svg';
import { useSetModalAlert } from '@/hooks/useSetModalAlert';
import { useModalContext } from '@/contexts/ModalContext';
import ModalAlert from '../ModalAlert/ModalAlert';
import useCreateGroup from '@/hooks/groups/useCreateGroup';

export default function AddGroup() {
  const { setModalCreateGroupActive, modalAlertActive } = useModalContext();

  const [inputName, setInputName] = React.useState('');
  const [inputDesc, setInputDesc] = React.useState('');

  const outsideModal = React.useRef<HTMLElement>(null);

  const handleAddGroupSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addGroup();
  };

  const closeModal = () => {
    setModalCreateGroupActive(false);
  };

  const bodyRequest = {
    name: inputName,
    description: inputDesc,
    shortURL: ''
  };

  const { loading, addGroup } = useCreateGroup(bodyRequest);

  const { handleCloseButtonClick, outsideElementClick } = useSetModalAlert({
    modalInputsValues: [inputName, inputDesc],
    outSideElement: outsideModal,
    closeModal
  });

  return (
    <section
      className={styles.modalContainer}
      ref={outsideModal}
      onClick={outsideElementClick}
    >
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Adicionar Grupo</h2>
          <button
            className={styles.modalCloseButton}
            onClick={handleCloseButtonClick}
          >
            <Image src={closeIcon} alt="Close" width={18} height={18} />
          </button>
        </div>

        <form className={styles.modalBody} onSubmit={handleAddGroupSubmit}>
          <label className={styles.label}>
            <span className={styles.labelText}>Nome do grupo: *</span>
            <input
              onChange={({ target }) => setInputName(target.value)}
              className={styles.labelInput}
              type="text"
              placeholder="Exemplo: Jogos"
              required
            />
          </label>

          <label className={styles.label}>
            <span className={styles.labelText}>Descrição do grupo:</span>
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
            {loading ? 'Criando...' : 'Criar Grupo'}
          </button>
        </form>
      </div>

      {modalAlertActive && (
        <ModalAlert modalAlertConfirmClick={closeModal} type="change" />
      )}
    </section>
  );
}
