import React, {  useState } from "react";

function WriteReviews(props) {
 const [reviewer, setReviewer]=useState("");
 const [review, setReview]=useState("");

function saveData()
{
  let data={reviewer,review}
// console.warn(data);
fetch(`http://localhost:9000/hostels/review/${props.id}`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    // console.warn("resp",resp);;
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
  window.location.reload(false);
}
  return (
    <div className="App">
      <h1>POST Review </h1>  
      <label>
          Name
          </label>
      <input type="text" name="name" value={reviewer} onChange={(e)=>{setReviewer(e.target.value)}}  /> <br /> <br />
      <label>
          Review
          </label>
      <input type="text" name="email"  value={review} onChange={(e)=>{setReview(e.target.value)}} /> <br /> <br />
     
      <button type="button" onClick={saveData} >Leave Review</button>
    </div>
  );
}
export default WriteReviews