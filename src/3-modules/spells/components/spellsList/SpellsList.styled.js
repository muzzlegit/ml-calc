import styled from "@emotion/styled";

export const Title = styled.h2(
  {
    margin: "12px 0 6px 0",
    fontSize: "16px",
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);

export const List = styled.div({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  cursor: "pointer",
});

export const Spell = styled.div(
  {
    position: "relative",
  },
  (props) => ({
    filter: props.isActive ? "none" : "grayscale(80%) brightness(60%)",
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
    color: props.theme.colors.text,
  })
);
