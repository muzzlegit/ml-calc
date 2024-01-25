import { LEVEL_FILTER } from "modules/artefacts/utils/artefact.constants";
import { Button, ImageBox } from "modules/UI";
import { Flex, FlexCol } from "utils/styles/flexKit.styled";
import { Artefact, List } from "./ArtefactsList.styled";
import useArtefactsList from "./useArtefactsList.hook";
//---theme
import { theme } from "utils/styles/theme";

const colors = {
  acent: theme.colors.orange,
  text: theme.colors.textAcent,
};

const ArtefactsList = () => {
  const {
    artefactsList,
    filterLevel,
    handleFilterLevel,
    handleArtefactSelect,
  } = useArtefactsList();

  return (
    <FlexCol additionStyles={{ justifyContent: "start" }}>
      <Flex gap="8px">
        {LEVEL_FILTER.map(({ name, level }) => {
          return (
            <Button
              key={name}
              handleClick={() => {
                handleFilterLevel(level);
              }}
              addStyles={{
                margin: "0 0 8px 0",
                color: level === filterLevel ? colors.acent : colors.text,
                borderColor: level === filterLevel ? colors.acent : colors.text,
                width: "40px",
              }}
            >
              {name}
            </Button>
          );
        })}
      </Flex>
      <List>
        {artefactsList.map((artefact) => {
          const { image, title, ...rest } = artefact;
          return (
            <Artefact
              key={title}
              onClick={() => {
                handleArtefactSelect({ title, ...rest });
              }}
            >
              <ImageBox picture={image} title={title} />
            </Artefact>
          );
        })}
      </List>
    </FlexCol>
  );
};

export default ArtefactsList;
