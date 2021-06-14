import React from "react";
import styles from "../../styles/Sidebar.module.css";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import MessageCard from "./MessageCard";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__container}>
        <MessageCard color="orange" name="Nova" pic="/avatar-6.jpg"/>
        <MessageCard color="blue" name="Eric" pic="/avatar-3.jpg"/>
        <MessageCard color="pink" name="Sam" pic="/avatar-2.jpg"/>
        <MessageCard color="purple" name="Nick" pic="/avatar-1.jpg"/>
        <MessageCard color="orange" name="Nova" pic="/avatar-6.jpg"/>
        <MessageCard color="blue" name="Eric" pic="/avatar-3.jpg"/>
        <MessageCard color="pink" name="Sam" pic="/avatar-2.jpg"/>
        <MessageCard color="purple" name="Nick" pic="/avatar-1.jpg"/>
      </div>
      <div>
        <button className={styles.sidebar__button}>Add</button>
        <NightsStayIcon className={styles.sidebar__darkMode} />
      </div>
    </div>
  );
}

export default Sidebar;
