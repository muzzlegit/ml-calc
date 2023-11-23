import styled from "@emotion/styled";

export const Container = styled.div(
  {
    position: "relative",
  },
  (props) => ({
    filter: props.isActive ? "none" : "grayscale(70%) brightness(60%)",
    width: props.width,
    height: props.height,
  })
);

export const Image = styled.div(
  {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  },
  (props) => ({
    width: props.width,
    height: props.height,
    background: props.background,
  })
);
