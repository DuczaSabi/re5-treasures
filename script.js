const treasureContainer = document.querySelector("#treasures");

const treasureList = [
  { name: "Gold Ring", count: 189, where: "1-2-2" },
  { name: "Ivory Relief", count: 108, where: "1-2-1" },
  { name: "Dead Bride's Necklace", count: 41, where: "6-1-2" },
  { name: "Royal Necklace", count: 246, where: "5-3-2" },
  { name: "Jewel Bangle", count: 302, where: "5-3-2" },
  { name: "Venom Fang", count: 104, where: "3-2-1" },

  { name: "Antique Clock", count: 108, where: "1-2-1" },
  { name: "Chalice (Silver)", count: 35, where: "3-1-1" },
  { name: "Chalice (Gold)", count: 60, where: "5-3-3" },
  { name: "Idol (Silver)", count: 67, where: "3-1-1" },
  { name: "Idol (Gold)", count: 112, where: "4-1-3" },
  { name: "Ceremonial Mask", count: 22, where: "3-1-2" },

  { name: "Beetle (Brown)", count: 316, where: "3-1-1" },
  { name: "Jewel Beetle", count: 180, where: "3-2-1" },
  { name: "Beetle (Gold)", count: 101, where: "4-2-2" },
  { name: "Topaz (Pear)", count: 221, where: "4-2-1" },
  { name: "Ruby (Pear)", count: 652, where: "2-2-1" },
  { name: "Sapphire (Pear)", count: 323, where: "2-1-1" },

  { name: "Emerald (Pear)", count: 294, where: "4-1-2" },
  { name: "Diamond (Pear)", count: 191, where: "2-2-2" },
  { name: "Topaz (Square)", count: 131, where: "4-1-2" },
  { name: "Ruby (Square)", count: 999, where: "5-1-1" },
  { name: "Sapphire (Square)", count: 109, where: "4-1-3" },
  { name: "Emerald (Square)", count: 104, where: "4-1-3" },

  { name: "Diamond (Square)", count: 102, where: "2-2-2" },
  { name: "Topaz (Oval)", count: 31, where: "6-1-1" },
  { name: "Ruby (Oval)", count: 13, where: "4-1-3" },
  { name: "Sapphire (Oval)", count: 102, where: "5-3-4" },
  { name: "Emerald (Oval)", count: 102, where: "5-3-4" },
  { name: "Diamond (Oval)", count: 106, where: "2-2-1" },

  { name: "Topaz (Trilliant)", count: 44, where: "4-1-1" },
  { name: "Ruby (Trilliant)", count: 105, where: "4-1-2" },
  { name: "Sapphire (Trilliant)", count: 105, where: "4-1-2" },
  { name: "Emerald (Trilliant)", count: 105, where: "4-1-2" },
  { name: "Diamond (Trilliant)", count: 12, where: "4-2-1" },
  { name: "Topaz (Brilliant)", count: 47, where: "5-3-3" },

  { name: "Ruby (Brilliant)", count: 46, where: "5-3-3" },
  { name: "Sapphire (Brilliant)", count: 102, where: "5-3-4" },
  { name: "Emerald (Brilliant)", count: 102, where: "5-3-4" },
  { name: "Diamond (Brilliant)", count: 102, where: "2-2-2" },
  { name: "Topaz (Marquise)", count: 105, where: "1-1-1" },
  { name: "Ruby (Marquise)", count: 102, where: "2-1-1" },

  { name: "Sapphire (Marquise)", count: 104, where: "5-3-1" },
  { name: "Emerald (Marquise)", count: 8, where: "3-3-1" },
  { name: "Diamond (Marquise)", count: 2, where: "6-3-1" },
  { name: "Power Stone", count: 515, where: "5-3-2" },
  { name: "Lion Heart", count: 77, where: "5-3-3" },
  { name: "Blue Enigma", count: 68, where: "3-1-2" },

  { name: "Soul Gem", count: 12, where: "4-1-3" },
  { name: "Heart of Africa", count: 101, where: "5-3-4" },
];

