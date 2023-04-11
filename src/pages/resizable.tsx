import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useCallback, useRef, useState } from "react";

const MIN_WIDTH = 50;
const MIN_HEIGHT = 50;
export default () => {
  const [size, setSize] = useState({ width: 100, height: 100 });

  const resizeNodeRef = useRef(null);
  const horizontalResizeNodeRef = useRef(null);
  const verticalResizeNodeRef = useRef(null);

  const onStartResize = useCallback((e: DraggableEvent) => {
    e.stopPropagation();
  }, []);

  const onResize = useCallback((_e: DraggableEvent, data: DraggableData) => {
    setSize({
      width: Math.max(MIN_WIDTH, size.width + data.deltaX),
      height: Math.max(MIN_HEIGHT, size.height + data.deltaY),
    });
  }, [size]);
  const onHorizontalResize = useCallback((_e: DraggableEvent, data: DraggableData) => {
    setSize({
      width: Math.max(MIN_WIDTH, size.width + data.deltaX),
      height: size.height,
    });
  }, [size]);
  const onVerticalResize = useCallback((_e: DraggableEvent, data: DraggableData) => {
    setSize({
      width: size.width,
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
                height: 8,
                width: 8,
                position: "absolute",
                bottom: 0,
                right: 0,
                cursor: "nwse-resize",
                backgroundColor: "yellow",
              }}
            ></div>
          </Draggable>
          <Draggable
            nodeRef={horizontalResizeNodeRef}
            onDrag={onHorizontalResize}
            onStart={onStartResize}
            axis="none"
          >
            <div
              ref={horizontalResizeNodeRef}
              style={{
                height: "calc(100% - 8px)",
                width: 8,
                position: "absolute",
                top: 0,
                right: 0,
                cursor: "ew-resize",
                backgroundColor: "red",
              }}
            ></div>
          </Draggable>
          <Draggable
            nodeRef={verticalResizeNodeRef}
            onDrag={onVerticalResize}
            onStart={onStartResize}
            axis="none"
          >
            <div
              ref={verticalResizeNodeRef}
              style={{
                width: "calc(100% - 8px)",
                height: 8,
                position: "absolute",
                bottom: 0,
                left: 0,
                cursor: "ns-resize",
                backgroundColor: "blue",
              }}
            ></div>
          </Draggable>
        </div>
      </Draggable>
    </div>
  );
};
