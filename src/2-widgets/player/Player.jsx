import { ApostateChecker } from "modules/players";
import { AttackIndexSelector, RaceSelector, Squad } from "modules/units";
import PlayerContext from "utils/context/PlayerContext";
import { FlexCenter } from "utils/styles/flexKit.styled";
import { players } from "utils/types";
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
        </Container>
      </PlayerContext.Provider>
    </>
  );
};

export default Player;

Player.propTypes = {
  playerName: players,
};
