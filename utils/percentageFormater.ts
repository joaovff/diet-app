export const percentageFormater = (value: number): string => {
  return value.toFixed(2).toString().replace(".", ",");
};
