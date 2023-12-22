import styled from "@emotion/styled";

export const Container = styled.div({
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  borderRadius: "16px",
  backdropFilter: " blur(2px)",
  outline: "1px solid black",
  backgroundColor: "rgba(41, 75, 119, 0.6)",
  // backgroundColor: "rgba(17, 23, 40, 0.7)",
});

export const Wrap = styled.div({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",

  gap: "20px",
});
