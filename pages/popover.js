import * as Popover from '@radix-ui/react-popover';
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { stations } from "../components/Stations";


// export default function Final() {
//     return (
//       <div>
//         <Popper />
//         <Scroll />
//       </div>
//     );
//   }


// Array
const data = stations.map(station => (
    <option value={station.name} >
      {station.name}
    </option>
  ))


// Popover

export default () => (
  <Popover.Root>
    <Popover.Trigger>Trigger</Popover.Trigger>
    <Popover.Content>
        <Scroll>
            {data}
        </Scroll>
        <Popover.Arrow />
    </Popover.Content>
  </Popover.Root>
);


// Scroll Area
const Scroll = ({ children }) => (
    <div style={{ height: 250 }}>
      <ScrollArea.Root>
        <ScrollArea.Viewport>{children}</ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  );
  