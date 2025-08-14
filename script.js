// Sample data for the leaderboard
const leaderboardData = [
  {
    rank: 1,
    model: "Random Guessing",
    dd_acc: 0.4143,
    dd_f1: 0.4135,
    vra_acc: 0.3195,
    vra_f1: 0.3184,
    ll_acc: 0.1118,
    od_acc: 0.068,
    kd_acc: 0.112,
    rmse: 0.5472,
    mae: 0.4352,
    percent_4: 18.776,
    bleu: "-",
    rouge: "-",
    bert: "-",
    bleu2: "-",
    rouge2: "-",
    bert2: "-",
    u2score: 0.2125,
    category: "medical",
  },
  {
    rank: 2,
    model: "MindGPT-Med",
    dd_acc: 0.3468,
    dd_f1: 0.2828,
    vra_acc: 0.18,
    vra_f1: 0.1048,
    ll_acc: 0.1728,
    od_acc: 0.1789,
    kd_acc: 0.084,
    rmse: 0.3056,
    mae: 0.26,
    percent_4: 33.2259,
    bleu: 6.47,
    rouge: 20.13,
    bert: 74.69,
    bleu2: 30.2,
    rouge2: 47.75,
    bert2: 80.5,
    u2score: 0.2375,
    category: "medical",
  },
  {
    rank: 3,
    model: "MedDr",
    dd_acc: 0.4508,
    dd_f1: 0.3118,
    vra_acc: 0.2071,
    vra_f1: 0.1214,
    ll_acc: 0.072,
    od_acc: 0.0881,
    kd_acc: 0.09,
    rmse: 0.2144,
    mae: 0.1786,
    percent_4: 38.2642,
    bleu: 2.7998,
    rouge: 13.506,
    bert: 72.205,
    bleu2: 33.4939,
    rouge2: 49.6236,
    bert2: 81.2078,
    u2score: 0.2373,
    category: "medical",
  },
  {
    rank: 4,
    model: "Qwen-2.5-VL-3B-Instruct",
    dd_acc: 0.4503,
    dd_f1: 0.3591,
    vra_acc: 0.2097,
    vra_f1: 0.1492,
    ll_acc: 0.0696,
    od_acc: 0.0649,
    kd_acc: 0.0894,
    rmse: 0.5008,
    mae: 0.4519,
    percent_4: 18.9055,
    bleu: 3.5018,
    rouge: 15.0327,
    bert: 72.8419,
    bleu2: 27.6748,
    rouge2: 44.7618,
    bert2: 79.8849,
    u2score: 0.2095,
    category: "open",
  },
  {
    rank: 5,
    model: "Qwen-2.5-VL-7B-Instruct",
    dd_acc: 0.4821,
    dd_f1: 0.386,
    vra_acc: 0.2181,
    vra_f1: 0.1665,
    ll_acc: 0.075,
    od_acc: 0.0704,
    kd_acc: 0.1,
    rmse: 0.4646,
    mae: 0.4337,
    percent_4: 19.7115,
    bleu: 3.71,
    rouge: 15.56,
    bert: 73.15,
    bleu2: 29.44,
    rouge2: 47.0,
    bert2: 81.15,
    u2score: 0.2235,
    category: "open",
  },
  {
    rank: 6,
    model: "Qwen-2.5-VL-32B-Instruct",
    dd_acc: 0.4812,
    dd_f1: 0.386,
    vra_acc: 0.2864,
    vra_f1: 0.2071,
    ll_acc: 0.17,
    od_acc: 0.0755,
    kd_acc: 0.088,
    rmse: 0.3414,
    mae: 0.3015,
    percent_4: 27.4038,
    bleu: 1.19,
    rouge: 13.01,
    bert: 68.14,
    bleu2: 14.77,
    rouge2: 38.68,
    bert2: 77.39,
    u2score: 0.2449,
    category: "open",
  },
  {
    rank: 7,
    model: "Qwen-2.5-VL-72B-Instruct",
    dd_acc: 0.4895,
    dd_f1: 0.4556,
    vra_acc: 0.2559,
    vra_f1: 0.1789,
    ll_acc: 0.115,
    od_acc: 0.066,
    kd_acc: 0.086,
    rmse: 0.3224,
    mae: 0.2733,
    percent_4: 37.937,
    bleu: 3.09,
    rouge: 15.06,
    bert: 72.66,
    bleu2: 28.16,
    rouge2: 44.28,
    bert2: 80.91,
    u2score: 0.2421,
    category: "open",
  },
  {
    rank: 8,
    model: "DeepSeek-VL2",
    dd_acc: 0.4126,
    dd_f1: 0.319,
    vra_acc: 0.2268,
    vra_f1: 0.1111,
    ll_acc: 0.295,
    od_acc: 0.1682,
    kd_acc: 0.132,
    rmse: 0.2956,
    mae: 0.2505,
    percent_4: 12.3355,
    bleu: 7.47,
    rouge: 20.54,
    bert: 75.38,
    bleu2: 11.42,
    rouge2: 34.85,
    bert2: 77.24,
    u2score: 0.263,
    category: "open",
  },
  {
    rank: 9,
    model: "InternVL3-9B-Instruct",
    dd_acc: 0.4447,
    dd_f1: 0.3716,
    vra_acc: 0.1926,
    vra_f1: 0.1083,
    ll_acc: 0.3,
    od_acc: 0.1416,
    kd_acc: 0.094,
    rmse: 0.2429,
    mae: 0.1733,
    percent_4: 50.8738,
    bleu: 2.16,
    rouge: 14.7,
    bert: 72.21,
    bleu2: 21.59,
    rouge2: 43.13,
    bert2: 80.98,
    u2score: 0.2566,
    category: "open",
  },
  {
    rank: 10,
    model: "LLaVA-1.5-13B",
    dd_acc: 0.4321,
    dd_f1: 0.3055,
    vra_acc: 0.1731,
    vra_f1: 0.0755,
    ll_acc: 0.17,
    od_acc: 0.1259,
    kd_acc: 0.11,
    rmse: 0.2307,
    mae: 0.1976,
    percent_4: 24.7964,
    bleu: 6.24,
    rouge: 18.58,
    bert: 73.79,
    bleu2: 10.83,
    rouge2: 29.4,
    bert2: 75.5,
    u2score: 0.2378,
    category: "open",
  },
  {
    rank: 11,
    model: "Phi-4-Multimodal-Instruct",
    dd_acc: 0.3686,
    dd_f1: 0.1148,
    vra_acc: 0.2452,
    vra_f1: 0.0537,
    ll_acc: 0.035,
    od_acc: 0.0815,
    kd_acc: 0.16,
    rmse: 0.2249,
    mae: 0.2006,
    percent_4: 16.1972,
    bleu: 3.27,
    rouge: 16.58,
    bert: 73.27,
    bleu2: 3.87,
    rouge2: 22.98,
    bert2: 73.08,
    u2score: 0.2168,
    category: "open",
  },
  {
    rank: 12,
    model: "Mistral-Small-3.1-24B-Inst.",
    dd_acc: 0.4359,
    dd_f1: 0.0936,
    vra_acc: 0.1964,
    vra_f1: 0.0664,
    ll_acc: 0.13,
    od_acc: 0.091,
    kd_acc: 0.106,
    rmse: 0.1675,
    mae: 0.1331,
    percent_4: 45.9459,
    bleu: 1.8,
    rouge: 14.9,
    bert: 71.72,
    bleu2: 20.77,
    rouge2: 42.12,
    bert2: 80.74,
    u2score: 0.2356,
    category: "open",
  },
  {
    rank: 13,
    model: "Dobao-1.5-Vision-Pro-32k",
    dd_acc: 0.558,
    dd_f1: 0.2597,
    vra_acc: 0.2922,
    vra_f1: 0.2147,
    ll_acc: 0.17,
    od_acc: 0.0729,
    kd_acc: 0.124,
    rmse: 0.3664,
    mae: 0.3377,
    percent_4: 33.1731,
    bleu: 0.71,
    rouge: 6.645,
    bert: 72.4,
    bleu2: 8.64,
    rouge2: 33.3,
    bert2: 78.42,
    u2score: 0.2587,
    category: "open",
  },
  {
    rank: 14,
    model: "GPT-4o-Mini",
    dd_acc: 0.4924,
    dd_f1: 0.3784,
    vra_acc: 0.1922,
    vra_f1: 0.1272,
    ll_acc: 0.1357,
    od_acc: 0.0846,
    kd_acc: 0.096,
    rmse: 0.2267,
    mae: 0.1976,
    percent_4: 19.2308,
    bleu: 4.94,
    rouge: 17.52,
    bert: 74.13,
    bleu2: 11.73,
    rouge2: 36.29,
    bert2: 77.53,
    u2score: 0.2388,
    category: "closed",
  },
  {
    rank: 15,
    model: "GPT-4o",
    dd_acc: 0.4928,
    dd_f1: 0.4132,
    vra_acc: 0.1504,
    vra_f1: 0.0974,
    ll_acc: 0.1161,
    od_acc: 0.085,
    kd_acc: 0.084,
    rmse: 0.3712,
    mae: 0.3527,
    percent_4: 15.7895,
    bleu: 2.68,
    rouge: 14.77,
    bert: 73.35,
    bleu2: 33.77,
    rouge2: 49.96,
    bert2: 81.58,
    u2score: 0.2253,
    category: "closed",
  },
  {
    rank: 16,
    model: "Gemini-1.5-Pro",
    dd_acc: 0.3781,
    dd_f1: 0.2247,
    vra_acc: 0.0909,
    vra_f1: 0.0476,
    ll_acc: 0.27,
    od_acc: 0.0661,
    kd_acc: 0.098,
    rmse: 0.2772,
    mae: 0.2205,
    percent_4: 40.7051,
    bleu: 0.58,
    rouge: 9.94,
    bert: 70.55,
    bleu2: 28.58,
    rouge2: 45.92,
    bert2: 80.02,
    u2score: 0.1999,
    category: "closed",
  },
  {
    rank: 17,
    model: "Gemini-2.5-Pro-Exp",
    dd_acc: 0.4925,
    dd_f1: 0.4194,
    vra_acc: 0.1648,
    vra_f1: 0.1323,
    ll_acc: 0.1714,
    od_acc: 0.0945,
    kd_acc: 0.082,
    rmse: 0.1945,
    mae: 0.1498,
    percent_4: 53.3333,
    bleu: 0.26,
    rouge: 6.92,
    bert: 40.24,
    bleu2: 31.18,
    rouge2: 48.6,
    bert2: 81.6,
    u2score: 0.2438,
    category: "closed",
  },
  {
    rank: 18,
    model: "Gemini-2.5-Pro-Preview",
    dd_acc: 0.4256,
    dd_f1: 0.3112,
    vra_acc: 0.2098,
    vra_f1: 0.1493,
    ll_acc: 0.2709,
    od_acc: 0.2714,
    kd_acc: 0.2518,
    rmse: 0.2937,
    mae: 0.2672,
    percent_4: 34.497,
    bleu: 5.503,
    rouge: 18.018,
    bert: 74.493,
    bleu2: 15.011,
    rouge2: 38.007,
    bert2: 75.98,
    u2score: 0.2968,
    category: "closed",
  },
  {
    rank: 19,
    model: "Claude-3.7-Sonnet",
    dd_acc: 0.2121,
    dd_f1: 0.0449,
    vra_acc: 0.1453,
    vra_f1: 0.0479,
    ll_acc: 0.1356,
    od_acc: 0.054,
    kd_acc: 0.076,
    rmse: 0.1764,
    mae: 0.15,
    percent_4: 36.0215,
    bleu: 0.69,
    rouge: 12.23,
    bert: 68.74,
    bleu2: 1.29,
    rouge2: 16.66,
    bert2: 71.66,
    u2score: 0.1596,
    category: "closed",
  },
  {
    rank: 20,
    model: "Qwen-Max",
    dd_acc: 0.4566,
    dd_f1: 0.2676,
    vra_acc: 0.1925,
    vra_f1: 0.0871,
    ll_acc: 0.1606,
    od_acc: 0.0761,
    kd_acc: 0.094,
    rmse: 0.1248,
    mae: 0.0843,
    percent_4: 69.2308,
    bleu: 3.5,
    rouge: 17.02,
    bert: 73.96,
    bleu2: 30.67,
    rouge2: 49.0,
    bert2: 82.55,
    u2score: 0.2445,
    category: "closed",
  },
  {
    rank: 21,
    model: "Dolphin V1",
    dd_acc: 0.6819,
    dd_f1: 0.5155,
    vra_acc: 0.6943,
    vra_f1: 0.5821,
    ll_acc: 0.4775,
    od_acc: 0.6003,
    kd_acc: 0.5080,
    rmse: 0.2430,
    mae: 0.2273,
    percent_4: 38.6458,
    bleu: 3.2193,
    rouge: 15.1170,
    bert: 72.7287,
    bleu2: 54.0634,
    rouge2: 76.0111,
    bert2: 92.9601,
    u2score: 0.5835,
    category: "open",
  },
  {
    rank: 23,
    model: "medgemma-4b-it",
    dd_acc: 0.5005,
    dd_f1: 0.4336,
    vra_acc: 0.3071,
    vra_f1: 0.152,
    ll_acc: 0.275,
    od_acc: 0.0858,
    kd_acc: 0.02,
    rmse: 0.1667,
    mae: 0.1316,
    percent_4: 55.0962,
    bleu: 1.536,
    rouge: 15.0348,
    bert: 74.0205,
    bleu2: 4.8777,
    rouge2: 35.9803,
    bert2: 76.7859,
    u2score: 0.2668,
    category: "medical",
  },
];

