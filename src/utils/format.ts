export const formatStringToRoute = (route: string) => {
  console.log(route, "<<<<<<");
  const strn = route
    .normalize("NFD")
    .replaceAll("+", "")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();

  console.log(strn, "<<<<<< strn");
  return strn;
};

export const removeCurrencySymbol = (value: string) => {
  console.log(value, "<<<<<<");
  return parseFloat(
    value.replace("R$ ", "").replace(".", "").replace(",", ".")
  );
};

export const formatCurrency = (value: number) => {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
};
