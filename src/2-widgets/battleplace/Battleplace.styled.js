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
    padding: "27px 8px 8px 8px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    boxSizing: "border-box",
    borderRadius: "8px",
  },
  (props) => ({
    backgroundColor: props.theme.colors.secondary,
  })
);
