import { stations } from "../components/Stations";
import React, { useEffect, useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import styles from "../styles/Scroll.module.css";

const SliderDailyWeather = () => {
  const [valueSlider, setValueSlider] = React.useState([3]);
  const handleValueChange = (valueSlider) => {
    setValueSlider(valueSlider);
  };

  return (
    <div>
      <h1>Step not working with decimals?</h1>
      <p>Value: {valueSlider}</p>
      <div className={styles.returnDiv}>
        <form>
          <Slider.Root
            className={styles.slider}
            step={0.1} // HERE
            min={0}
            max={5}
            value={valueSlider}
            onValueChange={handleValueChange}
          >
            <Slider.Track className={styles.sliderTrack}>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb className={styles.sliderThumb} />
          </Slider.Root>
        </form>
      </div>
    </div>
  );
};
export default SliderDailyWeather;
