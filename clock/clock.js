export const at = (hour=0, minutes=0) => {
  const HOURS = (hour >= 0 && minutes >= 0)? normaliseHour(hour + minutesToHours(minutes)) : normaliseNegativeHour(hour + (minutesToHours(minutes) % 24))
  const MINUTES = minutes >=0?  remainingMinutes(minutes) : remainingMinutesWithNegativeMinutes(minutes)
  return `${padANumber(HOURS)}:${padANumber(MINUTES)}`
}

const padANumber = (number) => number < 10? `0${number}` : `${number}`
const remainingMinutes = (minutes) => minutes % 60
const remainingMinutesWithNegativeMinutes = (minutes) => 60 + remainingMinutes(minutes)
const minutesToHours = (minutes) => Math.floor(minutes / 60)
const normaliseHour = (hour) => hour >= 24 ? (hour % 24) : hour
const normaliseNegativeHour = (hour) => hour >= 0? 0 : 24 + (hour % 24)
