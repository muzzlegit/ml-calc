import styled from "@emotion/styled";

export const Container = styled.div(
  {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  (props) => ({
    width: props.width,
    height: props.height,
    background: props.background,
    ...props.addStyles,
  })
);
