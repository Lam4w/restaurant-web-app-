import {
  PermIdentity,
  PhoneAndroid,
  AlternateEmail,
  LocationOn,
  VerifiedUser,
} from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import "./user.css";
import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { useSelector } from "react-redux";

export default function User() {
  const userId = useParams();
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const token = useSelector((state) => state.token);

  const getUser = async () => { 
    const response = await axios.get(`http://localhost:3001/users/${userId.userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const userInfo = await response.data;

    setUser(userInfo);
  };

  const getUserOrders = async () => {
    const response = await axios.get(`http://localhost:3001/orders/user/${userId.userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const orderList = await response.data;

    setOrders(orderList);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 120 },
    {
      field: "address",
      headerName: "Address",
      width: 200,
    },
    { field: "phone", headerName: "Phone", width: 200 },
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

  useEffect(() => {
    getUser()
    getUserOrders()
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">User details</h1>
        <Link to="/users">
          <button className="userAddButton">Back</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user?.firstName} {user?.lastName}</span>
              <span className="userShowUserTitle">{user?.email}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user?.firstName} {user?.lastName}</span>
            </div>
            <div className="userShowInfo">
              <AlternateEmail className="userShowIcon" />
              <span className="userShowInfoTitle">{user?.email}</span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+ {user?.phone}</span>
            </div>
            <div className="userShowInfo">
              <LocationOn className="userShowIcon" />
              <span className="userShowInfoTitle">{user?.address}</span>
            </div>
            <div className="userShowInfo">
              <VerifiedUser className="userShowIcon" />
              <span className="userShowInfoTitle">{user?.isAdmin ? "Admin" : "User"}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <DataGrid
            rows={orders}
            getRowId={(orders) => orders?._id}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
          />
        </div>
      </div>
    </div>
  );
};
