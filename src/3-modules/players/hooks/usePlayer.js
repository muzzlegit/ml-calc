import { useArtefact } from "modules/artefacts/hooks";
import { useCustomBuffs } from "modules/customBuffs";
import { useHero } from "modules/hero/hooks";
import { useSpell } from "modules/spells";
import { useResetUnitsAmount } from "modules/units/hooks";

const usePlayer = () => {
  const { deleteAllArtefacts } = useArtefact();
  const { deleteHero } = useHero();
  const { deleteAllSpells } = useSpell();
  const resetAllUnitsAmount = useResetUnitsAmount();
  const { resetAllBuffs } = useCustomBuffs();

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
