import PropTypes from "prop-types";
import { Btn } from "./Button.styled";

const Button = ({
  isActive = true,
  children,
  handleClick,
  addStyles,
  ...rest
}) => {
  return (
    <Btn
      isActive={isActive}
      onClick={handleClick}
      addStyles={addStyles}
      {...rest}
    >
      {children}
    </Btn>
  );
};

export default Button;

Button.propTypes = {
  isActive: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string,
  addStyles: PropTypes.object,
};
