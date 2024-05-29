import { UnitPicture } from "modules/units";
import { Flex, FlexColCenter } from "utils/styles/flexKit.styled";
import { Container, Wrap } from "./ResultWindow.styled";

const ResultWindow = ({ result, getPlayerFlag }) => {
  const { resurrection } = result;
  return (
    <Container>
      <Wrap>
        {Object.keys(resurrection.attackers).map((player) => {
          return getPlayerFlag(player) ? (
            <Flex gap={8} key={player}>
              {player}
              {Object.entries(resurrection.attackers[player]).map(
                ([unit, { name, amount, level, race }]) => {
                  console.log(unit);
                  return (
                    <FlexColCenter key={unit} gap={8}>
                      <UnitPicture
                        unit={unit}
                        name={name}
                        level={level}
                        race={race}
                        isActive={true}
                      />
                      {unit}
                      {amount}
                    </FlexColCenter>
                  );
                }
              )}
            </Flex>
          ) : null;
        })}
      </Wrap>
    </Container>
  );
};

export default ResultWindow;
