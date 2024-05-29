import styled from "@emotion/styled";

export const Button = styled.button(
  {
    width: "80px",
    height: "120px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "20px",
    border: "none",
    transition:
      "color 300ms ease-in-out,font-size 350ms ease-in-out,width 350ms ease-in-out, height 350ms ease-in-out,  box-shadow  350ms ease-in-out, opacity  350ms ease-in-out",
  },
  (props) => ({
    color: props.theme.colors.text,
    // border: `1px solid ${props.theme.colors.text}`,
    backgroundColor: props.theme.colors.secondary,
    ":hover": {
      width: "74px",
      height: "114px",
      fontSize: "16px",
      border: "none",
      color: props.theme.colors.orange,
      boxShadow: props.theme.shadows.card,
    },
  })
);
