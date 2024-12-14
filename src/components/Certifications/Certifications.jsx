import React, { useState } from "react";
import { IoStar } from "react-icons/io5";

const certifications = [
  {
    year: "2001",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    title: "MICROSOFT",
    about:
      "Mastering Enterprise Directory Services with Microsoft Certified Architect (MCA): Windows Server",
    description:
      "Microsoft Certified Architect: Windows Server: Directory (MCA)\nMastering Enterprise Directory Services with Microsoft Certified Architect.",
  },
  {
    year: "2005",
    logo: "https://image.similarpng.com/thumbnail/2020/12/Google-logo-design-isolated-illustration-premium-vector-PNG.png",
    title: "GOOGLE",
    about:
      "Google Cloud Certified Professional Cloud Architect",
    description:
      "Microsoft Certified IT Professional: Enterprise Administrator (MCITP)\nAdvanced skills for enterprise-level systems design and administration.",
  },
  {
    year: "2008",
    logo: "https://static-00.iconduck.com/assets.00/cisco-icon-2048x1080-l5746w7o.png",
    title: "CISCO",
    about:
      "Cisco Certified Network Associate Cyber Ops (CCNA)",
    description:
      "Microsoft Certified Solutions Expert: Server Infrastructure (MCSE)\nExpertise in managing modern data centers, cloud computing, and virtualization.",
  },
];

export default function Accordion() {
  const [activeTab, setActiveTab] = useState("2005");

  return (
    <div className="bg-[#042222] ">
      {/* p part */}
      <div className="w-[1320px] py-16   justify-items-end">
        <p class="text-[70px] font-anton font-normal leading-[105px] relative ">
          Explore
        </p>
        <p
          class="text-[80px] font-normal leading-[120px] absolute  -mt-16  left-[955px]
         bg-gradient-to-r from-[#04614C] to-[#08C79C] bg-clip-text  text-transparent font-anton "
        >
          Certifications
        </p>
      </div>
      <hr class="w-[1300px] mx-auto border-t-2 border-[#08C79C] mt-8" />
      <p  className="text-[#08C79C] left-[700px] absolute -mt-5 text-4xl"><IoStar /></p>

      {/* Accordion part */}
      <div className="flex flex-col items-center p-6   text-white min-h-screen">
        <div className="flex gap-8 mb-8">
          {certifications.map((cert) => (
            <button
              key={cert.year}
              onClick={() => setActiveTab(cert.year)}
              className={`text-[150px] font-normal font-montaga   cursor-pointer transition-colors ${
                activeTab === cert.year
                  ? "font-bold bg-gradient-to-r w-[760px] from-[#04614C] to-[#08C79C] bg-clip-text text-transparent"
                  : "text-[#FFFFFF80]"
              }`}
            >
              {cert.year}
            </button>
          ))}
        </div>
        <hr class="w-[1300px] mx-auto border-t-2 border-[#08C79C] " />

        <div className="w-  flex  bg-[#003d3d] p-8 mt-8 rounded-lg ">
          {certifications.map(
            (cert) =>
              activeTab === cert.year && (
                <div
                  key={cert.year}
                  className="flex mx-auto font-montserrat md:flex-row items-center"
                >
                  {/*  */}
                  <div className=" w-[600px] items-center mb-4">
                    <img src={cert.logo} alt="" className="w-12 h-12 mr-4" />
                    <h1 className="text-[64px] mt-8 font-montserrat  font-semibold">
                      {cert.title}
                    </h1>
                  </div>

                  {/*  */}
                  <div className="w-[600px] ">
                    <p className="font-work-sans mb-4 text-[24px] font-bold leading-[28px]">
                      {cert.description}
                    </p>
                    <p className="mb-4 font-montserrat text-lg">{cert.about}</p>

                    <a
                      href="#"
                      className="inline-block mt-4 bg-[#00e699] text-black px-4 py-2 rounded font-bold transition-colors hover:bg-[#00ffcc]"
                    >
                      Explore More
                    </a>
                  </div>
                </div>
              )
          )}
        </div>
        <hr class="w-[1300px] mx-auto border-[#08C79C] mt-8" />
      </div>

      <div className="flex w-[1320px] h-[750px]  mx-auto">
        <div className="w-[1000px] ">
          <p
            className="leading-[80px]
          bg-gradient-to-r from-[#04614C] to-[#08C79C] bg-clip-text  text-transparent font-anton text-[72px] font-normal">
            Expertise Fields{" "}
          </p>
          <p
            className="leading-[80px] 
           font-anton text-[#FFFFFF] text-[72px] font-normal"
          >
            for Your Business Needs.{" "}
          </p>
        </div>

        <div className=" ml-16 ">
          <p className="text-[18px]  w-[290px] font-medium text-[#6F7C74] leading-[26px]">
            Driving tangible results for its clients, whether it's higher sales
            conversions, or improved engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
