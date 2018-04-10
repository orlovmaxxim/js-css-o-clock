const arrowSecond = document.querySelector('.arrow-second');
const arrowMinute = document.querySelector('.arrow-minute');
const arrowHour = document.querySelector('.arrow-hour');

function setDate() {
  const timeNow = new Date();

  const seconds = timeNow.getSeconds();
  const secondsOnDeg = ((seconds / 60) * 360) + 90;
  arrowSecond.style.transform = `rotate(${secondsOnDeg}deg)`;

  const minutes = timeNow.getMinutes();
  const minutesOnDeg = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
  arrowMinute.style.transform = `rotate(${minutesOnDeg}deg)`;

  const hour = timeNow.getHours();
  const hoursOnDeg = ((hour / 12) * 360) + ((minutes/60)*30) + 90;
  arrowHour.style.transform = `rotate(${hoursOnDeg}deg)`;
}

setInterval(setDate, 1000);
