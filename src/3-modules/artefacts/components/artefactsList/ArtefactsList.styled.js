import styled from "@emotion/styled";

export const List = styled.div({
  padding: "8px",
  width: "100px",
  height: "353px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  gap: "8px",
  scrollbarGutter: "auto",
  overflow: "auto",
});

export const Artefact = styled.div(
  {
    cursor: "pointer",
  },
  (props) => ({
    ":hover": {
      filter: ` drop-shadow(0px 0px 3px ${props.theme.colors.textAcent})`,
      opacity: 0.9,
    },
  })
);
