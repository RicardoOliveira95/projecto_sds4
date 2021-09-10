console.log("HERE");

window.onload=()=>{
    console.log("HERE");
          const myGraph=document.getElementById("myGraph");
          const dntChrt=document.getElementById("dntChrt");
        function barChart(){
        const options = {
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
        };

        const options2={
            legend: {
                show: true
            }
        }

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
        
        myGraph.innerHTML=`<Chart options=${{...options, xaxis: mockData.labels}} series=${mockData.series} type="bar" height="250" />`
        dntChrt.innerHTML=`<Chart options=${{..options,labels: mockData.labels}} series=${mockData.series} type="donut" height="250" />`
        }

        barChart();
      }