import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { stations } from "../components/Stations";
import React, { useEffect, useState } from "react";


export const DropdownMenuDemo = () => {

  const [id, setID] = useState();

  console.log(id)

  const test = (e) => {
    setID(e.target.innerText)
    console.log("test")
    console.log(e.target.innerHTML)
  }

  return (
    
    <div>
    <DropdownMenu.Root>
    <DropdownMenu.Trigger>Trigger </DropdownMenu.Trigger>

    <DropdownMenu.Content>
      <DropdownMenu.Label>Label</DropdownMenu.Label>
      
          {stations.map(station => (
              <DropdownMenu.Item onSelect={test} value={station.name} >
                {station.name}
              </DropdownMenu.Item>
            ))}
        
    

        </DropdownMenu.Content>
       
  </DropdownMenu.Root>
  
  <h3>You have selected {id}</h3>
  </div>

  )};


export default DropdownMenuDemo;
