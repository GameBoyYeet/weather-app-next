import * as Popover from '@radix-ui/react-popover';
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { stations } from "../components/Stations";
import React, { useEffect, useState } from "react";

// Popover
export default () => {

  // const options = stations.map(station => (
  //   <option value={station.name} >
  //     {station.name}
  //   </option>
  // ))

  const [id, setID] = useState();

  console.log(id)

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger>Trigger</Popover.Trigger>
        <Popover.Content onChange={(e) => setID(e.target.value)} >
          {stations.map(station => (
            <option value={station.name} >
              {station.name}
            </option>
          ))}
        </Popover.Content>
      </Popover.Root>

      <h3>You have selected {id}</h3>

    </div>
  )
};

