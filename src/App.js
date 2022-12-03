import React from "react";
import { useParams } from "react-router";
import { Routes, Route, Link } from "react-router-dom";
//Remember, we can write these functional components in their own files
//to be exported and imported to the App component.
//We've combined them here to simplify our example.

const Home = (props) => {
  const { input, color, bgcolor } = useParams();
  console.log(input, color, bgcolor);

  return (
    <div>
      {!input ? (
        <p>Welcome</p>
      ) : !isNaN(input) ? (
        <p>The Number is: {input}</p>
      ) : color || bgcolor ? (
        <p style={{ color: color, backgroundColor: bgcolor }}>
          The Word is: {input}
        </p>
      ) : (
        <p>The Word is: {input}</p>
      )}
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:input" element={<Home />} />
        <Route path="/:input/:color/:bgcolor" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
