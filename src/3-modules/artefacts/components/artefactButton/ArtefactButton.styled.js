import styled from "@emotion/styled";

export const Container = styled.div(
  {
    zIndex: 5,
    cursor: "pointer",
  },
  (props) => ({
    position: props.absolute && "absolute",
    transform: props.absolute && "translate(-40%, -40%)",
    top: props.top,
    botton: props.botton,
    left: props.left,
    right: props.right,
    filter: !props.isActive && "grayscale(100%) brightness(50%)",
  })
);
