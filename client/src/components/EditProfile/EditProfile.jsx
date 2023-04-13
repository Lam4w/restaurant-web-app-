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
    }

    const updateUser = async() => {        
      await axios.patch(`http://localhost:3001/users/${userId._id}`, userUpdate, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(userUpdate);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await schema.validate({ firstName, lastName, email, phone, address }, { abortEarly: false });
        await updateUser();
        console.log("Update successful");
        window.alert("Update successful");
        window.location.reload();
      } catch (errors) {
        const newErrors = {};
        errors.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      }
    };

    useEffect(() => {
      updateUser()
    },[]); //eslint-disable-line react-hooks/exhaustive-deps
  
    return (
        <>
          {!isFormSubmitted && (
            <form className='formEdit' >  
              <h2>Edit Profile</h2>              
              <div className="name">
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input id="firstName" name="firstName" type="text" value={firstName} 
                    onChange={(e) => {
                    setFirstname(e.target.value)
                    handleChange(e)
                  }}/>
                  {errors.firstName && <p className="error">{errors.firstName}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input id="lastName" name="lastName" type="text" value={lastName} 
                    onChange={(e) => {
                      setLastname(e.target.value)
                      handleChange(e)
                    }} />
                  {errors.lastName && <p className="error">{errors.lastName}</p>}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>     
                <input id="email" name="email" type="email" value={email} 
                  onChange={(e) => {
                    setEmail(e.target.value)
                    handleChange(e)
                  }}/>                   
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone number:</label>
                <input id="phone" name="phone" type="tel" value={phone} 
                  onChange={(e) => {
                    setPhone(e.target.value)
                    handleChange(e)
                  }} />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input id="address" name="address" type="text" value={address} 
                  onChange={(e) => {
                    setAddress(e.target.value)
                    handleChange(e)
                  }} />
                {errors.address && <span className="error">{errors.address}</span>}
              </div>
              <button type="submit" onClick={handleSubmit}>Submit</button>
              <button className='cancel-btn' id='cancel' onClick={handleCancel}>Cancel</button>
            </form>
            
          )}
        </>
      );


};




  
  
export default EditProfileForm;
