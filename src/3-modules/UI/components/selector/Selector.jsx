import PropTypes from "prop-types";
import { useState } from "react";
import SvgIcon from "../svgIcon/SvgIcon";
import { Container, Item, List, Title, Wrap } from "./Selector.styled";

const Selector = ({ title, value, options, handleSelector }) => {
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
      </Wrap>
      {isOpen ? (
        <List>
          {options.map((option) => {
            return (
              <Item
                key={option}
                onClick={() => {
                  handleSelector(option);
                }}
                isActive={option === value}
              >
                {option}
              </Item>
            );
          })}
        </List>
      ) : null}
    </Container>
  );
};

export default Selector;

Selector.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  handleSelector: PropTypes.func,
};
