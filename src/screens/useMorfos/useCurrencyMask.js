export default function useCurrencyMask(info, returnAsNumber) {
  if(returnAsNumber){
    return Number(String(info).replace(/\D/g,""))
  }else{
    const _info = String(info)
    const onlyNumbers = Number(_info.replace(/\D/g,""));
    const stringWithMask = (onlyNumbers/100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    return stringWithMask;
  }
}

/* 
HOW TO USE

let currencyMask = useCurrencyMask;

let total = 1000000; // Number

currencyMask(number) // -> 10,000.00

let valor = 10,000.00 // String

currencyMask(valor, true) // -> 1000000;

*/
