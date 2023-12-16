import styled from "@emotion/styled";

export const Container = styled.div({
  width: "fit-content",
  padding: "4px 0",
});

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
    marginBottom: "4px",
    opacity: 0,
    transition: "opacity 500ms ease-in-out",
  },
  (props) => ({
    opacity: props.isActive && 1,
    stroke: props.theme.colors.red,
  })
);

export const IconWrap = styled.div({
  cursor: "pointer",
});
