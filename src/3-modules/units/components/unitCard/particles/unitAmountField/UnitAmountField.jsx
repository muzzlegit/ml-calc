import PropTypes from "prop-types";
//
import { AmountField } from "./UnitAmountField.styled";

const UnitAmountField = ({ amount, handleUnitAmount }) => {
  return (
    <AmountField
      type="text"
      placeholder="0"
      value={amount}
      onChange={(e) => {
        handleUnitAmount(e.currentTarget.value);
      }}
    />
  );
};

export default UnitAmountField;

UnitAmountField.propTypes = {
  amount: PropTypes.number.isRequired,
  handleUnitAmount: PropTypes.func.isRequired,
};
