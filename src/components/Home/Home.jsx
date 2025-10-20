import styles from "./Home.module.css";
import { TbClockHour2 } from "react-icons/tb";
import { BsCardChecklist } from "react-icons/bs";
import { GiCardExchange } from "react-icons/gi";
import { BsCardHeading } from "react-icons/bs";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.statisticContainer}>
        <StatisticBlock
          title="Study Hours"
          value={`${45.5}`}
          icon={<TbClockHour2 color="white" />}
        />
        <StatisticBlock
          title="Reviewed Today"
          value="230"
          icon={<GiCardExchange color="white" />}
        />
        <StatisticBlock
          title="Cards Mastered"
          value="5045"
          icon={<BsCardChecklist color="white" />}
        />
        <StatisticBlock
          title="Total Sets Created"
          value="53"
          icon={<BsCardHeading color="white" />}
        />
      </div>
    </div>
  );
}

export function StatisticBlock({ title, value, icon }) {
  return (
    <div className={styles.statisticBlock}>
      <div className={styles.blockIcon}>{icon}</div>
      <div className={styles.blockText}>
        <p className={styles.blockTitle}>{title}</p>
        <p className={styles.blockValue}>{value}</p>
      </div>
    </div>
  );
}
