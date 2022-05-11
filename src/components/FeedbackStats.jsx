import propTypes from "prop-types";

function FeedbackStats({ feedback }) {
    
    let Average = feedback.reduce((acc, curr) => {
        return acc + curr.rating;
    }, 0) / feedback.length;

    return (
      <div className="container py-3">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <h4 className="text-muted">{feedback.length} reviews</h4>
          <h5 className="text-muted">
            Average rating: {isNaN(Average) ? 0 : Average.toFixed(1).replace(".0", "")}
          </h5>
        </div>
      </div>
    );
}
FeedbackStats.propTypes = {
    feedback: propTypes.array
}
export default FeedbackStats;