const menuIcon = document.querySelector(".menu-icon");
const aside = document.querySelector(".aside");
const asideClose = document.querySelector(".aside_close-icon");

function toggle(el, className) {
  if (el.classList.contains(className)) {
    el.classList.remove(className);
  } else {
    el.classList.add(className);
  }
}

menuIcon.addEventListener("click", function () {
  toggle(aside, "active");
});

asideClose.addEventListener("click", function () {
  toggle(aside, "active");
});

var personName = [],
netWorthData = [],
privateWorthData = [];

async function dummyChart() {
  await getDummyData();

  let ctx = document.getElementById("barchart").getContext("2d");

  let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "bar",

    // The data for our dataset
    data: {
      labels: personName,
      datasets: [
        {
          barPercentage: 1.0,
          borderRadius: 5,
          tension: 0.5,
          label: "Net worth",
          backgroundColor: "#98BDFF",
          borderColor: "rgb(255, 99, 132)",
          data: netWorthData,
        },
        {
          barPercentage: 1.0,
          borderRadius: 5,
          tension: 0.5,
          label: "private worth",
          backgroundColor: "#4B49AC",
          borderColor: "rgb(255, 99, 132)",
          data: privateWorthData,
        },
      ],
    },

    // Configuration options go here
    options: {
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
