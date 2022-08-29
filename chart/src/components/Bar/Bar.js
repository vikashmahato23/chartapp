import * as echarts from "echarts"
import ReactEChart from "echarts-for-react"
import {data} from "../../Data/Data"
import { useEffect, useState } from 'react';

const Bar = () => {
   const [alcoholData,setAlcoholData]=useState([])
   const [MalicAcidData,setMalicAcidData]=useState([])

   //seprate alochol data and MalicData from Data
useEffect(()=>{
  var alchol=[];
  var malic=[];
  for(var i=0; i<data.length; i++){
    alchol.push(data[i].Alcohol)
    malic.push(data[i]["Malic Acid"])
  }
  setAlcoholData(alchol)
  setMalicAcidData(malic)
},[])

////  how scatter graph will look object
const option = 
{

  title: {
          text: 'Alcohal Bar Data',
          subtext: ''
      },
  legend: {
    // data: ['bar']
  },

  xAxis: {
    data: alcoholData,
    splitLine: {
      show: false
    }
  },
  yAxis: {},
  dataZoom: [{
              type: 'inside',
              color:"red"
          }, {
          }],
  series: [
    {
      // name: 'bar',
      type: 'bar',
      data: MalicAcidData,
      color:{
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 12,
       
        colorStops: [{
            offset: 0, color: 'red' // color at 0%
        }, {
            offset: 1, color: 'blue' // color at 100%
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


};

    return (
        <div>
             <ReactEChart 
          
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

export default Bar;

