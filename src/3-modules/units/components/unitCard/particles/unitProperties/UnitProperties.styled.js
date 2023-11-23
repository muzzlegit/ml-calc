import styled from "@emotion/styled";

export const Container = styled.div(
  {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: "start",
    fontSize: "10px",
  },

  (props) => ({
    color: props.theme.colors.text,
  })
);

export const Property = styled.span(
  {
    display: "inline-block",
    maxWidth: "80px",
    overflow: "hidden",
  },
  (props) => ({
    color: props.theme.colors[props.color],
  })
);

export const PropertyRate = styled.div({}, (props) => ({
  color: props.theme.colors[props.color],
}));
