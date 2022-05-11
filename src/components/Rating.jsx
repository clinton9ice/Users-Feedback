import { useState } from "react";

function Rating( {ratings}) {
  const [rate, setRate] = useState(1);
  const rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const sendRating = (e) => {
    let target = +e.currentTarget.id;
      setRate(target);
      ratings(target);
  };

  return (
    <ul className="rating-container">
      {rating.map((e) => {
        return (
          <li className="rating-buttons list-item" key={e}>
            <input
              checked={rate === e}
              onChange={sendRating}
              type="radio"
              name="rating"
              id={e}
              className="form-radio"
            />
            <label htmlFor={e}>{e}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default Rating;
