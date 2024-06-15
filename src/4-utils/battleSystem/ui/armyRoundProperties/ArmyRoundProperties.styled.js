import styled from "@emotion/styled";

export const Container = styled.div(
  {
    width: "100%",
    borderRadius: "8px",
  },
  (props) => ({
    border: `1px solid ${props.theme.colors.text}`,
  })
);

export const Wrap = styled.div(
  {
    padding: "8px",
    height: "100%",
    fontSize: "12px",
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);

export const Button = styled.button(
  {
    padding: "2px",
    width: "100%",
    height: "14px",
    cursor: "pointer",
    fontSize: "10px",
    border: "none",
    backgroundColor: "transparent",
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);

export const Text = styled.div({}, (props) => ({
  color: props.theme.colors[props.textColor ?? "text"],
}));
