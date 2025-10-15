import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className={`${styles.sidebar} ${sidebarOpen ? "" : styles.closed}`}>
      <div
        className={`${styles.sidbarHeader} ${sidebarOpen ? "" : styles.closed}`}
      >
        {sidebarOpen && (
          <Link className={styles.logo} to="/">
            <img
              src="./flashlogo.png"
              className={styles.logoImage}
              alt="logo"
            />
            <p className={styles.logoText}>FlashBloomery</p>
          </Link>
        )}
        <button className={styles.sidebarBtn} onClick={() => setSidebarOpen((prev) => !prev)}>
          <IoMenu size="30px" />
        </button>
        
      </div>
    </div>
  );
}
