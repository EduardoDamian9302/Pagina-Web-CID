import styles from "./Head.module.css";
import HeadInferior from "./Head_inferior.tsx";
import HeadSuperior from "./Head_superior.tsx";

const Head: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          background: "#0c231e",
          color: "#ffffff",
          textAlign: "center",
          fontWeight: "bold",
          padding: "4px 0",
          letterSpacing: "1px",
          fontSize: "1.1rem",
        }}
      >
        <img
          src="/logo192.png"
          width="32"
          height="32"
          className={styles.logo}
          alt="React logo"
        />
        <HeadSuperior />
        <HeadInferior />
      </div>
    </div>
  );
};
export default Head;
