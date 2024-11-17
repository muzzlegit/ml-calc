import { getElementsLists } from "modules/ratingCalculator/utils/helpers";
import Element from "../element/Element";
import { Container } from "./ElementsList.styled";

const ElementsList = () => {
  const list = getElementsLists();
  return (
    <Container>
      {Object.entries(list.buildings).map(([building, data]) => {
        return (
          <li key={building}>
            <Element element={{ building, data }} />
          </li>
        );
      })}
    </Container>
  );
};

export default ElementsList;
