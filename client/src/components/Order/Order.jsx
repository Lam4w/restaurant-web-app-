import { useState, useEffect } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import "./Order.css"

const Order = () => {
  const userId = useSelector((state) => state.user);
  const [orders, setData] = useState([]);
  const token = useSelector((state) => state.token);

  const getOrderByUserId = async () => {
    const response = await axios.get(`http://localhost:3001/orders/user/${userId.userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    
    const orderInfo = await response.data;
    setData(orderInfo);
  };

  useEffect(() => {
    getOrderByUserId();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
  const deliveryStatus = (isDelivered) => {
    return isDelivered ? 'Delivered' : 'Delivering';
  };

  return (
    <div>
      <h2>Order</h2>
      <table>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Address</th>
            <th>Order date</th>
            <th>Total</th>
            <th>Delivery status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.address}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
              <td>{deliveryStatus(order.isDelivered)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
