import { LIMITS } from "modules/units/utils/units.constants";
import { UnitIcon } from "..";
//
import { Flex } from "utils/styles/flexKit.styled";
import { Container, Property, PropertyRate } from "./UnitProperties.styled";

const UnitProperties = ({ unit }) => {
  const {
    amount,
    amountRate,
    attack,
    attackRate,
    defense,
    defenseLevel,
    health,
    healthRate,
    capacity,
    capacityRate,
    persecutionRate,
    resurrection,
    resurrectionRate,
    suppression,
    towersSuppression,
    towersSuppressionRate,
  } = unit;
  const { attackLimit, healthLimit, defenseLevelLimit, persecutionLimit } =
    LIMITS;

  return (
    <Container>
      <Flex gap="8px" title="Количество войск вступившик в бой">
        <UnitIcon iconName="amount" />
        <Property>
          {new Intl.NumberFormat("ru-RU").format(
            Math.abs(Math.floor(amount) * (1 + amountRate))
          )}
        </Property>
        {amountRate ? (
          <PropertyRate title="Эффект ужаса" color="red">
            {amountRate * 100}%
          </PropertyRate>
        ) : null}
      </Flex>
      {attack || attack === 0 ? (
        <Flex gap="8px" title="Атака">
          <UnitIcon iconName="attack" />
          <Property>{attack}</Property>
          {attackRate ? (
            <PropertyRate
              title="Эффекты атаки"
              color={
                attackRate > 0
                  ? "green"
                  : attackRate <= attackLimit
                  ? "orange"
                  : "red"
              }
            >
              {attackRate > 0 ? "+" : null}
              {attackRate < attackLimit
                ? (attackLimit * 100).toFixed(0) +
                  ` (${(attackRate * 100).toFixed(0)})`
                : (attackRate * 100).toFixed(0)}
              %
            </PropertyRate>
          ) : null}
        </Flex>
      ) : null}
      <Flex gap="8px" title="Защита">
        <UnitIcon iconName="defense" />
        <Property
          color={defense > defenseLevel || defense < 0 ? "orange" : null}
        >
          {defense < 0
            ? 0
            : defense > defenseLevel
            ? defenseLevel + ` (${defense})`
            : defense}
        </Property>
      </Flex>
      {health ? (
        <Flex gap="8px" title="Здоровье">
          <UnitIcon iconName="health" />
          <Property>{health}</Property>
          {healthRate ? (
            <PropertyRate
              title="Эффекты здоровья"
              color={
                healthRate > 0
                  ? "green"
                  : healthRate <= healthLimit
                  ? "orange"
                  : "red"
              }
            >
              {healthRate > 0 ? "+" : null}
              {healthRate < attackLimit
                ? (healthLimit * 100).toFixed(0) +
                  ` (${(healthRate * 100).toFixed(0)})`
                : (healthRate * 100).toFixed(0)}
              %
            </PropertyRate>
          ) : null}
        </Flex>
      ) : null}
      <Flex gap="8px" title="Предел максимальной защиты">
        <UnitIcon iconName="defenseLevel" />
        <Property color={defenseLevel > defenseLevelLimit ? "orange" : null}>
          {defenseLevel < 0
            ? 0
            : defenseLevel > defenseLevelLimit
            ? defenseLevelLimit + ` (${defenseLevel})`
            : defenseLevel}
        </Property>
      </Flex>
      {capacity ? (
        <Flex gap="8px" title="Вместимость носильщиков">
          <UnitIcon iconName="capacity" />
          <Property>{capacity}</Property>
          {capacityRate ? (
            <PropertyRate
              title="Эффекты вместимости носильщиков"
              color={capacityRate > 0 ? "green" : "red"}
            >
              {capacityRate * 100}%
            </PropertyRate>
          ) : null}
        </Flex>
      ) : null}
      {persecutionRate || persecutionRate === 0 ? (
        <Flex gap="8px" title="Преследование">
          <UnitIcon iconName="persecutionRate" />
          <Property
            color={
              persecutionRate > 0
                ? "green"
                : persecutionRate < persecutionLimit
                ? "orange"
                : !persecutionRate
                ? "text"
                : "red"
            }
          >
            {persecutionRate < persecutionLimit
              ? persecutionLimit * 100 + ` (${persecutionRate * 100}%)`
              : persecutionRate > 0
              ? "+"
              : null + persecutionRate * 100 + "%"}
          </Property>
        </Flex>
      ) : null}
      {resurrection ? (
        <Flex gap="8px" title="Количество воскрешаемых юнитов 1 целителем">
          <UnitIcon iconName="resurrection" />
          <Property>{resurrection}</Property>
          {resurrectionRate ? (
            <PropertyRate
              title="Эффекты воскрешения"
              color={resurrectionRate > 0 ? "green" : "red"}
            >
              {(resurrectionRate > 0 ? "+" : null) + resurrectionRate * 100}%
            </PropertyRate>
          ) : null}
        </Flex>
      ) : null}
      {suppression || suppression === 0 ? (
        <Flex gap="8px" title="Подавление урона магами">
          <UnitIcon iconName="suppression" />
          <Property color={suppression < 0 ? "red" : "text"}>
            {suppression < 0 ? 0 + ` (${suppression})` : suppression}
          </Property>
        </Flex>
      ) : null}
      {towersSuppression ? (
        <Flex gap="8px" title="Здоровье">
          <UnitIcon iconName="towersSuppression" />
          <Property>{towersSuppression}</Property>
          {towersSuppressionRate ? (
            <PropertyRate
              title="Эффекты здоровья"
              color={
                towersSuppressionRate > 0
                  ? "green"
                  : towersSuppressionRate < 0
                  ? "red"
                  : "text"
              }
            >
              {`${towersSuppressionRate > 0 ? "+" : ""}` +
                towersSuppressionRate * 100}
              %
            </PropertyRate>
          ) : null}
        </Flex>
      ) : null}
    </Container>
  );
};

export default UnitProperties;
