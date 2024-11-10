import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Stars from "./Stars";

// function Test() {
//   const [testing, setTesting] = useState(0);
//   return (
//     <div>
//       <Stars color="red" setTesting={setTesting} maxRating={10} />
//       <p>This movie is rated {testing} stars</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Stars maxRating={5} color={"red"} />
    <Stars maxRating={10} color={"blue"} />
    <Stars
      maxRating={5}
      height={"24px"}
      message={["bad", "fair", "ok", "good", "excellent"]}
    />
    <Test /> */}
  </React.StrictMode>
);
