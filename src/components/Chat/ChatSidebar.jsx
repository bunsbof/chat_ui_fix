import React from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import { RxDotsVertical } from "react-icons/rx";

import avatar from "../../assets/avatar.jpg";

const ChatSidebar = () => {
  return (
    <div className="flex flex-col w-96 px-4 overflow-y-hidden flex-shrink-0 md:w-full">
      <div className="flex flex-row items-start h-36 pt-16 relative">
        <button className="bg-[#E0F4F1] text-[#00A186] w-8 h-8 flex justify-center items-center rounded-md sticky">
          <IoIosArrowBack />
        </button>
        <h2 className="text-xl pl-8">Chat</h2>
      </div>
      <div className="flex flex-col justify-around py-6 items-center h-1/4">
        <div className="flex flex-row justify-between w-full items-start">
          <div></div>
          <img
            src={avatar}
            alt="side-avatar"
            className="rounded-full object-cover w-24 h-24"
          />
          <button className="sticky top-0 left-10 bottom-0 right-0 text-[#BAC1CA] text-xl">
            <FiSettings />
          </button>
        </div>
        <h2 className="text-2xl">Jontray Arnold</h2>
      </div>
      <div>
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-2xl text-[#00A186]">
              <HiOutlineMagnifyingGlass />
            </div>
            <input
              type="search"
              className="block w-full p-4 pl-6 text-lg text-gray-900 outline-none bg-[#F0F3F6] rounded-xl"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      <div className="flex flex-col">
        <div className="py-10 flex flex-row justify-between items-center">
          <div className="flex items-start">
            <h4 className="text-[#00A186] text-lg font-semibold">Last chats</h4>
          </div>
          <div className="flex items-end flex-row justify-between w-32">
            <button className="rounded-2xl hover:bg-[#E0F4F1] focus:bg-[#E0F4F1] text-2xl text-[#00A186] w-10 h-10 flex items-center justify-center">
              <AiOutlinePlus />
            </button>
            <button className="rounded-2xl hover:bg-[#E0F4F1] focus:bg-[#E0F4F1] text-2xl text-[#00A186] w-10 h-10 flex items-center justify-center">
              <RxDotsVertical />
            </button>
          </div>
        </div>

        <div className="flex flex-col space-y-1 h-96 overflow-y-auto">
          <a className="flex flex-row justify-around py-3 px-16 rounded-lg hover:bg-[#F7F8FA] focus:bg-[#F7F8FA]">
            <img src={avatar} alt="chat" className="w-11 h-11 rounded-full" />
            {/* status here */}
            <div className="px-3 w-full flex flex-col justify-between">
              <h5 className="text-xl text-bold truncate">
                Real estate deals bling bling bang bang
              </h5>
              <p className="text-sm text-gray-400 truncate">
                I will send the document later, please wait for me
              </p>
            </div>
            <p className="text-gray-500 text-md">10:05</p>
          </a>
          <a className="flex flex-row justify-around py-3 px-16 rounded-lg hover:bg-[#F7F8FA] focus:bg-[#F7F8FA]">
            <img src={avatar} alt="chat" className="w-11 h-11 rounded-full" />
            {/* status here */}
            <div className="px-3 w-full flex flex-col justify-between">
              <h5 className="text-xl text-bold truncate">
                Real estate deals bling bling bang bang
              </h5>
              <p className="text-sm text-gray-400 truncate">
                I will send the document later, please wait for me
              </p>
            </div>
            <p className="text-gray-500 text-md">10:05</p>
          </a>
          <a className="flex flex-row justify-around py-3 px-16 rounded-lg hover:bg-[#F7F8FA] focus:bg-[#F7F8FA]">
            <img src={avatar} alt="chat" className="w-11 h-11 rounded-full" />
            {/* status here */}
            <div className="px-3 w-full flex flex-col justify-between">
              <h5 className="text-xl text-bold truncate">
                Real estate deals bling bling bang bang
              </h5>
              <p className="text-sm text-gray-400 truncate">
                I will send the document later, please wait for me
              </p>
            </div>
            <p className="text-gray-500 text-md">10:05</p>
          </a>
          <a className="flex flex-row justify-around py-3 px-16 rounded-lg hover:bg-[#F7F8FA] focus:bg-[#F7F8FA]">
            <img src={avatar} alt="chat" className="w-11 h-11 rounded-full" />
            {/* status here */}
            <div className="px-3 w-full flex flex-col justify-between">
              <h5 className="text-xl text-bold truncate">
                Real estate deals bling bling bang bang
              </h5>
              <p className="text-sm text-gray-400 truncate">
                I will send the document later, please wait for me
              </p>
            </div>
            <p className="text-gray-500 text-md">10:05</p>
          </a>
          <a className="flex flex-row justify-around py-3 px-16 rounded-lg hover:bg-[#F7F8FA] focus:bg-[#F7F8FA]">
            <img src={avatar} alt="chat" className="w-11 h-11 rounded-full" />
            {/* status here */}
            <div className="px-3 w-full flex flex-col justify-between">
              <h5 className="text-xl text-bold truncate">
                Real estate deals bling bling bang bang
              </h5>
              <p className="text-sm text-gray-400 truncate">
                I will send the document later, please wait for me
              </p>
            </div>
            <p className="text-gray-500 text-md">10:05</p>
          </a>
          <a className="flex flex-row justify-around py-3 px-16 rounded-lg hover:bg-[#F7F8FA] focus:bg-[#F7F8FA]">
            <img src={avatar} alt="chat" className="w-11 h-11 rounded-full" />
            {/* status here */}
            <div className="px-3 w-full flex flex-col justify-between">
              <h5 className="text-xl text-bold truncate">
                Real estate deals bling bling bang bang
              </h5>
              <p className="text-sm text-gray-400 truncate">
                I will send the document later, please wait for me
              </p>
            </div>
            <p className="text-gray-500 text-md">10:05</p>
          </a>
          <a className="flex flex-row justify-around py-3 px-16 rounded-lg hover:bg-[#F7F8FA] focus:bg-[#F7F8FA]">
            <img src={avatar} alt="chat" className="w-11 h-11 rounded-full" />
            {/* status here */}
            <div className="px-3 w-full flex flex-col justify-between">
              <h5 className="text-xl text-bold truncate">
                Real estate deals bling bling bang bang
              </h5>
              <p className="text-sm text-gray-400 truncate">
                I will send the document later, please wait for me
              </p>
            </div>
            <p className="text-gray-500 text-md">10:05</p>
          </a>
          <a className="flex flex-row justify-around py-3 px-16 rounded-lg hover:bg-[#F7F8FA] focus:bg-[#F7F8FA]">
            <img src={avatar} alt="chat" className="w-11 h-11 rounded-full" />
            {/* status here */}
            <div className="px-3 w-full flex flex-col justify-between">
              <h5 className="text-xl text-bold truncate">
                Real estate deals bling bling bang bang
              </h5>
              <p className="text-sm text-gray-400 truncate">
                I will send the document later, please wait for me
              </p>
            </div>
            <p className="text-gray-500 text-md">10:05</p>
          </a>
          <a className="flex flex-row justify-around py-3 px-16 rounded-lg hover:bg-[#F7F8FA] focus:bg-[#F7F8FA]">
            <img src={avatar} alt="chat" className="w-11 h-11 rounded-full" />
            {/* status here */}
            <div className="px-3 w-full flex flex-col justify-between">
              <h5 className="text-xl text-bold truncate">
                Real estate deals bling bling bang bang
              </h5>
              <p className="text-sm text-gray-400 truncate">
                I will send the document later, please wait for me
              </p>
            </div>
            <p className="text-gray-500 text-md">10:05</p>
          </a>
          <a className="flex flex-row justify-around py-3 px-16 rounded-lg hover:bg-[#F7F8FA] focus:bg-[#F7F8FA]">
            <img src={avatar} alt="chat" className="w-11 h-11 rounded-full" />
            {/* status here */}
            <div className="px-3 w-full flex flex-col justify-between">
              <h5 className="text-xl text-bold truncate">
                Real estate deals bling bling bang bang
              </h5>
              <p className="text-sm text-gray-400 truncate">
                I will send the document later, please wait for me
              </p>
            </div>
            <p className="text-gray-500 text-md">10:05</p>
          </a>
          <a className="flex flex-row justify-around py-3 px-16 rounded-lg hover:bg-[#F7F8FA] focus:bg-[#F7F8FA]">
            <img src={avatar} alt="chat" className="w-11 h-11 rounded-full" />
            {/* status here */}
            <div className="px-3 w-full flex flex-col justify-between">
              <h5 className="text-xl text-bold truncate">
                Real estate deals bling bling bang bang
              </h5>
              <p className="text-sm text-gray-400 truncate">
                I will send the document later, please wait for me
              </p>
            </div>
            <p className="text-gray-500 text-md">10:05</p>
          </a>
          <a className="flex flex-row justify-around py-3 px-16 rounded-lg hover:bg-[#F7F8FA] focus:bg-[#F7F8FA]">
            <img src={avatar} alt="chat" className="w-11 h-11 rounded-full" />
            {/* status here */}
            <div className="px-3 w-full flex flex-col justify-between">
              <h5 className="text-xl text-bold truncate">
                Real estate deals bling bling bang bang
              </h5>
              <p className="text-sm text-gray-400 truncate">
                I will send the document later, please wait for me
              </p>
            </div>
            <p className="text-gray-500 text-md">10:05</p>
          </a>
          <a className="flex flex-row justify-around py-3 px-16 rounded-lg hover:bg-[#F7F8FA] focus:bg-[#F7F8FA]">
            <img src={avatar} alt="chat" className="w-11 h-11 rounded-full" />
            {/* status here */}
            <div className="px-3 w-full flex flex-col justify-between">
              <h5 className="text-xl text-bold truncate">
                Real estate deals bling bling bang bang
              </h5>
              <p className="text-sm text-gray-400 truncate">
                I will send the document later, please wait for me
              </p>
            </div>
            <p className="text-gray-500 text-md">10:05</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
