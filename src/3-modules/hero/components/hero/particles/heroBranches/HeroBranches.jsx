import useHeroBranches from "./useHeroBranches.hook";

const HeroBranches = () => {
  const { firstBranch } = useHeroBranches();
  console.log(firstBranch);
  return <div>HeroBranches</div>;
};

export default HeroBranches;
