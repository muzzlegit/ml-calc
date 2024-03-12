import styled from "@emotion/styled";

export const Container = styled.div(
  {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);

export const Input = styled.input(
  {
    padding: "1px 4px",
    height: "20px",
    width: "36px",
    color: "inherit",
    borderRadius: "4px",
    border: "none",
    outline: "none",
    textAlign: "center",
  },
  (props) => ({
    color: props.theme.colors[Number(props.isLimit) < 50 ? "red" : "text"],
    backgroundColor: props.theme.colors.secondary,
  })
);
