export default function useTimeStamp(dateString) {
  let arrayDate = dateString.split('/');
  const day = arrayDate[0];
  const month = arrayDate[1] - 1;
  const fullYear = arrayDate[2];
  
  /* prettier-ignore */
  const date = new Date(fullYear,month,day);
  return date;
}
