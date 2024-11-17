import styled from "@emotion/styled";

export const Input = styled.input(
  {
    padding: "1px 2px",
    width: "40px",
    borderRadius: "4px",
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: "12px",
    outline: "none",
  },
  (props) => ({
    border: `1px solid ${props.theme.colors.textAcent}`,
    color:
      props.theme.colors[
        props.isNegative < 0 ? "red" : props.isNegative === 0 ? "text" : "green"
      ],
  })
);

export const Title = styled.div(
  {
    minWidth: "20px",
  },
  (props) => ({
    color:
      props.theme.colors[
        props.isNegative < 0 ? "red" : props.isNegative === 0 ? "text" : "green"
      ],
  })
);

export const IconWrap = styled.div(
  {
    cursor: "pointer",
    ":hover": {
      scale: "1.2",
    },
  },
  (props) => ({
    stroke: props.theme.colors.red,
  })
);
