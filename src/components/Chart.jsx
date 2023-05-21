import Chartjs, { plugins, scales } from 'chart.js/auto';

export default function Chart({IDS}) {
    
    if (IDS != ""){

    // Adding the ID state to the URL that will be used in the API
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/'+IDS+'?info=revenue_budget';
    
    // Configuring the options of fetching the data
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c285d581bdmshca1187bc06f6931p16d27fjsn2911f9279b12',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    // The async function is used because we need to use the "await" operator o resolve the "promise" issue
    (async function() {
        
        const response = await fetch(url, options);     // saving the response of the API
        const result = await response.json();       // Converting the response's data to a JSON object
        var worldwideGross = result.results.worldwideGross.total.amount;        // Extracting the worldwide gross data
        var productionBudget = result.results.productionBudget.budget.amount;       // Extracting the production budget data
        var netGross = worldwideGross - productionBudget;           // Calculating the net gross
        
        const myChart = new Chartjs(            // Creating the Chart object using the Chart.JS library
            document.getElementById("right"),       // Defining where it will be drawn
            {
                type: "pie",        // Defining the chart's type
                data: {
                    labels: ['worldwide Gross', 'Production Budget'],       // Defining the labels of the data
                    datasets: [{
                        data: [worldwideGross, productionBudget],       // Defining the data to be drawn
                        hoverOffset: 10     // An offset that occurs upon hovering on each of the data
                        }]
                },
                options: {
                    layout: {
                        padding: 10     // Adding a padding because the hovering caused the chart to cut-off from bottom
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: "#F1F6F9"    // Changing the text color
                            }
                        }
                    }
                }
            }
        );
    })();
};
};
