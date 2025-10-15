import styles from "./Product.module.css";
import { IoMdCheckmark } from "react-icons/io";

export default function Product() {
  return (
    <section className={styles.productSection}>
      <p className={styles.subtitle}>How It Works</p>
      <h1 className={styles.title}>Stop Wasting Time. Start Learning</h1>
      <div className={styles.stepsContainer}>
        <div className={styles.step}>
          <div className={styles.stepBlock}>
            <IoMdCheckmark color="white" size="34px" />
          </div>
          <div className={styles.stepText}>
            <h2 className={styles.stepNumber}>Upload Your Notes</h2>
            <p className={styles.stepDescr}>
              Paste text, upload a file, or simply use a link.
            </p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepBlock}>
            <IoMdCheckmark color="white" size="34px" />
          </div>
          <div className={styles.stepText}>
            <h2 className={styles.stepNumber}>Let AI Do the Work</h2>
            <p className={styles.stepDescr}>
              Our smart algorithm instantly generates your flashcards.
            </p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepBlock}>
            <IoMdCheckmark color="white" size="34px" />
          </div>
          <div className={styles.stepText}>
            <h2 className={styles.stepNumber}>Review Your Set</h2>
            <p className={styles.stepDescr}>
              Quickly edit or add any cards to perfect your set.
            </p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepBlock}>
            <IoMdCheckmark color="white" size="34px" />
          </div>
          <div className={styles.stepText}>
            <h2 className={styles.stepNumber}>Choose a Study Mode</h2>
            <p className={styles.stepDescr}>
              Select from practice tests, classic flashcards, and more.
            </p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepBlock}>
            <IoMdCheckmark color="white" size="34px" />
          </div>
          <div className={styles.stepText}>
            <h2 className={styles.stepNumber}>Master the Material</h2>
            <p className={styles.stepDescr}>
              Track your progress and learn faster than ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
