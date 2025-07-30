import "./App.css";
import Head from "./Components/Head";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="site">
      <Head></Head>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
