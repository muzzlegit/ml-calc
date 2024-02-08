import { ImageBox } from "modules/UI";
import { getStandartDescription } from "modules/players/utils/player.helpers";
import { Cell, Container, List, Quantity } from "./StandardsList.styled";
import useStandardsList from "./useStandardsList.hook";

const StandardsList = () => {
  const {
    standards,
    graphics: { background },
    handleStandardsQuantity,
  } = useStandardsList();
  return (
    <Container>
      {/* <Title>Штандарты</Title> */}
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
              background={picture.image}
              isActive={quantity}
            >
              {quantity ? <Quantity>{quantity}/6</Quantity> : null}
            </Cell>
          );
        })}
        <ImageBox
          picture={background}
          addStyles={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: -1,
            filter: "drop-shadow(0 0 2px wheat)",
          }}
        />
      </List>
    </Container>
  );
};

export default StandardsList;
