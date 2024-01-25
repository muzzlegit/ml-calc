import styled from "@emotion/styled";

export const List = styled.div({
  padding: "8px",
  width: "301px",
  maxHeight: "284px",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "start",
  justifyContent: "start",
  gap: "8px",
  overflowY: "auto",
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
