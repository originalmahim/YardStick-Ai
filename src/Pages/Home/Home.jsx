import Billing from "./Hero/Billing";
import Hero from "./Hero/Hero";
import Stats from "./Hero/Stats";

const Home = () => {
          return (
          <div className="max-w-7xl mx-auto">
           <Hero></Hero>
           <Stats></Stats>
           <Billing></Billing>                   
          </div>
          );
};

export default Home;