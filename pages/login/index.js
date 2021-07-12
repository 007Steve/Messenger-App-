import React from "react";
import styles from "../../styles/Login.module.css";
import Link from "next/link";
function index() {
  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <img
          className={styles.login__logo}
          src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399"
          alt=""
        />
        <h1>Messenger App</h1>
        <form className={styles.login__form}>
          <input className={styles.login__formInput} placeholder="Name"></input>
          <input
            className={styles.login__formInput}
            placeholder="Password"
          ></input>
          <Link href="/">
            <button className={styles.login__button}>Login</button>
          </Link>
          <p>Or</p>
          <button className={styles.login__buttonTwo}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default index;
