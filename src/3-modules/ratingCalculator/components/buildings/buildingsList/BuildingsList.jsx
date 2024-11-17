import useStore from "modules/ratingCalculator/store/store";
import BuildingItem from "../buildingItem/BuildingItem";
import { Container } from "./BuildingsList.styled";

const BuildingsList = () => {
  const getBuildings = useStore((state) => state.getBuildings);

  console.log("List RENDER");

  return (
    <Container>
      {(getBuildings() ?? []).map((building) => {
        const { id } = building;
        return (
          <div key={id}>
            <BuildingItem building={building} />
          </div>
        );
      })}
    </Container>
  );
};

export default BuildingsList;
