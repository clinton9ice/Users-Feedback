import FeedbackItem from "./FeedbackItem";
import propTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList({ feedback, removeItem }) {
  if (feedback.length < 1 || !Array.isArray(feedback)) {
    return <div className="alert alert-danger">No Feed back yet</div>;
  }
  return (
    <AnimatePresence>
      {feedback.map((item) => {
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.3 }}
          >
            <FeedbackItem key={item.id} items={item} remove={removeItem} />
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
}

FeedbackList.propTypes = {
  feedback: propTypes.array,
};

export default FeedbackList;
