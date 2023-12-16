import { ImageBox } from "modules/UI";
import {
  BranchBox,
  Container,
  SkillBox,
  SkillBtn,
} from "./HeroBranches.styled";
import useHeroBranches from "./useHeroBranches.hook";

const HeroBranches = () => {
  const {
    firstBranch,
    secondBranch,
    thirdBranch,
    graphics,
    handleHeroSkillLevel,
  } = useHeroBranches();

  return (
    <Container>
      <BranchBox>
        {firstBranch?.map(({ id, title, level, description, target }) => {
          return (
            <SkillBox
              key={title}
              title={description[level - 1]}
              background={graphics.skillFrame.image}
              width={graphics.skillFrame.width}
              height={graphics.skillFrame.height}
              onClick={() => {
                handleHeroSkillLevel("firstBranch", { level, id, target });
              }}
            >
              {graphics?.[title] ? (
                <>
                  <ImageBox picture={graphics?.[title]} />
                  <SkillBtn level={level}>{level}/5</SkillBtn>
                </>
              ) : null}
            </SkillBox>
          );
        })}
      </BranchBox>
      <BranchBox>
        {secondBranch?.map(({ id, title, level, description, target }) => {
          return (
            <SkillBox
              key={title}
              title={description[level - 1]}
              background={graphics.skillFrame.image}
              width={graphics.skillFrame.width}
              height={graphics.skillFrame.height}
              onClick={() => {
                handleHeroSkillLevel("secondBranch", { level, id, target });
              }}
            >
              {graphics?.[title] ? (
                <>
                  <ImageBox picture={graphics?.[title]} />
                  <SkillBtn>{level}/5</SkillBtn>
                </>
              ) : null}
            </SkillBox>
          );
        })}
      </BranchBox>
      <BranchBox>
        {thirdBranch?.map(({ id, title, level, description, target }) => {
          return (
            <SkillBox
              key={title}
              title={description[level - 1]}
              background={graphics.skillFrame.image}
              width={graphics.skillFrame.width}
              height={graphics.skillFrame.height}
              onClick={() => {
                handleHeroSkillLevel("thirdBranch", { level, id, target });
              }}
            >
              {graphics?.[title] ? (
                <>
                  <ImageBox picture={graphics?.[title]} />
                  <SkillBtn>{level}/5</SkillBtn>
                </>
              ) : null}
            </SkillBox>
          );
        })}
      </BranchBox>
    </Container>
  );
};

export default HeroBranches;
