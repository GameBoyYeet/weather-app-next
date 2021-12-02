import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { stations } from "../components/Stations";
import React, { useEffect, useState } from "react";


export const DropdownMenuDemo = () => {

  const [id, setID] = useState();

  console.log(id)

  return (
    
    <div>
    <DropdownMenu.Root>
    <DropdownMenu.Trigger>Trigger</DropdownMenu.Trigger>

    <DropdownMenu.Content>
      <DropdownMenu.Label>Label</DropdownMenu.Label>
      <DropdownMenu.Item onChange={(e)=>setID(e.target.value)} >
          {stations.map(station => (
              <option value={station.name} >
                {station.name}
              </option>
            ))}
      </DropdownMenu.Item>

        </DropdownMenu.Content>

  </DropdownMenu.Root>
  <h3>You have selected {id}</h3>
  </div>

  )};


export default DropdownMenuDemo;
