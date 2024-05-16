"use client";
import styles from "./index.module.scss";

export default function Index() {
  return (
    <div className={styles.frame}>
      <div className="parasol">
        <div className="pole"></div>
        <div className="shadowPole"></div>
        <div className="top">
          <div className="triangle triangle-1"></div>
          <div className="triangle triangle-2"></div>
          <div className="triangle triangle-3"></div>
          <div className="triangle triangle-4"></div>
          <div className="triangle triangle-5"></div>
          <div className="triangle triangle-6"></div>
          <div className="triangle triangle-7"></div>
          <div className="triangle triangle-8"></div>
          <div className="triangle triangle-9"></div>
          <div className="triangle triangle-10"></div>
          <div className="triangle triangle-11"></div>
          <div className="triangle triangle-12"></div>
        </div>
        <div className="shadowTop">
          <div className="shadow">
            <div className="triangle triangle-1"></div>
            <div className="triangle triangle-2"></div>
            <div className="triangle triangle-3"></div>
            <div className="triangle triangle-4"></div>
            <div className="triangle triangle-5"></div>
            <div className="triangle triangle-6"></div>
            <div className="triangle triangle-7"></div>
            <div className="triangle triangle-8"></div>
            <div className="triangle triangle-9"></div>
            <div className="triangle triangle-10"></div>
            <div className="triangle triangle-11"></div>
            <div className="triangle triangle-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
