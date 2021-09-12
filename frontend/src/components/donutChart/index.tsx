import React, { Component } from 'react'
import Chart from "react-apexcharts"
import axios from 'axios'
import {BASE_URL} from 'utils/requests'
import {SaleSum} from 'types/sale'

type ChartData={
  labels: string[];
  series: number[];
}

const DonutChart=()=>{

let chartData: ChartData={labels: [],series: []};

axios.get(BASE_URL+'/sales/sum-by-seller').then(res=>{
  //const data= res.data as SaleSum[]
  //const myLabels=data.map(x=> x.sellerName)
  //const mySeries=data.map(x=> x.sum)

  //chartData={labels:myLabels,series:mySeries}
  console.log(res.data)
})

  //const mockData = {
   // series: [477138, 499928, 444867, 220426, 473088],
   // labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']}

const options = {
    legend: {
        show: true
    }
}

  return(
  		<Chart 
  			options={{...options, labels: chartData.labels}}
  			series={chartData.series}
  			type="donut"
  			height="250"
  		/>
    );
}

export default DonutChart;