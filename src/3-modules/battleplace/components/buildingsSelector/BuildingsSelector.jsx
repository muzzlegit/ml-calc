import { ImageBox } from "modules/UI";
import { FlexCenter } from "utils/styles/flexKit.styled";
import { Build, Button, Input, Level } from "./BuildingsSelector.styled";
import useBuildingsSelector from "./useBuildingsSelector.hook";

const BuildingsSelector = () => {
  const {
    activeLevel,
    activeBuilding,
    fortificationQuantity,
    isCastle,
    isTowersLimit,
    graphics: {
      towerIcon,
      magicTowerIcon,
      fortificationIcon,
      gateIcon,
      largePerfectIcon,
    },
    handleOnLevelClick,
    handleOnBuildingClick,
    handleFortificationQuantity,
    handleAddBuilding,
    handleDeleteAllBuildings,
  } = useBuildingsSelector();
  return (
    <div>
      <FlexCenter gap="8px">
        <Build
          id="tower"
          title={`Башня ${activeLevel} уровня`}
          isActive={activeBuilding === "tower"}
          onClick={() => {
            handleOnBuildingClick("tower");
          }}
        >
          <ImageBox picture={towerIcon} />
        </Build>
        <Build
          id="magicTower"
          title={`Магическая башня ${activeLevel} уровня`}
          isActive={activeBuilding === "magicTower"}
          onClick={() => {
            handleOnBuildingClick("magicTower");
          }}
        >
          <ImageBox picture={magicTowerIcon} />
        </Build>
        <Build
          id="fortification"
          title={`Укрепления ${activeLevel} уровня`}
          isActive={activeBuilding === "fortification"}
          onClick={() => {
            handleOnBuildingClick("fortification");
          }}
        >
          <ImageBox picture={fortificationIcon} />
          <Input
            isActive={activeBuilding === "fortification"}
            value={fortificationQuantity}
            onChange={(e) => {
              handleFortificationQuantity(e.currentTarget.value);
            }}
          />
        </Build>
        {isCastle ? (
          <Build
            id="gate"
            title={`Ворота ${activeLevel} уровня`}
            isActive={activeBuilding === "gate"}
            onClick={() => {
              handleOnBuildingClick("gate");
            }}
          >
            <ImageBox picture={gateIcon} />
          </Build>
        ) : null}
      </FlexCenter>
      <FlexCenter gap="8px" additionStyles={{ marginTop: "4px" }}>
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
                    picture={largePerfectIcon}
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
      <FlexCenter gap="8px" additionStyles={{ marginTop: "4px" }}>
        <Button
          disabled={isTowersLimit}
          variant="add"
          onClick={() =>
            handleAddBuilding(activeBuilding, activeLevel, isCastle)
          }
        >
          Добавить
        </Button>
        <Button variant="delete" onClick={handleDeleteAllBuildings}>
          Удалить все
        </Button>
      </FlexCenter>
    </div>
  );
};

export default BuildingsSelector;
