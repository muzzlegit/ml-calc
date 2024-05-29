import { ThemeProvider } from "@emotion/react";
import { theme } from "utils/styles/theme";
import { Player } from "widgets";
import { Battleplace } from "widgets/";
import { Container, Main } from "./App.styled";
function App() {
  return (
    <Main>
      <ThemeProvider theme={theme}>
        <Container>
          <Player playerName="mainAttacker" />
          <Player playerName="attackerAlly" />
          <Player playerName="attackerSecondAlly" />
          <Battleplace />
          <Player playerName="mainDefender" />
          <Player playerName="firstDefenderAlly" />
          <Player playerName="secondDefenderAlly" />
        </Container>
      </ThemeProvider>
    </Main>
  );
}

export default App;
