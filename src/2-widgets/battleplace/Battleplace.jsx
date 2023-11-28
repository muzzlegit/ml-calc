import {
  BattlefieldsSelector,
  BattleplacePicture,
  BattleplaceSelector,
} from "modules/battleplace";
import { FlexBetween, FlexCenter, FlexCol } from "utils/styles/flexKit.styled";
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
          <FlexCol gap="8px">
            <Wrap>
              {/* <DefenseBuildsSelector /> */}
              {/* <DefenseBuildingsList /> */}
            </Wrap>
            <FlexCenter gap="8px">
              <BattlefieldsSelector />
              <BattleplaceSelector />
              {/* <GarrisonAttackIndexSelector /> */}
            </FlexCenter>
          </FlexCol>
        </FlexBetween>
        {/* <Garrison /> */}
      </FlexCol>
    </Container>
  );
};

export default Battleplace;
