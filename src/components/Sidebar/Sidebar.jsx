import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaFolderPlus } from "react-icons/fa6";
import { PiFoldersFill } from "react-icons/pi";
import { FaGamepad } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import { MdScoreboard } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

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
        <button
          className={styles.sidebarBtn}
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <IoMenu size="30px" />
        </button>
      </div>
      <div className={styles.sidebarBody}>
        <ul className={styles.sidebarBodyList}>
          <li>
            <IoHome size="30px" color="" />
            {sidebarOpen && <span>Home</span>}
          </li>
          <li>
            <FaFolderPlus size="30px" color="" />
            {sidebarOpen && <span>New Set</span>}
          </li>
          <li>
            <PiFoldersFill size="30px" color="" />
            {sidebarOpen && <span>Flashcards</span>}
          </li>
          <li>
            <FaGamepad size="30px" color="" />
            {sidebarOpen && <span>Study Modes</span>}
          </li>
          <li>
            <PiExamFill size="30px" color="" />
            {sidebarOpen && <span>Tests</span>}
          </li>
          <li>
            <MdScoreboard size="30px" color="" />
            {sidebarOpen && <span>Statistics</span>}
          </li>
          <li>
            <IoPersonSharp size="30px" color="" />
            {sidebarOpen && <span>Profile</span>}
          </li>
          <li>
            <IoMdSettings size="30px" color="" />
            {sidebarOpen && <span>Settings</span>}
          </li>
        </ul>
      </div>
    </div>
  );
}
