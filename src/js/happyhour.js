function calcDate(day, week) {
    const today = new Date();
    const distance = day - today.getDay() + week;
    const thurs = new Date(today);
    thurs.setDate(thurs.getDate() + distance);

    return thurs;
}

function whichDate(day, week) {
    const month = calcDate(day, week).getMonth();
    const date = calcDate(day, week).getDate();
    const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"];
  const dayName = calcDate(day, week).getDay();

  return `${dayNames[dayName]} ${month + 1}/${date}`
}

const thisweek = document.getElementById("thisweek");
thisweek.innerText = whichDate(thisweek.dataset.day, 0)

const nextweek = document.getElementById("nextweek");
nextweek.innerText = whichDate(nextweek.dataset.day, 7)
