import navPic from "../../assets/Frame 12.png";

const Header = () => {
  const links = (
    <>
      <li
        className=" mr-6 
      bg-gradient-to-r from-[#04614C] to-[#08C79C] bg-clip-text text-transparent font-normal text-[20px] "
      >
        Home
      </li>
      <li className="md:text-[#FFFFFF] bg-pri font-normal text-[20px]  mr-6">
        Explore
      </li>
      <li className="md:text-[#FFFFFF] font-normal text-[20px]  mr-6">Event</li>
      <li className="md:text-[#FFFFFF] font-normal text-[20px]  mr-6">
        Services
      </li>
      <li className="md:text-[#FFFFFF] font-normal text-[20px]  mr-6">Blog</li>
    </>
  );

  return (
    <div className="py-8 ">
      <div
        className="md:w-[1338px] md:h-[100px] bg-white/10 rounded-md
      mx-auto navbar  "
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img src={navPic} alt="" />
          <h2 className="text-2xl md:text-[32px] font-semibold bg-gradient-to-r from-[#04614C] to-[#08C79C] bg-clip-text text-transparent ml-2">
            Kahafil Ora.
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">{links}</ul>
        </div>

        <div className="navbar-end text-2xl gap-2 md:text-3xl md:gap-8 ">
          <a
            href="#"
            class="bg-teal-700 text-white text-[20px] font-semibold  px-4 py-2 rounded-lg shadow-md hover:bg-teal-600 transition"
          >
            Contact ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
