import {
  CalendarToday,
  PermIdentity,
  PhoneAndroid,
  AttachMoney,
  Comment,
  LocalShipping,
  Home,
  FormatColorText,
} from "@material-ui/icons";
import { Link , useParams, useNavigate } from "react-router-dom";
import "./order.css";
import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Order() {
  const orderId = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState({});
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('false');

  const token = useSelector((state) => state.token);

  const handleSelectChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async () => {
    const deliverStatus = { "isDelivered": status === 'true' ? true : false};

    await axios.put(`http://localhost:3001/orders/${orderId.orderId}`, deliverStatus, {
      headers: { Authorization: `Bearer ${token}` },
    });

    navigate('/orders');
  };

  const getOrder = async () => { 
    const response = await axios.get(`http://localhost:3001/orders/${orderId.orderId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const orderInfo = await response.data;

    setOrder(orderInfo);
    setItems(orderInfo?.products);
  };

  useEffect(() => {
    getOrder();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const columns = [
    { field: "product_id", headerName: "Product ID", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="orderListorder">
            {params.row.price.toLocaleString()} VND
          </div>
        );
      },
    },
    { field: "quantity", headerName: "Quantity", width: 150 },
    {
      field: "total",
      headerName: "Total",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="orderListorder">
            {params.row.total.toLocaleString()} VND
          </div>
        );
      },
    },
  ];

  return (
    <div className="order">
      <div className="orderTitleContainer">
        <h1 className="orderTitle">Edit order</h1>
        <Link to="/orders">
          <button className="userAddButton">Back</button>
        </Link>
      </div>
      <div className="orderContainer">
        <div className="orderShow">
          <div className="orderShowTop">
          </div>
          <div className="orderShowBottom">
            <span className="orderShowTitle">Order Details</span>
            <div className="orderShowInfo">
              <FormatColorText className="orderShowIcon" />
              <span className="orderShowInfoTitle">ID: {order?._id}</span>
            </div>
            <div className="orderShowInfo">
              <CalendarToday className="orderShowIcon" />
              <span className="orderShowInfoTitle">Created at: {order?.date && order?.date.toString()}</span>
            </div>
            <div className="orderShowInfo">
              <AttachMoney className="orderShowIcon" />
              <span className="orderShowInfoTitle">Total: {order?.total && order?.total.toLocaleString()} VND</span>
            </div>
            <div className="orderShowInfo">
              <Comment className="orderShowIcon" />
              <span className="orderShowInfoTitle">Note: {order?.note}</span>
            </div>
            <div className="orderShowInfo">
              <LocalShipping className="orderShowIcon" />
              <span className="orderShowInfoTitle">Status: {order?.isDelivered ? "Delivered" : "Pending"}</span>
            </div>
            <span className="orderShowTitle">Contact Details</span>
            <div className="orderShowInfo">
              <PermIdentity className="orderShowIcon" />
              <span className="orderShowInfoTitle">Name: {order?.name}</span>
            </div>
            <div className="orderShowInfo">
              <PhoneAndroid className="orderShowIcon" />
              <span className="orderShowInfoTitle">Phone: {order?.phone}</span>
            </div>
            <div className="orderShowInfo">
              <Home className="orderShowIcon" />
              <span className="orderShowInfoTitle">Address: {order?.address}</span>
            </div>
            <div className="orderShowInfo">
              <label>Status: </label>
              <select name="isDelivered" id="active" onChange={handleSelectChange}>
                <option value="false">Pending</option>
                <option value="true">Delivered</option>
              </select>
            </div>
            <div className="orderShowInfo">
              <button className="userAddButton" onClick={handleSubmit} type="button">Update</button>
            </div>
          </div>
        </div>
        <div className="orderUpdate">
          <DataGrid
            rows={items}
            getRowId={(items) => items?.product_id}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
          />
        </div>
      </div>
    </div>
  );
}
