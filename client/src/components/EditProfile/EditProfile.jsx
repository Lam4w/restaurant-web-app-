import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import axios from "axios";
import * as yup from 'yup';
import "./EditProfile.css"

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().matches(/^\d{10}$/).required(),
  address: yup.string().required(),
});

const EditProfileForm = () => {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [userUpdate, setuserUpdate] = useState({});

  const [errors, setErrors] = useState({});

  const userId = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);


  const handleSave = () => {     
      setIsFormSubmitted(true);
      setFirstname('');
      setLastname('');
      setEmail('');
      setPhone('');
      setAddress('');
  };

  const handleCancel =() =>{
    setIsFormSubmitted(true); 
    window.location.reload();  
  }
  
  const handleChange = (e) =>{
    const value = e.target.value;
    setuserUpdate({...userUpdate, [e.target.name]: value});
    console.log(userUpdate);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    schema
      .validate(
        { firstName, lastName, email, phone, address}, 
        { abortEarly: false })
      .then(() => {
        const updateUser = async(e) => {
          e.preventDefault();
          console.log(userUpdate);
      
          // await axios.put(`http://localhost:3001/users/${userId.userId}`, userUpdate, {
          //   headers: { Authorization: `Bearer ${token}` },
          // });
      
        }
        console.log(userUpdate);
      })
      .catch(errors => {
        const newErrors = {};
        errors.inner.forEach(error => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };
  
return (
    <>
      {!isFormSubmitted && (
        <form className='formEdit' >  
          <h2>Edit Profile</h2>              
          <div className="name">
            <div className="form-group">
              <label for="First_name">First Name:</label>
              <input id="First_name" type="text" value={firstName} 
                onChange={(e) => {
                setFirstname(e.target.value)
                handleChange(e)
              }}/>
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className="form-group">
              <label for="Last_name">Last Name:</label>
              <input id="Last_name" type="text" value={lastName} 
                onChange={(e) => {
                  setLastname(e.target.value)
                  handleChange(e)
                }} />
              {errors.firstName && <p classNameName="error">{errors.lastName}</p>}
            </div>
          </div>
          <div className="form-group">
            <label for="email">Email:</label>     
            <input id="email" type="email" value={email} 
              onChange={(e) => {
                setEmail(e.target.value)
                handleChange(e)
              }}/>                   
            {errors.email && <span classNameName="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label for="phone">Phone number:</label>
            <input id="phone" type="tel" value={phone} 
              onChange={(e) => {
                setPhone(e.target.value)
                handleChange(e)
              }} />
            {errors.phone && <span classNameName="error">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label for="address">Address:</label>
            <input id="address" type="text" value={address} 
              onChange={(e) => {
                setAddress(e.target.value)
                handleChange(e)
              }} />
            {errors.address && <span classNameName="error">{errors.address}</span>}
          </div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
          <button className='cancel-btn' id='cancel' onClick={handleCancel}>Cancel</button>
        </form>
        
      )}
    </>
  );
};


export default EditProfileForm;
