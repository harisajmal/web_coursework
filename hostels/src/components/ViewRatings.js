import { useState, useEffect } from 'react';
import WriteReviews from './WriteReviews';

function ViewRatings() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hostels, setHostels] = useState([]);
  const [showForm, setShowForm] = useState(false);

  function calculateAverage(hostel){
    var ratings = 0;
    var count = 0;
    var total = 0;

    hostel.ratings.forEach(function(value) {
      ratings+= value;
      count++;
      total = ratings/count;
    });
    return total.toFixed(1);
  }

  useEffect(() => {
    fetch("http://localhost:9000/hostels")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setHostels(result);
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
      
          <h1> Hostel Ratings  </h1>
          <ul>
          
        {hostels.map(hostel => (
          
          <li key={hostel.id}>
            
           <h2> Name: {hostel.name} </h2>
           

            <p> Ratings:  {hostel.ratings + "" } </p>
            <p> Number of People Rated:  {hostel.ratings.length} </p>


              <p> {"Average Ratings: " + calculateAverage(hostel)}</p>

<p> Reviews: {hostel.reviews.map((reviews, index) => {return (<div key={index+1}>{ reviews.reviewer + " : " + reviews.review }</div>)})} </p>
            

<div className="button-reviews">
              <button onClick={()=> {setShowForm(!showForm)}}>{showForm?"Hide":"Write"} Review</button>
            </div>
            
            {showForm?< WriteReviews id={hostel.id} />:null}

          

          </li>
        ))}
      </ul>
     </div>
    );
  }
}
export default ViewRatings