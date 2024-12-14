const ShowHeroSection = ({ sHero }) => {
  const {
    name,
    designation,
    about,
    experienceYr,
    experienceParagraph,
    projectNum,
    projectParagraph,
    clientsNum,
    clientsParagraph,
    photo,
    endPhoto,
  } = sHero;
  return (
   <div>

<div className="md:w-[1320px] md:mt-10 mx-auto md:flex">
      <div className="md:w-[720px] md:py-40">
        <p className="font-semibold text-[30px] ml-4 md:ml-0 md:text-[82px]   text-[#F1F7F7]"> {name}</p>
        <p className="font-normal text-[22px] ml-4 md:ml-0 text-yellow-600 ">{designation}</p>
        <p className="md:w-[648px] font-normal ml-4 md:ml-0 text-[18px] md:text-[22px] text-[#FFFFFFB2] mt-4">{about}</p>

        <button className=" w-[170px] h-[55px] bg-gradient-to-r from-[#042222] to-[#04614C] mt-2  text-[20px] font-semibold text-[#FFFFFF] items-center ml-4 md:ml-0 md:mt-4">
          Let’s Talk ↗
        </button>
          
        
        <div className="w-[360px] gap-6 h-[120px] md:w-[646px] md:h-[106px]  bg-gradient-to-r from-[#04614C] ml-4 md:ml-0  to-[#08C79C] flex md:gap-24 p-4 mt-4">
            <div className="md:ml-10" >
                <p className="text-white  font-semibold md:ml-1 text-[32px]">{experienceYr}</p>
                <p className="text-white font-normal text-[16px]">{experienceParagraph}</p>
            </div>
            <div >
                <p className="text-white font-semibold md:ml-7 text-[32px]">{projectNum}</p>
                <p className="text-white font-normal text-[16px]">{projectParagraph}</p>
            </div>
            <div>
                <p className="text-white font-semibold text-[32px]">{clientsNum}</p>
                <p className="text-white font-normal text-[16px]">{clientsParagraph}</p>
            </div>
        </div>

      </div>

      <div className="md:ml-16 p-4 md:p-0 "><img className="md:w-[536px] md:h-[636px] " src={photo} alt="" /></div>
      
    </div>


    <div className="md:-mt-16" ><img src={endPhoto} alt="" /></div>
   </div>
    
  );
};

export default ShowHeroSection;
