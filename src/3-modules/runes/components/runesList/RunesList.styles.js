import styled from "@emotion/styled";

export const Container = styled.div({
  position: "relative",
  padding: "8px",
  display: "flex",
  alignItems: "start",
  gap: "8px",
});
export const Wrap = styled.div({
  textAlign: "center",
});
export const Rune = styled.div({}, (props) => ({
  filter: props.isActive
    ? `drop-shadow(0px 0px ${props.isDelete ? "6px" : "3px"}
        ${props.theme.colors[props.isDelete ? "red" : "black"]})`
    : "grayscale(100%)",
}));

export const AmountInput = styled.input(
  {
    marginTop: "8px",
    padding: "1px",
    height: "16px",
    width: "40px",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: 600,
    borderRadius: "6px",
    outline: "none",
    textOverflow: "ellipsis",
  },
  (props) => ({
    border: `1px solid ${props.theme.colors.primary}`,
    color: props.theme.colors.text,
    backgroundColor: "transparent",
  })
);

export const IconWrap = styled.div(
  {
    position: "absolute",
    top: 0,
    right: 0,
    transform: "translate(20%, -20%)",
    cursor: "pointer",
    ":hover": {
      scale: "1.05",
    },
  },
  (props) => ({
    stroke: props.theme.colors.red,
  })
);
