import styled from "@emotion/styled";

export const Container = styled.div({});

export const Title = styled.h3(
  {
    marginBottom: "4px",
    textAlign: "center",
    fontSize: "14px",
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);

export const SelectorWrap = styled.div(
  {
    padding: "4px",
  },
  (props) => ({
    opacity: props.isActive ? 1 : 0.5,
    stroke: props.theme.colors.red,
  })
);

export const IconWrap = styled.div({
  cursor: "pointer",
});
