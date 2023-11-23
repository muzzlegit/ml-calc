import styled from "@emotion/styled";

export const Container = styled.div(
  {
    overflow: "hidden",
  },
  (props) => ({
    width: props.width,
    height: props.height,
    background: props.background,
  })
);
