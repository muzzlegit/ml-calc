import styled from "@emotion/styled";

export const Container = styled.div({}, (props) => ({
  width: props.width,
  height: props.height,
  background: props.background,
  ...props.addStyles,
}));
