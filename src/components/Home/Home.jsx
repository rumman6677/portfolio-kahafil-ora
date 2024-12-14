import Certifications from "../Certifications/Certifications";
import CertificationTimeline from "../Certifications/Certifications";
import ExploreSection from "../ExploreSection/ExploreSection";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <div className=" bg-[#042222]">
      <div className="bg-[#042222]">
        <Header></Header>

        <HeroSection></HeroSection>
      </div>

      <div className="bg-[#F1F7F6]">
        <ExploreSection></ExploreSection>
      </div>

   <div>
    <Certifications></Certifications>
   </div>

   <div>
   <Footer></Footer>
   </div>

    </div>
  );
};

export default Home;
