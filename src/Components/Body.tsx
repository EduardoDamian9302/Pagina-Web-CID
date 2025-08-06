import CardButtonAnimate from "./CardButtonAnimate.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

function Body() {
  return (
    <div
      style={{
        paddingTop: "80px",
        height: "100%",
        bottom: 0,
        backgroundColor: "#FFFAFA",
      }}
    >
      <CardButtonAnimate />
    </div>
  );
}

export default Body;