treasureList.forEach((treasure) => {
  const container = document.createElement("div");
  container.classList.add("treasure");

  const { name, count, where } = treasure;

  // Transform the name into the required format
  const imageName = name.toLowerCase().replace(/ /g, "-").replace(/[()']/g, "");

  // Image
  const img = document.createElement("img");
  img.src = `Images/Treasures/${imageName}.png`;
  img.alt = name;

  // Count
  const countText = document.createElement("span");
  countText.innerHTML = count;
  countText.classList.add("count");

  if (count == 999) {
    countText.classList.add("maxed");
  }

  // Detail
  const detail = document.createElement("span");
  detail.innerHTML = where;
  detail.classList.add("detail");

  container.appendChild(img);
  container.appendChild(countText);
  container.appendChild(detail);

  treasureContainer.appendChild(container);
});

// Function to check if all treasures for a given "where" have count 999
function isChapterCompleted(where) {
  return treasureList
    .filter((treasure) => treasure.where === where)
    .every((treasure) => treasure.count === 999);
}

// List of chapters
const chapters = [
  { chapter: "1-1-1", time: 95 },
  { chapter: "1-2-1", time: 90 },
  { chapter: "1-2-2", time: 70 },
  { chapter: "2-1-1", time: 60 },
  { chapter: "2-2-1", time: 85 },
  { chapter: "2-2-2", time: 120 },
  { chapter: "3-1-1", time: 120 },
  { chapter: "3-1-2", time: 120 },
  { chapter: "3-2-1", time: 160 },
  { chapter: "3-3-1", time: 210 },
  { chapter: "4-1-1", time: 55 },
  { chapter: "4-1-2", time: 120 },
  { chapter: "4-1-3", time: 300 },
  { chapter: "4-2-1", time: 240 },
  { chapter: "4-2-2", time: 155 },
  { chapter: "5-1-1", time: 22 },
  { chapter: "5-3-1", time: 40 },
  { chapter: "5-3-2", time: 150 },
  { chapter: "5-3-3", time: 180 },
  { chapter: "5-3-4", time: 130 },
  { chapter: "6-1-1", time: 240 },
  { chapter: "6-1-2", time: 200 },
  { chapter: "6-3-1", time: 40 },
];

const pendingDiv = document.querySelector("#pending");
const completedDiv = document.querySelector("#completed");

const spot = document.querySelector("#spot");
const spotTitle = document.querySelector(".spot-title");

chapters.forEach((chapter) => {
  const p = document.createElement("p");
  p.innerText = chapter.chapter;

  p.addEventListener("click", () => openSpot(chapter));

  if (isChapterCompleted(chapter.chapter)) {
    completedDiv.appendChild(p);
  } else {
    pendingDiv.appendChild(p);
  }
});

let isOpeningSpot = false;

document.addEventListener("click", function (event) {
  const spot = document.getElementById("spot");
  if (!spot.contains(event.target) && !isOpeningSpot) {
    treasureContainer.style.display = "flex";
    spot.style.opacity = 0;

    setTimeout(() => {
      spot.style.display = "none";
      treasureContainer.style.opacity = 1;
    }, 300);
  }
});

function openSpot(chapter) {
  isOpeningSpot = true;
  treasureContainer.style.opacity = 0;

  setTimeout(() => {
    spot.style.display = "flex";
    setTimeout(() => {
      spot.style.opacity = 1;
      treasureContainer.style.display = "none";
      isOpeningSpot = false;
    }, 10);
  }, 301);

  spotTitle.innerText = chapter.chapter;

  const spotImg = document.querySelector("#spot-img");
  spotImg.src = `Images/Spots/${chapter.chapter}.jpg`;

  const spotTreasures = document.getElementById("spot-treasures");
  spotTreasures.innerHTML = "";

  let leastTreasure = 999;
  treasureList.forEach((treasure) => {
    if (treasure.where == chapter.chapter) {
      const { name } = treasure;

      // Transform the name into the required format
      const imageName = name
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[()']/g, "");

      // Image
      const img = document.createElement("img");
      img.src = `Images/Treasures/${imageName}.png`;
      img.alt = "";

      spotTreasures.appendChild(img);

      if (treasure.count < leastTreasure) leastTreasure = treasure.count;
    }
  });

  // Calculate details
  const timePerRun = document.querySelector("#timePerRun");
  const runsPerHour = document.querySelector("#runsPerHour");
  const runsLeft = document.querySelector("#runsLeft");
  const hoursLeft = document.querySelector("#hoursLeft");

  const time = chapter.time;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timePerRun.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  const runsPerHourValue = Math.floor(3600 / time);
  runsPerHour.innerText = runsPerHourValue;

  let runsLeftValue = 999 - leastTreasure;
  if (chapter.chapter == "3-2-1") runsLeftValue = Math.ceil(runsLeftValue / 2);
  else if (chapter.chapter == "6-1-1" || chapter.chapter == "6-1-2")
    runsLeftValue = Math.ceil(runsLeftValue / 3);
  runsLeft.innerText = runsLeftValue;

  hoursLeft.innerText = Math.round((time * runsLeftValue) / 3600);
}

const totalHoursLeft = chapters.reduce((total, chapter) => {
  const leastTreasure = treasureList
    .filter((treasure) => treasure.where === chapter.chapter)
    .reduce((min, treasure) => Math.min(min, treasure.count), 999);
  const time = chapter.time;

  let runsLeftValue = 999 - leastTreasure;
  if (chapter.chapter == "3-2-1") runsLeftValue = Math.ceil(runsLeftValue / 2);
  else if (chapter.chapter == "6-1-1" || chapter.chapter == "6-1-2")
    runsLeftValue = Math.ceil(runsLeftValue / 3);

  const hoursLeft = Math.round((time * runsLeftValue) / 3600);
  return total + hoursLeft;
}, 0);

const totalSpan = document.querySelector("#total span");
totalSpan.innerText = totalHoursLeft;

const background = document.querySelector("#background");
background.style.backgroundImage = "url('Images/background.jpg')";
