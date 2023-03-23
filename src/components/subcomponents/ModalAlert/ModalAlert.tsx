import styles from './ModalAlert.module.css';
import cancelIcon from '@/../public/assets/icons/close.svg';
import Image from 'next/image';
import { useModalContext } from '@/contexts/ModalContext';

interface modalProps {
  modalAlertConfirmClick: () => void;
  title?: string;
  subtitle?: string;
  confirmText?: string;
  error?: string | null;
  loading?: boolean;
}

export default function ModalAlert({
  modalAlertConfirmClick,
  title,
  subtitle,
  confirmText,
  loading
}: modalProps) {
  const { setModalAlertActive } = useModalContext();

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
          <h3 className={styles.modalTitle}>
            {title || 'Você tem certeza disso?'}
          </h3>
          <button className={styles.cancelButton} onClick={cancelAction}>
            <Image
              src={cancelIcon}
              width={18}
              height={18}
              alt="Ícone em formato de X"
            />
          </button>
        </div>

        <p className={styles.subtitle}>
          {subtitle ||
            'Todos os dados serão perdidos e não poderão ser recuperados.'}
        </p>

        <div className={styles.modalButtons}>
          <button className={styles.modalButton} onClick={cancelAction}>
            Cancelar
          </button>
          <button
            className={`${styles.modalButton} ${styles.confirmButton}`}
            onClick={confirmAction}
          >
            {loading ? 'Carregando...' : confirmText || 'Sim, tenho certeza'}
          </button>
        </div>
      </div>
    </section>
  );
}
