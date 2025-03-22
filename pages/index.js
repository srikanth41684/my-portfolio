import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Test styled-jsx</h1>
      <style jsx>{`
        h1 {
          color: orange;
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
