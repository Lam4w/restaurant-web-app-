import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward, Person, ShoppingCart } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function FeaturedInfo() {
  const token = useSelector((state) => state.token);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  const getTotalOrders = async () => {
    const response = await axios.get("http://localhost:3001/orders/total", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.data;
    setTotalOrders(data);
  };

  const getTotalUsers = async () => {
    const response = await axios.get("http://localhost:3001/users/total", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.data;
    setTotalUsers(data);
  };

  const getRevenue = async () => {
    const response = await axios.get("http://localhost:3001/orders/revenue", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.data;
    setRevenue(data);
  };

  useEffect(() => {
    getTotalOrders();
    getTotalUsers();
    getRevenue();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{revenue.toLocaleString()} VND</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Orders</span>
        <div className="featuredMoneyContainer">
          <ShoppingCart />
          <span className="featuredMoney">{totalOrders}</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Users</span>
        <div className="featuredMoneyContainer">
          <Person />
          <span className="featuredMoney">{totalUsers}</span>
        </div>
      </div>
    </div>
  );
}
