// import "./orderList.css";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { orderRows } from "../../dummyData";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function OrderList() {
//   const [data, setData] = useState(orderRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };
  
//   const columns = [
//     { field: "id", headerName: "ID", width: 90 },
//     {
//       field: "order",
//       headerName: "order",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="orderListorder">
//             <img className="orderListImg" src={params.row.avatar} alt="" />
//             {params.row.ordername}
//           </div>
//         );
//       },
//     },
//     { field: "email", headerName: "Email", width: 200 },
//     {
//       field: "status",
//       headerName: "Status",
//       width: 120,
//     },
//     {
//       field: "transaction",
//       headerName: "Transaction Volume",
//       width: 160,
//     },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={"/order/" + params.row.id}>
//               <button className="orderListEdit">Edit</button>
//             </Link>
//             <DeleteOutline
//               className="orderListDelete"
//               onClick={() => handleDelete(params.row.id)}
//             />
//           </>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="orderList">
//       <DataGrid
//         rows={data}
//         disableSelectionOnClick
//         columns={columns}
//         pageSize={8}
//         checkboxSelection
//       />
//     </div>
//   );
// }

import "./reviewList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { reviewRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from 'react-redux';


export default function ReviewList() {
  const [data, setData] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  let dataIds = [];
  const token = useSelector((state) => state.token);

  const getReviews = async () => {
    const response = await axios.get('http://localhost:3001/reviews');

    const resData = response.data;
    setData(resData);
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/reviews/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setData(data.filter((item) => item._id !== id));
  };

  const handleDeleteAll = async () => {
    if (dataIds.length > 1) {
      const idList = dataIds.join('_'); 
      await axios.delete(`http://localhost:3001/Reviews/many/${idList}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(dataIds);
      console.log(dataIds.length)
  
      setData(data.filter((item) => !dataIds.includes(item._id)));
    }
  }

  useEffect(() => {
    getReviews()
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    // { field: "reviewer", headerName: "Reviews", width: 150 },

    
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "des",
      headerName: "Describe",
      width: 521,
    },
   
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/review/" + params.row.id}>
              <button className="reviewListEdit">Edit</button>
            </Link> */}
            <DeleteOutline
              className="reviewListDelete"
              onClick={() => handleDelete(params.row.id)}
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
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

