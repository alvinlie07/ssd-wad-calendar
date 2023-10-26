const maxEvents = 3;
let objEventCalendar: any[] = [];

const getDateInMonth = (currentYear: number, currentMonth: number) => {
  let startDate = new Date(currentYear, currentMonth, 1);
  let dates = [];
  let endDate = new Date(currentYear, currentMonth + 1, 1);
  // Push current date in this month and year start from 1;
  while (startDate < endDate) {
    dates.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }
  // console.log(dates);
  return dates;
};

const formattedDate = (date: Date) => {
  let objectDate = new Date(date);
  let day = objectDate.getDate();

  let month = objectDate.getMonth();

  let year = objectDate.getFullYear();
  return month + "/" + day + "/" + year;
}

const daysInMonth = (iMonth: number, iYear: number) => {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}

const addEventCalendars = (date: Date, title: String) => {
  const getEventsOnCalendar = objEventCalendar.map((val) => {
    if (!!val.events && val.events.length <= maxEvents) {
    }
  });
};

const removeEventCalendars = (date: Date) => {};

const editEventCalendars = (date: Date) => {};
const getRandomColor = () => {
  return  Math.floor(Math.random()*16777215).toString(16);
}
const exportedFn = {
  addEventCalendars,
  removeEventCalendars,
editEventCalendars,
  getDateInMonth,
  daysInMonth,
  formattedDate,
  getRandomColor
};

export default exportedFn;
