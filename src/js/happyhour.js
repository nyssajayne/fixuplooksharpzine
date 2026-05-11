const whichThursday = (week) => {
    const today = new Date().getDay();
    const distance = 4 - today + week;
    const thurs = new Date();

    return thurs.setDate(thurs.getDate() + distance);
}

const thisThurs = new Date(whichThursday(0));
const nextThurs = new Date(whichThursday(7));

const thisWeekElem = document.getElementById("thisweek");
const nextWeekElem = document.getElementById("nextweek");

thisWeekElem.innerText = `Thursday ${thisThurs.getMonth() + 1}/${thisThurs.getDate()}`;
nextWeekElem.innerText = `Thursday ${nextThurs.getMonth() + 1}/${nextThurs.getDate()}`;