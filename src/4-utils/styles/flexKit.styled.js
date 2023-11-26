import styled from "@emotion/styled";

export const Flex = styled.div(
  {
    display: "flex",
    alignItems: "center",
  },
  (props) => ({
    gap: props.gap,
    ...props.additionStyles,
  })
);

export const FlexCenter = styled.div(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  (props) => ({
    gap: props.gap,
    ...props.additionStyles,
  })
);

export const FlexStart = styled.div(
  {
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
  },
  (props) => ({
    gap: props.gap,
    ...props.additionStyles,
  })
);

export const FlexBetween = styled.div(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  (props) => ({
    gap: props.gap,
    ...props.additionStyles,
  })
);
export const FlexCol = styled.div(
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  (props) => ({
    gap: props.gap,
    ...props.additionStyles,
  })
);
export const FlexColCenter = styled.div(
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
  },
  (props) => ({
    gap: props.gap,
    ...props.additionStyles,
  })
);
