import React from 'react';

import closeIcon from '@/../public/assets/icons/close.svg';
import styles from '@/components/subcomponents/Modals/Modal.module.css';
import { useModalContext } from '@/contexts/ModalContext';
import Image from 'next/image';
import { useCreateGroupLink } from '@/hooks/links/useCreateGroupLink';

interface IPageProps {
  groupId: string;
}

export default function AddGroupLinkModal({ groupId }: IPageProps) {
  const { setModalCreateGroupLinkActive } = useModalContext();
  const { createGroupLink, loading } = useCreateGroupLink();

  const [inputUrl, setInputUrl] = React.useState<string>('');
  const [inputDescription, setInputDescription] = React.useState<string>('');
  const [inputName, setInputName] = React.useState<string>('');

  const handleCreateLinkClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = {
      title: inputName,
      url: inputUrl,
      description: inputDescription,
      shortURL: '',
      groupId
    };

    createGroupLink(body);
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      setModalCreateGroupLinkActive(false);
    }
  };

  return (
    <section className={styles.modalContainer} onClick={handleOutsideClick}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Criar Link</h2>
          <button
            className={styles.modalCloseButton}
            onClick={() => setModalCreateGroupLinkActive(false)}
          >
            <Image src={closeIcon} alt="Close" width={20} height={20} />
          </button>
        </div>

        <form className={styles.modalBody} onSubmit={handleCreateLinkClick}>
          <label className={styles.label}>
            <span className={styles.labelText}>Destino (URL) *:</span>
            <input
              onChange={({ target }) => setInputUrl(target.value)}
              className={styles.labelInput}
              type="url"
              placeholder="Exemplo: https://www.google.com"
              required
            />
          </label>

          <label className={styles.label}>
            <span className={styles.labelText}>Nome do Link: *</span>
            <input
              onChange={({ target }) => setInputName(target.value)}
              className={styles.labelInput}
              type="text"
              placeholder="Exemplo: The Last of Us"
              required
            />
          </label>

          <label className={styles.label}>
            <span className={styles.labelText}>Descrição do Link:</span>
            <input
              onChange={({ target }) => setInputDescription(target.value)}
              className={styles.labelInput}
              type="text"
              placeholder="Exemplo: Download de The Last of Us"
            />
          </label>

          <button
            type="submit"
            disabled={!!loading}
            className={styles.submitButton}
          >
            {loading ? 'Criando...' : 'Criar Link'}
          </button>
        </form>
      </div>
    </section>
  );
}
