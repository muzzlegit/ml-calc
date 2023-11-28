import { useUnit } from "modules/units/hooks";
import {
  UnitAmountField,
  UnitIcon,
  UnitPicture,
  UnitProperties,
} from "./particles";
//--- styles
import { FlexCol } from "utils/styles/flexKit.styled";
import { Container, ImageWrap, Level } from "./UnitCard.styled";

const UnitCard = ({ unitName = "porter" }) => {
  const { unit, race, handleUnitLevel, handleUnitAmount } = useUnit(unitName);
  const { name, level, amount } = unit;

  return (
    <Container isActive={amount > 0}>
      <ImageWrap onClick={handleUnitLevel}>
        <UnitPicture
          name={name}
          level={level}
          race={race}
          unit={unitName}
          isActive={amount > 0}
        />
      </ImageWrap>
      <FlexCol gap="8px">
        <Level>
          <UnitIcon iconName={unitName} />
          <span>Уровень {level}</span>
        </Level>
        <UnitAmountField amount={amount} handleUnitAmount={handleUnitAmount} />
        <UnitProperties unit={unit} />
      </FlexCol>
    </Container>
  );
};

export default UnitCard;
