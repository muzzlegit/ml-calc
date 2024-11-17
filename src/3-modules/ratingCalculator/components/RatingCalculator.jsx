import BuildingsList from "./buildings/buildingsList/BuildingsList";
import CurrentRating from "./currentRating/CurrentRating";
import RatingList from "./ratingList/RatingList";
import ResoucesBar from "./resourcesBar/UnitsBar";
import UnitsBar from "./unitsBar/UnitsBar";

const RatingCalculator = () => {
  return (
    <div>
      <RatingList />
      <CurrentRating />
      <ResoucesBar />
      <UnitsBar />
      <BuildingsList />
    </div>
  );
};

export default RatingCalculator;
