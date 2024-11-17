import styled from "@emotion/styled";

export const Level = styled.div({
  width: "46px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "14px",
});

export const Input = styled.input(
  {
    padding: "1px 2px",
    width: "30px",
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
