import main from "../src/assets/main.jpg";
import "./App.css";
function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="left">
          <h1 className="time">Under Construction</h1>
          <p className="title">
            Our website is under construction , we are working very hard to give
            you the best experince with this one
          </p>
          <p className="description">Down for maintenace</p>
          <button className="button">Thank you</button>
        </div>
        <div className="right">
          <img src={main} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
