import { useArtefact } from "modules/artefacts/hooks";
import { useHero } from "modules/hero/hooks";
import { useAdditionBuff, useSpell } from "modules/spells";
import { useResetUnitsAmount } from "modules/units/hooks";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const usePlayer = () => {
  const player = usePlayerContext();
  const { deleteAllArtefacts } = useArtefact();
  const { deleteHero } = useHero();
  const { deleteAllSpells } = useSpell();
  const resetAllUnitsAmount = useResetUnitsAmount();
  const { resetAllBuffs } = useAdditionBuff();

  const clearPlayer = (player) => {
    deleteAllArtefacts(player);
    deleteHero(player);
    deleteAllSpells(player);
    resetAllUnitsAmount(player);
    resetAllBuffs(player);
  };
  return { clearPlayer };
};

export default usePlayer;
