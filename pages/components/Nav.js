import React from "react";
import styles from "../../styles/Nav.module.css";
import Avatar from "@material-ui/core/Avatar";
import SettingsIcon from "@material-ui/icons/Settings";

function Nav() {
  return (
    <div className={styles.nav}>
      <img
        className={styles.nav__logo}
        src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399"
        alt=""
      />
      <div className={styles.nav__container}>
        <SettingsIcon className={styles.nav__settings} />
        <Avatar />
      </div>
    </div>
  );
}

export default Nav;
