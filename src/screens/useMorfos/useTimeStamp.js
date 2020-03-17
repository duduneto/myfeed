export default function useTimeStamp(info) {
  const refDate = info;
  const d = ('0' + refDate.getDate()).slice(-2);
  const M = ('0' + (refDate.getMonth() + 1)).slice(-2);
  const aaaa = refDate.getFullYear();
  // const aa = String(refDate.getYear());
  // const hh = ('0' + refDate.getHours()).slice(-2);
  // const mm = ('0' + refDate.getMinutes()).slice(-2);
  /* prettier-ignore */
  const dateLayout1 = `${d}/${M}/${aaaa}`;
  return dateLayout1;
}
