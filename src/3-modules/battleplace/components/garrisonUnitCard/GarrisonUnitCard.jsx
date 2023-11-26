import { useGarrisonUnit } from "modules/battleplace/hooks";
import {
  UnitAmountField,
  UnitIcon,
  UnitPicture,
  UnitProperties,
} from "modules/units";
import { useState } from "react";
import {
  ClickWrap,
  Container,
  Level,
  Properties,
} from "./GarrisonUnitCard.styled";

const GarrisonUnitCard = ({ unitName = "porter" }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { unit, race, isActive, handleGarrisonUnitAmount } =
    useGarrisonUnit(unitName);
  const { level, name, amount } = unit;
  return (
    <Container isActive={isActive}>
      {!isFlipped ? (
        <>
          <ClickWrap
            onClick={() => {
              setIsFlipped((prev) => !prev);
            }}
          >
            <UnitPicture
              unit={unitName}
              name={name}
              level={level}
              race={race}
              isActive={isActive}
            />
          </ClickWrap>
          <Level>
            <UnitIcon iconName={unitName} />
            <span>Уровень {level}</span>
          </Level>
          <UnitAmountField
            amount={amount}
            handleUnitAmount={handleGarrisonUnitAmount}
          />
        </>
      ) : (
        <Properties
          onClick={() => {
            setIsFlipped((prev) => !prev);
          }}
        >
          <UnitProperties unit={unit} />
        </Properties>
      )}
    </Container>
  );
};

export default GarrisonUnitCard;
