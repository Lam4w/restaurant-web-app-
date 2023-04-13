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

// import "./reviewList.css";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { reviewRows } from "../../dummyData";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import {results} from "../../pages/reviewList/reviewList";

// export default function ReviewList() {
//   const [data, setData] = useState(reviewRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };
//   const [data, setData] = useState(results);

// //   const handleDelete = (id) => {
// //     setData(data.filter((item) => item.id !== id));
// //   };
  
//   const columns = [
//     { field: "id", headerName: "ID", width: 90 },
//     // { field: "reviewer", headerName: "Reviews", width: 150 },

    
//     { field: "name", headerName: "Name", width: 200 },
//     {
//       field: "des",
//       headerName: "Describe",
//       width: 521,
//     },
   
//     {
//       field: "action",
//       headerName: "Action",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={"/review/" + params.row.id}>
//               <button className="reviewListEdit">Edit</button>
//             </Link>
//             <DeleteOutline
//               className="reviewListDelete"
//               onClick={() => handleDelete(params.row.id)}
//             />
//           </>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="reviewList">
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

