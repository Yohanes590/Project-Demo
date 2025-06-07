import { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
function CardComponent() {
  const [cardData, setCardData] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const FetchingApi = await fetch(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      );
      const gettingData = await FetchingApi.json();
      setCardData(gettingData);
    };
    fetchData();
  }, []);
  const SelectionEvent = (id, yard, day, price) => {
    setSelectedCard(id);
    document.getElementById("yard-display").innerText = yard + "Yard Skip";
    document.getElementById("day-display").innerText = day + " day hire";
    document.getElementById("price-center").innerText = "£" + price;
  };
  return (
    <>
      <div className="card-container">
        <div className="header-section text-center">
          <h2 className="text-[30px]">Choose Your Skip Size</h2>
          <p className="text-[18px]">
            Select the skip size that best suits your needs
          </p>
        </div>

        <div className="card-container w-[100%] flex justify-center items-center">
          <div className="grid grid-cols-1 mt-[20px] sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/*Card Starts Here!*/}
            {cardData.map((items) => {
              return (
                <div
                  key={items.id}
                  onClick={() =>
                    SelectionEvent(
                      items.id,
                      items.size,
                      items.hire_period_days,
                      items.price_before_vat
                    )
                  }
                  className={
                    selectedCard === items.id
                      ? "each-flex-card cursor-pointer transition-all duration-400 border-[var(--blue-color)] w-[400px] h-[470px] bg-[#1C1C1C] border-2 rounded-[10px]"
                      : "each-flex-card cursor-pointer transition-all duration-400 hover:border-[var(--blue-color)] w-[400px] h-[470px] bg-[#1C1C1C] border-2 rounded-[10px] border-[#80808054]"
                  }
                >
                  <div className="badge-icon bg-[var(--blue-color)] absolute flex justify-center items-center mt-[40px] ml-[300px] rounded-[15px] w-[auto] pl-[10px] pr-[10px] h-[30px]">
                    {items.size} yards
                  </div>
                  <div className="image-section pt-[30px] flex justify-center items-center">
                    <img
                      className="w-[90%] h-[210px] rounded-[10px]"
                      src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
                      alt="card-image"
                    />
                  </div>
                  <div className="card-remain-info pl-[20px] pt-[20px]">
                    <h2 className="font-bold text-[23px]">
                      {items.size} Yard Skip
                    </h2>
                    <h2 className="text-[#979797]">
                      {items.hire_period_days} day hire period
                    </h2>
                  </div>
                  <div className="birr pl-[20px] text-[var(--blue-color)] font-bold text-[30px] mt-[20px]">
                    &#x20AC; {items.price_before_vat}
                  </div>
                  <button
                    className={
                      selectedCard === items.id
                        ? "w-[90%] flex justify-center transition-all duration-400 items-center gap-4 rounded-[10px] mt-[10px] h-[50px] cursor-pointer bg-[var(--blue-color)] ml-[20px]"
                        : "w-[90%] flex justify-center transition-all duration-400 items-center gap-4 rounded-[10px] mt-[10px] h-[50px] cursor-pointer bg-[#2A2A2A] ml-[20px]"
                    }
                  >
                    {selectedCard === items.id ? (
                      <>
                        <span>Selected</span>
                      </>
                    ) : (
                      <>
                        <span>Select This Skip</span>
                        <HiOutlineArrowNarrowRight />
                      </>
                    )}
                  </button>
                </div>
              );
            })}
            {/*Card Ends Here!*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardComponent;
