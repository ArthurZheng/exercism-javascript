/*jshint esversion: 6 */
const divisibleBy = num => (divider => num % divider == 0);
export const isLeap = (year) => divisibleBy(year)(4) && divisibleBy(year)(100) && divisibleBy(year)(400)