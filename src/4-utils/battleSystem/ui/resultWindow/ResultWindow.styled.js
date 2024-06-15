import styled from "@emotion/styled";

export const Container = styled.div({
  padding: "16px",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  backdropFilter: " blur(2px)",
  backgroundColor: "rgba(41, 75, 119, 0.6)",
  overflow: "auto",
});

export const Round = styled.div(
  {
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    borderRadius: "8px",
  },
  (props) => ({
    border: `1px solid ${props.theme.colors.text}`,
  })
);

export const AmountBox = styled.div(
  {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 2,
    padding: "10px 4px",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    gap: "2px",
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);

export const Amount = styled.div(
  {
    padding: "2px ",
    width: "fit-content",
    borderRadius: "4px",
    fontSize: "10px",
  },
  (props) => ({
    color: props.isDecrement ? props.theme.colors.red : props.theme.colors.text,
    backgroundColor: props.theme.colors.secondary,
  })
);
export const Text = styled.div({}, (props) => ({
  color: props.theme.colors[props.textColor ?? "text"],
}));
