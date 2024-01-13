import { ImageBox, Selector, SvgIcon } from "modules/UI";
import { Flex } from "utils/styles/flexKit.styled";
import {
  IconWrap,
  Input,
  List,
  Sign,
  Value,
} from "./SharpeningsSelector.styled";
import useSharpeningsSelector from "./useSharpeningsSelector.hook";

const SharpeningsSelector = () => {
  const {
    selectorValue,
    value,
    index,
    sharpeningsList,
    selectorList,
    handleSelectorValue,
    handleSharpeningValue,
    handleSharpeningAdd,
    handleDeleteSharpening,
  } = useSharpeningsSelector();

  return (
    <div>
      <List>
        {sharpeningsList.map(
          ({ id, title, value, maxValue, measure, description, picture }) => {
            const isNegative = maxValue < 0;
            return (
              <Flex key={title} title={description[0]} gap="8px">
                <ImageBox picture={picture} />
                {title}
                <Value isNegative={isNegative}>
                  {value[0] > 0 ? " +" : " "}
                  {measure ? value[0] * 100 : value[0]}
                  {measure}
                </Value>
                <IconWrap
                  onClick={() => {
                    handleDeleteSharpening(id);
                  }}
                >
                  <SvgIcon svgName="icon-x-close" size="16px" />
                </IconWrap>
              </Flex>
            );
          }
        )}
      </List>
      <Flex gap="8px">
        <Selector
          value={selectorValue}
          options={selectorList}
          width="400px"
          handleSelector={handleSelectorValue}
        />
        <Input
          value={value}
          onChange={(e) => {
            handleSharpeningValue(e.currentTarget.value);
          }}
        />
        <Sign>{index}</Sign>
        <button onClick={handleSharpeningAdd}>Добавить</button>
      </Flex>
    </div>
  );
};

export default SharpeningsSelector;
