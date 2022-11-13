import "./App.css";
import Chart from "./components/Chart";
import Feature from "./components/Feature";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";
import Graph from "./components/Graph";
import Table from "./components/Table";
import Card from "./components/Card";

function App() {
  return (
    <div className="App w-full flex items-start justify-start">
      <Sidebar />
       <div className="home flex-initial w-full lg:w-10/12 flex-wrap">
        <Navbar />
        <div className="widgets flex  mt-4  px-8 w-full gap-6 flex-wrap">
          <Widget type="Patient" />
          <Widget type="Staff" />
          <Widget type="Treatment" />
          <Widget type="Cars" />
        </div>
        <div className="charts flex flex-col lg:flex-row justify-between px-8 w-full gap-6 mt-4 flex-wrap">
          <Chart />
          <Feature />
        </div>
        <div className="charts flex flex-col md:flex-row justify-between px-8 w-full mt-4">
          <Graph />
          <Table />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