let currentData = [...leaderboardData];
let sortColumn = "u2score";
let sortDirection = "desc";

// DOM elements
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const refreshBtn = document.getElementById("refreshBtn");
const leaderboardBody = document.getElementById("leaderboardBody");
const totalModelsSpan = document.getElementById("totalModels");
const bestScoreSpan = document.getElementById("bestScore");
const lastUpdatedSpan = document.getElementById("lastUpdated");

// Calculate ranks based on U2-Score
function calculateRanks(data) {
  // Create a copy of the data and sort by u2score (descending)
  const sortedData = [...data].sort((a, b) => {
    const aScore = a.u2score === "-" ? -1 : parseFloat(a.u2score);
    const bScore = b.u2score === "-" ? -1 : parseFloat(b.u2score);
    return bScore - aScore;
  });

  // Assign ranks based on U2-Score
  sortedData.forEach((item, index) => {
    item.rank = index + 1;
  });

  return sortedData;
}

// Calculate and assign U2-Score based ranks to data without changing order
function assignU2ScoreRanks(data) {
  // Create a temporary array to calculate ranks
  const tempData = [...data].sort((a, b) => {
    const aScore = a.u2score === "-" ? -1 : parseFloat(a.u2score);
    const bScore = b.u2score === "-" ? -1 : parseFloat(b.u2score);
    return bScore - aScore;
  });

  // Create a rank mapping based on U2-Score
  const rankMap = new Map();
  tempData.forEach((item, index) => {
    rankMap.set(item.model, index + 1);
  });

  // Assign ranks to original data based on the mapping
  data.forEach((item) => {
    item.rank = rankMap.get(item.model);
  });

  return data;
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  // Calculate initial ranks based on U2-Score (don't modify original data)
  currentData = calculateRanks([...leaderboardData]);

  // Add legend for colored boxes
  const heroSection = document.querySelector('.hero');
  const legend = document.createElement('div');
  legend.className = 'score-legend';
  legend.innerHTML = `
    <div class="legend-title">Score Rankings:</div>
    <div class="legend-item">
      <span class="legend-box top-1"></span>
      <span class="legend-text">Best Score</span>
    </div>
    <div class="legend-item">
      <span class="legend-box top-2"></span>
      <span class="legend-text">Second Best</span>
    </div>
    <div class="legend-item">
      <span class="legend-box top-3"></span>
      <span class="legend-text">Third Best</span>
    </div>
  `;
  heroSection.appendChild(legend);

  // Set initial sort indicator for U2-Score column
  setTimeout(() => {
    const u2scoreHeader = document.querySelector('[data-column="u2score"]');
    if (u2scoreHeader) {
      u2scoreHeader.classList.add("sorted");
      const icon = u2scoreHeader.querySelector("i");
      if (icon) {
        icon.className = "fas fa-sort-down";
      }
    }
  }, 100);

  renderTable();
  updateStats();
  setupEventListeners();
  setupModal();
  addStatsLoadAnimation();
});

