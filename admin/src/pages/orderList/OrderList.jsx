import "./orderList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";

export default function OrderList() {
  const [data, setData] = useState([]);
  const token = useSelector((state) => state.token);

  const getOrders = async () => {
    const response = await axios.get('http://localhost:3001/orders', {
      headers: { Authorization: `Bearer ${token}` },
    });
    
    const resData = response.data;
    setData(resData);
  };

  useEffect(() => {
    getOrders();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "address",
      headerName: "Address",
      width: 150,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 130,
    },
    {
      field: "date",
      headerName: "Date",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="orderListorder">
            {params.row.date.toString()}
          </div>
        );
      },
    },
    {
      field: "total",
      headerName: "Total",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="orderListorder">
            {params.row.total.toLocaleString()} VND
          </div>
        );
      },
    },
    {
      field: "isDelivered",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <div className={params.row.isDelivered ? "orderListorder" : "orderListorder active"}>
            {params.row.isDelivered ? "Delivered" : "Pending"}
          </div>
        );
      },
    },
    {
      field: "note",
      headerName: "Note",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/order/" + params.row._id}>
              <button className="orderListEdit">Edit</button>
            </Link>
          </>
        );
      },
    },
  ];
  
  return (
    <div className="orderList">
      <DataGrid
        rows={data}
        getRowId={(data) => data?._id}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
      />
    </div>
  );
};
