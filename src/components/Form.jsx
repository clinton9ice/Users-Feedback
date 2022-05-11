import { useState } from "react";
import Card from "./shared/Card";
import Rating from "./Rating";

function Form({ newReview }) {
  const [review, setReview] = useState("");
  const [error, setError] = useState("");
  const [rate, setRate] = useState(1);

  const getReview = (inp) => {
    setReview(inp.target.value);
  };
  
  //   min digit required
    const min = 10;
    
  const submit = (e) => {
      e.preventDefault();
      

    //   Clear Errors
    setError("");

    if (review.length < min || review === "") {
      setError(
        `Your review should not be empty and must be above ${min} letters`
      );
      return;
    }

    //   Create a random id
    const id = Math.ceil(Math.random() * 1000);

    //   Create a new data
    const data = {
      id: id,
      rating: rate,
      text: review,
    };
    //   Send review
    newReview(data);
    //   Clear review
    setReview("");
    };
    

  return (
    <Card>
      <form className="form p-5" onSubmit={submit}>
        <h2>How would you rate your service with us?</h2>

        <Rating
          ratings={(e) => {
            setRate(e);
          }}
        ></Rating>

        <div className="form-container py-3">
          <label htmlFor="review" className="form-label">
            Leave a review
          </label>
          <input
            className="form-control"
            type="text"
            id="review"
            onChange={getReview}
            value={review.trimStart()}
            required
          />

          {/* Display the error */}
          {error && <p className="text-danger mt-2">{error}</p>}

          <div className="btn-container mt-4">
            <button
              className="btn btn-primary w-100"
              disabled={review.trimStart().length < min && "disabled"}
            >
              Send Review
            </button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default Form;
