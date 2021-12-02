import { useState, useEffect } from 'react';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hostels, setHostels] = useState([]);
  //     set search query to empty string
  const [q, setQ] = useState("");
  const [searchParam] = useState(["address", "name"]);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
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
  }, [])


function Search() {
  return hostels.filter((hostel) => {
    return searchParam.some((newHostel) => {
        return (
            hostel[newHostel]
                .toString()
                .toLowerCase()
                .indexOf(q.toLowerCase()) > -1
        );
    });
});
}


  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
      return <>loading...</>;
  } else {
      return (
      <div className="wrapper">
      <div className="search-wrapper">
          <label htmlFor="search-form">
          <span className="sr-only">Search hostels by Address</span>
              <input
                  type="search"
                  name="search-form"
                  id="search-form"
                  className="search-input"
                  placeholder="Search by address"
                  value={q}
                  /*
                  // set the value of our useState q
                  //  anytime the user types in the search box
                  */
                  onChange={(e) => setQ(e.target.value)}
              />
              
          </label>
      </div>
      <ul>
        {Search(hostels).map(hostel => (
          
          <li key={hostel.id}>
            
           <p> {hostel.name} </p>
            <p> {hostel.description} </p>
            <p> {hostel.address} </p>
            <p>  {hostel.postcode} </p>
            <p>  {hostel.email} </p>
            <p>  {hostel.ratings} </p>
            <p> {hostel.reviews.map((reviews, index) => {return (<div key={index+1}>{reviews.reviewer + " : " + reviews.review}</div>)})} </p>
          </li>
        ))}
      </ul>
      </div>
    );
  }
}
export default App