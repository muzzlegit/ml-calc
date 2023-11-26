import styled from "@emotion/styled";

export const Container = styled.div(
  {
    maxWidth: "120px",
    height: "342px",
    display: "flex",
    padding: "8px",
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

export const ImageWrap = styled.div({
  cursor: "pointer",
});

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
