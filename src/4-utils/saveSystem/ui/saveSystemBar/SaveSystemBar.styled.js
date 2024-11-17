import styled from "@emotion/styled";

export const Container = styled.div(
  {
    padding: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    borderRadius: "8px",
    fontSize: "14px",
  },
  (props) => ({
    color: props.theme.colors.text,
    border: `2px solid ${props.theme.colors.secondary}`,
  })
);

export const Input = styled.input(
  {
    padding: "2px 8px",
    fontSize: "14px",
    borderRadius: "4px",
    outline: "none",
    border: "none",
  },
  (props) => ({
    backgroundColor: props.theme.colors.secondary,
    color: props.theme.colors.text,
  })
);
