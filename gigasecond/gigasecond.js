const GIGA_MILLI_SECONDS = 1000000000 * 1000;
export const gigasecond = (inputDate) => {
  return new Date(inputDate.getTime() + GIGA_MILLI_SECONDS)
}
