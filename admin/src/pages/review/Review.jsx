// import {
//     CalendarToday,
//     LocationSearching,
//     MailOutline,
//     PermIdentity,
//     PhoneAndroid,
//     Publish,
//   } from "@material-ui/icons";
//   import { Link } from "react-router-dom";
//   import "./review.css";
  
//   export default function Review() {
//     return (
//       <div className="review">
//         <div className="reviewTitleContainer">
//           <h1 className="reviewTitle">Edit review</h1>
//           <Link to="/newreview">
//             <button className="reviewAddButton">Create</button>
//           </Link>
//         </div>
//         <div className="reviewContainer">
//           <div className="reviewShow">
//             <div className="reviewShowTop">
//               <img
//                 src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//                 alt=""
//                 className="reviewShowImg"
//               />
//               <div className="reviewShowTopTitle">
//                 <span className="reviewShowreviewname">Anna Becker</span>
//                 <span className="reviewShowreviewTitle">Software Engineer</span>
//               </div>
//             </div>
//             <div className="reviewShowBottom">
//               <span className="reviewShowTitle">Account Details</span>
//               <div className="reviewShowInfo">
//                 <PermIdentity className="reviewShowIcon" />
//                 <span className="reviewShowInfoTitle">annabeck99</span>
//               </div>
//               <div className="reviewShowInfo">
//                 <CalendarToday className="reviewShowIcon" />
//                 <span className="reviewShowInfoTitle">10.12.1999</span>
//               </div>
//               <span className="reviewShowTitle">Contact Details</span>
//               <div className="reviewShowInfo">
//                 <PhoneAndroid className="reviewShowIcon" />
//                 <span className="reviewShowInfoTitle">+1 123 456 67</span>
//               </div>
//               <div className="reviewShowInfo">
//                 <MailOutline className="reviewShowIcon" />
//                 <span className="reviewShowInfoTitle">annabeck99@gmail.com</span>
//               </div>
//               <div className="reviewShowInfo">
//                 <LocationSearching className="reviewShowIcon" />
//                 <span className="reviewShowInfoTitle">New York | USA</span>
//               </div>
//             </div>
//           </div>
//           <div className="reviewUpdate">
//             <span className="reviewUpdateTitle">Edit</span>
//             <form className="reviewUpdateForm">
//               <div className="reviewUpdateLeft">
//                 <div className="reviewUpdateItem">
//                   <label>reviewname</label>
//                   <input
//                     type="text"
//                     placeholder="annabeck99"
//                     className="reviewUpdateInput"
//                   />
//                 </div>
//                 <div className="reviewUpdateItem">
//                   <label>Full Name</label>
//                   <input
//                     type="text"
//                     placeholder="Anna Becker"
//                     className="reviewUpdateInput"
//                   />
//                 </div>
//                 <div className="reviewUpdateItem">
//                   <label>Email</label>
//                   <input
//                     type="text"
//                     placeholder="annabeck99@gmail.com"
//                     className="reviewUpdateInput"
//                   />
//                 </div>
//                 <div className="reviewUpdateItem">
//                   <label>Phone</label>
//                   <input
//                     type="text"
//                     placeholder="+1 123 456 67"
//                     className="reviewUpdateInput"
//                   />
//                 </div>
//                 <div className="reviewUpdateItem">
//                   <label>Address</label>
//                   <input
//                     type="text"
//                     placeholder="New York | USA"
//                     className="reviewUpdateInput"
//                   />
//                 </div>
//               </div>
//               <div className="reviewUpdateRight">
//                 <div className="reviewUpdateUpload">
//                   <img
//                     className="reviewUpdateImg"
//                     src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//                     alt=""
//                   />
//                   <label htmlFor="file">
//                     <Publish className="reviewUpdateIcon" />
//                   </label>
//                   <input type="file" id="file" style={{ display: "none" }} />
//                 </div>
//                 <button className="reviewUpdateButton">Update</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }

import {
  CalendarToday,
  // LocationSearching,
  MailOutline,
  // PermIdentity,
  CloudUpload,
  PhoneAndroid,
  House,
  Money,
  // QrCode,
  Publish,
  People,
  FontDownload,
} from "@material-ui/icons";


import { Link } from "react-router-dom";
import "./review.css";
import sasimage from '../../pages/images/hero-img-1.svg'

export default function Review() {
  return (
    <div className="review">
      <div className="reviewTitleContainer">
        <h1 className="reviewTitle">Edit review</h1>
        {/* <Link to="/newreview">
          <button className="reviewAddButton">Create</button>
        </Link> */}
      </div>
      <div className="reviewContainer">
        <div className="reviewShow">
          <div className="reviewShowTop">
            <img
            
            src={sasimage}
              // src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="reviewShowImg"
            />
            <div className="reviewShowTopTitle">
              <span className="reviewShowreviewname">Shirmp</span>
              <span className="reviewShowreviewTitle">dessert</span>
            </div>
          </div>
          <div className="reviewShowBottom">
            <span className="reviewShowTitle">review Details</span>
            <div className="reviewShowInfo">
              <CloudUpload className="reviewShowIcon" />
              <span className="reviewShowInfoTitle">ID : 1</span>
            </div>
            <div className="reviewShowInfo">
              <People className="reviewShowIcon" />
              <span className="reviewShowInfoTitle">justin bieber</span>
            </div>
            <div className="reviewShowInfo">
              <House className="reviewShowIcon" />
              <span className="reviewShowInfoTitle">Sushi in janpanese</span>
            </div>

            <div className="reviewShowInfo">
              <FontDownload className="reviewShowIcon" />
              <span className="reviewShowInfoTitle">delicious</span>
            </div>
           
          
          </div>
        </div>
        <div className="reviewUpdate">
          <span className="reviewUpdateTitle">Edit</span>
          <form className="reviewUpdateForm">
            <div className="reviewUpdateLeft">
              <div className="reviewUpdateItem">
                <label>ID</label>
                <input
                  type="text"
                  placeholder="id "
                  className="reviewUpdateInput"
                />
              </div>
              <div className="reviewUpdateItem">
                <label>Reviewer</label>
                <input
                  type="text"
                  placeholder="name"
                  className="reviewUpdateInput"
                />
              </div>
              <div className="reviewUpdateItem">
                <label>Name of Food</label>
                <input
                  type="text"
                  placeholder="food"
                  className="reviewUpdateInput"
                />
              </div>

              <div className="reviewUpdateItem">
                <label>Describe</label>
                <input
                  type="text"
                  placeholder="describe"
                  className="reviewUpdateInput"
                />
              </div>
            </div>
            <div className="reviewUpdateRight">
              <div className="reviewUpdateUpload">
                <img
                  className="reviewUpdateImg"
                  src={sasimage}
                  // src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="reviewUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="reviewUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
  