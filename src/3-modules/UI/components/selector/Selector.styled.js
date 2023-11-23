import styled from "@emotion/styled";

export const Container = styled.div({
  position: "relative",
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export const List = styled.ul(
  {
    position: "absolute",
    top: "110%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 3,
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "4px",
    width: "100px",
    border: "1px solid",
    borderRadius: "8px",
  },
  (props) => ({
    backgroundColor: props.theme.colors.secondary,
    borderColor: props.theme.colors.secondary,
  })
);

export const Item = styled.li(
  {
    width: "100%",
    fontSize: "12px",
    cursor: "pointer",
    textAlign: "center",
  },
  (props) => ({
    ":hover,:focus": {
      color: props.theme.colors.textAcent,
    },
    color: props.theme.colors.text,
  })
);

export const Wrap = styled.div(
  {
    width: "fit-content",
    padding: "4px 12px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "14px",
    fontWeight: 500,
    borderRadius: "8px",
    cursor: "pointer",
    fill: "none",
  },
  (props) => ({
    backgroundColor: props.theme.colors.secondary,
    color: props.theme.colors.text,
    stroke: props.theme.colors.orange,
  })
);

export const Title = styled.div(
  {
    fontSize: "16px",
    fontWeight: 600,
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);
