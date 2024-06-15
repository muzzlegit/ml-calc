import styled from "@emotion/styled";

const variants = {
  player: "green",
  enemy: "red",
  all: "textAcent",
  player_ally: "orange",
  common: "text",
};
export const Word = styled.div(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    gap: "8px",
    fontSize: "12px",
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);
export const Input = styled.input(
  {
    padding: "1px 2px",
    width: "40px",
    borderRadius: "4px",
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: "12px",
    outline: "none",
  },
  (props) => ({
    border: `1px solid ${props.theme.colors.textAcent}`,
    color: props.theme.colors[variants[props.variant]],
  })
);
