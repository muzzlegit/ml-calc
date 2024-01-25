import styled from "@emotion/styled";

export const Container = styled.button(
  {
    padding: "2px 6px",
    width: "112px",
    fontSize: "12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  (props) => ({
    color: props.theme.colors.text,
    backgroundColor: props.theme.colors.secondary,
  })
);
