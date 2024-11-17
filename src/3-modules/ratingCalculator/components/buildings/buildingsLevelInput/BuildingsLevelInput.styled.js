import styled from "@emotion/styled";

export const Wrap = styled.div(
  {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "14px",
  },
  (props) => ({
    color: props.theme.colors.text,
    opacity: props.isActive ? 1 : "0.5",
  })
);

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
