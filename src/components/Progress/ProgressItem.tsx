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

  React.useEffect(() => {
    setActiveIndex(index);
  }, [activeIndex]);

  return (
    <div className={styles.line_item_wrapper}>
      <div
        className={index === activeIndex ? styles.line_item : "undefined"}
      ></div>
    </div>
  );
};

export default ProgressItem;