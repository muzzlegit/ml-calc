import styled from "@emotion/styled";

export const Container = styled.div({
  textAlign: "center",
});

export const Title = styled.p(
  {
    marginBottom: "4px",
    fontSize: "14px",
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);

export const List = styled.div({
  position: "relative",
  width: "105px",
  height: "142px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "start",
  // alignItems: "start",
  gap: "6px",
});

export const Cell = styled.div(
  {
    position: "relative",
    width: "31px",
    height: "31px",
    cursor: "pointer",
    "&:hover": {
      filter: "brightness(150%)",
    },
  },
  (props) => ({
    background: props.background,
    filter: !props.isActive && "grayscale(70%) brightness(70%)",
  })
);

export const Quantity = styled.p(
  {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translate(-50%,70%)",
    padding: "1px 2px",
    borderRadius: "4px",
    fontSize: "12px",
  },
  (props) => ({
    color: props.theme.colors.secondary,
    backgroundColor: props.theme.colors.text,
  })
);
