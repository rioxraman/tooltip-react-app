import React, { useState } from "react";
import "../App.css";

const Tooltip = (props) => {
  let timeout;
  const [hovering, setHovering] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setHovering(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setHovering(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {hovering && (
        <div className={`Tooltip-Tip ${props.direction}`}>
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
