//HOW MANY CHARACTERS OF PRECISION

/* const { response } = require("express"); */

window.addEventListener('DOMContentLoaded', () => {

    var ctx = document.getElementById('myChart').getContext('2d');
    ctx.canvas.width = 300;
    ctx.canvas.height = 300;


    async function makeChart() {
        //FETCH 
        const response = await fetch('/api/company/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        let data = await response.json();
        console.log(data);

        names = data.map((entry)=>{
            company = entry.name;
            return company;
        });

        ratings = data.map((entry)=>{
            rating = parseFloat(entry.avg_rating || 0);
            return rating;
        });

        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: names,
                datasets: [{
                    label: 'Stars out of 5',
                    data: ratings,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMax: 5
                    }
                }
            }
        });
    }
    makeChart();
});