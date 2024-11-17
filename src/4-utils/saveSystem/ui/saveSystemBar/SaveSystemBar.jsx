import { useState } from "react";
import useBattleSave from "utils/saveSystem/useBattleSave";
import { Container, Input } from "./SaveSystemBar.styled";

const SaveSystemBar = () => {
  const { handleBattleSave, handleBattleLoad } = useBattleSave();
  const [value, setValue] = useState("");

  return (
    <Container>
      <p>Сохранить битву:</p>
      <Input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
        placeholder="...введите имя сохранения"
      />
      <button
        onClick={() => {
          handleBattleSave(value);
          setValue("");
        }}
      >
        Сохранить
      </button>
      <button onClick={handleBattleLoad}>Загрузить</button>
    </Container>
  );
};

export default SaveSystemBar;
