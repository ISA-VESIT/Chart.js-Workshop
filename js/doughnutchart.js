
var personName = [],
privateWorthData = [];

async function dummyChart() {
await getDummyData();

let ctx = document.getElementById("doughnutchart").getContext("2d");

let chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "doughnut",

  // The data for our dataset
  data: {
    labels: personName,
    datasets: [
      {
         barPercentage: 1.0,
         fill: false,
        borderRadius: 0,
        tension: 0.5,
        label: "Private worth",
        backgroundColor: ['#FFB1C1','#FFE6AA','#9AD0F5','#EBE0FF','#DBF2F2'],
        borderColor: "#F09397",
        data: privateWorthData,
      },
    ],
  },

  // Configuration options go here
  options: {
    scales: {
      x: {
          display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
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
const apiUrl = "https://forbes400.herokuapp.com/api/forbes400?limit=5";
const response = await fetch(apiUrl);
const barChatData = await response.json();
console.log(barChatData);
const name = barChatData.map((x) => x.personName);
console.log(name);
const pvtworth = barChatData.map((x) => x.privateAssetsWorth);
privateWorthData = pvtworth;
personName = name;
}
