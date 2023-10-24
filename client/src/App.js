import React, {useState,useEffect } from "react";
import './App.css';
import Axios from 'axios';

function App() {

const [movieName,setMovieNmae]=useState("");
const [review,setReview] =useState("");
const[movieReviewList,setMovieList]=useState([]);

const[newReview,setNewReview]=useState("");


}



  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>

      <div className="form">
      <label>Movie Name:</label>
      <input type="text" name="movieName" onChange={(e)=>{ setMovieName(e.target.value)}}/>
      <label>Review: </label>
      <input type="text"  name="review" onChange={(e)=>{ setReview(e.target.value)}}/>

      <button onClick={submitReview}>Submit</button>
      {movieReviewList.map((val)=>{

        return (
          <div className="card">
            <h1>{val.movieName}</h1>
            <p>{val.movieReview}</p>

            <button onClick={()=>{deleteReview(val.movie.Name)}}>Delete</button>
            <input type="text" id="updateInput" onChange={()=>{
              setNewReview(e.target.value)
            }}
            /> 
            <button onClick={()=>{updateReview.Review(val.movieName)}}>Upadte</button>
          </div>
      );
      })}

    </div>
    </div>
  );

export default App;
