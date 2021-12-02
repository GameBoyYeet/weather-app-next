import React, { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

const Dropdown = ({ text, options, onSelect }) => {
  const [isActive, setIsActive] = useState();

  return (
    <div className="dropdown-wrapper">
      <button aria-label={text} onClick={() => setIsActive(!isActive)}>
        {text}
      </button>
      {isActive && (
        <DropdownMenu
          setIsActive={setIsActive}
          options={options}
          onSelect={onSelect}
        />
      )}
    </div>
  );
};

const DropdownMenu = ({ setIsActive, options, onSelect }) => {
  const ref = useDetectClickOutside({
    onTriggered: () => {
      setIsActive(false);
    },
  });
  return (
    <div className="dropdown-menu" ref={ref}>
      {options.map((option) => (
        <button onClick={() => onSelect(option.id)}>{option.text}</button>
      ))}
    </div>
  );
};

export default Dropdown;
