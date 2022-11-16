import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import SchoolFixAvatar from "../comon/SchoolFixAvatar";
import SchoolFixButton from "../comon/SchoolFixButton";
import SchoolFixNavbar from "../comon/SchoolFixNavbar";
import CoverPic from "./modal/CoverPic";
import ParentProfile from "./modal/ParentProfile";

const SchoolFixParentDashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openCover, setOpenCover] = useState(false);

  return (
    <div>
      <SchoolFixNavbar avatarNavPresent={true} />

      <div className="bg-[#D4D4D4] border-2 border-[#00000] rounded-t-[35px] w-[1010px] h-[530px] mb-[10px] mt-[10px] ml-[100px] ">
        <div className="flex justify-self-end h-[230px]">
          <SchoolFixAvatar
            imgSrc={"/download.png"}
            avatarVisible={true}
            avatarStyle="h-[80px] w-[80px] ml-[60px] mt-[140px] rounded-full"
          />
          <div className="ml-[840px] mt-[20px]">
            <SchoolFixButton
              buttonIcon={<FaPen className="w-[20px] h-[20px]" />}
              buttonStyle="border-0 bg-transparent"
              buttonPresent={true}
              onClick={() => setOpenCover(true)}
            />
          </div>
          <h2 className="text-base font-normal justify-evenly ml-[-680px] mt-[160px]">
            <span className="ml-[-980px]">Lorem Ipsum</span>
          </h2>
        </div>
        <div className="opacity-50 bg-[#ffffff] container border-2 border-[#000000] w-[1009px] h-[358px] mt-[-60px]">
          <div className="mt-[-0px] ml-[980px]">
            <SchoolFixButton
              buttonIcon={
                <FaPen className="w-[20px] h-[20px] fill-[#000000]" />
              }
              buttonStyle="border-0 bg-transparent"
              buttonPresent={true}
              onClick={() => setOpenModal(true)}
            />
          </div>

          <h2 className="mt-[180px]"> </h2>
        </div>
        <div className="flex justify-evenly">
          <div className="bg-[#ffffff] container border-2 rounded-[15px] border-[#000000] w-[600px] h-[210px] mt-[-260px]">
            <h2 className="mt-[6px] ml-[8px] flex justify-self-start ">
              Personal Details
            </h2>
            <p></p>
          </div>
          <div className="bg-[#ffffff] container border-2 rounded-[15px] border-[#000000] w-[300px] h-[210px] mt-[-260px]">
            <div className="mt-[25px]">
              <h2 className="mt-[60px] ml-[40px] text-[15px]">
                Phone Number:{" "}
                <span className="text-[14px]">+2547123456678</span>
              </h2>
              <h2 className="mt-[15px] ml-[40px] text-[15px] flex justify-self-start">
                Email Address:{" "}
                <span className="text-[14px]">empsum@gmail.com</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <ParentProfile open={openModal} onClose={() => setOpenModal(false)} />
      <CoverPic open={openCover} onClose={() => setOpenCover(false)} />
    </div>
  );
};

export default SchoolFixParentDashboard;
