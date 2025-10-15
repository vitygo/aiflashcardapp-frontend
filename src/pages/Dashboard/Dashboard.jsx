import styles from "./Dashboard.module.css";
import { useOutletContext } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

export default function Dashboard() {
  const { sidebarOpen, setSidebarOpen } = useOutletContext();

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <button className={`${styles.sidebarBtn} ${sidebarOpen ? styles.closed : ''}`} onClick={() => setSidebarOpen((prev) => !prev)}>
          <IoMenu size="30px" />
        </button>
      </div>
      dashboard
    </div>
  );
}
