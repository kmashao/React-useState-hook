import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  const [currentTime, setTime] = React.useState(time);

  function getTime() {
    setTime(() => {
      return new Date().toLocaleTimeString();
    });
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
    </div>
  );
}

export default App;
