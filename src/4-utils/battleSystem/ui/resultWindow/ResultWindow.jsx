import { UnitPicture } from "modules/units";
import { getPlayerUIName } from "utils/battleSystem/helpers/battleSystem.helpers";
import { Flex, FlexColCenter } from "utils/styles/flexKit.styled";
import ArmyRoundProperties from "../armyRoundProperties/ArmyRoundProperties";
import {
  Amount,
  AmountBox,
  Container,
  Round,
  Text,
} from "./ResultWindow.styled";

const ResultWindow = ({ result, getPlayerFlag, winner }) => {
  const { start, fortifications, resurrection, rounds } = result;
  console.log("sfsfsfsdfsdsdf", winner);
  return (
    <Container>
      {Object.entries(rounds).map(([round, { attackers, defenders }]) => {
        return (
          <Round key={round}>
            <div>Раунд {round}</div>
            {Object.keys(attackers).map((player) => {
              return getPlayerFlag(player) ? (
                <FlexColCenter gap={8} key={player}>
                  <Text textColor={winner === "attacker" ? "green" : "red"}>
                    {getPlayerUIName(player)}
                  </Text>
                  <Flex gap={8} additionStyles={{ alignItems: "start" }}>
                    {Object.values(attackers[player]).map(
                      ({
                        title,
                        name,
                        amount,
                        level,
                        race,
                        killedInRound,
                        totalKilled,
                      }) => {
                        const { amount: prevUnitAmount } =
                          round === "1"
                            ? fortifications.attackers[player][title]
                            : rounds[round - 1].attackers[player][title];
                        return (
                          <FlexColCenter
                            key={title + name}
                            additionStyles={{
                              position: "relative",
                              filter: `drop-shadow(0px 0px 4px ${
                                winner === "attacker" ? "green" : "red"
                              })`,
                            }}
                          >
                            <UnitPicture
                              unit={title}
                              name={name}
                              level={level}
                              race={race}
                              isActive={true}
                            />
                            {amount > 0 || totalKilled ? (
                              <AmountBox>
                                <Amount>{prevUnitAmount}</Amount>
                                <Amount isDecrement={killedInRound}>
                                  {-killedInRound}
                                </Amount>
                                <Amount> {amount}</Amount>
                              </AmountBox>
                            ) : null}
                          </FlexColCenter>
                        );
                      }
                    )}
                  </Flex>
                  <ArmyRoundProperties
                    // key={player}
                    army={
                      round === "1"
                        ? fortifications.attackers[player]
                        : rounds[round - 1].attackers[player]
                    }
                  />
                </FlexColCenter>
              ) : null;
            })}
            {Object.keys(defenders).map((player) => {
              return getPlayerFlag(player) ? (
                <FlexColCenter gap={8} key={player}>
                  <Text textColor={winner === "defender" ? "green" : "red"}>
                    {getPlayerUIName(player)}
                  </Text>
                  <Flex gap={8} additionStyles={{ alignItems: "start" }}>
                    {Object.values(defenders[player]).map(
                      ({
                        title,
                        name,
                        amount,
                        level,
                        race,
                        killedInRound,
                        totalKilled,
                      }) => {
                        const { amount: prevUnitAmount } =
                          round === "1"
                            ? fortifications.defenders[player][title]
                            : rounds[round - 1].defenders[player][title];
                        return (
                          <FlexColCenter
                            key={title + name}
                            additionStyles={{
                              position: "relative",
                              filter: `drop-shadow(0px 0px 4px ${
                                winner === "defender" ? "green" : "red"
                              })`,
                            }}
                          >
                            <UnitPicture
                              unit={title}
                              name={name}
                              level={level}
                              race={race}
                              isActive={true}
                            />
                            {amount > 0 || totalKilled ? (
                              <AmountBox>
                                <Amount>{prevUnitAmount}</Amount>

                                <Amount isDecrement={killedInRound}>
                                  {-killedInRound}
                                </Amount>
                                <Amount> {amount}</Amount>
                              </AmountBox>
                            ) : null}
                          </FlexColCenter>
                        );
                      }
                    )}
                  </Flex>
                  <ArmyRoundProperties
                    // key={player}
                    army={
                      round === "1"
                        ? fortifications.defenders[player]
                        : rounds[round - 1].defenders[player]
                    }
                  />
                </FlexColCenter>
              ) : null;
            })}
          </Round>
        );
      })}
    </Container>
  );
};

export default ResultWindow;
