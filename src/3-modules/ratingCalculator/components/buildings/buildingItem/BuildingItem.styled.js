import styled from "@emotion/styled";

export const Wrap = styled.div(
  {
    marginBottom: "4px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    gap: "2px",
    fontSize: "12px",
  },
  (props) => ({
    opacity: props.isActive ? 1 : "0.5",
    color: props.theme.colors.orange,
    filter: props.isActive
      ? `drop-shadow(0px 2px 3px ${props.theme.colors.black})`
      : "grayscale(80%) brightness(80%)",
  })
);
export const InputsGrid = styled.div(
  {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr",
    gap: "4px",
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);
