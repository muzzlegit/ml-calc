import { Container, Input } from "./FallbackInput.styled";
import useFallbackInput from "./useFallbackInput.hook";

const FallbackInput = () => {
  const { fallback, handleFallbackValue, handleBlur } = useFallbackInput();
  return (
    <Container>
      <div>Отступление:</div>
      <Input
        type="text"
        value={fallback}
        isLimit={fallback}
        onChange={(e) => {
          handleFallbackValue(e.currentTarget.value);
        }}
        onBlur={handleBlur}
      />
      <span>%</span>
    </Container>
  );
};

export default FallbackInput;
