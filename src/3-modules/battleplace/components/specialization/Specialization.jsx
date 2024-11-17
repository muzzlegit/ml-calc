import { ImageBox } from "utils/UI";
import { Container, Level, Title, Wrap } from "./Specialization.styled";
import useSpecialization from "./useSpecialization.hook";

const Specialization = () => {
  const {
    description,
    level,
    handleSpecializationLevel,
    graphics: { specializationImage },
  } = useSpecialization();

  return (
    <Container>
      <Title>
        Специализация
        <br />
        Защитник
      </Title>
      <Wrap
        title={description}
        isActive={level}
        onClick={handleSpecializationLevel}
      >
        <ImageBox picture={specializationImage} />
        {level ? <Level>{level}/3</Level> : null}
      </Wrap>
    </Container>
  );
};

export default Specialization;
