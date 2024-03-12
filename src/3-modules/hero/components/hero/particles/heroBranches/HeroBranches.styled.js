import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  gap: "8px",
});

export const BranchBox = styled.div({
  marginTop: "4px",
  minWidth: "82px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
});

export const SkillBox = styled.div(
  {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  (props) => ({
    background: props.background,
    width: props.width,
    height: props.height,
    filter: !props.isActive && "grayscale(50)",
  })
);

export const SkillBtn = styled.button(
  {
    position: "absolute",
    bottom: "-23%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: 0,
    padding: "1px 2px",
    width: "30px",
    height: "16px",
    lineHeight: 0,
    border: "1px solid darkgray",
    borderRadius: "3px",
    fontSize: "12px",
  },
  (props) => ({
    backgroundColor:
      props.level === 5 ? props.theme.colors.text : props.theme.colors.green,
  })
);
