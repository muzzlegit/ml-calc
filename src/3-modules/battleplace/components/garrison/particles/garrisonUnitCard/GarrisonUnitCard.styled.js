import styled from "@emotion/styled";

export const Container = styled.div(
  {
    width: "120px",
    height: "180px",
    display: "flex",
    padding: "4px",
    boxSizing: "border-box",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    gap: "8px",
    borderRadius: "6px",
  },
  (props) => ({
    boxShadow: props.isActive ? props.theme.shadows.card : "none",
    backgroundColor: props.theme.colors.secondary,
  })
);

export const Level = styled.div(
  {
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontSize: "12px",
  },
  (props) => ({
    color: props.theme.colors.textAcent,
  })
);

export const Properties = styled.div({
  boxSizing: "border-box",
  width: "100%",
  padding: "8px",
  cursor: "pointer",
});

export const ClickWrap = styled.div({
  cursor: "pointer",
});
