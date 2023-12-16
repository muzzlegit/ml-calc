import { Selector, SvgIcon } from "modules/UI";
import { FlexCenter } from "utils/styles/flexKit.styled";
import {
  Container,
  IconWrap,
  SelectorWrap,
  Title,
} from "./HeroSelector.styled";
import useHeroSelector from "./useHeroSelector.hook";

const HeroSelector = () => {
  const {
    heroClass,
    classesList,
    firstHeroBranch,
    secondHeroBranch,
    thirdHeroBranch,
    heroBranchesList,
    isBranches,
    handleHeroClass,
    handleHeroBranches,
    handleDeleteBranch,
    handleDeleteHeroClass,
  } = useHeroSelector();

  return (
    <Container>
      <SelectorWrap isActive={true}>
        <Title>--- Класс героя ---</Title>
        <FlexCenter gap="4px">
          <Selector
            value={heroClass ?? "Класс"}
            options={classesList}
            handleSelector={handleHeroClass}
            width="150px"
          />
          <IconWrap onClick={handleDeleteHeroClass}>
            <SvgIcon svgName="icon-x-close" size="20px" />
          </IconWrap>
        </FlexCenter>
      </SelectorWrap>

      <SelectorWrap isActive={heroClass}>
        <Title>--- Первая ветка ---</Title>
        <FlexCenter gap="4px">
          <Selector
            id="firstBranch"
            value={firstHeroBranch ?? "Специальность"}
            options={heroBranchesList}
            handleSelector={handleHeroBranches}
            width="150px"
          />
          <IconWrap
            onClick={() => {
              handleDeleteBranch("firstBranch");
            }}
          >
            <SvgIcon svgName="icon-x-close" size="20px" />
          </IconWrap>
        </FlexCenter>
      </SelectorWrap>

      <SelectorWrap isActive={firstHeroBranch || thirdHeroBranch}>
        <Title>--- Вторая ветка ---</Title>
        <FlexCenter gap="4px">
          <Selector
            id="secondBranch"
            value={secondHeroBranch ?? "Специальность"}
            options={heroBranchesList}
            handleSelector={handleHeroBranches}
            width="150px"
          />
          <IconWrap
            onClick={() => {
              handleDeleteBranch("secondBranch");
            }}
          >
            <SvgIcon svgName="icon-x-close" size="20px" />
          </IconWrap>
        </FlexCenter>
      </SelectorWrap>

      <SelectorWrap isActive={secondHeroBranch || thirdHeroBranch}>
        <Title>--- Третья ветка ---</Title>
        <FlexCenter gap="4px">
          <Selector
            id="thirdBranch"
            value={thirdHeroBranch ?? "Специальность"}
            options={heroBranchesList}
            handleSelector={handleHeroBranches}
            width="150px"
          />
          <IconWrap
            onClick={() => {
              handleDeleteBranch("thirdBranch");
            }}
          >
            <SvgIcon svgName="icon-x-close" size="20px" />
          </IconWrap>
        </FlexCenter>
      </SelectorWrap>
    </Container>
  );
};

export default HeroSelector;
