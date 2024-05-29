import { Button } from "./BattleButton.styled";

const BattleButton = ({ handleClick }) => {
  return <Button onClick={handleClick}>В бой!</Button>;
};

export default BattleButton;
