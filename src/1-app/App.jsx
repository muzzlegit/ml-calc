import { ThemeProvider } from "@emotion/react";
import RatingCalculator from "modules/ratingCalculator/components/RatingCalculator";
import SaveSystemBar from "utils/saveSystem/ui/saveSystemBar/SaveSystemBar";
import { theme } from "utils/styles/theme";
import { Player } from "widgets";
import { Battleplace } from "widgets/";
import { Container, Main } from "./App.styled";
function App() {
  const visible = true;
  return (
    <Main>
      <ThemeProvider theme={theme}>
        <Container>
          {visible ? (
            <RatingCalculator />
          ) : (
            <>
              <Player playerName="mainAttacker" />
              <Player playerName="attackerAlly" />
              <Player playerName="attackerSecondAlly" />
              <Battleplace />
              <SaveSystemBar />
              <Player playerName="mainDefender" />
              <Player playerName="firstDefenderAlly" />
              <Player playerName="secondDefenderAlly" />
            </>
          )}
        </Container>
      </ThemeProvider>
    </Main>
  );
}

export default App;
