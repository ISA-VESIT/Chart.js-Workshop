
var personName = [],
privateWorthData = [];

async function dummyChart() {
await getDummyData();

let ctx = document.getElementById("areachart").getContext("2d");

let chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: personName,
    datasets: [
      {
        barPercentage: 1.0,
        fill: true,     //for area chart fill: true karna important hai
        borderRadius: 5,
        tension: 0.5,
        label: "Private worth",
        backgroundColor: "#FFB1C1",
        data: privateWorthData,
      },
    ],
  },

  // Configuration options go here
  options: {
    elements: {
        point:{
            radius: 1.5
        }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
      },
    },
    cornerRadius: 5,
    responsive: true,
    maintainAspectRatio: false,
  },
});
}

dummyChart();

//Fetch Data from API

async function getDummyData() {
const apiUrl = "https://forbes400.herokuapp.com/api/forbes400?limit=10";
const response = await fetch(apiUrl);
const barChatData = await response.json();
console.log(barChatData);
const name = barChatData.map((x) => x.personName);
console.log(name);
const pvtworth = barChatData.map((x) => x.privateAssetsWorth);
privateWorthData = pvtworth;
personName = name;
}
