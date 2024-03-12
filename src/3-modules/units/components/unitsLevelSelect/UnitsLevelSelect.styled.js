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

export const Button = styled.button(
  {
    padding: "2px",
    width: "18px",
    height: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "4px",
    border: "1px solid",
  },
  (props) => ({
    color: props.theme.colors[props.isActive ? "orange" : "text"],
    borderColor:
      props.theme.colors[props.isActive ? "secondary" : "textActive"],
    backgroundColor:
      props.theme.colors[props.isActive ? "secondary" : "primary"],
  })
);
