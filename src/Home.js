import Herosection from "./Components/Herosection";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted";
import FeatureProducts from "./Components/FeatureProducts";
const Home = () => {
  const myName = {
    name: "CartZone",
  };
  return (
    <>
      <Herosection myData={myName} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
