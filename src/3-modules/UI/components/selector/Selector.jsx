import PropTypes from "prop-types";
import { useState } from "react";
import SvgIcon from "../svgIcon/SvgIcon";
import { Container, Item, List, Title, Wrap } from "./Selector.styled";

const Selector = ({
  title,
  value,
  options,
  handleSelector,
  isActive = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
    >
      <Title>{title}</Title>
      <Wrap>
        <span>{value}</span>
        <SvgIcon svgName="icon-arrow-down" size="14px" />
        {isOpen && isActive ? (
          <List>
            {Object.keys(options).map((option) => {
              return (
                <Item
                  key={option}
                  id={option}
                  onClick={() => {
                    handleSelector(option);
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
  isActive: PropTypes.bool,
};
