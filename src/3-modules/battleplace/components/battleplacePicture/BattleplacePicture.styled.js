import styled from "@emotion/styled";

export const Container = styled.div({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const FieldPicture = styled.div({}, (props) => ({
  width: props.width,
  height: props.height,
  background: props.background,
  filter: `drop-shadow(1px 1px 2px rgba(255,255,255,0.8))`,
}));
export const PlacePicture = styled.div(
  {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    filter: `drop-shadow(3px 3px 5px rgba(0,0,0,0.8))`,
  },
  (props) => ({
    width: props.width,
    height: props.height,
    background: props.background,
  })
);
