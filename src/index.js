import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



fetch('https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=bm5bc98roMnuuGGyPEBOObyprA9ft3kN')
	.then(response => response.json())
	.then(response => console.log(response))


 
