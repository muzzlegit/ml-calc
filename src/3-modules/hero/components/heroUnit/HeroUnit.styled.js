import styled from "@emotion/styled";

export const Container = styled.div(
  {
    padding: "8px",
    borderRadius: "6px",
  },
  (props) => ({
    backgroundColor: props.theme.colors.secondary,
  })
);

export const PictureBox = styled.div(
  {
    position: "relative",
    cursor: "pointer",
  },
  (props) => ({
    height: props.height,
    width: props.width,
  })
);
export const Picture = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});
