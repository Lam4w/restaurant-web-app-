import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";

export default function UserList() {
  const [data, setData] = useState([]);
  const token = useSelector((state) => state.token);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:3001/users', {
      headers: { Authorization: `Bearer ${token}` },
    });
    
    const resData = response.data;
    setData(resData);
  };

  useEffect(() => {
    getUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  const columns = [
    { field: "_id", headerName: "ID", width: 120 },
    {
      field: "firstName",
      headerName: "First Name",
      width: 150,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 150,
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "phone",
      headerName: "Phone",
      width: 130,
    },
    {
      field: "address",
      headerName: "Address",
      width: 180,
    },
    {
      field: "isAdmin",
      headerName: "Role",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <div className={!params.row.isAdmin ? "userListUser" : "userListUser active"}>
              {params.row.isAdmin ? "Admin" : "User"}
            </div>
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Details</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        getRowId={(data) => data?._id}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
      />
    </div>
  );
}
