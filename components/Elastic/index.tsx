import styles from "./index.module.scss";

export default function NumberGradient() {
  return (
    <div className={styles.frame}>
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="ellipse">
        <div className="grey"></div>
        <div className="green"></div>
      </div>
    </div>
  );
}
