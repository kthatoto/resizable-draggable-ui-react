import Draggable from "react-draggable";
import { useState } from "react";

export default () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Draggable>
        <div style={{ background: "gray", width, height }}></div>
      </Draggable>
    </div>
  );
};
