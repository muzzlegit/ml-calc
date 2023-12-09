import {
  BattlefieldsSelector,
  BattleplacePicture,
  BattleplaceSelector,
  BuildingsList,
  BuildingsSelector,
  Garrison,
  GarrisonAttackIndexSelector,
} from "modules/battleplace";
import { FlexBetween, FlexCol } from "utils/styles/flexKit.styled";
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
              <div></div>
              <BuildingsSelector />
              <BuildingsList />
            </Wrap>
          </FlexCol>
        </FlexBetween>
        <Garrison />
      </FlexCol>
    </Container>
  );
};

export default Battleplace;
