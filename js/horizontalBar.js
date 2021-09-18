

var personName = [],
  privateWorthData = [];

async function dummyChart() {
  await getDummyData();

  let ctx = document.getElementById("horizontalbar").getContext("2d");

  let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "bar",

    // The data for our dataset
    data: {
      labels: personName,
      datasets: [
        {
          barPercentage: 1.0,
          borderRadius: 3,
          tension: 0.5,
          label: "Private worth",
          backgroundColor: "#7978E9",
          borderColor: "rgb(255, 99, 132)",
          data: privateWorthData,
        },
      ],
    },

    // Configuration options go here
    options: {
        indexAxis:'y',  //for horizontal chart ye line imp he because in latest chartjs library there is no explicit chart for horizontalBar
      scales: {
        x: {
          grid: {
            display: true,
          },
        },
        y: {
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
