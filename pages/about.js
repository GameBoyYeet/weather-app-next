import Head from 'next/head'
import SelectSearch from 'react-select-search';
import fuzzySearch from "../components/fuzzySearch"
import { stations } from "../components/Stations"
import React, { useEffect, useState } from "react";
import Select from 'react-select'

export default function Home({  }) {

  // Display selected value

  const [id, setID] = useState();


  return (
    // Have to have a single parent element but does not have to be a div
    <div>

      <head> 
        <title>Test</title>
      </head> 

      <h1>Test</h1>

        <Select 
            value={id}
            onChange={setID}
            options={stations.map(({ id, name }) => ({ value: id, label: name }))} 
        />

        <h3>You have selected {} </h3>

   

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