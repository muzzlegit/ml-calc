import { useBuilds, useDefenseBuildsSelector } from "modules/battleplace/hooks";
import { ImageBox } from "modules/UI";
import { FlexCenter } from "utils/styles/flexKit.styled";
import { Build, Input, Level } from "./DefenseBuildsSelector.styled";

const DefenseBuildsSelector = () => {
  const {
    towerImg,
    fortificationImg,
    magicTowerImg,
    gateImg,
    perfectIcon,
    isCastle,
    isTowersLimit,
    activeLevel,
    handleOnLevelClick,
    activeBuild,
    handleOnBuildClick,
  } = useDefenseBuildsSelector();
  const { handleAddTower, handleDeleteTower, handleDeleteAllTowers } =
    useBuilds();
  console.log(activeLevel);
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
          <ImageBox
            width={towerImg.width}
            height={towerImg.height}
            image={towerImg.image}
          />
        </Build>
        <Build
          id="magicTower"
          title={`Магическая башня ${activeLevel} уровня`}
          isActive={activeBuild === "magicTower"}
          onClick={() => {
            handleOnBuildClick("magicTower");
          }}
        >
          <ImageBox
            width={magicTowerImg.width}
            height={magicTowerImg.height}
            image={magicTowerImg.image}
          />
        </Build>
        <Build
          id="fortification"
          title={`Укрепления ${activeLevel} уровня`}
          isActive={activeBuild === "fortification"}
          onClick={() => {
            handleOnBuildClick("fortification");
          }}
        >
          <ImageBox
            width={fortificationImg.width}
            height={fortificationImg.height}
            image={fortificationImg.image}
          />
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
            <ImageBox
              width={gateImg.width}
              height={gateImg.height}
              image={gateImg.image}
            />
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
                    width={perfectIcon.width}
                    height={perfectIcon.height}
                    image={perfectIcon.image}
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
        onClick={() => handleAddTower({ id: activeLevel })}
      >
        add
      </button>
      <button onClick={() => handleDeleteTower(activeLevel)}>delete</button>
      <button onClick={handleDeleteAllTowers}>deleteAll</button>
    </div>
  );
};

export default DefenseBuildsSelector;
