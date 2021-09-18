
var personName = [],
netWorthData = [],
privateWorthData = [];

async function dummyChart() {
await getDummyData();

let ctx = document.getElementById("radarchart").getContext("2d");

let chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "radar",

  // The data for our dataset
  data: {
    labels: personName,
    datasets: [
      {
        label: "Net worth",
        backgroundColor: "rgba(200,0,0,0.2)",
        data: netWorthData,
      },
      {
        label: "private worth",
        backgroundColor: "rgba(0,0,200,0.2)",
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

dummyChart();   // yaha hum dummychart() function ko simply call karenge

// yaha hum Fetch karenge Data from that forbes400 ka API

async function getDummyData() {
const apiUrl = "https://forbes400.herokuapp.com/api/forbes400?limit=10";  // yaha humne sirf first 10 entities liye
const response = await fetch(apiUrl);
const barChatData = await response.json();
console.log(barChatData);
const name = barChatData.map((x) => x.personName);  //uss json data se humne sirf personName ka value liya and name me store kiye
console.log(name);
const networth = barChatData.map((x) => x.finalWorth); //uss json data se humne sirf finalWorth ka value liya and networth me store kiye
console.log(networth);
const pvtworth = barChatData.map((x) => x.archivedWorth); //uss json data se humne sirf archivedWorth ka value liya and pvtworth me store kiye
netWorthData = networth;
privateWorthData = pvtworth;
personName = name;
}
