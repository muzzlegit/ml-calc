import {
  useBattleplacePictures,
  useBuilds,
  useDefenseBuildsSelector,
} from "modules/battleplace/hooks";
import { ImageBox } from "modules/UI";
import { FlexCenter } from "utils/styles/flexKit.styled";
import { Build, Input, Level } from "./DefenseBuildsSelector.styled";

const DefenseBuildsSelector = () => {
  const {
    isCastle,
    isTowersLimit,
    activeLevel,
    activeBuild,
    handleOnLevelClick,
    handleOnBuildClick,
  } = useDefenseBuildsSelector();

  const {
    towerIcon,
    fortificationIcon,
    magicTowerIcon,
    gateIcon,
    perfectIcon,
  } = useBattleplacePictures();

  const { handleAddBuild, handleDeleteAllBuilds } = useBuilds();

  return (
    <div>
      <FlexCenter gap="8px">
        <Build
          id="tower"
          title={`Башня ${activeLevel} уровня`}
          isActive={activeBuild === "tower"}
          onClick={() => {
            handleOnBuildClick("tower");
          }}
        >
          <ImageBox picture={towerIcon} />
        </Build>
        <Build
          id="magicTower"
          title={`Магическая башня ${activeLevel} уровня`}
          isActive={activeBuild === "magicTower"}
          onClick={() => {
            handleOnBuildClick("magicTower");
          }}
        >
          <ImageBox picture={magicTowerIcon} />
        </Build>
        <Build
          id="fortification"
          title={`Укрепления ${activeLevel} уровня`}
          isActive={activeBuild === "fortification"}
          onClick={() => {
            handleOnBuildClick("fortification");
          }}
        >
          <ImageBox picture={fortificationIcon} />
          <Input autoFocus isActive={activeBuild === "fortification"} />
        </Build>
        {isCastle ? (
          <Build
            id="gate"
            title={`Ворота ${activeLevel} уровня`}
            isActive={activeBuild === "gate"}
            onClick={() => {
              handleOnBuildClick("gate");
            }}
          >
            <ImageBox picture={gateIcon} />
          </Build>
        ) : null}
      </FlexCenter>
      <FlexCenter gap="8px">
        {Array.from({ length: isCastle ? 7 : 8 }, (_, i) => i + 1).map(
          (level) => {
            return (
              <Level
                key={level}
                id={level}
                isActive={activeLevel === level}
                onClick={(e) => {
                  handleOnLevelClick(e.currentTarget.id);
                }}
              >
                {level === 8 ? (
                  <ImageBox
                    picture={perfectIcon}
                    addStyles={{
                      filter: activeLevel === 8 ? "none" : "grayscale(80%)",
                    }}
                  />
                ) : (
                  level
                )}
              </Level>
            );
          }
        )}
      </FlexCenter>
      <button
        disabled={isTowersLimit}
        onClick={() => handleAddBuild(activeBuild, activeLevel, isCastle)}
      >
        add
      </button>
      <button onClick={handleDeleteAllBuilds}>deleteAll</button>
    </div>
  );
};

export default DefenseBuildsSelector;
