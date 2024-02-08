import styled from "@emotion/styled";

const variants = {
  player: "green",
  enemy: "red",
  all: "orange",
  common: "text",
};

export const Container = styled.div({
  display: "flex",
  fontSize: "12px",
});
export const Title = styled.div(
  {
    minWidth: "20px",
  },
  (props) => ({
    color: props.theme.colors[variants[props.variant]],
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