// Setup event listeners
function setupEventListeners() {
  // Search functionality
  searchInput.addEventListener("input", handleSearch);

  // Category filter
  categoryFilter.addEventListener("change", handleFilter);

  // Refresh button
  refreshBtn.addEventListener("click", handleRefresh);

  // Table sorting
  document.querySelectorAll(".sortable").forEach((header) => {
    header.addEventListener("click", () => {
      const column = header.dataset.column;
      handleSort(column);
    });
  });
}

// Unified filter function
function applyAllFilters() {
  // Reset to original data first (create a deep copy)
  let filteredData = leaderboardData.map((item) => ({ ...item }));

  // Apply search filter
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filteredData = filteredData.filter((item) =>
      item.model.toLowerCase().includes(searchTerm)
    );
  }

  // Apply category filter
  const category = categoryFilter.value;
  if (category) {
    filteredData = filteredData.filter((item) => item.category === category);
  }

  // Assign U2-Score based ranks to filtered data
  currentData = assignU2ScoreRanks(filteredData);

  renderTable();
  updateStats();
}

// Handle search
function handleSearch() {
  applyAllFilters();
}

// Handle category filter
function handleFilter() {
  applyAllFilters();
}

// Handle refresh
function handleRefresh() {
  // Add loading animation
  refreshBtn.innerHTML =
    '<i class="fas fa-sync-alt fa-spin"></i> Refreshing...';

  setTimeout(() => {
    // Reset data and filters
    currentData = calculateRanks(leaderboardData.map((item) => ({ ...item })));
    searchInput.value = "";
    categoryFilter.value = "";
    sortColumn = "u2score";
    sortDirection = "desc";

    renderTable();
    updateStats();

    refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh';
  }, 1000);
}

