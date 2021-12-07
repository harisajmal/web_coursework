import { useState, useEffect } from 'react';



function HostelsList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hostels, setHostels] = useState([]);

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

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
      return <>loading...</>;
  } else {
      return (
      
      <div className="wrapper">
      <ul>
          <h1> List of all Hostels </h1>
          
        {hostels.map(hostel => (
          
          <li key={hostel.id}>
            
           <p> Name: {hostel.name} </p>
            <p> Description: {hostel.description} </p>
            <p> Address: {hostel.address} </p>
            <p> PostCode:  {hostel.postcode} </p>
            <p> Email:  {hostel.email} </p>
            
          </li>
        ))}
      </ul>
     </div>
    );
  }
}
export default HostelsList