import { nanoid } from "nanoid";
import { useCallback, useEffect } from "react";
import useBattleplaceStore from "../store/battleplaceStore";
import { getBuildData } from "../utils/battleplace.helpers";

const useBuilds = () => {
  const { addTower, deleteTower, setGate, deleteGate } = useBattleplaceStore(
    (state) => state.methods
  );
  const attackIndex = useBattleplaceStore((state) => state.attackIndex);
  const battleplace = useBattleplaceStore((state) => state.battleplace);
  const towers = useBattleplaceStore((state) => state.towers);
  const fortifications = useBattleplaceStore((state) => state.fortifications);
  const gate = useBattleplaceStore((state) => state.gate);

  const isCastle = battleplace === "castle";

  const handleAddBuild = (build, buildLevel, isCastle) => {
    const buildData = getBuildData(build, buildLevel, isCastle);

    if (build === "tower") {
      const { level, attackMax, attackMin, damageRate } = buildData;
      const normalizedTower = {
        id: nanoid(),
        type: "tower",
        level,
        attack: attackIndex === "max" ? attackMax : attackMin,
        damageRate,
      };
      addTower(normalizedTower);
    }
    if (build === "magicTower")
      addTower({ id: nanoid(), type: "magicTower", ...buildData });

    if (build === "gate") {
      setGate({ id: nanoid(), type: "gate", ...buildData });
    }
  };
  const handleDeleteBuild = useCallback(
    (build, id) => {
      if (build === "tower" || build === "magicTower") deleteTower(id);
      if (build === "gate") deleteGate();
    },
    [deleteGate, deleteTower]
  );

  const handleDeleteAllBuilds = () => {
    deleteTower(undefined, true);
    deleteGate();
  };

  useEffect(() => {
    if (battleplace !== "castle" && gate) handleDeleteBuild("gate");
  }, [battleplace, gate, handleDeleteBuild]);

  useEffect(() => {
    towers.forEach((tower) => {
      const buildData = getBuildData(tower.type, tower.level, isCastle);
      if (tower.type === "tower") {
        const { level, attackMax, attackMin, damageRate } = buildData;
        const normalizedTower = {
          id: nanoid(),
          type: "tower",
          level,
          attack: attackIndex === "max" ? attackMax : attackMin,
          damageRate,
        };
        addTower(normalizedTower);
      }
      if (build === "magicTower")
        addTower({ id: nanoid(), type: "magicTower", ...buildData });
    });
  }, [addTower, attackIndex, battleplace, isCastle, towers]);

  return { handleAddBuild, handleDeleteBuild, handleDeleteAllBuilds };
};

export default useBuilds;
