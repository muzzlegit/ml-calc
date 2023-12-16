import styled from "@emotion/styled";

export const Container = styled.div(
  {
    margin: "16px 0 0 5px",
    opacity: 0.2,
    transition: "opacity 500ms ease-in-out",
  },
  (props) => ({
    opacity: props.isHero && 1,
    filter:
      props.isHero && ` drop-shadow(0px 0px 3px ${props.theme.colors.text})`,
  })
);
