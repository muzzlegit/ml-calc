import { Flex, FlexBetween } from "utils/styles/flexKit.styled";
import { Container, Input, Title } from "./AdditionBuffs.styled";
import useAdditionBuffs from "./useAdditionBuffs.hook";

const AdditionBuffs = () => {
  const { additionBuffs, handlePropertyValue } = useAdditionBuffs();
  return (
    <Container>
      <div>
        {additionBuffs.map(({ id, title, sign, value, target }) => {
          if (target !== "player") return null;
          return (
            <FlexBetween
              gap="8px"
              key={id}
              additionStyles={{ marginBottom: "2px" }}
            >
              <Title variant={value ? target : "common"}>{title}</Title>
              <Flex gap="8px">
                <Input
                  value={value}
                  isBuff={value}
                  onChange={(e) => {
                    handlePropertyValue(id, Number(e.currentTarget.value));
                  }}
                  variant={value ? target : "common"}
                />
                <Title variant={value ? target : "common"}>{sign}</Title>
              </Flex>
            </FlexBetween>
          );
        })}
      </div>
      <div>
        {additionBuffs.map(({ id, title, sign, value, target }) => {
          if (target !== "enemy") return null;
          return (
            <FlexBetween
              gap="8px"
              key={id}
              additionStyles={{ marginBottom: "2px" }}
            >
              <Title variant={value ? target : "common"}>{title}</Title>
              <Flex gap="8px">
                <Input
                  value={value}
                  isBuff={value}
                  onChange={(e) => {
                    handlePropertyValue(id, Number(e.currentTarget.value));
                  }}
                  variant={value ? target : "common"}
                />
                <Title variant={value ? target : "common"}>{sign}</Title>
              </Flex>
            </FlexBetween>
          );
        })}
      </div>
    </Container>
  );
};

export default AdditionBuffs;
