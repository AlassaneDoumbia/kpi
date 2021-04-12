
const defaultAPI = "http://10.137.20.112:8095/" 
//const axios = require('axios').default;
const defaultOptions = {
    responsive: true,
    title: {
        display: true,
        text: 'Chart.js Line Chart - X-Axis Filter'
    },
    scales: {
        yAxes: [{ ticks: { beginAtZero: true } }]
    }
}

const mixedOptions =  {
    responsive: true,
    title: {
        display: true,
        text: 'KPI'
    },
    tooltips: {
        mode: 'index',
        intersect: true
    },
    scales: {
        y: {
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true,
            position: 'left',
        },
        y1: {
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true,
            position: 'right',

            // grid line settings
            gridLines: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
        },
    }
}

var randomScalingFactor = function() {
    return Math.round(Math.random() * 50 * (Math.random() > 0.5 ? 1 : 1)) + 50;
};

var randomEfficacity = () =>{
    return Math.floor(Math.random() * (100 - 85)) + 85;
}

var correctDateForm = (currentDay,currentTime) =>{
    let cuurentDateTime = moment(currentDay).format("MMM DD, YYYY")+" "+currentTime;
    let response = cuurentDateTime.split(":")
    return response[0]+":00";
}

const validateform = (pays, operateur, operateurCode, date, hd, hf) =>{
    if (pays != '' && operateur != '' && operateurCode != '' && date != ''
        && hd != '' && hf != '') {
        return true
    }
    return false
}

const getLabels = (x, y) =>{
    let tab = []
    let c = Math.min(x, y)
    if (c == x) {
        let diff = y - x
        for (let index = 0; index < diff; index++) {
            //tab[index-1] = x + index;
            tab.push(x + index)
        }
    }else{
        let diff = 24 - x
        for (let index = 0; index < diff; index++) {
            //tab[index-1] = x + index;
            tab.push(x + index)
        }
        for (let index = 0; index < y; index++) {
            //tab[index-1] = x + index;
            tab.push(index)
        }
    }
    return tab
}
const makeDemand = (pays, operateur, operateurCode, date, hd, hf) =>{
    var data = {
        'pays': pays,
        'operateur': operateur,
        'operateurCode': operateurCode,
        'date': date,
        'heure_debut': hd,
        'heure_fin': hf,
    };
    var url = 'https://sheet2api.com/v1/kecmmJ3Qfeki/hamcha/Feuille%201';

    fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data),
    }).then(response => response.json())
    .then(data => {
        vt.success("Requete validée");
        console.log('Success:', data);
        return "okay"
    })
    .catch((error) => {
        console.error('Error:', error);
        vt.error("Erreur apparue lors de l'execution");
        return null
    });
}


const defaultData = [randomScalingFactor(), randomScalingFactor(),  randomScalingFactor(), randomScalingFactor(), 
    randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), 
    randomScalingFactor(), randomScalingFactor(),randomScalingFactor(),]

