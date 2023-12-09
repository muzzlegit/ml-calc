import styled from "@emotion/styled";

export const Container = styled.div(
  {
    boxSizing: "border-box",
    width: "100%",
    padding: "8px",
    borderRadius: "8px",
  },
  (props) => ({
    border: `2px solid ${props.theme.colors.secondary}`,
  })
);

export const Wrap = styled.div(
  {
    padding: "10px 4px 8px 4px",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 2fr",
    gap: "8px",
    boxSizing: "border-box",
    borderRadius: "8px",
  },
  (props) => ({
    backgroundColor: props.theme.colors.secondary,
  })
);
