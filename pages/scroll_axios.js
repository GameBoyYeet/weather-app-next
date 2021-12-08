import * as ScrollArea from "@radix-ui/react-scroll-area";
import { stations } from "../components/Stations";
import styles from "../styles/Scroll.module.css";
import React, { useEffect, useState } from "react";

export default ({}) => {
  const URL = `https://api.openweathermap.org/data/2.5/onecall`;
  const API_KEY = `da80dff9846628584a158c4c17eb8ca9`;
  const units = "metric";
  const [lat, setLatitude] = useState(null);
  const [lon, setLongitude] = useState(null);
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    loadData();
  }, [lat, lon]);

  const loadData = async () => {
    const res = await fetch(
      `${URL}?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely,dayly&appid=${API_KEY}`
    );
    const data = await res.json();
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    setTemperature(data.current.temp)
  };

  return (
    <>
      <div>
        <ScrollArea.Root className={styles.ScrollArea}>
          <ScrollArea.Viewport className={styles.Viewport}>
            <div className={styles.Box}>
              <div className={styles.tag}>
                <tag>{temperature}</tag>
              </div>
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            orientation="horizontal"
            className={styles.Scrollbar}
          >
            <ScrollArea.Thumb className={styles.Thumb} />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
    </>
  );
};

// export const getStaticProps = async () => {
//   const URL = `https://api.openweathermap.org/data/2.5/onecall`;
//   const API_KEY = `da80dff9846628584a158c4c17eb8ca9`;
//   const units = "metric";
//   const lat = 64.1355;
//   const lon = -21.8954;

//   const res = await fetch(
//     `${URL}?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely,dayly&appid=${API_KEY}`
//   );

//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
