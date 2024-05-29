import useBattle from "../../hooks/useBattle";

const useBattleButton = (handleClick) => {
  const { handleBattle } = useBattle();

  const handleButtonClick = () => {
    handleBattle();
    handleClick();
  };

  return { handleButtonClick };
};

export default useBattleButton;
