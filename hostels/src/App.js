import { useState, useEffect } from 'react';

function App() {
  const [hostels, setHostels] = useState(null);

  // + adding the use
  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const res = await fetch("http://localhost:9000/hostels");
      const data = await res.json();

      // store the data into our books variable
      setHostels(data) ;
    }
  }, []); // <- you may need to put the setBooks function in this array
  return (
    <div>
      <h1>Game of Thrones Books</h1>
  
      {/* display books from the API */}
      {hostels && (
        <div className="hostels">
  
          {/* loop over the books */}
          {hostels.map((hostel, index) => (
            <div key={index}>
              <h2>{hostel.name}</h2>
              <p>{hostel.description}</p>
  <p>{hostel.address}</p>
  <p>{hostel.postcode}</p>
  <p>{hostel.email}</p>
            </div>

            
          ))}
  
        </div>
        
      )}
    </div>
    
  )
          }
          export default App;