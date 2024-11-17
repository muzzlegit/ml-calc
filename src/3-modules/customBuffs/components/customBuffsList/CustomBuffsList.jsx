import useCustomBuffs from "modules/customBuffs/hooks/useCustomBuffs.hook";
import useCustomBuffsStore from "modules/customBuffs/store/customBuffsStore";
import { SvgIcon } from "utils/UI";
import usePlayerContext from "utils/context/usePlayerContext.hook";
import BuffConstructor from "../customBuffItem/CustomBuffItem";
import { Button, Container, Title } from "./CustomBuffsList.styled";

const CustomBuffsList = () => {
  const player = usePlayerContext();
  const buffs = useCustomBuffsStore((state) => state[player].buffs);
  const { handleAddCustomBuff } = useCustomBuffs();
  return (
    <Container>
      <Title>Произвольный бонус</Title>
      <Button title="Добавить бонус" onClick={handleAddCustomBuff}>
        <SvgIcon svgName="icon-plus" size="20px" />
      </Button>
      {buffs.map((buff) => (
        <BuffConstructor key={buff.id} buff={buff} />
      ))}
    </Container>
  );
};

export default CustomBuffsList;
