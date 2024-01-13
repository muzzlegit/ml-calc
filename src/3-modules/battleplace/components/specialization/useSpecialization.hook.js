import {
  getBattleplacePicture,
  getSpeciaalizationDescription,
} from "modules/battleplace/utils/battleplace.helpers";
import { useState } from "react";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";

const specializationData = {
  id: "J5_2J4Wf0869CtVM",
  title: "Специализация Защитник",
  type: "specialization",
  player: null,
  level: 0,
  valueIndex: 0,
  buffs: [
    {
      target: "player",
      appliedOn: "all",
      targetType: "tower",
      units: null,
      property: "damageRate",
      description: [
        "Увеличивает атаку обычных башен на +50%",
        "Увеличивает атаку обычных башен на +75%",
        "Увеличивает атаку обычных башен на +100%",
      ],
      value: [0.5, 0.75, 1],
      battle: true,
    },
    {
      target: "player",
      appliedOn: "all",
      targetType: "fortification",
      units: null,
      property: "attack",
      description: [
        "Увеличивает потери противника от укреплений на 10 войск",
        "Увеличивает потери противника от укреплений на 20 войск",
        "Увеличивает потери противника от укреплений на 30 войск",
      ],
      value: [10, 20, 30],
      battle: true,
    },
    {
      target: "player",
      appliedOn: "all",
      targetType: "fortification",
      units: null,
      property: "defense",
      description: [
        "Увеличивает защиту гарнизона от укреплений на 1",
        "Увеличивает защиту гарнизона от укреплений на 2",
        "Увеличивает защиту гарнизона от укреплений на 3",
      ],
      value: [1, 2, 3],
      battle: true,
    },
  ],
};

const useSpecialization = () => {
  const [specialization, setSpecialization] = useState({
    ...specializationData,
    buffs: specializationData.buffs.map((buff, index) => ({
      ...buff,
      id: specializationData.id + `_${index}`,
      owner: specializationData.id,
      ownerDescription: specializationData.title,
      player: "mainDefender",
    })),
  });
  const { buffsProvider } = useBuffsProvider();
  const description = specialization?.level
    ? getSpeciaalizationDescription(
        specialization?.buffs,
        specialization?.valueIndex
      )
    : specialization.title;

  const graphics = {
    specializationImage: getBattleplacePicture("specialization"),
  };

  const handleSpecializationLevel = () => {
    const { level, buffs } = specialization;
    buffsProvider(buffs, "delete");
    const nextLevel = level === 3 ? 0 : level + 1;
    const nextIndex = nextLevel ? nextLevel - 1 : 0;
    const updatedSpecialization = {
      ...specialization,
      level: nextLevel,
      valueIndex: nextIndex,
      buffs: specialization.buffs.map((buff) => ({
        ...buff,
        level: nextLevel,
        valueIndex: nextIndex,
      })),
    };
    setSpecialization(updatedSpecialization);
    if (nextLevel) buffsProvider(updatedSpecialization?.buffs, "add");
  };

  return {
    description,
    level: specialization?.level,
    handleSpecializationLevel,
    graphics,
  };
};

export default useSpecialization;
