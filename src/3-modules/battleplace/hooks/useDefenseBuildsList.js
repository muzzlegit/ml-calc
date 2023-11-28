import useBattleplaceStore from "../store/battleplaceStore";
import useBuilds from "./useBuilds";

const useDefenseBuildingsList = () => {
  const towers = useBattleplaceStore((state) => state.towers);
  const fortifications = useBattleplaceStore((state) => state.fortifications);
  const gate = useBattleplaceStore((state) => state.gate);
  const battleplace = useBattleplaceStore((state) => state.battleplace);

  const { handleDeleteBuild } = useBuilds();

  if (battleplace !== "castle" && gate) handleDeleteBuild("gate");

  return {
    towers,
    fortifications,
    gate,
  };
};

export default useDefenseBuildingsList;
