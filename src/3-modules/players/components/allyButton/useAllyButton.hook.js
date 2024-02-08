import { useArtefact } from "modules/artefacts/hooks";
import { useHeroStore } from "modules/hero";
import usePlayerStore from "modules/players/store/playerStore";
import { useSpell } from "modules/spells";
import { useEffect, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import useBuffsProvider from "utils/watchDog/useBuffsProvider.hook";

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
  const { getPlayerBuffs } = usePlayerStore((state) => state.methods);
  const { buffsProvider } = useBuffsProvider();
  const { setHero } = useHeroStore((state) => state.methods);
  const { deleteAllSpells } = useSpell();
  const { deleteAllArtefacts } = useArtefact();

  const [sign, setSign] = useState("Добавить союзника");
  const [areBuffsOn, setAreBuffsOn] = useState(true);

  const buffsButtonSign = areBuffsOn ? "Отключить героя" : "Активировать героя";

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
      deleteAllArtefacts();
      deleteAllSpells();
      // buffsProvider(getPlayerBuffs(player), "delete");
      // setHero(player, null);
    }
    if (
      player === "mainAttacker" &&
      firstAttackerAllyParticipantFlag &&
      secondAttackerAllyParticipantFlag
    ) {
      setParticipantFlag("attackerAlly", false);
      setParticipantFlag("attackerSecondAlly", false);
      buffsProvider(getPlayerBuffs("attackerAlly"), "delete");
      buffsProvider(getPlayerBuffs("attackerSecondAlly"), "delete");
      setHero("attackerAlly", null);
      setHero("attackerSecondAlly", null);
    }
  };

  const handlePlayerBuffsOff = () => {
    buffsProvider(
      getPlayerBuffs(player).map((buff) => ({ ...buff, battle: !areBuffsOn })),
      "replace"
    );
    setAreBuffsOn((prev) => !prev);
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

  return { sign, buffsButtonSign, handleButtonClick, handlePlayerBuffsOff };
};

export default useAllyButton;
