// Get the current day of the week 
const currentDate = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

// Get the current UTC time
const currentUTCTime = 
currentDate.tolSOString().substr(11, 5);

// Update the HTML elements with the current day of the week and UTC time 
const dayOfWeekElement =
document.querySelector('[data-testid="currentDayOfTheWeek"]');
const utcTimeElement = 
document.querySelector('[data-testid="currentUTCTime"]');

dayOfWeekElement.textContent = 
'Today is ${currentDayOfWeek}';
utcTimeElement.textContent = 'Current UTC time is ${currentUTCTime}'