// Handle sorting
function handleSort(column) {
  if (sortColumn === column) {
    sortDirection = sortDirection === "asc" ? "desc" : "asc";
  } else {
    sortColumn = column;
    // Default to desc for u2score and most metrics, asc for others
    if (
      column === "u2score" ||
      column === "dd_acc" ||
      column === "dd_f1" ||
      column === "vra_acc" ||
      column === "vra_f1" ||
      column === "ll_acc" ||
      column === "od_acc" ||
      column === "kd_acc" ||
      column === "percent_4" ||
      column === "bleu" ||
      column === "rouge" ||
      column === "bert" ||
      column === "bleu2" ||
      column === "rouge2" ||
      column === "bert2"
    ) {
      sortDirection = "desc";
    } else {
      sortDirection = "asc";
    }
  }

  currentData.sort((a, b) => {
    let aVal = a[column];
    let bVal = b[column];

    // Handle "-" values - treat them as lowest value
    if (aVal === "-" && bVal === "-") return 0;
    if (aVal === "-") return 1;
    if (bVal === "-") return -1;

    // Handle different data types
    if (typeof aVal === "string") {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }

    if (column === "date") {
      aVal = new Date(aVal);
      bVal = new Date(bVal);
    }

    if (sortDirection === "asc") {
      return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
    } else {
      return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
    }
  });

  // Always maintain U2-Score based ranks regardless of sort column
  assignU2ScoreRanks(currentData);

  // Update sort indicators
  document.querySelectorAll(".sortable").forEach((header) => {
    header.classList.remove("sorted");
    const icon = header.querySelector("i");
    icon.className = "fas fa-sort";
  });

  const currentHeader = document.querySelector(`[data-column="${column}"]`);
  currentHeader.classList.add("sorted");
  const currentIcon = currentHeader.querySelector("i");
  currentIcon.className =
    sortDirection === "asc" ? "fas fa-sort-up" : "fas fa-sort-down";

  renderTable();
}

