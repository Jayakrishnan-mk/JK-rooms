import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/Navbar";
import "./home.scss";
import Widget from "../../../components/admin/widget/Widget";
import Featured from "../../../components/admin/featured/Featured";
import Chart from "../../../components/admin/chart/Chart";
// eslint-disable-next-line
import Table from "../../../components/admin/table/Table";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  useEffect (() => {
    if (!localStorage.getItem('adminToken')) {
      navigate('/admin')
    }// eslint-disable-next-line
  } , [])

  return (
    <div className="adminHome">
      <Sidebar />
      <div className="adminHomeContainer">
        <Navbar />
        <div className="adminWidgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="adminCharts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        {/* <div className="adminListContainer">
          <div className="adminListTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
