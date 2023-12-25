import Billing from "./Sections/Billing";
import Business from "./Sections/Business";
import Hero from "./Sections/Hero";
import Stats from "./Sections/Stats";

const Home = () => {
          return (
          <div className="max-w-7xl mx-auto">
           <Hero></Hero>
           <Stats></Stats>
           <Business></Business>
           <Billing></Billing>                   
          </div>
          );
};

export default Home;