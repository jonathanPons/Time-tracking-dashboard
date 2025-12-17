const daily = document.querySelector(".daily");
const Weekly = document.querySelector(".Weekly");
const Monthly = document.querySelector(".Monthly");

async function getData() {
  try {
    const response = await fetch("./data.json");
    console.log(response);

    if (!response.ok) {
      throw new Error("Error");
    }
    const data = await response.json();
    console.log(data);

    data.forEach((element) => {
      const title = element.title;

      console.log("Element:", element);
      console.log(title);
      const titleLower = title.toLowerCase().replace(/ /g, "");
      console.log(titleLower);

      const card = document.querySelector(`#${titleLower}`);
      console.log("Card trouvé:", card);

      const mainHour = card.querySelector(".main-hour");
      console.log(mainHour);

      const previousHour = card.querySelector(".previous-hour");
      console.log(previousHour);

      const current = element.timeframes.daily.current;
      const previous = element.timeframes.daily.previous;
      console.log(current);
      mainHour.textContent = `${current} Hrs`;
      previous.textContent = ` Last Week : ${previous}Hrs`;
    });
  } catch (error) {
    console.log("Erreur", error);
  }
}

getData();
