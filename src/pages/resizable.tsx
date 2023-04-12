import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useCallback, useRef, useState } from "react";

const MIN_WIDTH = 50;
const MIN_HEIGHT = 50;

export default () => {
  const [size, setSize] = useState({ width: 100, height: 100 });
  const [resizingSize, setResizingSize] = useState(size);

  const draggableNodeRef = useRef(null);
  const resizeNodeRef = useRef(null);

  const onStartResize = useCallback((e: DraggableEvent) => {
    e.stopPropagation();
  }, []);
  const onStopResize = useCallback(() => {
    setSize(resizingSize);
  }, [resizingSize]);

  const onResize = useCallback((_e: DraggableEvent, data: DraggableData) => {
    setResizingSize({
      width: Math.max(MIN_WIDTH, size.width + data.x),
      height: Math.max(MIN_HEIGHT, size.height + data.y),
    });
  }, [size]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Draggable nodeRef={draggableNodeRef}>
        <div
          ref={draggableNodeRef}
          style={{ background: "gray", position: "relative", ...resizingSize }}
        >
          <Draggable
            nodeRef={resizeNodeRef}
            onDrag={onResize}
            onStart={onStartResize}
            onStop={onStopResize}
            position={{ x: 0, y: 0 }}
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
