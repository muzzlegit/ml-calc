import PropTypes from "prop-types";
import { useState } from "react";
import SvgIcon from "../svgIcon/SvgIcon";
import { Container, Item, List, Title, Wrap } from "./Selector.styled";

const Selector = ({
  id,
  title,
  value,
  options,
  handleSelector,
  width,
  isActive = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
      gap={title}
    >
      {title ? <Title>{title}</Title> : null}
      <Wrap width={width}>
        <span>{value}</span>
        <SvgIcon svgName="icon-arrow-down" size="14px" />
        {isOpen && isActive ? (
          <List width={width}>
            {Object.keys(options).map((option) => {
              return (
                <Item
                  key={option}
                  id={id}
                  onClick={() => {
                    handleSelector(option, id);
                  }}
                  isActive={option === value}
                >
                  {options[option]}
                </Item>
              );
            })}
          </List>
        ) : null}
      </Wrap>
    </Container>
  );
};

export default Selector;

Selector.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.string),
  handleSelector: PropTypes.func,
  width: PropTypes.string,
  isActive: PropTypes.bool,
};
