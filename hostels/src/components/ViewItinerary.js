import { useState, useEffect } from 'react';


function ViewItinerery() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itineraries, setItineraries] = useState([]);

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
  }, [])

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
      return <>loading...</>;
  } else {
      return (
      
      <div className="wrapper">
      <ul>
          <h1> List of Itineraries </h1>
          
        {itineraries.map(itinerary => (
          
          <li key={itinerary.id}>
            
           <p> {itinerary.user} </p>
            <p> {itinerary.startdate} </p>
            <p> {itinerary.stages.map((stages, index) => {return (<div key={index+1}>{"Stage :" + stages.stage + " Hostel : " + stages.hostel + " Nights : " + stages.nights}</div>)})} </p>
          </li>
        ))}
      </ul>
     </div>
    );
  }
}
export default ViewItinerery