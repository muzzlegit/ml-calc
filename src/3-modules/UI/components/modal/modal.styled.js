import styled from "@emotion/styled";

export const Backdrop = styled.div(
  {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 999,
    width: "100%",
    height: "100%",
    padding: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  (props) => ({
    backgroundColor: props.theme.colors.backdrop,
  })
);
export const ModalBox = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
