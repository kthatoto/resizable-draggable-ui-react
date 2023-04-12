import { Rnd } from "react-rnd";

export default () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Rnd
        default={{ x: 0, y: 0, width: 100, height: 100 }}
        minWidth={50}
        maxHeight={50}
        style={{ backgroundColor: "gray" }}
        resizeHandleStyles={{
          bottomRight: { backgroundColor: "blue" },
        }}
      />
    </div>
  );
};
