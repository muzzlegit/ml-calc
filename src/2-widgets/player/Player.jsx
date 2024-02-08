import { Modal, useModal } from "modules/UI";
import { HeroUnit } from "modules/hero";
import {
  AllyButton,
  ApostateChecker,
  AttackIndexSelector,
  RaceSelector,
  StandardsList,
  usePlayerStore,
} from "modules/players";
import { Squad } from "modules/units";
import PlayerContext from "utils/context/PlayerContext";
import {
  FlexCenter,
  FlexColCenter,
  FlexStart,
} from "utils/styles/flexKit.styled";
import { playerTypes } from "utils/types/types";
import WatchDog from "utils/watchDog/WatchDog";
import { Workbench } from "..";
import { Container } from "./Player.styled";

const Player = ({ playerName }) => {
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const participant = usePlayerStore((state) => state[playerName].participant);

  if (!participant) return <></>;

  return (
    <>
      <PlayerContext.Provider value={playerName}>
        <Container>
          <FlexCenter gap="16px" additionStyles={{ marginBottom: "8px" }}>
            <RaceSelector />
            <AttackIndexSelector />
            <ApostateChecker />
          </FlexCenter>
          <FlexStart gap="8px">
            <FlexColCenter gap="8px">
              <HeroUnit handleHeroClick={toggleModal} />
              <AllyButton />
              <StandardsList />
            </FlexColCenter>
            <Squad />
          </FlexStart>
          <WatchDog />
        </Container>
        {isModal ? (
          <Modal onBackdropClick={onBackdropClick}>
            <Workbench toggleModal={toggleModal} />
          </Modal>
        ) : null}
      </PlayerContext.Provider>
    </>
  );
};

export default Player;

Player.propTypes = {
  playerName: playerTypes,
};
