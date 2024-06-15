import { useState } from "react";
import {
  getResultArmyProperty,
  getUnitUIName,
} from "utils/battleSystem/helpers/battleSystem.helpers";
import { Flex } from "utils/styles/flexKit.styled";
import { Button, Container, Text, Wrap } from "./ArmyRoundProperties.styled";

const ArmyRoundProperties = ({ army }) => {
  const { armyProperties, unitsProperties } = getResultArmyProperty(army);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {isOpen ? "Скрыть" : "Показать подробности"}
      </Button>
      {isOpen ? (
        <Wrap>
          <Flex
            additionStyles={{
              justifyContent: "space-around",
              marginBottom: "4px",
            }}
          >
            <UnitProperty
              property="Общая атака армии:"
              value={armyProperties.totalAttack}
              propertyColor="green"
            />
            <UnitProperty
              property="Общее здоровье армии:"
              value={armyProperties.totalHealth}
              propertyColor="green"
            />
          </Flex>

          {Object.entries(unitsProperties).map(
            ([
              unit,
              {
                amount,
                totalAttack,
                totalHealth,
                totalPersecution,
                totalSuppression,
                totalTowersSuppression,
              },
            ]) => {
              return (
                <Flex key={unit} gap={8}>
                  <Text textColor="green">{getUnitUIName(unit)}:</Text>
                  <UnitProperty
                    property="Атака:"
                    value={totalAttack}
                    propertyColor="orange"
                  />
                  <UnitProperty
                    property="Здоровье:"
                    value={totalHealth}
                    propertyColor="orange"
                  />
                  {totalPersecution && (
                    <UnitProperty
                      property="Атака преследователя:"
                      value={totalPersecution}
                      propertyColor="orange"
                    />
                  )}
                  {totalSuppression && (
                    <UnitProperty
                      property="Поглощение урона:"
                      value={totalSuppression}
                      propertyColor="orange"
                    />
                  )}
                  {totalTowersSuppression && (
                    <UnitProperty
                      property="Поглощение урона от башен:"
                      value={totalTowersSuppression}
                      propertyColor="orange"
                    />
                  )}
                </Flex>
              );
            }
          )}
        </Wrap>
      ) : null}
    </Container>
  );
};

export default ArmyRoundProperties;

function UnitProperty({ property, propertyColor, value, valueColor }) {
  return (
    <Flex gap={4}>
      <Text textColor={propertyColor}>{property}</Text>
      <Text textColor={valueColor}>{value.toLocaleString("de-DE")}</Text>
    </Flex>
  );
}
