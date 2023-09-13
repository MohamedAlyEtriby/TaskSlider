import React, { useState } from "react";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import slides from "../SliderData";

const Slider = () => {
  const [startIndex, setStartIndex] = useState(0);

  const endIndex = (startIndex + 8) % slides.length;
  const slicedItems =
    endIndex > startIndex
      ? slides.slice(startIndex, endIndex)
      : [
          ...slides.slice(startIndex, slides.length),
          ...slides.slice(0, endIndex),
        ];

  const handleClickNext = () => {
    setStartIndex((startIndex + 1) % slides.length);
  };
  const handleClickPrev = () => {
    setStartIndex(startIndex - 1 < 0 ? slides.length - 1 : startIndex - 1);
  };
  return (
    <div className="sliderclicks">
      <div className="slider">
        {slicedItems.map((item, index) => {
          return (
            <div className={`rot ${index === 6 && "current"} item`}>
              <img src={item.image} alt="" className="sora" />
            </div>
          );
        })}
      </div>
      <div className="controlSlider">
        <button className="Button" onClick={handleClickPrev}>
          <FcPrevious size={40} />
        </button>
        <div>
          <p>{slicedItems[6].Name}</p>
          <p>{slicedItems[6].title}</p>
        </div>
        <button onClick={handleClickNext} className="Button">
          <FcNext size={40} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
