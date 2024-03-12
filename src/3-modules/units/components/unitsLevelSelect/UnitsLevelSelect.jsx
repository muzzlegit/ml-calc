import { Button, Container } from "./UnitsLevelSelect.styled";
import useUnitsLevelSelect from "./useUnitsLevelSelect.hook";

const UnitsLevelSelect = () => {
  const { levels, activeLevel, handleActiveLevel } = useUnitsLevelSelect();

  return (
    <Container>
      <div>Уровень юнитов</div>
      {levels.map((level) => {
        return (
          <Button
            key={level}
            isActive={level === activeLevel}
            onClick={() => {
              handleActiveLevel(level);
            }}
          >
            {level}
          </Button>
        );
      })}
    </Container>
  );
};

export default UnitsLevelSelect;
