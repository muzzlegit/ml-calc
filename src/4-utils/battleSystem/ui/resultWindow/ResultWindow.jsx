import { UnitPicture } from "modules/units";
import { Flex, FlexCol, FlexColCenter } from "utils/styles/flexKit.styled";
import { Container, Wrap } from "./ResultWindow.styled";

const ResultWindow = ({ result, getPlayerFlag }) => {
  const { start, fortifications, resurrection, rounds } = result;
  return (
    <Container>
      <Wrap>
        {Object.entries(rounds).map(([round, { attackers, defenders }]) => {
          return (
            <>
              <div key={round}>Раунд {round}</div>
              {Object.keys(attackers).map((player) => {
                return getPlayerFlag(player) ? (
                  <Flex
                    gap={8}
                    key={player}
                    additionStyles={{ alignItems: "start" }}
                  >
                    {player}

                    {Object.values(attackers[player]).map(
                      ({
                        title,
                        name,
                        amount,
                        level,
                        race,
                        killedInRound,
                        totalAttack,
                      }) => {
                        const { amount: prevUnitAmount } =
                          round === "1"
                            ? fortifications.attackers[player][title]
                            : rounds[round - 1].attackers[player][title];
                        return (
                          <Flex key={title + name}>
                            <FlexColCenter>
                              <UnitPicture
                                unit={title}
                                name={name}
                                level={level}
                                race={race}
                                isActive={true}
                              />
                              {amount > 0 ? (
                                <FlexCol gap={8}>
                                  <div>{prevUnitAmount}</div>

                                  <div> {-killedInRound}</div>
                                  <div> {amount}</div>
                                </FlexCol>
                              ) : null}
                            </FlexColCenter>
                          </Flex>
                        );
                      }
                    )}
                  </Flex>
                ) : null;
              })}
            </>
          );
        })}
      </Wrap>
    </Container>
  );
};

export default ResultWindow;
