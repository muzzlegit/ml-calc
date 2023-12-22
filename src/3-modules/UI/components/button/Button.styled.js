import styled from "@emotion/styled";

export const Btn = styled.button(
  {
    marginTop: "12px",
    padding: "2px 4px",
    textAlign: "center",
    border: "none",
    borderRadius: "4px",
    transition: "color 300ms ease-in-out",
  },
  (props) => ({
    ":hover": {
      cursor: props.isActive ? "pointer" : "default",
      color: props.theme.colors[props.isActive ? "orange" : "text"],
    },
    backgroundColor: props.theme.colors.textAcent,
    color: props.theme.colors[props.isActive ? "secondary" : "text"],
    ...props.addStyles,
  })
);
