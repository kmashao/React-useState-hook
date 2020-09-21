import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  const [currentTime, setTime] = React.useState(time);

  function getTime() {
    setTime(() => {
      return new Date().toLocaleTimeString();
    });
  }


  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>get time</button>
    </div>
  );
}

export default App;
