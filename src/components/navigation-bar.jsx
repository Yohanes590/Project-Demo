import { FiMapPin, FiShield, FiCalendar } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import { RiTruckLine } from "react-icons/ri";
import { FiCreditCard } from "react-icons/fi";
function NavigationBar() {
  return (
    <>
      <div className="navigation-container flex text-[17px]  items-center justify-center h-[90px] overflow-scroll md:overflow-hidden w-[100%]">
        <div className="navigation-item flex  items-center gap-5">
          <div className="each-item flex items-center cursor-pointer gap-3">
            <FiMapPin size={25} color="var(--blue-color)" />
            Postcode
          </div>
          <div className="line w-17 mt-[5px] line-15 h-[1px] bg-[var(--blue-color)]"></div>
          <div className="each-item flex items-center cursor-pointer gap-3">
            <HiOutlineTrash size={25} color="var(--blue-color)" />
            Waste Type
          </div>
          <div className="line w-17 mt-[5px] line-15 h-[1px] bg-[var(--blue-color)]"></div>
          <div className="each-item flex items-center cursor-pointer gap-3">
            <RiTruckLine size={25} color="var(--blue-color)" />
            Select Skip
          </div>
          <div className="line w-17 mt-[5px] line-15 h-[1px] bg-[#66666673]"></div>
          <div className="each-item flex items-center cursor-pointer gap-3 text-[#666666]">
            <FiShield size={25} />
            Permit Check
          </div>
          <div className="line w-17 mt-[5px] line-15 h-[1px] bg-[#66666673]"></div>
          <div className="each-item flex items-center cursor-pointer gap-3 text-[#666666]">
            <FiCalendar size={25} />
            Choose Date
          </div>
          <div className="line w-17 mt-[5px] line-15 h-[1px] bg-[#66666673]"></div>
          <div className="each-item flex items-center cursor-pointer gap-3 text-[#666666]">
            <FiCreditCard size={25} />
            Payment
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
