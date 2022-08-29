import * as echarts from "echarts"
import ReactEChart from "echarts-for-react"
import {data} from "../../Data/Data"
import { useEffect, useState } from 'react';
// Combine an Option type with only required components and charts via ComposeOption
import "./scatter.css"

const Scatter= () => {
   const [colour,setColour]=useState([])
   const [Hue,setHue]=useState([])


useEffect(()=>{
// collect colour intensity data and hue data from data  and set to useSate
  var color=[];
  var  hue=[];
  for(var i=0; i<data.length; i++){
    color.push(data[i]["Color intensity"])
    hue.push(data[i].Hue)
  }
  setColour(color)
  setHue(hue)
},[])

//  how scatter graph will look object
const option = 
{

  title: {
          text: 'Colour Intensity',
          subtext: ''
      },
  legend: {
    data: ['data']
  },

  xAxis: {
    data: colour,
    splitLine: {
      show: false
    },
    colour:"red"
  },
  yAxis: {},
  dataZoom: [{
              type: 'inside',
              color:"red"
          }, {
          }],
  series: [
    {
      name: 'scatter',
      type: 'scatter',
      data: Hue,
      color:{
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 12,
       
        colorStops: [{
            offset:0, color: 'red' // 0%
        }, {
            offset: 1, color: 'teal' // color at 100%
        }],
      
        tooltip: {
          triggerOn: "none",
          axisPointer:{
            type:"shadow"
          },
          alwaysShowContent: true,
          position: function(pt) {
            return [pt[0], 130];
          }
        },
      },
      emphasis: {
        focus: 'series'
      },
      animationDelay: function(idx) {
        return idx * 10;
      }
    },
   
  ],
  animationEasing: 'elasticOut',

  animationDelayUpdate: function(idx) {
    return idx * 1;
  },
  animationDuration: function (idx) {
    // delay for later data is larger
    return idx * 90;
},


}




    return (
        <div>
             <ReactEChart 
             className="bar"
             option={option} 
             style={{
              height: '500px',
              width: '100%',
     
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px", 
            
            }}
             />
            
        </div>
    );
};

export default Scatter;

