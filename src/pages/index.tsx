import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

import styles from "@/styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Draggable>
        <div
          className={styles.draggable}
          style={{
            width: 100,
            height: 100,
          }}
        ></div>
      </Draggable>
    </div>
  );
};

export default Home;
