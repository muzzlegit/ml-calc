import { ThemeProvider } from "@emotion/react";
import { theme } from "utils/styles/theme";
import { Player } from "widgets";
import { Main } from "./App.styled";

function App() {
  return (
    <Main>
      <ThemeProvider theme={theme}>
        <Player playerName="mainAttacker" />
        <Player playerName="mainDefender" />
      </ThemeProvider>
    </Main>
  );
}

export default App;
