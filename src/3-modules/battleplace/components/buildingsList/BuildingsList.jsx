import { ImageBox } from "modules/UI";
import { Flex, FlexCenter } from "utils/styles/flexKit.styled";
import { BuildImgBox, LevelLabel, Quantity } from "./BuildingsList.styled";
import useBuildingsList from "./useBuildingsList.hook";

const BuildingsList = () => {
  const {
    towers,
    fortifications,
    gate,
    graphics: {
      towerImg,
      magicTowerImg,
      fortificationImg,
      gateImg,
      perfectIcon,
    },
    handleDeleteBuilding,
  } = useBuildingsList();

  return (
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
                  handleDeleteBuilding(type, id);
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
            handleDeleteBuilding(gate.type, gate.id);
          }}
          title={`Стойкость ${gate.strength}${(<br />)} Поглощение атаки ${
            gate.attack_absorption
          }`}
        >
          <ImageBox picture={gateImg} addStyles={{ borderRadius: "4px" }} />
          <LevelLabel border={gate.level}>{gate.level}</LevelLabel>
        </BuildImgBox>
      ) : null}
      {fortifications.length ? (
        <Flex gap="8px">
          {fortifications.map(({ id, type, level, quantity }) => {
            return (
              <BuildImgBox
                key={id}
                id={id}
                onClick={() => {
                  handleDeleteBuilding(type, id);
                }}
              >
                <ImageBox
                  picture={fortificationImg}
                  addStyles={{ borderRadius: "4px" }}
                />
                <LevelLabel border={level}>
                  {level === 8 ? <ImageBox picture={perfectIcon} /> : level}
                </LevelLabel>
                <Quantity>x{quantity}</Quantity>
              </BuildImgBox>
            );
          })}
        </Flex>
      ) : null}
    </Flex>
  );
};

export default BuildingsList;