// Render the table
function renderTable() {
  leaderboardBody.innerHTML = "";

  // Calculate top 3 for each metric
  const metrics = [
    "dd_acc",
    "dd_f1",
    "vra_acc",
    "vra_f1",
    "ll_acc",
    "od_acc",
    "kd_acc",
    "rmse",
    "mae",
    "percent_4",
    "bleu",
    "rouge",
    "bert",
    "bleu2",
    "rouge2",
    "bert2",
    "u2score",
  ];
  const topValues = {};

  metrics.forEach((metric) => {
    const values = currentData
      .map((item) => item[metric])
      .filter((val) => val !== "-" && val !== null && val !== undefined)
      .sort((a, b) => {
        // For RMSE and MAE, lower is better (descending for top values)
        if (metric === "rmse" || metric === "mae") {
          return a - b;
        }
        // For all other metrics, higher is better
        return b - a;
      });

    topValues[metric] = {
      first: values[0],
      second: values[1],
      third: values[2],
    };
  });

  currentData.forEach((item) => {
    const row = document.createElement("tr");

    // Determine rank class for styling
    let rankClass = "rank-cell";
    if (item.rank === 1) rankClass += " rank-gold";
    else if (item.rank === 2) rankClass += " rank-silver";
    else if (item.rank === 3) rankClass += " rank-bronze";

    row.innerHTML = `
            <td class="model-cell">${item.model}</td>
            <td class="${rankClass}">#${item.rank}</td>
            <td class="score-cell" data-metric="u2score">${item.u2score}</td>
            <td class="score-cell" data-metric="dd_acc">${item.dd_acc}</td>
            <td class="score-cell" data-metric="dd_f1">${item.dd_f1}</td>
            <td class="score-cell" data-metric="vra_acc">${item.vra_acc}</td>
            <td class="score-cell" data-metric="vra_f1">${item.vra_f1}</td>
            <td class="score-cell" data-metric="ll_acc">${item.ll_acc}</td>
            <td class="score-cell" data-metric="od_acc">${item.od_acc}</td>
            <td class="score-cell" data-metric="kd_acc">${item.kd_acc}</td>
            <td class="score-cell" data-metric="rmse">${item.rmse}</td>
            <td class="score-cell" data-metric="mae">${item.mae}</td>
            <td class="score-cell" data-metric="percent_4">${item.percent_4}</td>
            <td class="score-cell" data-metric="bleu">${item.bleu}</td>
            <td class="score-cell" data-metric="rouge">${item.rouge}</td>
            <td class="score-cell" data-metric="bert">${item.bert}</td>
            <td class="score-cell" data-metric="bleu2">${item.bleu2}</td>
            <td class="score-cell" data-metric="rouge2">${item.rouge2}</td>
            <td class="score-cell" data-metric="bert2">${item.bert2}</td>
        `;
    leaderboardBody.appendChild(row);

    // Apply top 3 highlighting
    const cells = row.querySelectorAll(".score-cell[data-metric]");
    cells.forEach((cell) => {
      const metric = cell.dataset.metric;
      const cellText = cell.textContent;

      // Skip highlighting for "-" values
      if (cellText === "-") {
        return;
      }

      const value = parseFloat(cellText);

      if (value === topValues[metric].first) {
        cell.classList.add("top-1");
      } else if (value === topValues[metric].second) {
        cell.classList.add("top-2");
      } else if (value === topValues[metric].third) {
        cell.classList.add("top-3");
      }
    });
  });
}

