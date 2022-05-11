import Sidebar from "../../../Components/seller/sidebar/Sidebar";
import Navbar from "../../../Components/seller/navbar/Navbar";
import "./home.scss";
import Widget from "../../../Components/seller/widget/Widget";
import Featured from "../../../Components/seller/featured/Feature";
import Chart from "../../../Components/seller/chart/Chart";
import Table from "../../../Components/seller/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
