import React from "react";
import { directors } from "../data";

/**This component should render the text Directors Page in an <h1>,
 *  and make a new <div> for each director. The <div> should
 *  contain the director's name and a <ul> with a list of their movies. */
function Directors() {
const displayDirector = directors.map((director) => (
  <div key={director.name}>
    <h2>Name: {director.name}</h2>
    Movies:
    <ul>
      {director.movies.map((movie) => (
        <li key={movie}>{movie}</li>
      ))}
    </ul>
  </div>
));
return (
  <div>
    <h1>Directors Page</h1>
  {displayDirector}
  </div>
);

}
export default Directors;
