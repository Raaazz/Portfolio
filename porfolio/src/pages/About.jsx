import React from "react";
import { FaDownload } from "react-icons/fa";
import dummy from "../images/dummy.jpeg";
import dummy2 from "../images/dummy2.png";

import Reputation from "../componets/Reputation";

const About = () => {
  return (
    <section
      id="about"
      className="text-white mx-auto  w-full lg:w-[50%] p-6 flex flex-col"
    >
      <div className="flex flex-col gap-5">
        <div className="   pr-8 py-5 border-b border-gray-500 w-fit">
          <h1 className="text-[30px]">Raaz Tamang</h1>
        </div>
        <h4 className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit impedit
          reiciendis architecto temporibus at ut deserunt labore, nostrum fugit
          placeat! Autem, animi possimus sapiente facilis amet nesciunt? Illum,
          suscipit assumenda. Inventore, sed doloribus laborum veritatis
          voluptates iure animi nihil voluptate praesentium omnis. Facere
          voluptate tempore quos magnam qui molestias accusantium labore natus!
          Perferendis esse tenetur officia accusamus odit, et hic. Obcaecati
          enim ipsam quia quae! Aspernatur culpa architecto nihil laudantium
          blanditiis vitae, quam cumque suscipit ad voluptatum corporis quisquam
          excepturi natus atque. Laborum magni harum aliquam possimus. Culpa, ut
          qui! Omnis corrupti accusantium sapiente perferendis nobis sunt a.
          Aperiam necessitatibus repellendus aspernatur hic eligendi! Dolorum et
          voluptatibus aliquid accusantium eaque quae suscipit alias, atque
          sapiente debitis optio dicta tempora delectus! Accusamus iusto nihil,
          distinctio explicabo beatae assumenda quo tempore ducimus, ipsa
          architecto voluptates, earum nobis omnis et fugit minus harum sed
          velit. Earum quibusdam laboriosam aperiam ipsam! Itaque, a atque?
        </h4>
        <div className="lg:pr-8 py-5 flex flex-col gap-4 ">
          <h2 className="text-white text-4xl">My Skills</h2>
          <div className="flex flex-col gap-2.5">
            <p className="text-gray-500 text-[18px]">HTML</p>
            <div className="w-full bg-white rounded-[4px] overflow-hidden">
              <div className="w-[90%] bg-[#616161] min-h-[30px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-gray-500 text-[18px]">CSS</p>
            <div className="w-full bg-white rounded-[4px] overflow-hidden">
              <div className="w-[80%] bg-[#616161] min-h-[30px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-gray-500 text-[18px]">JAVASCRIPT</p>
            <div className="w-full bg-white rounded-[4px] overflow-hidden">
              <div className="w-[75%] bg-[#616161] min-h-[30px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-gray-500 text-[18px]">REACT</p>
            <div className="w-full bg-white rounded-[4px] overflow-hidden ">
              <div className="w-[85%] bg-[#616161] min-h-[30px]"></div>
            </div>
          </div>
          <div className="w-full bg-white p-5 flex lg:flex-row flex-col gap-2.5 lg:gap-0 justify-around items-center text-[18px] rounded-[4px]">
            <div className="text-black flex-col flex items-center">
              <p>11+</p>
              <p>Partners</p>
            </div>
            <div className="text-black flex-col flex items-center">
              <p>55+</p>
              <p>Projects Done</p>
            </div>
            <div className="text-black flex-col flex items-center">
              <p>89+</p>
              <p>Happy Clients</p>
            </div>
            <div className="text-black flex-col flex items-center">
              <p>150+</p>
              <p>Meetings</p>
            </div>
          </div>
          <button className="bg-white rounded-[4px] px-4 py-3 w-fit text-black flex items-center gap-1">
            <FaDownload />
            <span>Download Resume</span>
          </button>
          <div className="p-4 flex-col flex gap-5">
            <h1 className="font-semibold text-2xl">My Reputation</h1>
            <Reputation
              img={dummy}
              name={"Chris Fox."}
              desc={"CEO at Mighty Schools"}
              feedback={"Raaz saved us from web disaaster"}
            />
            <Reputation
              img={dummy2}
              name={"Rebecca Flex."}
              desc={"CEO at Company"}
              feedback={"No one is better than Raaz"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
