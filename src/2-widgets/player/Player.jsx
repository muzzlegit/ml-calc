import { ApostateChecker } from "modules/players";
import { AttackIndexSelector, RaceSelector, Squad } from "modules/units";
import PlayerContext from "utils/context/PlayerContext";
import { FlexCenter } from "utils/styles/flexKit.styled";
import { playerTypes } from "utils/types/types";
import WatchDog from "utils/watchDog/WatchDog";
import { Container } from "./Player.styled";

const Player = ({ playerName }) => {
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
          <Squad />
          <WatchDog />
        </Container>
      </PlayerContext.Provider>
    </>
  );
};

export default Player;

Player.propTypes = {
  playerName: playerTypes,
};
