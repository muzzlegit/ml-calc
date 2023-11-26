import useBattleplaceStore from "../store/battleplaceStore";

const useBuilds = () => {
  const { addTower, deleteTower } = useBattleplaceStore(
    (state) => state.methods
  );

  const handleAddTower = (tower) => {
    addTower(tower);
  };
  const handleDeleteTower = (id) => {
    deleteTower(id);
  };

  const handleDeleteAllTowers = () => {
    deleteTower(undefined, true);
  };

  return { handleAddTower, handleDeleteTower, handleDeleteAllTowers };
};

export default useBuilds;
