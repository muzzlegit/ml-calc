import PropTypes from "prop-types";
import { createPortal } from "react-dom";

import { Backdrop } from "./modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, onBackdropClick }) => {
  return createPortal(
    <Backdrop
      id="backdrop"
      onClick={(e) => {
        onBackdropClick(e.target.id);
      }}
    >
      {children}
    </Backdrop>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.element,
  onBackdropClick: PropTypes.func.isRequired,
};
