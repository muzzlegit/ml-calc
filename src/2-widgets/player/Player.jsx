import { HeroUnit } from "modules/hero";
import {
  ApostateChecker,
  AttackIndexSelector,
  RaceSelector,
} from "modules/players";
import { Modal, useModal } from "modules/UI";
import { Squad } from "modules/units";
import PlayerContext from "utils/context/PlayerContext";
import { FlexCenter, FlexStart } from "utils/styles/flexKit.styled";
import { playerTypes } from "utils/types/types";
import WatchDog from "utils/watchDog/WatchDog";
import { Workbench } from "..";
import { Container } from "./Player.styled";
const Player = ({ playerName }) => {
  const { isModal, toggleModal, onBackdropClick } = useModal();
  console.log("player");
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
            <HeroUnit handleHeroClick={toggleModal} />
            <Squad />
          </FlexStart>
          <WatchDog />
        </Container>
        {isModal ? (
          <Modal onBackdropClick={onBackdropClick}>
            <Workbench />
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
