import { getStandartDescription } from "modules/battleplace/utils/battleplace.helpers";
import { Cell, Container, List, Quantity, Title } from "./StandardsList.styled";
import useStandardsList from "./useStandardsList.hook";

const StandardsList = () => {
  const {
    standards,
    graphics: { background },
    handleStandardsQuantity,
  } = useStandardsList();
  return (
    <Container>
      <Title>Штандарты</Title>
      <List>
        {standards.map((standard) => {
          const { id, title, quantity, picture } = standard;
          return (
            <Cell
              key={id}
              title={quantity ? getStandartDescription(standard) : title}
              onClick={() => {
                handleStandardsQuantity(id);
              }}
              background={picture}
              isActive={quantity}
            >
              {quantity ? <Quantity>{quantity}/6</Quantity> : null}
            </Cell>
          );
        })}
        {/* <ImageBox
          picture={background}
          addStyles={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-49.5%,-49.5%) scale(1.2,1.4)",
            zIndex: -1,
            borderRadius: "6px",
            overflow: "hidden",
            opacity: 0.2,
          }}
        /> */}
      </List>
    </Container>
  );
};

export default StandardsList;
