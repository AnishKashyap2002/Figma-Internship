import reload from "../assets/reload.svg";
import fullscreen from "../assets/fullscreen.svg";

import { gradientPrimary, gradientSecondary, gradientText } from "../utilities";
import { GoLightBulb } from "react-icons/go";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const StudyType = () => {
    return (
        <div className="flex gap-8 text-primary items-center font-medium px-12 pb-6">
            <span className={"flex flex-col cursor-pointer"}>
                <span className={`${gradientText} px-2`}>Study </span>
                <div className={`${gradientPrimary} h-[3px]`} />
            </span>
            <span className={`cursor-pointer hover:text-secondary`}>Quiz</span>
            <span className={`cursor-pointer hover:text-secondary`}>Test</span>
            <span className={`cursor-pointer hover:text-secondary`}>Game</span>
            <span className={`cursor-pointer hover:text-secondary`}>
                Others
            </span>
        </div>
    );
};

const StudyTools = () => {
    return (
        <div className="px-4 py-3 flex justify-between  items-center">
            <div className="px-4 py-4 hover:shadow-lg hover:bg-gray-200 group/parent  rounded-full">
                <img
                    src={reload}
                    alt=""
                    className={` h-[20px] w-[20px]  transition group-hover/parent:scale-125 duration-200 object-contain `}
                />
            </div>
            <div className="flex gap-4 items-center">
                <div
                    className={`${gradientPrimary} text-2xl group/parent font-bold px-3 py-3  rounded-full`}
                >
                    <FaChevronLeft className="transition group-hover/parent:scale-125 duration-200 " />
                </div>
                <div className="text-secondary font-bold text-lg">01/10</div>
                <div
                    className={`${gradientPrimary} text-2xl group/parent font-bold px-3 py-3  rounded-full`}
                >
                    <FaChevronRight className="transition group-hover/parent:scale-125 duration-200 " />
                </div>
            </div>
            <div className="px-4 py-4 hover:shadow-lg hover:bg-gray-200 group/parent  rounded-full">
                <img
                    src={fullscreen}
                    alt=""
                    className={` h-[20px] w-[20px]  transition group-hover/parent:scale-125 duration-200 object-contain `}
                />
            </div>
        </div>
    );
};

const StudyCard = () => {
    return (
        <div className="flex items-center flex-col py-8 px-4">
            <div className="">
                <StudyType />
                <div
                    className={`${gradientSecondary} h-[200px] relative text-white w-full rounded-3xl`}
                >
                    <div className="py-3 px-4 flex justify-between font-extrabold text-xl absolute top-0 w-full">
                        <div className="px-2 py-2 cursor-pointer  hover:bg-primary rounded-full">
                            <GoLightBulb className="hover:scale-125 duration-200 transition" />
                        </div>
                        <div className="px-2 py-2 cursor-pointer hover:bg-primary rounded-full">
                            <HiOutlineSpeakerWave className="hover:scale-125 duration-200 transition" />
                        </div>
                    </div>
                    <div className="h-full w-full font-bold text-3xl flex items-center justify-center">
                        9 + 6 + 7x - 2x - 3
                    </div>
                </div>
                <StudyTools />
            </div>
        </div>
    );
};

export default StudyCard;
