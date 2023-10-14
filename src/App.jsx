import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="landing">
        <h1>Don't be afraid, this is the landing page of the bolierplate</h1>
        <p>Thank you for using it!</p>
      </div>
    </>
  );
}

export default App;
