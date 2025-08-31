import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const teamData = [
  {
    name: "Sophie Morgan",
    role: "Dispatch",
    img: "/media/images/image 21.png"
  },
  {
    name: "Andy Moore",
    role: "Dispatch",
    img: "/media/images/image 22.png"
  },
  {
    name: "Jelly Samson",
    role: "Safety",
    img: "/media/images/image 23.png"
  },
  {
    name: "Jamie Scott",
    role: "Accounting",
    img: "/media/images/image 24.png"
  }
];

export default function TeamData() {
  return (
    <div className="bg-[#FCFCEB]  py-10 px-4">
      <div className="flex flex-wrap justify-center gap-8">
        {teamData.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[16px] overflow-hidden border border-gray-300 shadow flex flex-col items-center w-[270px] min-h-[230px]"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-6 flex flex-col  w-full">
              <h2 className="text-2xl font-semibold mb-1 ">{member.name}</h2>
              <p className="text-base text-gray-700 mb-4">{member.role}</p>
              <div className="flex space-x-4 mt-2 text-xl text-[#D5272B]">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaYoutube /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
