import styles from "./index.module.scss";

export default function NumberGradient() {
  return (
    <div className={styles.frame}>
      <div className="center">
        <div className="number">
          <div className="one-one"></div>
          <div className="one-two"></div>
          <div className="zero-one"></div>
          <div className="zero-two"></div>
        </div>
        <span className="big">Days</span>
        <span className="small">CSS Challenge</span>
      </div>
    </div>
  );
}
