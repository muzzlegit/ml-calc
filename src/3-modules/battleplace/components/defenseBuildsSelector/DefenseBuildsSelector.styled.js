import styled from "@emotion/styled";

export const Build = styled.div(
  {
    position: "relative",
    cursor: "pointer",
  },
  (props) => ({
    filter: props.isActive
      ? `drop-shadow( 0 0 6px ${props.theme.colors.textAcent})`
      : "none",
  })
);

export const Level = styled.div(
  {
    width: "12px",
    cursor: "pointer",
  },
  (props) => ({
    color: props.theme.colors[props.isActive ? "orange" : "textAcent"],
  })
);

export const Input = styled.input(
  {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 2,
    padding: "2px",
    width: "20px",
    transition: "opacity 400ms ease-in-out",
    textAlign: "center",
    fontSize: "12px",
    fontWeight: 600,
    border: "none",
    outline: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
  (props) => ({
    opacity: props.isActive ? 1 : 0,
    transform: props.isActive
      ? "translate(-50%, -220%)"
      : "translate(-50%, -50%)",
    backgroundColor: props.theme.colors.primary,
    color: props.theme.colors.text,
  })
);
