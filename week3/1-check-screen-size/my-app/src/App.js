import React from "react";
import useWindowSize from "./useWindowSize";

function App() {
  const windowSize = useWindowSize();

  return (
    <div>
      <p>Window width: {windowSize.width}</p>
      <p>Window height: {windowSize.height}</p>
    </div>
  );
}

export default App;
