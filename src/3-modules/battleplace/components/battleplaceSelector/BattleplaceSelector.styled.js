import styled from "@emotion/styled";

export const Container = styled.div(
  {
    transition: "opacity 350ms ease-in-out",
  },
  (props) => ({
    pointerEvents: props.isActive,
    opacity: props.isActive ? 1 : 0.3,
  })
);
