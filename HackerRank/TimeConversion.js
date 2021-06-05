/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
*/

function timeConversion(time = '') {
  const period = time.slice(-2)
  let [hour, min, sec] = time.slice(0, 8).split(':')
  if (period === 'AM') {
    if (hour == '12') {
      hour = '00'
    }
    return `${hour}:${min}:${sec}`
  } else {
    if (hour == 12) {
      return `${hour}:${min}:${sec}`
    }
    hour = parseInt(hour) + 12
    return `${hour}:${min}:${sec}`
  }
}
