import styled from "@emotion/styled";

export const Container = styled.div(
  {
    position: "relative",
    padding: "8px",
    minWidth: "764px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    borderRadius: "4px",
  },
  (props) => ({
    border: `1px solid ${props.theme.colors.text}`,
  })
);

export const Title = styled.span(
  {
    fontSize: "16px",
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);

export const Button = styled.button(
  {
    position: "absolute",
    right: 0,
    transform: "translate(-45%, 0)",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
  },
  (props) => ({
    stroke: props.theme.colors.green,
    backgroundColor: props.theme.colors.secondary,
  })
);
