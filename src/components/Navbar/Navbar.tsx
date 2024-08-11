import { IoMdSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";

const Navbar = () => {
    return (
        <>
            {/* main div to hold everything */}
            <div className="flex rounded-2xl mt-12 justify-between h-20 px-4 shadow-[#c4c5c6] shadow-md bg-[#ecedee] items-center">
                <div className="relative" >
                    <IoMdSearch className="absolute z-10 top-2 left-2 text-gray-500" />
                    <input placeholder="Search..." className="h-8 pl-8 shadow-[#c4c5c6] shadow-md outline-none rounded-3xl" type="text" />
                </div>
                <div className="relative">
                    <CiFilter className="absolute z-10 top-3" />
                    <select className="h-9 outline-none rounded-md px-4" name="filter" id="">
                        <option value="to-do">To do</option>
                        <option value="on-progress">On Progress</option>
                        <option value="done">Done</option>
                        <option value="expired-task">Expired task</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default Navbar;