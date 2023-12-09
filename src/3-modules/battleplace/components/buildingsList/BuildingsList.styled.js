import styled from "@emotion/styled";

export const BuildImgBox = styled.div(
  {
    position: "relative",
    borderRadius: "4px",
    backgroundColor: "grey",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0px 0px 4px 4px rgba(255,0,0,.4)",
      backgroundColor: "#4a5153",
    },
  },
  (props) => ({
    background: props.background,
  })
);
export const LevelLabel = styled.div(
  {
    position: "absolute",
    top: "0",
    right: "0",
    transform: "translate(0, -50%)",
    zIndex: 5,
    width: "13px",
    height: "13px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    fontSize: "10px",
    color: "white",
  },
  (props) => ({
    backgroundColor: props.border === 8 ? "none" : "#212425",
    border: props.border === 8 ? null : "1px solid #FFFFFF",
  })
);
export const Quantity = styled.span(
  {
    position: "absolute",
    bottom: "-10px",
    right: "0",
    width: "33px",
    height: "13px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "340%",
    fontSize: "10px",
    color: "white",
    backgroundColor: "#212425",
  },
  (props) => ({
    border: props.border === 8 ? null : "1px solid #FFFFFF",
    background: props.background,
  })
);
