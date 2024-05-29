import { Modal, useModal } from "modules/UI";
import { usePlayerStore } from "modules/players";
import useBattle from "utils/battleSystem/hooks/useBattle";
import BattleButton from "utils/battleSystem/ui/battleButton/BattleButton";
import ResultWindow from "utils/battleSystem/ui/resultWindow/ResultWindow";
import { Container, Wrap } from "./BattleResult.styled";

const BattleResult = () => {
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const { result, handleBattle } = useBattle();
  const { getParticipantFlag } = usePlayerStore((state) => state.methods);

  return (
    <>
      <Container>
        <Wrap>
          <BattleButton
            handleClick={() => {
              handleBattle();
              toggleModal();
            }}
          />
        </Wrap>
      </Container>
      {isModal ? (
        <Modal onBackdropClick={onBackdropClick}>
          <ResultWindow result={result} getPlayerFlag={getParticipantFlag} />
        </Modal>
      ) : null}
    </>
  );
};

export default BattleResult;
