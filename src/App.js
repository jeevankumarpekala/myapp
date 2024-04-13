import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/index";
//https://github.com/jeevankumarpekala/hello.git
//https://github.com/jeevankumarpekala/myapp.git
import img from "../src/images/img.jpg";
function Helloworld() {
  return <img src={img} style={{ width: "400 px", height: "400px" }} />;
}
function App() {
  return (
    <div className="App">
      <>
        <Helloworld />
      </>
    </div>
  );
}

export default App;
