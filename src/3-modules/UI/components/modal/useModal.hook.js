import { useEffect, useState } from 'react';

export const useModal = () => {
  const [isModal, setIsModal] = useState(false);

  const onBackdropClick = id => {
    if (id === 'backdrop') setIsModal(false);
  };

  const onEscKeydown = e => {
    if (e.code === 'Escape') {
      setIsModal(false);
    }
  };

  const toggleModal = () => {
    setIsModal(prev => !prev);
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscKeydown);

    return () => {
      window.removeEventListener('keydown', onEscKeydown);
    };
  }, []);

  return {
    isModal,
    toggleModal,
    onBackdropClick,
  };
};
