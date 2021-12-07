import * as ScrollArea from "@radix-ui/react-scroll-area";
import { stations } from "../components/Stations";
import styles from "../styles/Scroll.module.css";

// const getHourlyWeather = async () => {
//   const res = await fetch(
//     `${URL}?lat=${lat}&lon=${lon}&exclude=minutely,dayly&appid=${API_KEY}`
//   );
//   const data = await res.json();
//   const hourlyWeather = data.current.dt;
//   console.log(hourlyWeather);
// };

export default ({ data }) => {
  //   let currentWeather = new Date(data.hourly[1].dt * 1000);
  //   let utcHours = currentWeather.getUTCHours();
  //   let currentTime = utcHours.toString().padStart(2, "0") + ":" + "00";

  return (
    <>
      <div>
        <ScrollArea.Root className={styles.ScrollArea}>
          <ScrollArea.Viewport className={styles.Viewport}>
            <div className={styles.Box}>
              {stations.map((station, index) => (
                <div className={styles.tag} data-index={index}>
                  <tag>{station.name}</tag>
                </div>
              ))}
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
      <br></br>
      <br></br>
      <div>
        <ScrollArea.Root className={styles.ScrollArea}>
          <ScrollArea.Viewport className={styles.Viewport}>
            <div className={styles.Box}>
              <div className={styles.tag}>
                <div className={styles.Box}>
                  {data.hourly.map((hours, index) => (
                    <div className={styles.tag} data-index={index}>
                      <tag>
                        {new Date(hours.dt * 1000).toLocaleString("en-GB", {
                          timeZone: "UTC",
                        })}
                        {/* {new Date(hours.dt * 1000).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })} */}
                      </tag>
                      <tag>{Math.round(hours.temp)} °C</tag>
                    </div>
                  ))}
                </div>
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

export const getStaticProps = async () => {
  const URL = `https://api.openweathermap.org/data/2.5/onecall`;
  const API_KEY = `da80dff9846628584a158c4c17eb8ca9`;
  const lat = 64.1355;
  const lon = -21.8954;
  const res = await fetch(
    `${URL}?lat=${lat}&lon=${lon}&exclude=minutely,daily&appid=${API_KEY}&units=metric`
  );

  // to fetch the current time
  const data = await res.json();
  //   let dateObj = new Date(currentWeather * 1000);
  //   let utcHours = dateObj.getUTCHours();
  //   let currentTime = utcHours.toString().padStart(2, "0") + ":" + "00";

  return {
    props: {
      data,
    },
  };
};
