import useUnitsStore from "modules/units/store/unitsStore";
import { getUnitData } from "modules/units/utils/units.helpers";
import { useEffect } from "react";

const WatchDog = () => {
  // const player = usePlayerContext();
  const player = "mainAttacker";
  const {
    porter,
    swordsman,
    cavalier,
    flying,
    archer,
    healer,
    mercenary,
    mage,
  } = useUnitsStore((state) => state[player]);
  const { attackIndex, race } = useUnitsStore((state) => state[player]);
  const { setUnit } = useUnitsStore((state) => state.methods);

  useEffect(() => {
    const { level } = porter;
    const formattedLevel = race === "monsters" && level === 4 ? 3 : level;
    setUnit(
      player,
      "porter",
      getUnitData({
        race,
        unit: "porter",
        level: formattedLevel,
        attackIndex: attackIndex,
        initial: false,
      })
    );
  }, [attackIndex, player, porter, race, setUnit]);

  // useEffect(() => {
  //   const { level } = swordsman;
  //   const formattedLevel = race === "monsters" && level === 4 ? 3 : level;
  //   setUnit(
  //     player,
  //     "swordsman",
  //     getUnitData({
  //       race,
  //       unit: "swordsman",
  //       level: formattedLevel,
  //       attackIndex: attackIndex,
  //       initial: false,
  //     })
  //   );
  // }, [attackIndex, player, race, setUnit, swordsman]);

  // useEffect(() => {
  //   const { level } = cavalier;
  //   const formattedLevel = race === "monsters" && level === 4 ? 3 : level;
  //   setUnit(
  //     player,
  //     "cavalier",
  //     getUnitData({
  //       race,
  //       unit: "cavalier",
  //       level: formattedLevel,
  //       attackIndex: attackIndex,
  //       initial: false,
  //     })
  //   );
  // }, [attackIndex, cavalier, player, race, setUnit]);

  // useEffect(() => {
  //   const { level } = swordsman;
  //   const formattedLevel = race === "monsters" && level === 4 ? 3 : level;
  //   setUnit(
  //     player,
  //     "swordsman",
  //     getUnitData({
  //       race,
  //       unit: "swordsman",
  //       level: formattedLevel,
  //       attackIndex: attackIndex,
  //       initial: false,
  //     })
  //   );
  // }, [attackIndex, player, race, setUnit, swordsman]);

  // useEffect(() => {
  //   const { level } = swordsman;
  //   const formattedLevel = race === "monsters" && level === 4 ? 3 : level;
  //   setUnit(
  //     player,
  //     "swordsman",
  //     getUnitData({
  //       race,
  //       unit: "swordsman",
  //       level: formattedLevel,
  //       attackIndex: attackIndex,
  //       initial: false,
  //     })
  //   );
  // }, [attackIndex, player, race, setUnit, swordsman]);
  // useEffect(() => {
  //   const { level } = swordsman;
  //   const formattedLevel = race === "monsters" && level === 4 ? 3 : level;
  //   setUnit(
  //     player,
  //     "swordsman",
  //     getUnitData({
  //       race,
  //       unit: "swordsman",
  //       level: formattedLevel,
  //       attackIndex: attackIndex,
  //       initial: false,
  //     })
  //   );
  // }, [attackIndex, player, race, setUnit, swordsman]);
  // useEffect(() => {
  //   const { level } = swordsman;
  //   const formattedLevel = race === "monsters" && level === 4 ? 3 : level;
  //   setUnit(
  //     player,
  //     "swordsman",
  //     getUnitData({
  //       race,
  //       unit: "swordsman",
  //       level: formattedLevel,
  //       attackIndex: attackIndex,
  //       initial: false,
  //     })
  //   );
  // }, [attackIndex, player, race, setUnit, swordsman]);
  // useEffect(() => {
  //   const { level } = swordsman;
  //   const formattedLevel = race === "monsters" && level === 4 ? 3 : level;
  //   setUnit(
  //     player,
  //     "swordsman",
  //     getUnitData({
  //       race,
  //       unit: "swordsman",
  //       level: formattedLevel,
  //       attackIndex: attackIndex,
  //       initial: false,
  //     })
  //   );
  // }, [attackIndex, player, race, setUnit, swordsman]);
  return null;
};

export default WatchDog;
