const express = require('express');

const app = express();

const router = express.Router();
const QuickChart = require('quickchart-js');
router.get('/', (req, res) => {
    const myChart = new QuickChart();
    const data1 = []
    const data2 =[]
    for (let i = 0; i < 50; i++) {
        data1.push(Math.floor(Math.random() * 50));
    }

    for (let i = 0 ;i< 50 ; i++){
        data2.push(Math.floor(Math.random() * 50));
    }
    myChart.setConfig({
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May','Juni', 'July', 'Augusti', 'Septemper', 'October','November','December'],
            datasets: [{ label: 'Ages', data: data1 },
            { label: 'Residents', data: data2 }]
        },
        options: {
            scales: {
                yAxes: [
                  {
                    ticks: {
                      callback: function (value) {
                        return 'år ' + value;
                      },
                    },
                  },
                ],
              },
            },
      
    })
        .setWidth(400)
        .setHeight(200)
        .setBackgroundColor('white');
    const chartImageUrl = myChart.getUrl();
    console.log(data1,data2);
    res.json(chartImageUrl);
})

module.exports = router;