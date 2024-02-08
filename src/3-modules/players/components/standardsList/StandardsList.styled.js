import styled from "@emotion/styled";

export const Container = styled.div({
  marginTop: "16px",
  textAlign: "center",
});

export const Title = styled.p(
  {
    // marginBottom: "8px",
    fontSize: "14px",
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);

export const List = styled.div({
  position: "relative",
  padding: "0 4px",
  width: "106px",
  height: "130px",
  display: "grid",
  gridTemplateColumns: "repeat(3,31px)",
  gridTemplateRows: "repeat(3,31px)",
  columnGap: "3px",
  rowGap: "12px",
  alignContent: "start",
  justifyContent: "start",
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
