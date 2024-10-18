import React, { useState } from 'react';
import './Switch.css'; // Optional: Add custom styling if needed

const Switch = () => {
  // State to track if the switch is on or off
  const [isOn, setIsOn] = useState(false);

  // Handler for when the switch is clicked
  const handleToggle = () => {
    setIsOn(!isOn); // Toggle the state between true/false

    // Perform some action when the switch is toggled
    if (!isOn) {
      console.log("The switch is ON");
      // Call some other action or function here
    } else {
      console.log("The switch is OFF");
      // Call another action if needed
    }
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
      <p>The switch is {isOn ? "ON" : "OFF"}</p>
    </div>
  );
};

export default Switch;