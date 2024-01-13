import styled from "@emotion/styled";

export const Container = styled.div({});

export const List = styled.div(
  {
    marginBottom: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "8px",
    fontSize: "14px",
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);

export const Value = styled.span({}, (props) => ({
  color: props.theme.colors[props.isNegative ? "red" : "green"],
}));

export const Sign = styled.span(
  {
    width: "20px",
    textAlign: "center",
  },
  (props) => ({
    color: props.theme.colors.text,
  })
);

export const IconWrap = styled.div(
  {
    cursor: "pointer",
  },
  (props) => ({
    stroke: props.theme.colors.red,
  })
);

export const Input = styled.input(
  {
    width: "40px",
    textAlign: "center",
    backgroundColor: "transparent",
    borderRadius: "6px",
    outline: "none",
  },
  (props) => ({
    color: props.theme.colors.text,
    border: `1px solid ${props.theme.colors.textAcent}`,
  })
);
