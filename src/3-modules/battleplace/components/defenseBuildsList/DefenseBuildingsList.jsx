import {
  useBattleplacePictures,
  useBuilds,
  useDefenseBuildingsList,
} from "modules/battleplace/hooks";
import useBattleplaceStore from "modules/battleplace/store/battleplaceStore";
import { ImageBox } from "modules/UI";
import { Flex, FlexCenter } from "utils/styles/flexKit.styled";
import { BuildImgBox, LevelLabel } from "./DefenseBuildingsList.styled";

const DefenseBuildingsList = () => {
  const { towers, fortifications, gate } = useDefenseBuildingsList();
  const battleplace = useBattleplaceStore((state) => state.battleplace);
  const { towerImg, magicTowerImg, fortificationImg, gateImg, perfectIcon } =
    useBattleplacePictures();
  const { handleDeleteBuild } = useBuilds();

  if (battleplace !== "castle" && gate) handleDeleteBuild("gate");

  return (
    <div>
      <Flex gap="8px">
        {towers.length ? (
          <FlexCenter gap="8px">
            {towers.map(({ id, type, level }) => {
              const isTower = type === "tower";
              return (
                <BuildImgBox
                  key={id}
                  id={id}
                  onClick={() => {
                    handleDeleteBuild(type, id);
                  }}
                >
                  <ImageBox
                    picture={isTower ? towerImg : magicTowerImg}
                    addStyles={{ borderRadius: "4px" }}
                  />
                  <LevelLabel
                    border={level}
                    background={level === 8 ? perfectIcon.image : null}
                  >
                    {level}
                  </LevelLabel>
                </BuildImgBox>
              );
            })}
          </FlexCenter>
        ) : null}
        {gate ? (
          <BuildImgBox
            id={gate.id}
            onClick={() => {
              handleDeleteBuild(gate.type, gate.id);
            }}
            title={`Стойкость ${gate.strength}${(<br />)} Поглощение атаки ${
              gate.attack_absorption
            }`}
          >
            <ImageBox picture={gateImg} addStyles={{ borderRadius: "4px" }} />
            <LevelLabel border={gate.level}>{gate.level}</LevelLabel>
          </BuildImgBox>
        ) : null}
      </Flex>
      {fortifications.length ? <div>fortifications</div> : null}
    </div>
  );
};

export default DefenseBuildingsList;
