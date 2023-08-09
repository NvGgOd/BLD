import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import WebFont from "webfontloader";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "../src/Firebase/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      {" "}
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
WebFont.load({
  google: {
    families: ["Yeseva One:400", "Work Sans:400,500,700,600", "Poppins"],
  },
});
const tw = document.createElement("script");
tw.setAttribute("src", "https://cdn.tailwindcss.com");
tw.setAttribute("type", "text/javascript");
document.body.appendChild(tw);
document.body.style.backgroundColor = "#e5e5e5";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();