// Update statistics with animation
function updateStats() {
  const totalModels = currentData.length;
  const validScores = currentData
    .map((item) => item.u2score)
    .filter((score) => score !== "-" && score !== null && score !== undefined);
  const bestScore = validScores.length > 0 ? Math.max(...validScores) : 0;
  const lastUpdated = formatDate(new Date().toISOString().split("T")[0]);

  // Animate total models counter
  animateCounter(
    totalModelsSpan,
    parseInt(totalModelsSpan.textContent) || 0,
    totalModels,
    1000
  );

  // Animate best score counter
  if (validScores.length > 0) {
    animateCounter(
      bestScoreSpan,
      parseFloat(bestScoreSpan.textContent) || 0,
      bestScore,
      1000,
      4
    );
  } else {
    bestScoreSpan.textContent = "-";
  }

  // Update last updated with fade effect
  fadeUpdateText(lastUpdatedSpan, lastUpdated);
}

// Animate counter with easing
function animateCounter(element, start, end, duration, decimals = 0) {
  // Add pulse effect during animation
  element.parentElement.classList.add("updating");

  const startTime = performance.now();
  const difference = end - start;

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = start + difference * easeOut;

    if (decimals > 0) {
      element.textContent = current.toFixed(decimals);
    } else {
      element.textContent = Math.round(current);
    }

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      // Ensure final value is exact
      if (decimals > 0) {
        element.textContent = end.toFixed(decimals);
      } else {
        element.textContent = end;
      }
      // Remove pulse effect
      element.parentElement.classList.remove("updating");
    }
  }

  requestAnimationFrame(updateCounter);
}

