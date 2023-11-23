import styled from "@emotion/styled";

export const Svg = styled.svg(
  {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    stroke: "inherit",
    fill: "inherit",
  },
  (props) => ({
    width: props.width,
    height: props.height,
  })
);
