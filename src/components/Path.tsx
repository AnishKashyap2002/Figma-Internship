import { gradientText } from "../utilities";
import { GrHomeRounded } from "react-icons/gr";

const Path = () => {
    return (
        <div className="text-primary flex items-center  gap-1 text-md font-semibold my-8">
            <GrHomeRounded className="h-[30px] w-[30px] hover:text-secondary" />
            <span className={`cursor-pointer ${gradientText} text-2xl`}>
                &gt;
            </span>
            <span className="cursor-pointer hover:text-secondary ">
                FlashCard
            </span>
            <span className={`cursor-pointer ${gradientText} text-2xl`}>
                &gt;
            </span>
            <span className="cursor-pointer hover:text-secondary ">
                Mathematics
            </span>
            <span className={`cursor-pointer ${gradientText} text-2xl`}>
                &gt;
            </span>
            <span className={`cursor-pointer ${gradientText}`}>
                {" "}
                Relations and Functions
            </span>
        </div>
    );
};

export default Path;
