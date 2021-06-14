import React from "react";
import styles from "../../styles/MessageCard.module.css";
import { Avatar } from "@material-ui/core";
function MessageCard({ color, name, pic }) {
  return (
    <div className={styles.messageCard}>
      <Avatar src={pic} />
      <div className={styles.messageCard__container}>
        <div className={styles.messageCard__infoContainer}>
          <span
            className={`${styles.messageCard__dot} ${styles[color]}`}
          ></span>
          <h5 className={styles.messageCard__name}>{name}</h5>
        </div>
        <p className={styles.messageCard__texts}> Texts goes here</p>
      </div>
    </div>
  );
}

export default MessageCard;
