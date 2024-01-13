import { getStandardsPicture } from "modules/battleplace/utils/battleplace.helpers";
import { useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import standardsData from "../../data/standards.json";

const useStandardsList = () => {
  const player = usePlayerContext();
  const [standards, setStandards] = useState(
    standardsData
      .map((standard) => ({
        ...standard,
        player,
        picture: getStandardsPicture(standard.title).image,
      }))
      .filter((standard) => {
        if (player === "mainDefender") return standard;
        if (player !== "mainDefender" && standard.sortIndex === "player")
          return standard;
      })
  );

  const graphics = {
    background: getStandardsPicture("background"),
  };

  const handleStandardsQuantity = (id) => {
    setStandards((standards) => {
      return standards.map((standard) => {
        if (standard.id === id) {
          const { quantity, buffs } = standard;
          const nextQuantity = quantity === 6 ? 0 : quantity + 1;
          return {
            ...standard,
            quantity: nextQuantity,
            buffs: buffs.map((buff) => {
              return {
                ...buff,
                value: [buff.singleValue * nextQuantity],
              };
            }),
          };
        }
        return standard;
      });
    });
  };

  return { standards, graphics, handleStandardsQuantity };
};

export default useStandardsList;
