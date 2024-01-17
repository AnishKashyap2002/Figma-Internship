import logo from "../assets/figma.svg";
import { gradientPrimary } from "../utilities";
const Navbar = () => {
    return (
        <div className="flex justify-between items-center ">
            <img
                src={logo}
                alt=""
                className="w-[153px] h-[39px] cursor-pointer "
            />
            <div className="text-primary  flex font-semibold text-sm items-center gap-3">
                <span className="cursor-pointer hover:text-secondary">
                    Home
                </span>
                <span className="cursor-pointer hover:text-secondary">
                    FlashCard
                </span>
                <span className="cursor-pointer hover:text-secondary">
                    Contact
                </span>
                <span className="cursor-pointer hover:text-secondary">FAQ</span>
                <div
                    className={` cursor-pointer  hover:opacity-75 px-5 py-3  ${gradientPrimary}`}
                >
                    <span className="">Login</span>{" "}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
