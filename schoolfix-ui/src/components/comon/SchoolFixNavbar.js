import React from "react";
import { Menu } from "@headlessui/react";
import { PropTypes } from "prop-types";
import SchoolFixButton from "./SchoolFixButton";
import SchoolFixLogo from "./SchoolFixLogo";
import SchoolFixAvatar from "./SchoolFixAvatar";
import { Link } from "react-router-dom";

const SchoolFixNavbar = ({ navStyle, avatarNavPresent, buttonLogInPresent, buttonSignUpPresent }) => {

  return (
    <>
      <nav
        className={`bg-[#D9D9D9] border-1 border-t-[#D9D9D9] border-l-[#D9D9D9] border-r-[#D9D9D9] w-100% h-[3.8em] flex items-center justify-center ${
          navStyle ? navStyle : ""
        }`}
      >
        <div className="container flex items-center  w-[90%]">
          <div className="flex items-center">
            <SchoolFixLogo />
          </div>
          <div className="flex justify-end ">
            <Menu as="div" className="relative inline-block ">
              <div className="p-[5px] ml-80 flex items-center ">
                <Menu.Item>
                  <Link to="/home" className="ml-4 text-base font-normal">
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/about" className="ml-6 text-base font-normal">
                    About
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/schools" className="ml-6 text-base font-normal">
                    Schools
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    to="/contactUs"
                    className="ml-6 mr-12 text-base font-normal"
                  >
                    ContactUs
                  </Link>
                </Menu.Item>
                <div className="flex justify-evenly ml-[20px]">
                { buttonLogInPresent && <Menu.Item className="">
                   <Link to="/logIn">
                    <SchoolFixButton
                      buttonText={"Log In"}
                      buttonStyle="border-[2px] bg-[#ffffff]  "
                      buttonPresent={true}
                    />
                    </Link>

                  </Menu.Item>
                }
                  <br />

                 { buttonSignUpPresent && <Menu.Item className="ml-6">
                    <Link to="/signUp">
                    <SchoolFixButton
                      buttonText={"Sign Up"}
                      buttonStyle="border-[2px] bg-[#ffffff]  "
                      buttonPresent={true}
                    />
                    </Link>
                  </Menu.Item>
                  }
                </div>
                <div className="ml-[152px]">
                 { avatarNavPresent && <Menu.Item className="ml-[0px]">
                    <SchoolFixAvatar
                      imgSrc={"/download.png"}
                      avatarVisible={true}
                      avatarStyle={"h-[40px] w-[40px] ml-[0px]"}
                    />
                  </Menu.Item>
                  }
                </div>
              </div>
            </Menu>
          </div>
        </div>
      </nav>
    </>
  );
};

SchoolFixNavbar.propTypes = {
  onClickButtonHandler: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
  buttonLogInPresent: PropTypes.bool,
  buttonSignUpPresent: PropTypes.bool,
  buttonPresent: PropTypes.bool,
  avatarNavPresent: PropTypes.bool,
  avatarVisible: PropTypes.bool,
};

export default SchoolFixNavbar;
