import { Input, Word } from "./ArtefactRunesWords.styled";
import useArtefactRunesWords from "./useArtefactRunesWords.hook";

const ArtefactRunesWords = () => {
  const { runesWords, handleWordValue } = useArtefactRunesWords();
  console.log("words", runesWords);
  return (
    <div>
      {runesWords.map((word) => {
        if (!word) return null;
        const { id, title, description, target, value, measure } = word;
        return (
          <Word key={id} title={description[0]}>
            <p>{title}</p>
            <Input
              value={measure ? (value[0] * 100).toFixed() : value[0]}
              onChange={(e) => {
                handleWordValue(word, e.currentTarget.value);
              }}
              variant={value[0] ? target : "common"}
            />
            <span>{measure}</span>
          </Word>
        );
      })}
    </div>
  );
};

export default ArtefactRunesWords;
