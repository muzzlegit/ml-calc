import styled from "@emotion/styled";

export const Btn = styled.button(
  {
    marginTop: "12px",
    padding: "2px 4px",
    textAlign: "center",
    border: "none",
    borderRadius: "4px",
    transition: "color 300ms ease-in-out",
    backgroundColor: "transparent",
  },
  (props) => ({
    ":hover": {
      cursor: "pointer",
      color: props.theme.colors.orange,
    },
    color: props.theme.colors.textAcent,
    border: `1px solid ${props.theme.colors.textAcent}`,
    ...props.addStyles,
  })
);
