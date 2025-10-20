import styles from "./Dashboard.module.css";
import { useOutletContext } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Routes, Route } from "react-router-dom";
import Home from "../../components/Home/Home";
export default function Dashboard() {
  const { sidebarOpen, setSidebarOpen } = useOutletContext();

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <button
          className={`${styles.sidebarBtn} ${sidebarOpen ? styles.closed : ""}`}
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <IoMenu size="30px" />
        </button>
        <div className={styles.searchInputContainer}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search your set"
          />
          <FaSearch size="26px" />
        </div>
        <div className={styles.userContainer}>
          <div className={styles.userData}>
            <div className={styles.userImage}>
              <img
                className={styles.userAvatar}
                src="./betaavatar.png"
                alt="avatar"
              />
            </div>
            <p className={styles.userName}>Bob Nowak</p>
          </div>
          <IoIosArrowDown />
        </div>
      </div>
      <div className={styles.dashboardBody}>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
