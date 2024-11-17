import styled from "@emotion/styled";

export const Title = styled.h2(
  {
    margin: "12px 0 6px 0",
    fontSize: "16px",
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);

export const List = styled.div({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  cursor: "pointer",
});
