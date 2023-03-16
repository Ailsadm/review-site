import React, { useEffect, useState } from "react";
import Books from "../Books/books";

async function BooksFetchResponse(){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c5a091254fmsh50d7ed70ccb9fc2p12b177jsncf36da05ba92',
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
      }
    };
    const response = await fetch('https://hapi-books.p.rapidapi.com/search/pinocchio', options)
      .then(response => response.json())
      .then(response =>{
        console.log(response);
        return response;
      });
    return response;
  }
  
  function BooksGallery() {
    const [bookData, setBookData] = useState();
  
    useEffect(() => {
      async function fetchData() {
        const data = await BooksFetchResponse();
        setBookData(data);
      }
      fetchData();
    }, []);
  
    if (bookData) {
      return (
        <Books key={bookData.id} {...bookData}></Books>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
  
  export default BooksGallery;
  