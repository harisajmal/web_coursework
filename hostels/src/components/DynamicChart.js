import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Torridon Youth Hostel', 'Inverness Youth Hostel', 'Gairloch Sands Youth Hostel', 
 'Tongue Hostel','Ullapool Youth Hostel', 'Durness Smoo Youth Hostel', 'Helmsdale Hostel', 'Applecross, Hartfield House',
'Achmelvich Beach Youth Hostel', 'Portsoy', 'Drumnadrochit', 'Glen Affric Youth Hostel'
, 'Ratagan Youth Hostel', 'Portree Youth Hostel', 'Fort Augustus'],
  datasets: [
    {
      label: 'Ratings',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: ['4.5','3.4','3.6','3.3','3.8','3.4','2.4','3.9','3.2','0.0','3.0',
      '3.2','3.0','3.9','3.8']
    }
  ]
}

// Inspiration taken from https://stackoverflow.com/questions/67727603/error-category-is-not-a-registered-scale
export default class HostelRatingsChart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Hostel Rating List',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}