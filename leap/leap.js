/*jshint esversion: 6 */
const divisibleBy = year => (divider => year % divider == 0);
export const isLeap = (year) => {
  const divisibleByYear = divisibleBy(year)
  return (divisibleByYear(4) && !divisibleByYear(100)) || divisibleByYear(400)
}