import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import Input from "../componets/Input";
import SocialLinks from "../componets/SocialLinks";

const Contact = () => {
  return (
    <section
      id="contact"
      className="text-white mx-auto   w-full lg:w-[50%] p-6 flex gap-2.5 flex-col"
    >
      <div className="pr-8 py-5 border-b border-gray-500 w-fit">
        <h1 className="text-[30px] text-white">Contact Me</h1>
      </div>
      <div className="flex items-center gap-2.5 py-2.5">
        <FaLocationDot className="text-white text-[34px]" />
        <span className="text-gray-400">Kathmandu,Nepal</span>
      </div>
      <div className="flex items-center gap-2.5 py-2.5">
        <IoCallSharp className="text-white text-[34px]" />
        <span className="text-gray-400">+9779861942893</span>
      </div>
      <div className="flex items-center gap-2.5 py-2.5">
        <CiMail className="text-white text-[34px]" />
        <span className="text-gray-400">Email: raazdong5@gmail.com</span>
      </div>
      <h3 className="text-gray-400 mb-2">
        Let's get in touch. Send me a message
      </h3>
      <form className="flex flex-col gap-2.5">
        <Input type={"text"} placeholder={"Name"} />
        <Input type={"email"} placeholder={"Email"} />
        <Input type={"text"} placeholder={"Subject"} />
        <Input type={"text"} placeholder={"Message"} />
        <button
          className="flex items-center gap-1 p-2 bg-white w-fit rounded-[4px]"
          onClick={(e) => e.preventDefault()}
        >
          <FaTelegramPlane className="text-black text-[24px]" />
          <span className="text-black font-500">SEND MESSAGE</span>
        </button>
      </form>
      <SocialLinks />
    </section>
  );
};

export default Contact;
