import React from "react";
import ProgressItem from "./ProgressItem";
import styles from "./Progress.module.scss";

const Progress: React.FC = () => {
  const [progress, setProgress] = React.useState(0);

  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const stories = [
    {
      img: "",
    },
    {
      img: "",
    },
    {
      img: "",
    },
    {
      img: "",
    },
  ];


  return (
    <div className={styles.line_container}>
      {stories.map((el, index) => (
        <ProgressItem
          key={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          index={index}
        />
      ))}
    </div>
  );
};

export default Progress