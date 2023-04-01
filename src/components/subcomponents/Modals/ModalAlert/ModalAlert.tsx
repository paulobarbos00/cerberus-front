import styles from './ModalAlert.module.css';
import cancelIcon from '@/../public/assets/icons/close.svg';
import Image from 'next/image';
import { useModalContext } from '@/contexts/ModalContext';

interface modalProps {
  modalAlertConfirmClick: () => void;
  type: 'confirm' | 'change';
  error?: string | null;
  loading?: boolean;
}

export default function ModalAlert({
  modalAlertConfirmClick,
  type,
  loading
}: modalProps) {
  const { setModalAlertActive } = useModalContext();

  const confirmTitle = type === 'confirm' && 'Você tem certeza disso?';
  const confirmSubtitle =
    type === 'confirm' &&
    'Todos os dados serão perdidos e não poderão ser recuperados.';

  const changeTitle = type === 'change' && 'Descartar alterações?';
  const changeSubtitle =
    type === 'change' &&
    'Você tem alterações não salvas, tem certeza que deseja cancelar a criação de grupo?';

  const confirmAction = () => {
    modalAlertConfirmClick();
    setModalAlertActive(false);
  };

  const cancelAction = () => {
    setModalAlertActive(false);
  };

  return (
    <section className={styles.modalContainer}>
      <div className={styles.modalCard}>
        <div className={styles.modalTop}>
          <h3 className={styles.modalTitle}>{confirmTitle || changeTitle}</h3>
          <button className={styles.cancelButton} onClick={cancelAction}>
            <Image
              src={cancelIcon}
              width={18}
              height={18}
              alt="Ícone em formato de X"
            />
          </button>
        </div>

        <p className={styles.subtitle}>{confirmSubtitle || changeSubtitle}</p>

        <div className={styles.modalButtons}>
          <button className={styles.modalButton} onClick={cancelAction}>
            Cancelar
          </button>
          <button
            className={`${styles.modalButton} ${styles.confirmButton}`}
            onClick={confirmAction}
          >
            {loading ? 'Carregando...' : 'Sim, tenho certeza'}
          </button>
        </div>
      </div>
    </section>
  );
}
