import ArtefactButton from "modules/artefacts/components/artefactButton/ArtefactButton";
import PropTypes from "prop-types";
import { ImageBox, SvgIcon } from "utils/UI";
import { ArtefactBg, IconWrap, Picture, Place } from "./ArtefactPicture.styled";
import useArtefactPicture from "./useArtefactPicture";

const ArtefactPicture = ({ place }) => {
  const {
    description,
    isPerfect,
    isArtefact,
    isAncient,
    ancientValue,
    isRunes,
    isActive,
    isInWork,
    isSharpening,
    isTwoHanded,
    graphics: { runeIcon, perfectIcon, ancientIcon, sharpeningIcon, artefact },
    handleArtefactDelete,
    handleArtefactChange,
    handleArtefactSelect,
  } = useArtefactPicture(place);

  return (
    <>
      {isArtefact ? (
        <>
          <ArtefactBg isAncient={!isTwoHanded && isAncient}>
            <Picture
              title={description}
              background={artefact}
              isActive={isActive}
              inWork={isInWork}
              twoHanded={isTwoHanded}
              onClick={() => {
                handleArtefactSelect(place);
              }}
            />
          </ArtefactBg>
          {!isTwoHanded ? (
            <>
              <ArtefactButton
                absolute={true}
                top={0}
                left={0}
                value={isAncient}
                image={ancientIcon}
                handleClick={() => {
                  handleArtefactChange(place, { ancient: ancientValue });
                }}
              />
              <ArtefactButton
                absolute={true}
                top={0}
                right="-24%"
                value={isPerfect}
                image={perfectIcon}
                handleClick={() => {
                  handleArtefactChange(place, { perfect: !isPerfect });
                }}
              />
              <IconWrap
                onClick={() => {
                  handleArtefactDelete(place);
                }}
              >
                <SvgIcon svgName="icon-x-close" size="20px" />
              </IconWrap>
            </>
          ) : null}
          {isRunes && !isTwoHanded ? (
            <ImageBox
              picture={runeIcon}
              addStyles={{
                position: "absolute",
                bottom: "-6px",
                right: "3px",
                zIndex: 3,
              }}
            />
          ) : null}
          {isSharpening && !isTwoHanded ? (
            <ImageBox
              picture={sharpeningIcon}
              addStyles={{
                position: "absolute",
                bottom: "-8px",
                right: "-12px",
                zIndex: 2,
              }}
            />
          ) : null}
        </>
      ) : (
        <Place
          title={description}
          onClick={() => {
            handleArtefactSelect(place);
          }}
        />
      )}
    </>
  );
};

export default ArtefactPicture;

ArtefactPicture.propTypes = {
  place: PropTypes.oneOf([
    "head",
    "armor",
    "belt",
    "pants",
    "boots",
    "neck",
    "bracers",
    "ring",
    "rightHand",
    "bag",
    "back",
    "leftHand",
  ]),
};
