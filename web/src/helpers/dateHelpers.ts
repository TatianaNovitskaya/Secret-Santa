import {formatRelative} from "date-fns";

export const prettifyDate = (dateString) =>{
  const date = new Date(dateString)
  const baseDate = new Date()
  return formatRelative(date, baseDate)
}
