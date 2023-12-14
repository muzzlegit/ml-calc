import useHeroStore from "modules/hero/store/heroStore";
import { useEffect, useState } from "react";
import usePlayerContext from "utils/context/usePlayerContext.hook";

const useHeroBranches = () => {
  const player = usePlayerContext();
  const hero = useHeroStore((state) => state[player].hero);
  const [firstBranch, setFirstBranch] = useState(hero?.firstBranch ?? null);
  const [secondBranch, setSecondBranch] = useState(hero?.secondBranch ?? null);
  const [thirdBranch, setThirdBranch] = useState(hero?.thirdBranch ?? null);
  const [graphics, setGraphics] = useState({});
  useEffect(() => {
    setFirstBranch(hero?.firstBranch ?? null);
    setSecondBranch(hero?.SecondBranch ?? null);
    setThirdBranch(hero?.ThirdBranch ?? null);
    const gr = {};

    setGraphics;
  }, [hero]);

  return { firstBranch, secondBranch, thirdBranch };
};

export default useHeroBranches;
