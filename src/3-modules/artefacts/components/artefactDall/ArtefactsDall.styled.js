import styled from "@emotion/styled";

export const Container = styled.div({
  position: "relative",
  width: "298px",
  height: "515px",
});

export const Cell = styled.div(
  {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition:
      "background-color 300ms ease-in-out, box-shadow 300ms ease-in-out",
  },
  (props) => ({
    top: props.top,
    left: props.left,
  })
);
export const Frame = styled.div(
  {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "filter 500ms ease-in-out",
  },
  (props) => ({
    background: props.background,
    width: props.width,
    height: props.height,
    filter:
      props.isActive && ` drop-shadow(0px 0px 3px ${props.theme.colors.text})`,
  })
);
