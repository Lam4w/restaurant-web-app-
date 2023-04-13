import "./newReview.css";

export default function NewReview() {
  return (
    <div className="newReview">
      <h1 className="newReviewTitle">New Review</h1>
      <form className="newReviewForm">
        <div className="newReviewItem">
          <label>Name of Reviewer</label>
          <input type="text" placeholder="name" />
        </div>
        <div className="newReviewItem">
          <label>Name of Food</label>
          <input type="text" placeholder="food" />
        </div>
        <div className="newReviewItem">
          <label>Describe</label>
          <input type="email" placeholder="describe" />
        </div>
        
        <button className="newReviewButton">Create</button>
      </form>
    </div>
  );
}
