import styled from "@emotion/styled";

export const ElementItem = styled.div(
  {
    padding: "4px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    fontSize: "12px",
  },
  (props) => ({
    color: props.theme.colors.orange,
  })
);

export const LevelList = styled.ul(
  {
    marginTop: "8px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: "6px",
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);

export const Wrap = styled.div(
  {
    textAlign: "center",
  },
  (props) => ({
    opacity: props.isActive ? 1 : 0.5,
    filter: props.isActive
      ? `drop-shadow(0px 2px 3px ${props.theme.colors.black})`
      : "grayscale(80%) brightness(80%)",
  })
);