// Fade update text effect
function fadeUpdateText(element, newText) {
  element.style.transition = "opacity 0.3s ease";
  element.style.opacity = "0.5";

  setTimeout(() => {
    element.textContent = newText;
    element.style.opacity = "1";
  }, 150);
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Add some animation effects
function addRowAnimation() {
  const rows = document.querySelectorAll("#leaderboardBody tr");
  rows.forEach((row, index) => {
    row.style.opacity = "0";
    row.style.transform = "translateY(20px)";

    setTimeout(() => {
      row.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      row.style.opacity = "1";
      row.style.transform = "translateY(0)";
    }, index * 50);
  });
}

// Add stats load animation
function addStatsLoadAnimation() {
  const statCards = document.querySelectorAll(".stat-card");
  statCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px) scale(0.9)";

    setTimeout(() => {
      card.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
      card.style.opacity = "1";
      card.style.transform = "translateY(0) scale(1)";
    }, 200 + index * 150);
  });
}

// Modal functionality
function setupModal() {
  const modal = document.getElementById("apiModal");
  const dolphinBtn = document.getElementById("dolphinAIBtn");
  const closeBtn = document.querySelector(".close");
  const cancelBtn = document.getElementById("cancelBtn");
  const form = document.getElementById("apiSuggestionForm");

  // Open modal
  dolphinBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  });

  // Close modal function
  function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
    // Reset form
    form.reset();
  }

  // Close modal events
  closeBtn.addEventListener("click", closeModal);
  cancelBtn.addEventListener("click", closeModal);

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const apiUrl = document.getElementById("apiUrl").value;
    const apiDescription = document.getElementById("apiDescription").value;

    // Create email content
    const subject = "API Suggestion for U2-BENCH";
    const body = `Hello U2-BENCH Team,

I would like to suggest a new API for your benchmarking platform:

API URL: ${apiUrl}

${apiDescription ? `Description: ${apiDescription}` : ""}

Best regards`;

    // Create mailto link
    const mailtoLink = `mailto:social@dolphin-ai.cn?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    showSuccessMessage();

    // Close modal after a short delay
    setTimeout(() => {
      closeModal();
    }, 1500);
  });
}

// Show success message
function showSuccessMessage() {
  const submitBtn = document.querySelector(".btn-submit");
  const originalContent = submitBtn.innerHTML;

  submitBtn.innerHTML = '<i class="fas fa-check"></i> Email Opened!';
  submitBtn.style.background =
    "linear-gradient(135deg, #48bb78 0%, #38a169 100%)";

  setTimeout(() => {
    submitBtn.innerHTML = originalContent;
    submitBtn.style.background =
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  }, 1500);
}
