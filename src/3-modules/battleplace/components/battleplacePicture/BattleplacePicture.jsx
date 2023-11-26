import { useBattleplacePictures } from "modules/battleplace/hooks";
import {
  Container,
  FieldPicture,
  PlacePicture,
} from "./BattleplacePicture.styled";

const BattleplacePicture = () => {
  const { field, place, isPlace } = useBattleplacePictures();

  console.log("picture");
  return (
    <Container>
      <FieldPicture
        width={field.width}
        height={field.height}
        background={field.image}
      />
      {isPlace ? (
        <PlacePicture
          width={place.width}
          height={place.height}
          background={place.image}
        />
      ) : null}
    </Container>
  );
};

export default BattleplacePicture;
