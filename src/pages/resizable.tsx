import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useCallback, useRef, useState } from "react";

const MIN_WIDTH = 50;
const MIN_HEIGHT = 50;
export default () => {
  const [size, setSize] = useState({ width: 100, height: 100 });

  const resizeNodeRef = useRef(null);

  const onStartResize = useCallback((e: DraggableEvent) => {
    e.stopPropagation();
  }, []);

  const onResize = useCallback((_e: DraggableEvent, data: DraggableData) => {
    setSize({
      width: Math.max(MIN_WIDTH, size.width + data.deltaX),
      height: Math.max(MIN_HEIGHT, size.height + data.deltaY),
    });
  }, [size]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Draggable>
        <div style={{ background: "gray", position: "relative", ...size }}>
          <Draggable
            nodeRef={resizeNodeRef}
            onDrag={onResize}
            onStart={onStartResize}
            axis="none"
          >
            <div
              ref={resizeNodeRef}
              style={{
                height: 16,
                width: 16,
                position: "absolute",
                bottom: 0,
                right: 0,
                cursor: "nwse-resize",
                backgroundColor: "blue",
              }}
            ></div>
          </Draggable>
        </div>
      </Draggable>
    </div>
  );
};
