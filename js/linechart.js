
var personName = [],
netWorthData = [],
privateWorthData = [];

async function dummyChart() {
await getDummyData();

let ctx = document.getElementById("linechart").getContext("2d");

let chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: personName,
    datasets: [
      {
        tension: 0.5,
        label: "Net worth",
        backgroundColor: "#98BDFF",
        borderColor: "#4747A1",
        data: netWorthData,
      },
      {
        tension: 0.5,
        label: "private worth",
        backgroundColor: "#4B49AC",
        borderColor: "#F09397",
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
const networth = barChatData.map((x) => x.finalWorth);
console.log(networth);
const pvtworth = barChatData.map((x) => x.privateAssetsWorth);
netWorthData = networth;
privateWorthData = pvtworth;
personName = name;
}
