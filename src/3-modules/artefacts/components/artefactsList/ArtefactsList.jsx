import { LEVEL_FILTER } from "modules/artefacts/utils/artefact.constants";
import { Button, ImageBox } from "modules/UI";
import { FlexCol } from "utils/styles/flexKit.styled";
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
    <FlexCol>
      {LEVEL_FILTER.map(({ name, level }) => {
        return (
          <Button
            key={name}
            handleClick={() => {
              handleFilterLevel(level);
            }}
            addStyles={{
              color: level === filterLevel ? colors.acent : colors.text,
            }}
          >
            {name}
          </Button>
        );
      })}
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
