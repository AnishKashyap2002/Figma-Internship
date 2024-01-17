import logo from "../assets/logo.svg";
import { IoMdAdd } from "react-icons/io";
import { gradientPrimary, gradientText } from "../utilities";

const CreateFlash = () => {
    return (
        <div className="cursor-pointer flex items-center justify-between">
            <div className="flex ">
                <img
                    src={logo}
                    className="h-[80px] w-[217px]"
                    alt=""
                />
            </div>
            <div className="text-white cursor-pointer flex text-xl font-semibold items-center gap-2">
                <div
                    className={` ${gradientPrimary} p-1 rounded-full group/parent text-2xl font-extrabold`}
                >
                    <IoMdAdd className="transition group-hover/parent:scale-125 duration-200" />
                </div>
                <div className={`${gradientText} text-xl`}>
                    Create FlashCard
                </div>
            </div>
        </div>
    );
};

export default CreateFlash;
