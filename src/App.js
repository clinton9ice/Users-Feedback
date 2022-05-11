import { useState } from "react";
// Imported dummy data
import data from "./data/data";

// Import components
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Form from "./components/Form";

function App() {

  const [feedBack, setfeedBack] = useState(data);

  function deleteItem(id) { 
    if (window.confirm("Item can't be recovered once deleted")) {
      setfeedBack( feedBack.filter( (item) => item.id !== id))
    }
  }
  
  function setReview(review) {
    setfeedBack([review, ...feedBack]);
  }

  return (
    <>
      <Header />

      <section className="container py-5 overflow-hidden">
        <Form newReview={setReview}></Form>
        <br />
        <br />

        <h1 className="text-white"> User Feedback</h1>
        <FeedbackStats feedback={feedBack}> </FeedbackStats>
        <br />

        {/* <br /> */}

        {/*======== Import the feedback List ==========*/}
        <FeedbackList
          feedback={feedBack}
          removeItem={deleteItem}
        ></FeedbackList>
      </section>
    </>
  );
}

export default App;
