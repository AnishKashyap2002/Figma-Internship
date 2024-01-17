import { gradientBorder, gradientText } from "../utilities";
import { FaAngleDown } from "react-icons/fa6";

const FAQ = () => {
    return (
        <div className="mt-12">
            <h1 className={`${gradientText} text-3xl font-bold`}>FAQ</h1>
            <div className="py-4 flex flex-col gap-6">
                <div
                    className={`${gradientBorder} p-[2px] rounded-md w-fit min-w-[700px]`}
                >
                    <div className="cursor-pointer bg-white flex items-center justify-between group/parent hover:bg-green-100 text-secondary text-sm font-semibold rounded-md px-4 py-2">
                        <span>
                            Can education flashcards be used for all age groups?
                        </span>
                        <FaAngleDown className="font-bold text-lg group-hover/parent:scale-125 duration-200 transition" />
                    </div>
                </div>
                <div
                    className={`${gradientBorder} p-[2px] rounded-md w-fit min-w-[700px]`}
                >
                    <div className="cursor-pointer bg-white flex items-center justify-between group/parent hover:bg-green-100 text-secondary text-sm font-semibold rounded-md px-4 py-2">
                        <span>How do education flashcards work?</span>
                        <FaAngleDown className="font-bold text-lg group-hover/parent:scale-125 duration-200 transition" />
                    </div>
                </div>
                <div
                    className={`${gradientBorder} p-[2px] rounded-md w-fit min-w-[700px]`}
                >
                    <div className="cursor-pointer bg-white flex items-center justify-between group/parent hover:bg-green-100 text-secondary text-sm font-semibold rounded-md px-4 py-2">
                        <span>
                            Can education flashcards be used for test
                            preparation?
                        </span>
                        <FaAngleDown className="font-bold text-lg group-hover/parent:scale-125 duration-200 transition" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
