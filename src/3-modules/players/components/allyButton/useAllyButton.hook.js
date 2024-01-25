import usePlayerStore from "modules/players/store/playerStore";
import { useEffect, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useAllyButton = () => {
  const player = usePlayerContext();
  const firstAttackerAllyParticipantFlag = usePlayerStore(
    (state) => state["attackerAlly"].participant
  );
  const secondAttackerAllyParticipantFlag = usePlayerStore(
    (state) => state["attackerSecondAlly"].participant
  );
  const { getParticipantFlag, setParticipantFlag } = usePlayerStore(
    (state) => state.methods
  );
  const firstDefenderAllyParticipantFlag = usePlayerStore(
    (state) => state["firstDefenderAlly"].participant
  );
  const secondDefenderAllyParticipantFlag = usePlayerStore(
    (state) => state["secondDefenderAlly"].participant
  );
  const [sign, setSign] = useState("Добавить союзника");

  const handleButtonClick = () => {
    if (player === "mainAttacker" && !getParticipantFlag("attackerAlly")) {
      setParticipantFlag("attackerAlly", true);
      return;
    }
    if (
      player === "mainAttacker" &&
      getParticipantFlag("attackerAlly") &&
      !getParticipantFlag("attackerSecondAlly")
    ) {
      setParticipantFlag("attackerSecondAlly", true);
    }
    if (player === "mainDefender" && !getParticipantFlag("firstDefenderAlly")) {
      setParticipantFlag("firstDefenderAlly", true);
      return;
    }
    if (
      player === "mainDefender" &&
      getParticipantFlag("firstDefenderAlly") &&
      !getParticipantFlag("secondDefenderAlly")
    ) {
      setParticipantFlag("secondDefenderAlly", true);
    }
    if (
      player === "attackerAlly" ||
      player === "attackerSecondAlly" ||
      player === "firstDefenderAlly" ||
      player === "secondDefenderAlly"
    ) {
      setParticipantFlag(player, false);
    }
  };

  useEffect(() => {
    const isMainAttacker = player === "mainAttacker";
    const isMainDefender = player === "mainDefender";
    const isAllAttackerAlly =
      !firstAttackerAllyParticipantFlag || !secondAttackerAllyParticipantFlag;
    const isAllDefenderAlly =
      !firstDefenderAllyParticipantFlag || !secondDefenderAllyParticipantFlag;

    if (
      (isMainAttacker && isAllAttackerAlly) ||
      (isMainDefender && isAllDefenderAlly)
    ) {
      setSign("Добавить союзника");
    } else setSign("Удалить всех союзников");

    if (
      player === "attackerAlly" ||
      player === "attackerSecondAlly" ||
      player === "firstDefenderAlly" ||
      player === "secondDefenderAlly"
    )
      setSign("Удалить игрока");
  }, [
    firstAttackerAllyParticipantFlag,
    firstDefenderAllyParticipantFlag,
    player,
    secondAttackerAllyParticipantFlag,
    secondDefenderAllyParticipantFlag,
  ]);

  return { sign, handleButtonClick };
};

export default useAllyButton;
