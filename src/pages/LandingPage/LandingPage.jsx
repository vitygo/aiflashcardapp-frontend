import styles from "./LandingPage.module.css";
import Hero from "../../components/Hero/Hero";
import Product from "../../components/Product/Product";
export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Hero />
      {/* <Product/> */}
    </div>
  );
}
