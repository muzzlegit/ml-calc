import useStore from "modules/ratingCalculator/store/store";
import {
  getRatingData,
  getServerCoefficient,
} from "modules/ratingCalculator/utils/helpers";
import Stars from "../stars/Stars";
const CurrentRating = () => {
  const { resourcesRating, armyRating, buildingsRating, server } = useStore(
    (state) => ({
      resourcesRating: state.resourcesRating,
      armyRating: state.armyRating,
      buildingsRating: state.buildingsRating,
      server: state.server,
    })
  );

  const rating =
    buildingsRating +
    armyRating * getServerCoefficient(server) +
    resourcesRating;

  const starsQuantity = getRatingData(rating, server)?.level;
  return (
    <>
      <span>Общий рейтинг:{rating}</span>
      <span>Рейтинг ресурсов:{resourcesRating}</span>
      <span>Рейтинг армии: {armyRating}</span>
      <span>Рейтинг зданий: {buildingsRating}</span>
      <Stars quantity={starsQuantity} />
    </>
  );
};

export default CurrentRating;
