import React from "react";
import styles from "./SendMessage.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import { IoPaperPlaneOutline } from "react-icons/io5";

const SendMessage: React.FC = () => {
  const [message, setMessage] = React.useState<string>("");

  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  return (
    <div className={styles.input_wrapper}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Отправить сообщение"
      />
      <button
        className={isLiked ? styles.likes_button_liked : styles.likes_button}
        onClick={() => setIsLiked(true)}
      >
        {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
      <button className={styles.send_message_button}>
        <IoPaperPlaneOutline />
      </button>
    </div>
  );
};

export default SendMessage;
