import "./newReview.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function NewReview() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const token = useSelector((state) => state.token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = {
      name,
      desc,
    }
    await axios.post("http://localhost:3001/reviews/", review, {
      headers: { Authorization: `Bearer ${token}` },
    });

    navigate('/reviews');
  }
  
  return (
    <div className="newReview">
      <h1 className="newReviewTitle">New Review</h1>
      <form className="newReviewForm">
        <div className="newReviewItem">
          <label>Reviewer</label>
          <input type="text" placeholder="Reviewr" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="newReviewItem">
          <label>Review</label>
          <input type="text" placeholder="Review" onChange={(e) => setDesc(e.target.value)}/>
        </div>
        <button type="button" className="newReviewButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
