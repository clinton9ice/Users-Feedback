import Card from "./shared/Card";
import propTypes from "prop-types";

function FeedbackItem({ items, remove }) {
  return (

      <Card>
        <div className="badge badge-primary bg-primary">{items.rating}</div>
        <div className="card-body">{items.text}</div>
        <div className="btn-container p-2  d-flex justify-content-end">
          <button
            className="btn btn-outline-danger "
            onClick={() => remove(items.id)}
          >
            <i className="bi bi-trash3"></i>
          </button>
        </div>
        </Card>
  );
}

FeedbackItem.propTypes = {
  items: propTypes.shape({
    id: propTypes.number.isRequired,
    rating: propTypes.number,
    text: propTypes.string,
  }),
};
export default FeedbackItem;
