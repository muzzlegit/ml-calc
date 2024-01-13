import styled from "@emotion/styled";

export const Container = styled.div({}, (props) => ({
  transition: "opacity 350ms ease-in-out",
  pointerEvents: props.isActive ? "all" : "none",
  opacity: props.isActive ? 1 : 0.3,
}));
