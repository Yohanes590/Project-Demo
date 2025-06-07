import { HiOutlineArrowNarrowRight } from "react-icons/hi";
function LowerNavBar() {
  return (
    <>
      <div className="lower-bar-section  pt-[30px] text-[#999898] fixed z-50 bottom-[0px] h-[auto] w-[100%] bg-[#121212]">
        <p className="text-center">
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification, colours may vary, options
          and/or accessories may be featured at additional cost.
        </p>
        <div className="flex-part flex-wrap flex justify-around  items-center">
          <div className="yard-counter flex mt-[20px] gap-4 items-center">
            <p id="yard-display"></p>
            <p
              id="price-center"
              className="text-[20px] font-bold text-[#0051ff]"
            >
              &#x20AC; 202
            </p>
            <p id="day-display"></p>
          </div>
          <div className="buttons flex items-center gap-2">
            <button className="h-[40px] w-[100px] bg-[#2A2A2A] cursor-pointer rounded-[5px] mt-[5px]">
              back
            </button>
            <button className="h-[40px] flex items-center justify-center gap-1 w-[150px] text-white bg-[var(--blue-color)] cursor-pointer rounded-[5px] mt-[5px]">
              Continue <HiOutlineArrowNarrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LowerNavBar;
