//import React, { Component } from 'react'
import Chart from "react-apexcharts"
import axios from 'axios'
import {BASE_URL} from 'utils/requests'
import { SaleSum } from 'types/sale'
import { useState,useEffect} from 'react'
import { round} from 'utils/format'

type SeriesData={
	name: String;
	data: number[];
}

type ChartData={
	labels: {
		categories: string[];
	};
	series: SeriesData[];
}


function BarChart(){

	const [chartData,setChartData]=useState<ChartData>({labels: {
	        categories: []
	    },
	    series: [
	        {
	            name: "",
	            data: []                   
	        }
	    ]
	});

	useEffect(()=>{
	  axios.get(BASE_URL+'/sales/success-by-seller').then(res=>{
		  const data= res.data as SaleSuccess[];
		  const myLabels=data.map(x=> x.sellerName)
		  const mySeries=data.map(x=> round(x.deals/x.visited*100.0,1))

		  setChartData({labels: {
	        categories: myLabels
	    },
	    series: [
	        {
	            name: "% Sucesso",
	            data: mySeries                   
	        }
	    ]
	})});
		  console.log(chartData);
}, []);

	const mockData = {
	    labels: {
	        categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
	    },
	    series: [
	        {
	            name: "% Sucesso",
	            data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
	        }
	    ]
	};

	const options={
		plotOptions:{
			bar:{
				horizontal: true,
			}
		},
	};

  return(
  		<Chart 
  			options={{...options, xaxis: chartData.labels}}
  			series={chartData.series}
  			type="bar"
  			height="250"
  		/>
    );
}

export default BarChart;