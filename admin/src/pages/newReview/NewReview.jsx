import "./newReview.css";
import { useState } from "react";
import storage from '../../firebase';
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useSelector } from 'react-redux';
import axios from 'axios';

const navigate = useNavigate();
  const [review, setReview] = useState({});
  const [img, setImg] = useState({});
  const [uploaded, setUploaded] = useState(false);
  const token = useSelector((state) => state.token);

  const handleChange = (e) => {
    const value = e.target.value;
    setReview({...review, [e.target.name]: value});
    console.log(review);
  }

  const upload = (item) => {
    const fileName = new Date().getTime() + item.file.name;
    const storageRef = ref(storage ,`/items/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, item.file);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );

      console.log('upload is' + progress + '% done');
    },
    (err) => console.log(err),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        setReview((prev) => {
          return { ...prev, "picturePath": url };
        });
        setUploaded(true);
      })
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload({file: img})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3001/reviews/", review, {
      headers: { Authorization: `Bearer ${token}` },
    });

    navigate('/reviews');
  }

export default function NewReview() {
  return (
    <div className="newReview">
      <h1 className="newReviewTitle">New Review</h1>
      <form className="newReviewForm">
        {/* <div className="newReviewItem">
          <label>Name of Reviewer</label>
          <input type="text" placeholder="name" />
        </div> */}
        <div className="newReviewItem">
          <label>Name of review</label>
          <input type="text" placeholder="review" onChange={handleChange}/>
        </div>
        <div className="newReviewItem">
          <label>Describe</label>
          <input type="email" placeholder="describe" onChange={handleChange}/>
        </div>
        
        <button type="button" className="newReviewButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
