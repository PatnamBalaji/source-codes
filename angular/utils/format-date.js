import * as moment from 'moment';

function getFormatDate(date) {
  return moment(date, 'MM/DD/YYYY').format('YYYY-MM-DD');
}
function setFormatDate(date) {
  return moment(date, 'YYYY-MM-DD').format('MM/DD/YYYY');
}
function set18yearsMinDate() {
  return moment().subtract(18, 'years').format('MM/DD/YYYY');
}
function getFormatTime(num) {
  return (
    ('0' + (Math.floor(num) % 24)).slice(-2) +
    ':' +
    ((num % 1) * 60 + '0').slice(0, 2)
  );
}
function setFormatTime(time) {
  var hoursMinutes = time.split(/[.:]/);
  var hours = parseInt(hoursMinutes[0], 10);
  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return hours + minutes / 60;
}
export {
  getFormatTime,
  set18yearsMinDate,
  setFormatTime,
  getFormatDate,
  setFormatDate,
};
