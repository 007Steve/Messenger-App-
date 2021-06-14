import React from "react";
import styles from "../../styles/Chat.module.css";
import { Avatar } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
function Chat() {
  return (
    <div className={styles.chat}>
      <div className={styles.chat__header}>
        <h2 className={styles.chat__name}>Nova</h2>
        {/* <Avatar /> */}
      </div>
      <div className={styles.chat__container}>texts</div>
      <div className={styles.chat__inputContainer}>
        <div className={styles.chat__iconsContainer}>
          <VideocamOutlinedIcon className={styles.chat__icon} />
          <PhotoSizeSelectActualOutlinedIcon className={styles.chat__icon} />
          <AddCircleOutlineOutlinedIcon className={styles.chat__icon} />
          <AttachFileOutlinedIcon className={styles.chat__icon} />
        </div>
        <form className={styles.chat__form}>
          <input
            className={styles.chat__input}
            type="text"
            id="message"
            placeholder="Type something here..."
          />
        </form>
        <div className={styles.chat__iconsContainer}>
          <SentimentSatisfiedOutlinedIcon className={styles.chat__icon} />
          <SendIcon className={styles.chat__icon} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
