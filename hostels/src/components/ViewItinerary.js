import { useState, useEffect } from 'react';
import CreateItinerary from './CreateIternary';

function ViewRatings() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itineraries, setItineraries] = useState([]);
  const [showItinerary, setItinerary] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9000/itineraries")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItineraries(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
          
        }
        
      )
      
  },
  
  [])
  

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
      return <>loading...</>;
  } else {
      return (
      
      <div className="wrapper">
      
          <h1> Itineraries </h1>
          <ul>
          
        {itineraries.map(itinerary => (
          
          <li key={itinerary.user}>
            
           <h2> User: {itinerary.user} </h2>
           

            <p> Date:  {" " + itinerary.startdate + " " } </p>

            {/* {hostel.ratings.map((ratings, index) => {
                const avgRating =
                hostel.ratings.reduce((sum, curr) => sum + Number(curr), 0) /
                hostel.ratings.length;

                return (
               
                    <p> Average Rating {avgRating}</p>
                 
                )
              })} */}

<p> Stages: {itinerary.stages.map((stages, index) => {return (<div key={index+1}>{ stages.stage + " : " + stages.hostel + " : " + stages.nights }</div>)})} </p>
            

<div className="button-reviews">
              <button onClick={()=> {setItinerary(!showItinerary)}}>{showItinerary?"Hide":"Write"} Review</button>
            </div>
            
            {showItinerary?< CreateItinerary id={itinerary.user} />:null}

          </li>
        ))}
      </ul>
     </div>
    );
  }
}
export default ViewRatings