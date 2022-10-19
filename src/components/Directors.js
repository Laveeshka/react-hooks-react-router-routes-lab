import React from "react";
import { directors } from "../data";

//This component should render the text Directors Page in an <h1>, and make a new <div> for each director. The <div> should contain the director's name and a <ul> with a list of their movies.
function Directors() {

  const directorsDiv = directors.map((director, index) => {
    return (
      <div key={index}>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map((movie, index) => (<li key={index}>{movie}</li>))}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsDiv}
    </div>
    )
}

export default Directors;
