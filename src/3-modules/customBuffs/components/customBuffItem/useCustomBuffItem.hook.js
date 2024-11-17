import useCustomBuffsStore from "modules/customBuffs/store/customBuffsStore";
import {
  getBuffUnits,
  getBuffWithFormattedValue,
  getCorrectPropertyUnit,
  getCorrectPropertyUnitFlag,
  getCorrectUnitProperty,
} from "modules/customBuffs/utils/customBuffs.helpers";
import { useEffect, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";

const useCustomBuffItem = (buff) => {
  const player = usePlayerContext();
  const [currentBuff, setCurrentBuff] = useState(buff);
  const { setBuff, deleteBuff } = useCustomBuffsStore((state) => state.methods);
  const { buffsProvider } = useBuffsProvider();

  const handleBuff = (value, key) => {
    const isUnit = value !== "tower" && value !== "magicTower";
    if (key === "value") {
      if (!isNaN(Number(value)) || value.indexOf("-") >= 0) {
        const isMinus =
          value.indexOf("-") < 0 && currentBuff.property !== "amountRate"
            ? false
            : true;
        const formattedValue = isMinus ? value.replace(/-/g, "") : value;
        setCurrentBuff((prev) => {
          const newBuff = {
            ...prev,
            isMinus,
            value: [
              prev.isMinus || isMinus
                ? -Number(formattedValue)
                : Number(formattedValue),
            ],
          };
          return newBuff;
        });
      }
    }
    if (key === "targetType") {
      buffsProvider([currentBuff], "delete");
      const newBuff = {
        ...currentBuff,
        [key]: isUnit ? "unit" : value,
        units: isUnit ? getBuffUnits(value) : null,
        unitFlag: value,
        property: getCorrectUnitProperty(value, currentBuff.property),
      };
      setCurrentBuff(newBuff);
      buffsProvider([getBuffWithFormattedValue(newBuff)], "add");
    }
    if (key === "property") {
      buffsProvider([currentBuff], "delete");
      const newBuff = {
        ...currentBuff,
        targetType: value === "damageRate" ? "tower" : "unit",
        units:
          value === "damageRate"
            ? null
            : getCorrectPropertyUnit(value, currentBuff.unitFlag),
        unitFlag:
          value === "damageRate"
            ? "tower"
            : getCorrectPropertyUnitFlag(value, currentBuff.unitFlag),
        property: value,
      };
      setCurrentBuff(newBuff);
      buffsProvider([getBuffWithFormattedValue(newBuff)], "add");
    }
    if (key === "target") {
      buffsProvider([currentBuff], "delete");
      const newBuff = {
        ...currentBuff,
        [key]: value,
      };
      setCurrentBuff(newBuff);
      buffsProvider([getBuffWithFormattedValue(newBuff)], "add");
    }
  };

  const handleDeleteBuff = () => {
    buffsProvider([currentBuff], "delete");
    deleteBuff(player, currentBuff.id);
  };

  useEffect(() => {
    buffsProvider([getBuffWithFormattedValue(currentBuff)], "add");
  }, []);

  useEffect(() => {
    setBuff(player, currentBuff);
    buffsProvider([getBuffWithFormattedValue(currentBuff)], "replace");
  }, [buffsProvider, currentBuff, player, setBuff]);

  return { currentBuff, handleBuff, handleDeleteBuff };
};

export default useCustomBuffItem;
