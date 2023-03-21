import React from 'react';
import useCreateLinkGroup from '@/hooks/useCreateLinkGroup';
import styles from '../AddModal.module.css';
import { useModalContext } from '@/contexts/ModalContext';

export default function AddGroup() {
  const [inputName, setInputName] = React.useState('');
  const [inputDesc, setInputDesc] = React.useState('');

  const { setInputHasText } = useModalContext();

  React.useEffect(() => {
    if (inputName || inputDesc) {
      setInputHasText(true);
    } else {
      setInputHasText(false);
    }
  }, [inputName, inputDesc, setInputHasText]);

  const bodyRequest = {
    name: inputName,
    description: inputDesc,
    shortURL: ''
  };

  const { loading, addGroup } = useCreateLinkGroup(bodyRequest);

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    addGroup();
  };

  return (
    <form className={styles.modalContent} onSubmit={handleSubmitForm}>
      <label className={styles.modalLabel}>
        <span className={styles.modalLabelText}>Nome do grupo *</span>
        <input
          type="text"
          placeholder="Ex: Programação"
          className={styles.modalInput}
          onChange={(e) => setInputName(e.target.value)}
          required
        />
      </label>

      <label className={styles.modalLabel}>
        <span className={styles.modalLabelText}>Descrição do grupo</span>
        <input
          type="text"
          placeholder="Ex: Meus links de programação"
          className={styles.modalInput}
          onChange={(e) => setInputDesc(e.target.value)}
        />
      </label>

      <button className={styles.addButton} type="submit" disabled={loading}>
        {loading ? 'Carregando...' : 'Adicionar Grupo'}
      </button>
    </form>
  );
}
