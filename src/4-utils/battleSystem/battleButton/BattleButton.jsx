import useBattle from "../hooks/useBattle";

const BattleButton = () => {
  const { handleBattle } = useBattle();
  return <button onClick={handleBattle}>Пиу-пиу</button>;
};

export default BattleButton;
