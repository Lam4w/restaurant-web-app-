import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { useMemo, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Home() {
  const token = useSelector((state) => state.token);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [orderStats, setOrderStats] = useState([]);

  const getStats = async () => {
    try {
      const response = await axios.get("http://localhost:3001/orders/stats", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const statsList = response.data.sort(function (a, b) {
        return a._id - b._id;
      });

      statsList.map((item) =>
        setOrderStats((prev) => [
          ...prev,
          { name: MONTHS[item._id - 1], "New Order": item.total },
        ])
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStats();
  }, [MONTHS]); // eslint-disable-line react-hooks/exhaustive-deps

  console.log("order stats",orderStats);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={orderStats} title="Order Analytics" grid dataKey="New Order"/>
    </div>
  );
}
