import Draggable from "react-draggable";

export default () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Draggable>
        <div style={{ background: "gray", width: 100, height: 100 }}></div>
      </Draggable>
    </div>
  );
};
