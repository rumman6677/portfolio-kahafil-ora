import { IoLocationOutline } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";
import { CiBasketball } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import navPic from "../../assets/Frame 12.png";


const Footer = () => {
  return (
    <div className=" w-full mt-16   ">
      <div className="w-[1320px] absolute items-center -bottom-[3500px] left-[350px] h-[740px] py-9 bg-[#FFFFFF] mx-auto justify-between  md:flex">
        <div className=" w-[420px] mx-auto">
          <div className="mt-10">
            <p className="leading-[40px] text-[32px] font-normal bg-gradient-to-r from-[#04614C] font-anton to-[#08C79C] bg-clip-text  text-transparent ">
              Let’s discuss your Project
            </p>

            <p className="font-normal mt-5 w-[441px] font-worksans leading-[24px] text-[18px] text-[#87909D] text-justify ">
              Unlock the door to knowledge and expertise by subscribing to gain
              valuable insights, and take your skills
            </p>

            {/* 1 */}

            <div className="w-[336px] mt-5 h-[102px] bg-[#FFFFFF] drop-shadow-md gap-4 p-6 flex ">
              <p className="w-[54px] bg-gradient-to-r from-[#04614C] font-anton to-[#08C79C] p-2 text-4xl h-[54px] rounded-2xl]">
                <IoLocationOutline />
              </p>
              <div>
                <p className="text-[14px] font-normal font-worksans text-[#424E60]">
                  Address:
                </p>
                <p className="text-[16px] font-normal font-worksans text-[#132238]">
                  New Mexico 31134
                </p>
              </div>
            </div>
            {/* 2 */}

            <div className="w-[336px] mt-5 h-[102px] bg-[#FFFFFF]  gap-4 p-6 flex ">
              <p className="w-[54px] bg-[#EDD8FF80] p-2 text-4xl h-[54px] rounded-2xl]">
                <IoLocationOutline />
              </p>
              <div>
                <p className="text-[14px] font-normal font-worksans text-[#424E60]">
                  Address:
                </p>
                <p className="text-[16px] font-normal font-worksans text-[#132238]">
                  New Mexico 31134
                </p>
              </div>
            </div>
            {/* 3 */}

            <div className="w-[336px]  mt-5 h-[102px] bg-[#FFFFFF]  gap-4 p-6 flex ">
              <p className="w-[54px] bg-[#EDD8FF80] p-2 text-4xl h-[54px] rounded-2xl]">
                <IoLocationOutline />
              </p>
              <div>
                <p className="text-[14px] font-normal font-worksans text-[#424E60]">
                  Address:
                </p>
                <p className="text-[16px] font-normal font-worksans text-[#132238]">
                  New Mexico 31134
                </p>
              </div>
            </div>

            {/* 4 */}

            <div className="w-[336px]  mt-5 h-[102px] bg-[#FFFFFF]  gap-4 p-6 flex ">
              <a
                className="w-[48px] h-[48px] text-2xl p-3 font-bold rounded bg-gradient-to-r from-[#04614C] to-[#08C79C]"
                href=""
              >
                <RiFacebookFill />
              </a>
              <a
                className="w-[48px] h-[48px] text-2xl p-3 font-bold rounded text-[#04614C]"
                href=""
              >
                <CiBasketball />
              </a>
              <a
                className="w-[48px] h-[48px] text-2xl p-3 font-bold rounded text-[#04614C]"
                href=""
              >
                <FaInstagram />
              </a>
              <a
                className="w-[48px] h-[48px] text-2xl p-3 -ml-3 font-bold rounded text-[#04614C]"
                href=""
              >
                <FaLinkedinIn />
              </a>
              <a
                className="w-[48px] h-[48px] text-2xl p-3 font-bold rounded text-[#04614C]"
                href=""
              >
                <FaBehance />
              </a>
            </div>

          </div>
        </div>

        {/*  */}

        <div className="w-[600px] mx-auto py-20">
          <p className="font-worksans text-[18px] font-normal leading-[24px] py-8 text-[#87909D] w-[560px]">
            There are many variations of passages of Lorem Ipsu available, but
            the majority have suffered alte.
          </p>

          <div>
            <p className="font-worksans text-[18px] font-normal text-[#697484]">
              Name*
            </p>
            <hr className="mt-4 w-[560px] bg-[#08C79C] h-1 " />
          </div>

          <div className="mt-8">
            <p className="font-worksans text-[18px] font-normal text-[#697484]">
              Email*
            </p>
            <hr className="mt-4 w-[560px] bg-[#08C79C] " />
          </div>

          <div className="mt-8">
            <p className="font-worksans text-[18px] font-normal text-[#697484]">
              Location*
            </p>
            <hr className="mt-4 w-[560px] bg-[#08C79C] " />
          </div>

          <div className="mt-8 flex gap-5">
            <div>
              <p className="font-worksans text-[18px] font-normal text-[#697484]">
                Budget*
              </p>
              <hr className="mt-4 w-[200px] bg-[#08C79C] " />
            </div>
            <div>
            <p className="font-worksans text-[18px] font-normal text-[#697484]">
            Subject*
              </p>
              <hr className="mt-4 w-[336px] bg-[#08C79C] " />
            </div>
          </div>

          <div className="mt-8">
            <p className="font-worksans text-[18px] font-normal text-[#697484]">
              Message*
            </p>
            <hr className="mt-4 w-[560px] bg-[#08C79C] " />
          </div>

          {/* btn */}
          <a className="bg-gradient-to-r from-[#04614C] to-[#08C79C]  flex w-[110px] h-[34px] mt-8" href="">
          <span className="  text-[16px] ml-3 p-1 text-white font-worksans  font-semibold">Submit </span>
          <span className="text-[16px] p-2 text-white font-worksans  font-semibold">< FaAngleRight /></span>
          </a>



        </div>

      </div>

      {/* last */}
      <div className="w-full -ml-2   h-[503px] bg-gradient-to-r from-[#042222] to-[#04614C]">
        <div className="h-[350px] w-[1320px]"></div>

<div className=" items-center w-[1320px] bottom-20  justify-between flex h-[120px]  mx-auto ">

<div className="flex mx-auto justify-start ml-5 gap-2  ">
        <img className="w-[56px] h-[56px]" src={navPic} alt="" />
                  <h2 className="text-2xl md:text-[32px] font-semibold bg-gradient-to-r from-[#04614C] py-2 to-[#08C79C] bg-clip-text text-transparent ml-2">
                    Kahafil Ora.
                  </h2>
       </div>

       <div className="w-[520px]  ">
      <a className=" mr-6 bg-[#FFFFFF] bg-clip-text text-transparent font-normal text-[20px] ">Home</a>
      <a className="md:text-[#FFFFFF] bg-pri font-normal text-[20px]  mr-6">Explore</a>
      <a className="md:text-[#FFFFFF] font-normal text-[20px]  mr-6">Event</a>
      <a className="md:text-[#FFFFFF] font-normal text-[20px]  mr-6">Services</a>
      <a className="md:text-[#FFFFFF] font-normal text-[20px]  mr-6">Blog</a>
       </div>

       <div className="">
        <p className="text-[#FFFFFF] font-normal text-[20px]">Copyright © 2024 Kahafil Ora.</p>
       </div>


</div>


      </div>
    </div>
  );
};

export default Footer;
