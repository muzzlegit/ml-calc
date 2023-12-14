import styled from "@emotion/styled";

export const Container = styled.div(
  {
    width: "fit-content",
    display: "flex",
    alignItems: "center",
  },
  (props) => ({
    gap: props.gap && "10px",
  })
);

export const List = styled.ul(
  {
    position: "absolute",
    top: "110%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 6,
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "4px",
    border: "1px solid",
    borderRadius: "4px",
  },
  (props) => ({
    minWidth: props.width,
    backgroundColor: props.theme.colors.secondary,
    borderColor: props.theme.colors.secondary,
  })
);

export const Item = styled.li(
  {
    width: "100%",
    fontSize: "14px",
    cursor: "pointer",
    textAlign: "center",
    whiteSpace: "nowrap",
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
    position: "relative",
    padding: "4px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    fontSize: "14px",
    fontWeight: 500,
    borderRadius: "4px",
    cursor: "pointer",
    fill: "none",
    whiteSpace: "nowrap",
  },
  (props) => ({
    minWidth: props.width,
    backgroundColor: props.theme.colors.secondary,
    color: props.theme.colors.text,
    stroke: props.theme.colors.orange,
  })
);

export const Title = styled.div(
  {
    fontSize: "16px",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);
