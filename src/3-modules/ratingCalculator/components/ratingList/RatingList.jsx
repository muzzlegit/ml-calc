import useStore from "modules/ratingCalculator/store/store";
import { getRatingList } from "modules/ratingCalculator/utils/helpers";

const RatingList = () => {
  const server = useStore((state) => state.server);

  return (
    <div>
      {getRatingList(server).map((el) => (
        <li key={el.rank}>
          {el.rank}:{el.rating}
        </li>
      ))}
    </div>
  );
};

export default RatingList;
