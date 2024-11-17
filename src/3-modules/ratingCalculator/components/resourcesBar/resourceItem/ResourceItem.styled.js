import styled from "@emotion/styled";

export const Input = styled.input(
  {
    padding: "1px 2px",
    width: "64px",
    borderRadius: "4px",
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: "12px",
    outline: "none",
  },
  (props) => ({
    border: `1px solid ${props.theme.colors.textAcent}`,
  })
);
