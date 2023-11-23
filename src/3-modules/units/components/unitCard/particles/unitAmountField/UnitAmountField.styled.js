import styled from "@emotion/styled";

export const AmountField = styled.input(
  {
    padding: "1px",
    height: "16px",
    width: "100px",
    textAlign: "center",
    fontSize: "12px",
    fontWeight: 500,
    borderRadius: "6px",
    outline: "none",
    textOverflow: "ellipsis",
  },
  (props) => ({
    border: `1px solid ${props.theme.colors.primary}`,
    color: props.theme.colors.text,
    backgroundColor: props.theme.colors.primary,
  })
);
