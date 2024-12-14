import { useEffect } from "react";
import { useState } from "react";
import ShowHeroSection from "./ShowHeroSection";


const HeroSection = () => {

    const [hero, setHero] = useState([]);
    useEffect(() =>{
        fetch('heroSection.json')
        .then(res => res.json())
        .then(data => setHero(data));
    },[])

    return (
        <div className="font-work-sans mx-auto">
            
            {
                hero.map(sHero => <ShowHeroSection key={sHero.id} sHero={sHero}></ShowHeroSection>)
            }
        </div>
    );
};

export default HeroSection;