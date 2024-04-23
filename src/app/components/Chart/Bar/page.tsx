'use client'

import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

interface props {
    titleSeries : string
    dataSeries : number[]
    categories : any[]
}

const ChartBar = ({titleSeries, dataSeries, categories}: props) => {
    useEffect(() => {
        console.log(titleSeries, dataSeries, categories)
        const options = {
            chart: {
                type: 'bar',
                height: 350
            },
            series: [{
                name: titleSeries,
                data: dataSeries
            }],
            xaxis: {
                categories:categories
            }
        };
        
        // Create a new ApexCharts instance and mount it to the DOM element
        const chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
        
        // Cleanup function to destroy chart when component unmounts
        return () => {
            if (chart) {
                chart.destroy();
            }
        };
    }, []);

    return (
        <>
            <div id="chart"></div>
        </>
    );
};

export default React.memo(ChartBar);

