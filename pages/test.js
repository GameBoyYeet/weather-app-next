import Head from 'next/head'
import { stations } from "../components/Stations"
import React, { useEffect, useState } from "react";


export default function Test({  }) {



    const [name, setName] = useState();
    console.log(stations)

  return (
 
    <div>
        <form>
            <select onChange={(e)=>setName(e.target.value)}>
            {stations.map(station => (
              <option value={station.name} >
                {station.name}
              </option>
            ))}
            </select>
        </form>

        <h3>You have selected {name}</h3>

        




    </div>
  )
}

