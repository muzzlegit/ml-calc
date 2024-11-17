import {
  getFortificationDescription,
  getValueSign,
} from "modules/battleplace/utils/battleplace.helpers";
import { ImageBox } from "utils/UI";
import { Flex, FlexCenter } from "utils/styles/flexKit.styled";
import {
  Box,
  BuildImgBox,
  LevelLabel,
  Quantity,
  Rate,
} from "./BuildingsList.styled";
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
          {towers.map(({ id, type, level, damageRate }) => {
            const isTower = type === "tower";
            return (
              <Box key={id}>
                <BuildImgBox
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
                  </LevelLabel>{" "}
                </BuildImgBox>
                {damageRate ? (
                  <Rate isNegative={damageRate < 0}>{`${getValueSign(
                    damageRate
                  )}${(damageRate * 100).toFixed(0)} %`}</Rate>
                ) : null}
              </Box>
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
          {fortifications.map((fortification) => {
            const { id, type, level, quantity, damageRate } = fortification;
            return (
              <Box key={id}>
                <BuildImgBox
                  id={id}
                  title={getFortificationDescription(fortification)}
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
                {damageRate ? (
                  <Rate isNegative={damageRate < 0}>{`${getValueSign(
                    damageRate
                  )}${(damageRate * 100).toFixed(0)} %`}</Rate>
                ) : null}
              </Box>
            );
          })}
        </Flex>
      ) : null}
    </Flex>
  );
};

export default BuildingsList;
