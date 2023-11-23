import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const Title = styled.div(
  {
    fontSize: "16px",
    fontWeight: 600,
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);

export const Checker = styled.div(
  {
    position: "relative",
    width: "18px",
    height: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    cursor: "pointer",
  },
  (props) => ({
    backgroundColor: props.theme.colors.secondary,
    fill: "none",
    stroke: props.theme.colors.orange,
  })
);

export const IconBox = styled.div(
  {
    position: "absolute",
    top: "-2px",
    left: "-2px",
    zIndex: 3,
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 300ms ease-in-out",
  },
  (props) => ({ opacity: props.isChecked && 1 })
);
