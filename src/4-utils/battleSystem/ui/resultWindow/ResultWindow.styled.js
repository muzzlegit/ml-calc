import styled from "@emotion/styled";

export const Container = styled.div({
  padding: "8px",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  gap: "8px",
  backdropFilter: " blur(2px)",
  backgroundColor: "rgba(41, 75, 119, 0.6)",
  overflow: "auto",
});

export const Wrap = styled.div({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  gap: "8px",
});
