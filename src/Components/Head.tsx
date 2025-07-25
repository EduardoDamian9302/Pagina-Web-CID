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
      <div>
        <HeadSuperior />
        <HeadInferior />
      </div>
    </div>
  );
};
export default Head;
