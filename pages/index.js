import Head from 'next/head'
import SelectSearch from 'react-select-search';
import fuzzySearch from "../components/fuzzySearch"
import React, { useEffect, useState } from "react";



export default function Home({ stations }) {

  // Display selected value
  const [id, setID] = useState();
  const [station, setStation] = useState([]); 
  console.log(station)

  const getStation = async (id) => {
    const res = await fetch (`https://apis.is/weather/observations/en?stations=${id}`)
    const data = await res.json();
    setStation(data.results)
    setID(id)
  }
  

  return (
    // Have to have a single parent element but does not have to be a div
    <div>

      <head> 
        <title>Weather App with Next.js</title>
        <meta name='keywords' content='weather, Iceland' />
      </head>

      <h1>Selet the city</h1>

      <SelectSearch
          onChange={getStation}
          value={id}
          options={[]}
          getOptions={() => {
              return new Promise((resolve, reject) => {
                  fetch(`http://apis.is/weather/getAvailableStations`)
                      .then(response => response.json())
                      .then(({ results }) => {
                          resolve(results.map(({ id, name }) => ({ value: id, name: name })))
                      })
                      .catch(reject);
              });
          }}
          search
          filterOptions={fuzzySearch}
          emptyMessage="Not found"
          placeholder="City"         
      />

      <h3>You have selected: {id}</h3>

        {station.map(((station) => <h3>{station.name}</h3>
        ))}

    </div>
  )
}

// export const getServerSideProps = async (context) => {
//   const res = await fetch (`https://apis.is/weather/observations/en?stations=${context.query.stations}`)
//   const data = await res.json();
//   const stations = data.results

//   return {
//     props: {
//       stations
//     }
//   }

// }