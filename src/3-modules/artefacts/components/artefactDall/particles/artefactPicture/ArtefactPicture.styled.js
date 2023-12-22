import styled from "@emotion/styled";

export const ArtefactBg = styled.div(
  {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  (props) => ({
    backgroundImage:
      props.isAncient &&
      `radial-gradient(circle, ${props.theme.colors.orange} 0%, transparent 100%);`,
  })
);

export const Picture = styled.div(
  {
    cursor: "pointer",
  },
  (props) => ({
    filter: !props.isActive && "grayscale(80%) brightness(80%)",
    background: props.background.image,
    width: props.background.width,
    height: props.background.height,
    ":hover": {
      opacity: 0.8,
      filter: ` drop-shadow(0px 0px 3px ${props.theme.colors.text})`,
    },
  })
);

export const IconWrap = styled.div(
  {
    position: "absolute",
    bottom: 0,
    left: 0,
    transform: "translate(-40%, 30%)",
    cursor: "pointer",
    ":hover": {
      scale: "1.05",
    },
  },
  (props) => ({
    stroke: props.theme.colors.red,
  })
);

export const Place = styled.div({
  cursor: "pointer",
  width: "100%",
  height: "100%",
});
