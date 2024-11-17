import { useCallback, useEffect, useState } from "react";

const body = document.querySelector("body");

export const useModal = () => {
  const [isModal, setIsModal] = useState(false);

  const onBackdropClick = (id) => {
    if (id === "backdrop") setIsModal(false);
  };

  const onEscKeydown = useCallback((e) => {
    if (e.code === "Escape") {
      setIsModal(false);
      body.style.overflow = "auto";
    }
  }, []);

  const toggleModal = () => {
    setIsModal((prev) => !prev);
    body.style.overflow = isModal ? "auto" : "hidden";
  };

  useEffect(() => {
    window.addEventListener("keydown", onEscKeydown);

    return () => {
      window.removeEventListener("keydown", onEscKeydown);
    };
  }, [onEscKeydown]);

  return {
    isModal,
    toggleModal,
    onBackdropClick,
  };
};
