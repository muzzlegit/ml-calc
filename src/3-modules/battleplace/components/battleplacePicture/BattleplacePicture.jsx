import { ImageBox } from "modules/UI";
import useBattleplacePicture from "./useBattleplacePicture.hook";
//--styles
import {
  Container,
  FieldPicture,
  PlacePicture,
} from "./BattleplacePicture.styled";

const BattleplacePicture = () => {
  const { isPlace, graphics } = useBattleplacePicture();
  const { fieldImg, placeImg } = graphics;

  return (
    <Container>
      <FieldPicture>
        <ImageBox picture={fieldImg} />
      </FieldPicture>
      {isPlace ? (
        <PlacePicture>
          <ImageBox picture={placeImg} />
        </PlacePicture>
      ) : null}
    </Container>
  );
};

export default BattleplacePicture;
