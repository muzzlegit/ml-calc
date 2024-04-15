import {
  BattlefieldsSelector,
  BattleplacePicture,
  BattleplaceSelector,
  BuildingsList,
  BuildingsSelector,
  Garrison,
  GarrisonAttackIndexSelector,
  Specialization,
} from "modules/battleplace";
import PlayerContext from "utils/context/PlayerContext";
import { Flex, FlexBetween, FlexCol } from "utils/styles/flexKit.styled";
import WatchDog from "utils/watchDog/WatchDog";
import { Container, Wrap } from "./Battleplace.styled";

const Battleplace = () => {
  return (
    <Container>
      <FlexCol gap="8px">
        <FlexBetween
          gap="16px"
          additionStyles={{ width: "100%", alignItems: "end" }}
        >
          <BattleplacePicture />
          <FlexCol gap="8px" additionStyles={{ width: "100%" }}>
            <FlexBetween
              gap="8px"
              additionStyles={{
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <BattlefieldsSelector />
              <BattleplaceSelector />
              <GarrisonAttackIndexSelector />
            </FlexBetween>
            <Wrap>
              <PlayerContext.Provider value="mainDefender">
                <Specialization />
              </PlayerContext.Provider>
              <BuildingsSelector />
              <BuildingsList />
            </Wrap>
          </FlexCol>
        </FlexBetween>
        <Flex gap="8px">
          <PlayerContext.Provider value="garrison">
            <Garrison />
            <WatchDog />
          </PlayerContext.Provider>
        </Flex>
      </FlexCol>
    </Container>
  );
};

export default Battleplace;
