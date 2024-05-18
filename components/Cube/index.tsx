"use client";
import styles from "./index.module.scss";

export default function Index() {
  return (
    <div className={styles.frame}>
      <div className="cube">
        <div className="surface surface-1">A</div>
        <div className="surface surface-2">B</div>
        <div className="surface surface-3">C</div>
        <div className="surface surface-4">D</div>
        <div className="surface surface-5">E</div>
        <div className="surface surface-6">F</div>
      </div>
    </div>
  );
}
