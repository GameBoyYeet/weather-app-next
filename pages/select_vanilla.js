import Head from 'next/head'
import { stations } from "../components/Stations"
import React, { useEffect, useState } from "react";

export default function Test({  }) {

    const [id, setID] = useState();
    console.log(stations)

  return (
 
    <div>

      <head> 
        <title>Toolbar</title>
      </head> 

        <form>
            <select onChange={(e)=>setID(e.target.value)}>
            {stations.map(station => (
              <option value={station.name} >
                {station.name}
              </option>
            ))}
            </select>
        </form>

        <h3>You have selected {id}</h3>
        
      
    </div>
  )
}

