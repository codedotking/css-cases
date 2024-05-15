"use client";
import { useRef } from "react";
import styles from "./index.module.scss";

export default function NumberGradient() {
  const menuIcon = useRef<HTMLDivElement>(null);
  // handleClick 给当前元素动态增加 active
  const handleClick = () => {
    menuIcon.current?.classList.toggle("active");

    // 移除下面 menuIcon 子元素的 no-animation
    const lines = menuIcon.current?.querySelectorAll(".no-animation");
    lines?.forEach((line) => line.classList.remove("no-animation"));
  };

  return (
    <div className={styles.frame}>
      <div className="center">
        <div className="menu-icon" ref={menuIcon} onClick={handleClick}>
          <div className="line-1 no-animation"></div>
          <div className="line-2 no-animation"></div>
          <div className="line-3 no-animation"></div>
        </div>
      </div>
    </div>
  );
}
