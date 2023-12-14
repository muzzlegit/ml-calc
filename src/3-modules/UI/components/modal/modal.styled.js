import styled from "@emotion/styled";

export const Backdrop = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 9999,
  width: "100%",
  height: "100%",
  padding: "8px",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
