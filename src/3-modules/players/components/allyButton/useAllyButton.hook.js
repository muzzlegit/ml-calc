import { usePlayer } from "modules/players/hooks";
import usePlayerStore from "modules/players/store/playerStore";
import { useEffect, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useAllyButton = () => {
  const player = usePlayerContext();
  const { firstAllyFlag, secondAllyFlag } = usePlayerStore((state) => ({
    firstAllyFlag:
      player === "mainAttacker"
        ? state.attackerAlly?.participant
        : state.firstDefenderAlly?.participant,
    secondAllyFlag:
      player === "mainAttacker"
        ? state.attackerSecondAlly?.participant
        : state.secondDefenderAlly?.participant,
  }));
  const { setParticipantFlag } = usePlayerStore((state) => state.methods);
  const { clearPlayer } = usePlayer();
  const [sign, setSign] = useState(
    player === "mainAttacker" || player === "mainDefender"
      ? "Добавить союзника"
      : "Удалить игрока"
  );
  const [areBuffsOn, setAreBuffsOn] = useState(true);

  const buffsButtonSign = areBuffsOn ? "Отключить героя" : "Активировать героя";
  const clearButtonSign = "Очистить игрока";
  const handleButtonClick = () => {
    if (player === "mainAttacker" || player === "mainDefender") {
      const firstAlly =
        player === "mainAttacker" ? "attackerAlly" : "firstDefenderAlly";
      const secondAlly =
        player === "mainAttacker" ? "attackerSecondAlly" : "secondDefenderAlly";

      if (firstAllyFlag && secondAllyFlag) {
        setParticipantFlag(firstAlly, false);
        setParticipantFlag(secondAlly, false);
        clearPlayer(firstAlly);
        clearPlayer(secondAlly);
        return;
      }
      setParticipantFlag(firstAllyFlag ? secondAlly : firstAlly, true);
      return;
    }
    setParticipantFlag(player, false);
    clearPlayer(player);
  };

  const handlePlayerBuffsOff = () => {
    // buffsProvider(
    //   getPlayerBuffs(player).map((buff) => {
    //     if (buff.type === "standard") return buff;
    //     return { ...buff, battle: !areBuffsOn };
    //   }),
    //   "replace"
    // );
    // setAreBuffsOn((prev) => !prev);
  };

  const handlePlayerClear = () => {
    clearPlayer(player);
  };

  useEffect(() => {
    if (player === "mainAttacker" || player === "mainDefender") {
      setSign(
        firstAllyFlag && secondAllyFlag
          ? "Удалить всех союзников"
          : "Добавить союзника"
      );
    }
  }, [firstAllyFlag, player, secondAllyFlag]);

  return {
    sign,
    buffsButtonSign,
    clearButtonSign,
    handleButtonClick,
    handlePlayerBuffsOff,
    handlePlayerClear,
  };
};

export default useAllyButton;
