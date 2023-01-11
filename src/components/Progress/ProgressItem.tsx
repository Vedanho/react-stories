import React from "react";
import styles from "./Progress.module.scss";

type ProgressItemProps = {
  activeIndex: number;
  setActiveIndex: (activeIndex: number) => void;
  index: number;
};

const ProgressItem: React.FC<ProgressItemProps> = ({
  activeIndex,
  setActiveIndex,
  index,
}) => {
  const handleTransition = (): void => {
    setTimeout(() => {
      setActiveIndex(activeIndex + 1);
    }, 1000);
  };

  return (
    <div className={styles.line_item_wrapper}>
      <div
        onTransitionEnd={handleTransition}
        className={"line_item " + `${activeIndex === index ? "active" : ""}`}
      ></div>
    </div>
  );
};

export default ProgressItem;
