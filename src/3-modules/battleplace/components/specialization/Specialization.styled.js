import styled from "@emotion/styled";

export const Container = styled.div({
  width: "fit-content",
  cursor: "pointer",
  alignSelf: "center",
  textAlign: "center",
});

export const Wrap = styled.div(
  {
    margin: "0 auto",
    width: "fit-content",
    height: "fit-content",
    position: "relative",
  },
  (props) => ({
    filter: props.isActive
      ? ` drop-shadow(0px 0px 3px ${props.theme.colors.textAcent})`
      : "grayscale(80%) brightness(70%)",
  })
);

export const Title = styled.p(
  {
    marginBottom: "8px",
    fontSize: "12px",
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);

export const Level = styled.span(
  {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translate(-50%, 50%)",
    padding: "2px",
    width: "30px",
    borderRadius: "4px",
    textAlign: "center",
    fontSize: "12px",
    cursor: "pointer",
  },
  (props) => ({
    color: props.theme.colors.secondary,
    backgroundColor: props.theme.colors.text,
  })
);
