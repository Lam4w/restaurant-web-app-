import "./reviewList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function ReviewList() {
  const [data, setData] = useState([]);
  const token = useSelector((state) => state.token);

  const getReviews = async () => {
    const response = await axios.get('http://localhost:3001/reviews/all', {
      headers: { Authorization: `Bearer ${token}` },
    });

    const resData = response.data;
    setData(resData);
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/reviews/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setData(data.filter((item) => item._id !== id));
  };

  useEffect(() => {
    getReviews()
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  const columns = [
    { field: "_id", headerName: "ID", width: 130 },
    { field: "name", headerName: "Name", width: 180 },
    {
      field: "desc",
      headerName: "Review",
      width: 750,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="reviewListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="reviewList">
      <DataGrid
        rows={data}
        getRowId={(data) => data?._id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
      />
    </div>
  );
}

