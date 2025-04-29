import React from "react";
import CourseHighlights from "../components/course-highlight/CourseHighlights";
import Learning from "../components/learning/Learning";
import TrainingBenefits from "../components/trainingbenefits/TrainingBenefits";


const Home = () => {
  return (
    <div>
      <h1>Welcome to My Website</h1>

      <main>
        <h2>Welcome to Our MERN Stack Development Training</h2>
        <p>
          Master the complete MERN Stack: MongoDB, Express.js, React.js, and Node.js with our comprehensive training <br /> program.
        </p>
        <button>Enroll Now</button>

        <div className="container">
          <div>
            <h3>Course Highlights</h3>
            <CourseHighlights/>
          </div>
          <div>
            <h3>What You'll Learn</h3>
          <Learning/>
          </div>
         </div>
        <TrainingBenefits/>
        
      </main>
    </div>
  );
};

export default Home;