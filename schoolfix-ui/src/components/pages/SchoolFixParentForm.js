import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../validation/useForm";
import validate from "../validation/validateInfo";
import axios from "axios";

const SchoolFixParentForm = ({ submitForm }) => {
  const labelStyle =
    "justify-content-start block text-base text-[10px] flex justify-start px-[-10px] pb-0 font-normal text-[#000000]";
  const buttonStyle =
    "text-[#000000]  bg-[#FFFFFF] border-2 ml-4 hover:text-[#ffffff] hover:bg-[#000000] w-16 h-6 border-[#000000] rounded-lg bg-transparent font-normal text-[10px] font-style: Hina Mincho";
  const inputStyle =
    "bg-gray-300 text-[10px] text-[#000000] block px-[8px] ml-0 h-[20px] rounded-md w-[80%] h-[35px] bg-[#D9D9D9]  border-[#D9D9D9]  shadow-md cursor-text hover:bg-white focus:border-gray-600 focus:outline-none checkedPresent";
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:9005/api/v1/signup", {
          username: username,
          phoneNumber: phoneNumber,
          email: email,
          password: password,
        })
        .then((res) => {
          navigate("/homePage");
        });
    } catch (error) {
      if (error.response) {
        // console.log(error.response)
        setMessage(error.response.data.error);
      }
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <div className=" flex justify-unevenly mt-[6%] w-full h-[600px]">
        <div>
          <img
            src="/login.jpg"
            alt="SschoolFix"
            className="w-[50%] ml-[39%] drop-shadow-2xl  rounded-l-lg h-[80%] mt-[0%]"
          />
        </div>
        <div className="w-[30%] h-[80%] ml-[-8%] mt-[0] bg-[#989898] drop-shadow-2xl rounded-r-lg border-[#989898]">
          <div className="mt-[50px] ml-[60px]">
            <label className={labelStyle}>Username</label>
            <input
              className={inputStyle}
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="flex ml-[16px] mb-[2px] text-[8px] text-[#FF0000]">
              {errors.username && <p>{errors.username}</p>}
            </span>
          </div>
          <div className="ml-[60px] mt-[4px]">
            <label className={labelStyle}>Email</label>
            <input
              className={inputStyle}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="flex ml-[16px] text-[8px] text-[#FF0000]">
              {errors.email && <p>{errors.email}</p>}
            </span>
          </div>
          <div className="ml-[60px] mt-[4px]">
            <label className={labelStyle}>Phone Number</label>
            <input
              className={inputStyle}
              type="number"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <span className="flex ml-[16px] text-[8px] text-[#FF0000]">
              {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
            </span>
          </div>

          <div className="ml-[60px] mt-[8px]">
            <label className={labelStyle}>Password</label>
            <input
              className={inputStyle}
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="flex ml-[16px] text-[8px] text-[#FF0000]">
              {errors.password && <p>{errors.password}</p>}
            </span>
          </div>
          <div className="ml-[60px] mt-[8px]">
            <label className={labelStyle}>Confirm Password</label>
            <input
              className={inputStyle}
              type="password"
              name="password2"
              placeholder="Confirm your password"
              value={values.password2}
              onChange={handleChange}
            />
            <span className="flex ml-[16px] text-[8px] text-[#FF0000]">
              {errors.password2 && <p>{errors.password2}</p>}
            </span>
          </div>
          <span className="flex ml-[60px] mb-[2px] text-[8px] text-[#FF0000]">
            {message}
          </span>

          <div className="ml-[230px] mt-[10px]">
            <button className={buttonStyle} type="submit">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SchoolFixParentForm;
