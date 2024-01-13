import styled from "@emotion/styled";

export const List = styled.div({
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
  cursor: "pointer",
});

export const Spell = styled.div(
  {
    position: "relative",
  },
  (props) => ({
    filter: props.isActive ? "none" : "grayscale(70%)",
  })
);

export const Level = styled.span(
  {
    position: "absolute",
    bottom: "-20%",
    left: " 50%",
    transform: "translate(-50%, 0)",
    padding: "2px",
    fontSize: "12px",
  },
  (props) => ({
    color: props.theme.colors.orange,
  })
);
