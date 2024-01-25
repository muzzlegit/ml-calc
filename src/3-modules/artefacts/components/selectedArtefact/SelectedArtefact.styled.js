import styled from "@emotion/styled";

export const Container = styled.div({
  padding: "8px",
  textAlign: "center",
  // outline: "1px solid black",
});

export const ArtefactWrap = styled.div(
  {
    position: "relative",
    width: "90px",
    height: "90px",
    borderRadius: "8px",
    transition: "box-shadow 300ms ease-in-out",
  },
  (props) => ({
    boxShadow:
      props.isActive &&
      `0 0 2px 1px black, 0 0 14px 4px${props.theme.colors.text}`,
    border: !props.isActive && `1px solid ${props.theme.colors.primary}`,
  })
);

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
      `radial-gradient(circle, ${props.theme.colors.orange} 20%, transparent 90%);`,
  })
);

export const Picture = styled.div({}, (props) => ({
  background: props.background.image,
  width: props.background.width,
  height: props.background.height,
  filter: ` drop-shadow(0px 0px 3px ${props.theme.colors.black})`,
}));
