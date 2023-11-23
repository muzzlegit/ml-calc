import styled from "@emotion/styled";

export const Container = styled.div(
  {
    padding: "8px",
    borderRadius: "8px",
  },
  (props) => ({
    border: `2px solid${props.theme.colors.secondary}`,
  })
);
