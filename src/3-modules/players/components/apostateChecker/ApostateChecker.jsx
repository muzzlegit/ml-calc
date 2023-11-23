import useApostate from "modules/players/hooks/useApostate";
import { SvgIcon } from "modules/UI";
import { Checker, Container, IconBox, Title } from "./ApostateChecker.styled";

const ApostateChecker = () => {
  const { apostate, handleApostate } = useApostate();

  return (
    <Container>
      <Title>Отступник:</Title>
      <Checker onClick={handleApostate}>
        <IconBox isChecked={apostate}>
          <SvgIcon svgName="icon-plus" size="22px" />
        </IconBox>
      </Checker>
    </Container>
  );
};

export default ApostateChecker;
