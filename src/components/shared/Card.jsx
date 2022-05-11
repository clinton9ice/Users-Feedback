import  propTypes from "prop-types";

function Card({ children }) {
  return (
    <div className="col-sm-10  col-md-7 col-xl-7 pt-3 my-4">
      <div className="card feedback-item">{children}</div>
    </div>
  );
}

Card.propTypes = {
  children: propTypes.node.isRequired, 
};

export default Card;
