import { FaDownload } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { CiBasketball } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";

const ShowExplore = ({ explore }) => {
  const { image, details, paragraph } = explore;

  return (
    <div className="md:flex gap-14">
      <div className="py-4">
        <div>
        <img className="md:relative md:w-[536px] p-4 md:p-0 mb-4 md:h-[636px]" src={image} alt="" />
        </div>

        <div className="absolute ml-16 md:ml-0 -mt-16 md:w-[536px] md:-mt-14 ">
        <div className="w-[246px] h-[72px] bg-[#FFFFFF] mx-auto  flex p-3">
            <a className="w-[48px] h-[48px] text-2xl p-3 -ml-3 font-bold rounded text-[#04614C]" href=""><RiFacebookFill /></a>
            <a className="w-[48px] h-[48px] text-2xl p-3 font-bold rounded text-[#04614C]" href=""><CiBasketball /></a>
            <a className="w-[48px] h-[48px] text-2xl p-3 font-bold rounded text-[#04614C]" href=""><FaInstagram /></a>
            <a className="w-[48px] h-[48px] text-2xl p-3 font-bold rounded bg-gradient-to-r from-[#04614C] to-[#08C79C]" href=""><FaLinkedinIn /></a>
            <a className="w-[48px] h-[48px] text-2xl p-3 font-bold rounded text-[#04614C]" href=""><FaBehance /></a>

        </div>
        </div>

      </div>

      <div className="md:w-[644px] md:ml-16 md:py-32 md:mb-9 ">
        <p className="font-semibold text-[25px] p-4 md:p-0 font-anton  md:text-[42px] leading-[50px] md:mt-6 text-[#132238]">
          {details}
        </p>
        <p className="md:mt-6 p-4 md:p-0 font-work-sans font-normal text-justify text-[16px] md:text-[20px]">{paragraph}</p>
        <div className="md:flex gap-4 md:mt-6 p-4 md:p-0">
          <button className="w-[132px] h-[48px] bg-gradient-to-r from-[#04614C] to-[#08C79C]">
            My Project
          </button>
          <a className="w-[190px] h-[48px] bg-white mt-3 md:mt-0 flex gap-2 p-3  ">
            <span className="mt-1  ml-3">
              <FaDownload />
            </span>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShowExplore;
