"use client";
import styles from "./index.module.scss";

export default function Index() {
  return (
    <div className={styles.frame}>
      <div className="floor"></div>
      <div className="ballMove">
        <div className="ballUp">
          <div className="ballDown">
            <div className="ball"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
