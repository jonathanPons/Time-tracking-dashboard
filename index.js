const daily = document.querySelector(".daily");
const Weekly = document.querySelector(".Weekly");
const Monthly = document.querySelector(".Monthly");

let data;

async function getData() {
  // Aller chercher le fichier JSON
  const response = await fetch("./data.json");
  console.log(response);

  if (!response.ok) {
    return "Error";
  }
  // l'afficher , le rendre visible
  data = await response.json();
  changeData("weekly");
  console.log(data);
}
getData();

// Creer une function de changement de periode

// click sur la periode
function changeData(periode) {
  console.log("fonction appelée avec : ", periode);
  data.forEach((element) => {
    //recuperer le titre de chacun
    const title = element.title;
    console.log(title);
    // Je veux que le title de chaque objet fasse apparaitre ses heures dans les
    //  DIV correspondantes
    let previousText;
    const LowerTitle = title.toLowerCase().replace(/ /g, "");
    const card = document.querySelector(`#${LowerTitle}`);
    console.log(card);
    const currentHour = element.timeframes[periode].current;
    console.log(currentHour);
    const previousHour = element.timeframes[periode].previous;
    console.log(previousHour);

    const mainHour = card.querySelector(".main-hour");

    const lastHour = card.querySelector(".previous-hour");

    mainHour.textContent = `${currentHour} hrs`;
    console.log(mainHour);

    if (periode === "daily") {
      previousText = "Yerterday";
    } else if (periode === "weekly") {
      previousText = "Last Week";
    } else {
      previousText = "Last Month";
    }

    lastHour.textContent = ` ${previousText} - ${previousHour} hrs`;
  });
}

daily.addEventListener("click", () => {
  changeData("daily");
});
Weekly.addEventListener("click", () => {
  changeData("weekly");
});
Monthly.addEventListener("click", () => {
  changeData("monthly");
});
