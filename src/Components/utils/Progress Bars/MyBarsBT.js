import React from 'react';
import Plot from 'react-plotly.js';
    function MyBarsBT(props) {
  return (
    <div className="MyBars" >
        <div style={{ position: "relative",
    left: "10px",
    top: "5px"}}>
        <Plot
        data={[
          {type: 'bar', x: ["Turnover"], y: [55], text: 'Turnover','marker':{color:'pink'}},
          {type: 'bar', x: ["Stress"], y: [10], text: 'Stress','marker':{color:'royalblue'}},
          {type: 'bar', x: ["Job Satisfaction"], y: [70], text: 'Job Satisfaction','marker':{color:'yellow'}}
        ]}
        layout={ {width: 280, height: 300,showlegend:false} }
        />
        </div>
 
    </div>
  );
}
 
export default MyBarsBT;