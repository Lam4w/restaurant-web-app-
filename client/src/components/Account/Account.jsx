import  React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "./Account.css";
import axios from 'axios';


const AccountInfo = () => {

  const userId = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [user, setUser] = useState({});

  const getUser = async() => {
    const response = await axios.get(`http://localhost:3001/users/${userId.userId}`,{
      headers: { Authorization: `Bearer ${token}` },
    });

    const userInfo = await response.data;
    console.log(userInfo);
    setUser(userInfo);
  }

  useEffect(() => {
    getUser()
  },[]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
      <div>
        <div className="info">
          <h2>Profile User</h2>
          <div className="img">
            <div></div>
            <div>
              <img src='/assets/images/avatar.png' className="avatar" alt="avatar"></img>
            </div>
            <div></div>
          </div>
          <div className="name">
            <div><ion-icon name="person-outline"></ion-icon></div>
            <div className="group">
              <div>{userId.firstName}</div>
            </div>
            <div className="group">
              <div>{userId.lastName}</div>            
            </div>
          </div>
          <div className="group">
            <div><ion-icon name="mail-open-outline"></ion-icon></div>
            <div>{userId.email}</div>            
          </div>     
          <div className="group">
            <div><ion-icon name="call-outline"></ion-icon></div>
            <div>{userId.phone}</div>            
          </div>
          <div className="group">
            <div><ion-icon name="location-outline"></ion-icon></div>
            <div>{userId.address}</div>            
          </div>
        </div>    
      </div>
  );
};

const Account = () => {
  return (
    <section className="account">
      <AccountInfo />
    </section>
  );
};

export default Account;


