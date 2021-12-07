import { useState } from 'react';
import HostelsList from './HostelsList';
import SearchHostels from './SearchHostels'
import ViewItinerery from './ViewItinerary'
import ViewRatings from './ViewRatings';


function WelcomeApp() {
    const [previewList, openList] = useState(false);
    const [previewSearch, openSearch] = useState(false);
    const [previewItineraries, openItineraries] = useState(false);
    const [previewRatings, openRatings] = useState(false);
  
    const [hostel] = useState([]);

    return(
    <div className="button-ratings">

    <h1> Welcome to the Hostels App</h1>
    <p> Click on Display List button to see all hostels</p>
    <button onClick={()=> {openList(!previewList)}}>{previewList?"Hide":"Display"} Hostels List</button>
    {previewList?< HostelsList id={hostel.id} />:null}
    
    <button onClick={()=> {openSearch(!previewSearch)}}>{previewSearch?"Hide":"Display"} Search Bar</button>
    {previewSearch?< SearchHostels id={hostel.id} />:null}

    <button onClick={()=> {openRatings(!previewRatings)}}>{previewRatings?"Hide":"Display"} Ratings and Reviews</button>
    {previewRatings?< ViewRatings id={hostel.id} />:null}

    
    <button onClick={()=> {openItineraries(!previewItineraries)}}>{previewItineraries?"Hide":"Display"} Itineraries</button>
    {previewItineraries?< ViewItinerery id={hostel.id} />:null}
  </div>
  
    )}
export default WelcomeApp