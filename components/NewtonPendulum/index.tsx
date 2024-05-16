"use client";
import styles from "./index.module.scss";

export default function Index() {
  return (
    <div className={styles.frame}>
      <div className="cradle">
        <div className="ball ball-1"></div>
        <div className="ball ball-2"></div>
        <div className="ball ball-3"></div>
        <div className="ball ball-4"></div>
        <div className="ball ball-5"></div>
      </div>
    </div>
  );
}
