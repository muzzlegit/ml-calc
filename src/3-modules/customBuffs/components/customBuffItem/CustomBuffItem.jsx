import {
  BUFFS_LIST,
  BUFF_TARGETS,
  BUFF_UNITS,
} from "modules/spells/utils/spell.constants";
import { getPropertySign } from "modules/spells/utils/spell.helpers";
import { Selector, SvgIcon } from "utils/UI";
import { Flex } from "utils/styles/flexKit.styled";
import { IconWrap, Input, Title } from "./CustomBuffItem.styled";
import useCustomBuffItem from "./useCustomBuffItem.hook";

const CustomBuffItem = ({ buff }) => {
  const { currentBuff, handleBuff, handleDeleteBuff } = useCustomBuffItem(buff);
  const { value, property, target, unitFlag } = currentBuff;
  return (
    <Flex gap={8}>
      <Selector
        id="property"
        value={BUFFS_LIST[property]}
        options={BUFFS_LIST}
        width="260px"
        handleSelector={handleBuff}
      />
      <Selector
        id="targetType"
        value={BUFF_UNITS[unitFlag]}
        options={BUFF_UNITS}
        width="180px"
        handleSelector={handleBuff}
      />
      <Selector
        id="target"
        value={BUFF_TARGETS[target]}
        options={BUFF_TARGETS}
        width="190px"
        handleSelector={handleBuff}
      />
      <Flex gap="8px">
        <Input
          id="value"
          value={value[0]}
          isBuff={value[0]}
          onChange={(e) => {
            handleBuff(e.currentTarget.value, "value");
          }}
          isNegative={value[0]}
        />
        <Title isNegative={value[0]}>{getPropertySign(property)}</Title>
      </Flex>
      <IconWrap onClick={handleDeleteBuff}>
        <SvgIcon svgName="icon-x-close" size="16px" />
      </IconWrap>
    </Flex>
  );
};

export default CustomBuffItem;
