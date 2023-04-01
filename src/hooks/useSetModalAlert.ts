import { useModalContext } from '@/contexts/ModalContext';
import { RefObject } from 'react';

export interface IModalAlertProps {
  modalInputsValues: string[];
  outSideElement?: RefObject<HTMLElement>;
  closeModal: () => void;
}

export const useSetModalAlert = (data: IModalAlertProps) => {
  const { setModalAlertActive } = useModalContext();
  const { modalInputsValues, outSideElement, closeModal } = data;

  const getInputsValues = modalInputsValues.filter((input) => input !== '');
  const inputsHasValues = Boolean(getInputsValues.length);

  const handleCloseButtonClick = () => {
    if (inputsHasValues) {
      setModalAlertActive(true);
    } else {
      closeModal();
    }
  };

  const outsideElementClick = (event: React.MouseEvent<HTMLElement>) => {
    const isOutsideClicked = event.target === outSideElement?.current;

    if (isOutsideClicked && inputsHasValues) {
      setModalAlertActive(true);
    } else if (isOutsideClicked && !inputsHasValues) {
      closeModal();
    }
  };

  return { handleCloseButtonClick, outsideElementClick };
};
