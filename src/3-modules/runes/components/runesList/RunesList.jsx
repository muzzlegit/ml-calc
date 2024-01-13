import { ImageBox, SvgIcon } from "modules/UI";
import {
  AmountInput,
  Container,
  IconWrap,
  Rune,
  Wrap,
} from "./RunesList.styles";
import useRunesList from "./useRunesList.hook";

const RunesList = () => {
  const {
    runes,
    isDeleteSelected,
    handleRuneAmount,
    handleDeleteAllRunes,
    handleHoverDeleteButton,
  } = useRunesList();

  return (
    <Container>
      {runes.map(({ title, image, amount }) => {
        return (
          <Wrap key={title}>
            <Rune isActive={amount} isDelete={isDeleteSelected}>
              <ImageBox title={title} picture={image} />
            </Rune>
            <AmountInput
              type="text"
              placeholder="0"
              value={amount}
              onChange={(e) => {
                handleRuneAmount(title, e.currentTarget.value);
              }}
            />
          </Wrap>
        );
      })}
      <IconWrap
        title="Удалить все руны с артефакта"
        onClick={handleDeleteAllRunes}
        onMouseOver={() => {
          handleHoverDeleteButton(true);
        }}
        onMouseLeave={() => {
          handleHoverDeleteButton(false);
        }}
      >
        <SvgIcon svgName="icon-x-close" size="20px" />
      </IconWrap>
    </Container>
  );
};

export default RunesList;
