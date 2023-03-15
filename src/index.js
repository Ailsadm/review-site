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


// NY api review
fetch('https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=bm5bc98roMnuuGGyPEBOObyprA9ft3kN')
	.then(response => response.json())
	.then(response => console.log(response))

  //books api
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c5a091254fmsh50d7ed70ccb9fc2p12b177jsncf36da05ba92',
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
    }
  };
  
  let response = fetch('https://hapi-books.p.rapidapi.com/search/the davinci code', options)
    .then(response => response.json())
    .then(response =>{
    console.log(response)})
    .catch(err => console.error(err));

 
