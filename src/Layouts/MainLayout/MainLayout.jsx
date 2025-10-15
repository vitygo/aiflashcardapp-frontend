import styles from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";


import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className={`${styles.mainLayout} ${
        !sidebarOpen ? styles.sidebarClosed : ""
      }`}
    >
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={styles.mainContainer}>
        <Outlet context={{ sidebarOpen, setSidebarOpen }}/>
      </div>
    </div>
  );
}
