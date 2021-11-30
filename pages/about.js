import Head from 'next/head'
import SelectSearch from 'react-select-search';
import fuzzySearch from "../components/fuzzySearch"
import { stations } from "../components/Stations"
import React, { useEffect, useState } from "react";
// import Select from 'react-select'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function Home({  }) {

  //Render the selected station
  const [name, setName] = useState();

  return (
  
    <div>

      <head> 
        <title>Test</title>
      </head> 

      <h1>Test</h1>

        <DropdownMenu.Root>

        <DropdownMenu.Trigger>Select the city</DropdownMenu.Trigger>

        <DropdownMenu.Content >

        <select onChange={(e)=>setName(e.target.value)}>
            {stations.map(station => (
              <option value={station.name} >
                {station.name}
              </option>
            ))}
            </select>
   

        </DropdownMenu.Content>

        <h3>{name}</h3>

        </DropdownMenu.Root>




        {/* <Select 
            value={id}
            onChange={setID}
            options={stations.map(({ id, name }) => ({ value: id, label: name }))} 
        />

        <h3>You have selected {id}</h3> */}


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