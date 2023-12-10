import { ThemeProvider } from "@emotion/react";
import { Modal, useModal } from "modules/UI";
import { theme } from "utils/styles/theme";
import { Player } from "widgets";
import { Battleplace, Workbench } from "widgets/";
import { Container, Main } from "./App.styled";

function App() {
  const { isModal, toggleModal, onBackdropClick } = useModal();
  return (
    <Main>
      <ThemeProvider theme={theme}>
        <Container>
          <Player playerName="mainAttacker" handleModal={toggleModal} />
          <Battleplace />
          <Player playerName="mainDefender" handleModal={toggleModal} />
        </Container>
        {isModal ? (
          <Modal onBackdropClick={onBackdropClick}>
            <Workbench />
          </Modal>
        ) : null}
      </ThemeProvider>
    </Main>
  );
}

export default App;
